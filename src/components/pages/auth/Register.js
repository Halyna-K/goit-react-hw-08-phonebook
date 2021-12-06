import { useState } from "react";
import { useDispatch } from "react-redux";
import Title from "../../Title/Title";
import Button from '@mui/material/Button';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
import { registerThunk } from "../../../redux/auth/thunks";

const Register = () => {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        switch (e.target.name) {
            case "name" : setName (e.target.value)
            break;
            case "email" : setEmail (e.target.value)
            break;
            case "password" : setPassword (e.target.value)
            break;
            default:
            alert ('Check input name please')
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {name, email, password}
        dispatch(registerThunk(user));
        reset()
    }
    const reset = () => {
        setName("");
        setEmail("");
        setPassword("")
    }

    return (
        <>
        <Title text="Register"/>
        <form onSubmit={handleSubmit}>
            <label>
            <input type="text" name="name" value={name} placeholder= "name" onChange={handleChange}/>
            </label>
            <br/>
            <label>
            <input type="mail" name="email" value={email} placeholder= "email" onChange={handleChange}/>
            </label>
            <br/>
            <label>
            <input type="password" name="password" value={password} placeholder= "password" onChange={handleChange}/>
            </label>
            <br/>
            <Button type="submit" variant="contained">Register</Button>
        </form>
        </>
    )
}

export default Register;
