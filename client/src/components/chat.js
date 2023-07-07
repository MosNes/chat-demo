import {React, useState, useRef} from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';


const socket = io('http://localhost:3001');
    socket.on('connect', () => {
        console.log(`Connected to the Chat Server with ID: ${socket.id}`);
    });

const Chat = () => {

    const [messages, setMessages] = useState(['Welcome to the chat!']);

    //state and change handler for the user's message input field
    //useRef instead of useState because we don't want to re-render the component when the user types
    const messageRef = useRef('');

    //state and change handler for the user's room input field
    const roofRef = useRef('');

    const sendMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, messageRef.current.value]);
        //clears text field after message is sent
        messageRef.current.value = '';
    }

    return (
        <Container>
            <Grid container spacing={2} mt={2}>

                <Grid item display='flex' justifyContent="center" alignItems="center" xs={12}>
                    <Box
                        sx={{

                            '& > :not(style)': {
                                m: 1,
                                width: 400,
                                height: 400,
                            },
                        }}

                    >
                        <Paper elevation={3}
                            align='left' 
                            sx={{
                                p: 3,
                            }}
                        >
                            {
                                //for each message in the message array, create a new paragraph element
                                messages.map( (message, index) => <p key={index}>{message}</p>)
                            }
                        </Paper>
                    </ Box>
                </Grid>

                <Grid xs={12} container>

                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <TextField id="message-input" label="Message" variant="outlined" fullWidth inputRef={messageRef}/>
                            <Button variant="contained" onClick={sendMessage}>Send</Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <TextField id="room-input" label="Room" variant="outlined" fullWidth inputRef={roofRef}/>
                            <Button variant="contained">Join</Button>
                        </Grid>
                    
              

                </Grid>
            </Grid>
        </ Container>
    )
}

export default Chat;