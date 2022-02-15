import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {data} from '../data/data.js'

function MenuPage() {
    return (
        <Grid container className='container' style={{margin:'100px 0'}}>
            {
                    data.map(card=>{

                    return(
                        <Grid item xs={12} md={4} style={{marginBottom:'30px',display:'flex',justifyContent:'center'}} key={card.id}>

                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                                component="img"
                                height="140"
                                image={require(`../${card.img}`)}
                                alt="green iguana"
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{marginBottom:'20px'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {`$${card.price}`}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>

                        )
                    })
                }
        </Grid>
    )
}

export default MenuPage