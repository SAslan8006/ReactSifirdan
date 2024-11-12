import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe(); // Unsubscribe on unmount
    }, []);


    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {user ? (
                <>
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={user.photoURL} alt="User Profile" />
                    <h1>{user.email}</h1>
                    <h1>{user.displayName}</h1>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default Home;
