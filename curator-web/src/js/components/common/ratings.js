import React from 'react'
import _ from 'lodash'

const Ratings = ({value}) => <h4>{_.times(value, () => '@')}</h4>
export default Ratings