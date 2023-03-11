import {Box, Typography} from "@mui/material";

function Message({message}){
    return (
        <Box sx={{
            m:3,
            display:'flex',
        }}>
            <Typography sx={{
                ml:2,
                height:25,
                bgcolor:'primary.light'
            }}>{ `${message.role}:` }</Typography>
            <Typography sx={{
                ml:2,
                bgcolor:'grey.200'
            }}>
                {message.content}
            </Typography>
        </Box>

    )
}

export default Message