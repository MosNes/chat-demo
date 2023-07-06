import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Chat = () => {
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
                            asdfas
                        </Paper>
                    </ Box>
                </Grid>

                <Grid xs={12} container>

                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <TextField id="message-input" label="Message" variant="outlined" fullWidth/>
                            <Button variant="contained">Send</Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <TextField id="room-input" label="Room" variant="outlined" fullWidth/>
                            <Button variant="contained">Join</Button>
                        </Grid>
                    
              

                </Grid>
            </Grid>
        </ Container>
    )
}

export default Chat;