import React, { useState } from 'react'

function Grandchild(props) {
    return (
        <div>
            <p>count grandchild = {props.count}</p>
            <button onClick={() => props.setCount(props.count + 5)}>Change value</button>
        </div>


    )
}

export default Grandchild