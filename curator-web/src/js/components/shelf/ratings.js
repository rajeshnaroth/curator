import React from 'react'
import _ from 'lodash'

var Ratings = ({value}) => {
    return <h4>{_.times(value, () => '@')}</h4>;
}

export default Ratings;