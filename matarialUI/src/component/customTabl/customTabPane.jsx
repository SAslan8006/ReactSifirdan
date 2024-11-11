import React from 'react'

function customTabPane({ value, children, index }) {
    return (
        <div>
            {value === index && <div>{children}</div>}
        </div>
    )
}

export default customTabPane