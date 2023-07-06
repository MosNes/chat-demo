import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

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

                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Button variant="contained">Default</Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button variant="contained">Default</Button>
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Grid>
        </ Container>
    )
}

export default Chat;