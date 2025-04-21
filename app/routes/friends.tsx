import Welcome from '~/welcome/welcome'
import type { Route } from './+types/_index'

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Friends' },
    { name: 'description', content: 'See your friends!' },
  ]
}

export default function Home() {
  return <Welcome />
}
