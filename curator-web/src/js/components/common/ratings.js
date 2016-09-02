import React from 'react'
import { times } from 'ramda'

const Ratings = ({value}) => <h5>{times(() => '* ', value).join('')}</h5>
export default Ratings