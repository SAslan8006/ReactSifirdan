import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllUsers } from './redux/counter/userSlice'

const userList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <div>

        </div>
    )
}


export default userList
