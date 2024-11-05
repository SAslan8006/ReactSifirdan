import React from 'react'

function useToggle() {
    const [isToggled, setIsToggled] = React.useState(false);
    const chage = () => setIsToggled(!isToggled);
    return { isToggled, chage }
}

export default useToggle