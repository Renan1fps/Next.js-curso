import { useState } from "react"

function Forms(){
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [age, setAge]= useState('');
    const [user, setUser]= useState({});

    function handleSubmitForm(e){
        e.preventDefault()
        alert("User Registered")
        setUser({
            name: name,
            email: email,
            age: age,
        })
    }

    return(
<div>
    <form onSubmit={handleSubmitForm}>
        <label>Name</label><br/>
        <input
        placeholder = "Write your name"
        value = {name}
        onChange = {(e)=> setName(e.target.value)}
        /><br/>

        <label>Name</label><br/>
        <input 
        placeholder = "Write your email"
        value = {email}
        onChange = {(e)=> setEmail(e.target.value)}
        /><br/>

        <label>Name</label><br/>
        <input 
        placeholder = "Write your age"
        value = {age}
        onChange = {(e)=> setAge(e.target.value)}
        /><br/>
        <button type= "submit" >Register</button>
    </form><br/>
    <div>
        <span>Name: {user.name}</span><br/>
        <span>Email: {user.email}</span><br/>
        <span>Age: {user.age}</span><br/>
    </div>
 </div>


    )
}

export default Forms;