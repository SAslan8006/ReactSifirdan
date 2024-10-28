import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './redux/counter/userSlice';
import User from './User';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(store => store.users);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    console.log("users", users);

    return (
        <div>
            {loading === 'pending' && <p>Loading users...</p>}
            {error && <p>Error loading users: {error}</p>}
            {users && users.length > 0 ? (
                users.map((user) => (
                    <User key={user.id} data={user} />
                ))
            ) : (
                !loading && !error && <p>No users available.</p>
            )}
        </div>
    );
}

export default UserList;
