import Welcome from '~/welcome/welcome'
import type { Route } from './+types/_index'

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Diary' },
    { name: 'description', content: 'View your diary' },
  ]
}

export default function Home() {
  return <Welcome />
}
