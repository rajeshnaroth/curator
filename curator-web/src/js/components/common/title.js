import React from 'react'

const Title = ({text}) => {
    let styles = {
        textAlign:'center'
    }
    return <h4 style={styles}>{text}</h4>;
}
export default Title