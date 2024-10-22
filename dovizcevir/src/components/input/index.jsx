import { useState } from 'react'

const index = () => {
    const [state, setState] = useState("");
    console.log(state);
    return (
        <div>
            <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className='border outline-none rounded-md border-2 border-black px-2 py-1.5'
                type="text"
            />
        </div>
    )
}

export default index
