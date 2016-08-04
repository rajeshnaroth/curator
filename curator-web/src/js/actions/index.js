export const SLIDE_LEFT = 'SLIDE_LEFT';
export const SLIDE_RIGHT = 'SLIDE_RIGHT';

export function slideLeft(carousel) {
    return {
        type:SLIDE_LEFT,
        target:carousel
    }
}

export function slideRight(carousel) {
    return {
        type:SLIDE_RIGHT,
        target:carousel
    }
}