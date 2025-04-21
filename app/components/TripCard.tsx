import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

export default function TripCard() {
  return (
    <Card sx={{ height: 420 }}>
      <CardHeader title="Japan trip 2025" subheader="Oct 15 - Nov 24" />
      <CardMedia
        sx={{ height: 180 }}
        image="/static/toyko-Jezael-Melgoza.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Tokyo
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Trip with bob
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
