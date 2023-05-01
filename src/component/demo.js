import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Siderbar from './siderbar';
import { useEffect } from 'react';
import CardMedia  from '@mui/material';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CardDemo() {
    const [Balance, setBalance] = useState("");

    const loadBalance = async () => {

        let response = await axios.post("/admin/view_balance", { email: "riya@gmail.com" });
        setBalance(response.data.balance)
    }


    useEffect(() => {
        loadBalance();
    }, []);

    return <>
        <div className='container-fluid'>
            <Navbar />
            <div className='row'>
                <div className='col-lg-2'>
                    <Siderbar />
                </div>
                <div className='col-lg-8'>
                    <div style={{ margin: '25%' }}>
                        <Card sx={{ maxWidth: 600 }}>
                            
                                <CardContent>
                                    <Typography variant='h3' gutterBottom>

                                    </Typography>
                                    <Typography variant="h4" component="div">
                                        Available Balance is
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                    </Typography>
                                    <Typography variant="body1">
                                        {Balance}
                                        <br />

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Card Button</Button>
                                </CardActions>
                            </Card>
                    </div>
                </div>

            </div>
        </div>

    </>



}
