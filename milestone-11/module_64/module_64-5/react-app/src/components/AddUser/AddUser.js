import React, { useRef } from 'react';





const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const handleAddUser = e => {
        const name = nameRef.current.value
        const email = emailRef.current.value
        const newUser = {name, email}
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(newUser)
        })
        .then()
        e.preventDefault()
    }
    return (
        <div>
            <h2>Please Add an User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" ref={emailRef} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};





export default AddUser;