import {Box, Button, TextField, Typography} from "@mui/material";
import {useRef, useState} from "react";
import Axios from "axios";
import uuid from 'react-uuid'
import Message from "./Message";

function Chat(){
    const inputText = useRef(null)
    const [messages,setMessages] = useState([])
    const [loading,setLoading] = useState(false)
    //const base_url = process.env.REACT_APP_BASE_URL


    const handleClick = () => {
        const text = inputText.current.value;
        setLoading(true)
        Axios.post('http://localhost:5000/chat',{
            userInput: text
        }).then(
            response => {
                setMessages(response.data)
                setLoading(false)
            }
        )

    }

    return (
        <Box
            style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start'
        }}>
            <Typography variant='h5' style={{
                marginLeft:200,
                marginTop:50,
            }}>
                Playground
            </Typography>
            <Box style={{
                width:'50rem',
                height:'26rem',
                marginLeft:200,
                marginTop:20,
                border: 'solid'
            }}>
                <TextField
                    inputRef={inputText}
                    multiline
                    variant='filled'
                    defaultValue="Brainstorm some ideas:"
                    style={{
                        width:'42em',
                        marginLeft:20,
                        marginTop:25
                }}/>
                <Box>
                    {loading && <Typography sx={{m:3}}>Loading...</Typography>}
                    {messages.map((message) => (
                        <Message key={uuid()} message={message}/>
                    ))}
                </Box>

            </Box>

            <Button
                variant='contained'
                onClick={handleClick}
                style={{
                width : 100,
                marginLeft:200,
                marginTop:20
            }}>
                Submit
            </Button>
        </Box>
    )

}
export default  Chat