import React, { useState } from 'react'

const index = () => {
    const [state, setState] = useState(false);
    console.log(state);
    return (
        <div>
            <input
                checked={state}
                onChange={(e) => setState(e.target.checked)}
                className='border outline-none rounded-md border-2 border-black px-2 py-1.5'
                type="checkbox"
            />
        </div>
    )
}

export default index
