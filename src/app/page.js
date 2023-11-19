const API_KEY=process.env.API_KEY
import HomePage from './components/Home';

export default async function Home({searchParams}) {
  const genre=searchParams.genre|| "fetchTrending";
  return (
    <div>
      <HomePage genre={genre} API_KEY={API_KEY}/>
    </div>
     )
}
