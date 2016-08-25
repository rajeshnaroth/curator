import React from 'react'
import { Provider } from 'react-redux'

import PlaylistFormContainer from './playlistFormContainer'
import Playlist from './playlist'
import { getFreshList }      from '../../actions'


const Curate = React.createClass({
	render() {
        return (
                <div>
                    <PlaylistFormContainer />
                    <div className="curatorLists">
	                {
	                    this.props.curator.map(item => <Playlist playlist={item} />)
	                }
		            </div>
                </div>
        )
    }
})

export default Curate