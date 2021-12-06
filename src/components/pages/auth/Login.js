import { useState } from "react";
import { useDispatch } from "react-redux";
import Title from "../../Title/Title";
import Button from '@mui/material/Button';
import { loginThunk } from "../../../redux/auth/thunks";

const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        switch (e.target.name) {
            case "email" : setEmail (e.target.value)
            break;
            case "password" : setPassword (e.target.value)
            break;
            default:
            alert (`Check correct info`)
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password}
        dispatch(loginThunk(user));
        reset()
    }
    const reset = () => {
        setEmail("");
        setPassword("")
    }

    return (
        <>
        <Title text="Login"/>
        <form  onSubmit={handleSubmit}>
            <label >
            <input type="mail" name="email" value={email} placeholder= "email" onChange={handleChange} autoComplete="off"/>
            </label>
            <br/>
            <label>
            <input type="password" name="password" value={password} placeholder= "password" onChange={handleChange}/>
            </label>
            <br/>
            <Button
            type="submit"
            variant="contained">login
            </Button>
        </form>
        </>
    )
}

export default Login;
