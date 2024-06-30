import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions, Grid } from '@mui/material';

export default function Sponsors() {
  return (
    <section className="flex-col md:flex-col flex md:justify-between mt-16 mb-16 md:mb-12 text-white">
      <h4 className="text-3xl font-semibold mb-4 text-center">
        Sponsori
      </h4>
      <section className='flex-col'>
      <p className="text-lg mt-4 mb-8 text-center">
        Ai o firmă sau cunoști una care vrea să suțină animăluțele <a href="sanctuarnima.ro" className="underline text-green-700 hover:text-green-100 duration-200 transition-colors" target='_blank'>Sanctuarului Nima</a>? <br />
        Scrie-mi pe <a href="mailto:eduard@nistru.ro?subject=Colaborare AlergPentruNima.ro" className="underline text-green-700 hover:text-green-100 duration-200 transition-colors">eduard@nistru.ro</a> pentru colaborare și alătură-te lor:
    </p>
      </section>
      <Grid container spacing={4} className='flex justify-around'>
        <Grid xs={2} md={1}>
            <Card>
                <CardActionArea href='https://biofarmland.com/' target='__blank'>
                    <CardMedia component="img" height="140" image="/favicon/biofarmland.png" alt="biofarmland logo"></CardMedia>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid xs={2} md={1}>
            <Card>
                <CardActionArea href='https://iezeress.com/' target='__blank'>
                    <CardMedia component="img" height="140" image="/favicon/iezeress.png" alt="iezeress logo"></CardMedia>
                    <CardActions>
                    
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
      </Grid>
      
    </section>
  )
}
