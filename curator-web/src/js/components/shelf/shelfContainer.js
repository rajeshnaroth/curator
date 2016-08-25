import React from 'react'
import { connect } from 'react-redux'

import Shelf from './shelf'
import { saveFlix, getFlix } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {shelf: state.shelf}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		saveFlix: function(shelfData) {
			console.log('shelfcontainer saveFlix', shelfData)
			dispatch(saveFlix(shelfData))
		},
		getFlix: function() {
			console.log('getFLix')
			dispatch(getFlix())
		}
	}
}

const ShelfContainer = connect(mapStateToProps, mapDispatchToProps)(Shelf)
export default ShelfContainer