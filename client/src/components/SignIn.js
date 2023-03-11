import {Box, Button, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Axios from 'axios';
import {useRef, useState} from "react";

function SignIn(){
    const navigate = useNavigate();
    const inputName = useRef(null);
    const inputPassword = useRef(null);
    const [text1,setText1] = useState('')
    const [text2,setText2] = useState('')


    const handleClick = () => {
        Axios.post('http://localhost:5000/signin',{
            name : inputName.current.value,
            password : inputPassword.current.value

        }).then((response) => {
            if (response.data === true){
                navigate('/chat')
            } else {
                setText1('Incorrect username')
                setText2('Incorrect password')
            }
        })
    }

    return (
        <Box>
            <Box sx={{
                mx:56,
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
                    helperText={text1}
                />
                <TextField
                    inputRef={inputPassword}
                    sx={{mb:3}}
                    label='password'
                    required={true}
                    variant='outlined'
                    helperText={text2}
                />
                <Button variant='contained' onClick={handleClick}>Sign In</Button>
                <Typography sx={{mt:3}}>
                    New to Chat?
                    <Button
                        sx={{fontSize:12}}
                        onClick={() => navigate('/signup')}
                    >
                        Create an account
                    </Button>
                </Typography>
            </Box>


        </Box>
    )
}

export default SignIn