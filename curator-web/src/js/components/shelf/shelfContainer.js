import React from 'react'
import { connect } from 'react-redux'

import Shelf from './shelf'

const mapStateToProps = function(state, ownProps) {
	return {shelf: state.shelf}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {}
}

const ShelfContainer = connect(mapStateToProps, mapDispatchToProps)(Shelf)
export default ShelfContainer