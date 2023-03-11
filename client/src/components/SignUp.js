import {Box, Button, TextField} from "@mui/material";
import {useRef} from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function SignUp(){
    const inputName = useRef(null);
    const inputPassword = useRef(null);
    const navigate = useNavigate()

    const handleClick = () => {
        Axios.post('http://localhost:5000/signup',{
            name : inputName.current.value,
            password : inputPassword.current.value

        }).then((response) => {
            navigate('/signin')
        })
    }
    return (
        <Box>
            <Box sx={{
                mx:60,
                mt:13,
                p:7,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                bgcolor:'grey.100',
                borderRadius:4,
            }}>
                <TextField
                    inputRef={inputName}
                    sx={{mb:3}}
                    label='username'
                    required={true}
                    variant='outlined'
                />
                <TextField
                    inputRef={inputPassword}
                    sx={{mb:3}}
                    label='password'
                    required={true}
                    variant='outlined'
                />
                <Button onClick={handleClick} variant='contained'>Sign Up</Button>

            </Box>
        </Box>
    )
}

export default SignUp