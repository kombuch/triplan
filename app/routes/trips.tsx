import Grid from '@mui/material/Grid'
import type { Route } from './+types/_index'
import TripCard from '~/components/TripCard'

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Trips' },
    { name: 'description', content: 'Plan your next trip!' },
  ]
}

export default function Trips() {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 3, lg: 3, xl: 3 }}
      columns={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
      className="p-6 ..."
    >
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
      <Grid size={2}>
        <TripCard />
      </Grid>
    </Grid>
  )
}
