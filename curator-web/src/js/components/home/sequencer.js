import { pipeP } from 'ramda'

// Sequences a set of functions to be executed
// While pipeP can sequence a list of promises, you cant cancel them.
// You can also cancel the sequence. Very much needed when components unmount

const Sequencer = {
	create() {
		let sequences = [];
		return Object.create({
			// For async functions that need to be waited upon.
			addPromise(promise) {
				sequences.push(
					cancellablePromise(promise)
				)
			},
			// Sequence is a normal function.
			carryOut(sequence) {
				sequences.push(
					cancellableTimeout(sequence, 1)
				)
			},
			waitAndCarryOut(sequence, delay) {
				sequences.push(
					cancellableTimeout(sequence, delay)
				)
			},
			carryOutAndWait(sequence, delay) {
				sequences.push([
					cancellableTimeout(sequence, 1),
					cancellableTimeout((val) => val, delay)
				])
			},
			wait(delay) { // Essentially do nothing for sometime. 
				sequences.push(
					cancellableTimeout((val) => val, delay)
				)
			},
			popLast() {
				sequences.pop()
			},
			cancel() {
				sequences.map(sequence => sequence.cancel())
			},
			start() {
				if (sequences.length > 0) {
					pipeP(...(sequences.map(s => s.promise)))()
				}
			}
		})
	}
}

// f is a normal function of arity 0. You can send it in curried 
export const cancellableTimeout = (f, milliseconds) => { 
	let timerId = 0
	return {
		promise: () => new Promise((resolve, reject) =>  {
			timerId = setTimeout(
				() => { 
					timerId = 0 
					resolve(f())
				}, milliseconds)
		}),
		cancel: () => {
			if (timerId > 0) {
				clearTimeout(timerId)
			}
		}
	}
}

export const cancellablePromise = (promiseReturningFunction) => {
	let isCanceled = false;

	return {
		promise: () => new Promise((resolve, reject) => {
			promiseReturningFunction()
				.then((val) => isCanceled ? reject({isCanceled: true}) : resolve(val))
				.catch((error) => isCanceled ? reject({isCanceled: true}) : reject(error))
		}),
		cancel() {
		  isCanceled = true;
		}
	}
}

export default Sequencer