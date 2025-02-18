import React from 'react'
import Grandchild from '../Grandchild/Grandchild'


function Child(props) {
    return (
        <div>
            <p>count child = {props.count}</p>

            <Grandchild {...props} />
        </div>

    )
}

export default Child