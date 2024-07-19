
import { useEffect,useState } from 'react';
import {ColorRing} from 'react-loader-spinner';
import TeamCard from '../TeamCard';
import './index.css'

const Home = () => {

  const [teams, setTeams] = useState(null);
  const [error,setError] = useState(false)
  const [isLoading , setLoading] = useState(true)

  useEffect(() => {
    const getTeams = async () => {
    const url ='https://apis.ccbp.in/ipl'; 
    const options = {
      method :'GET'
    }
    const response = await fetch(url,options)
    const data = await response.json()
    if (response.ok) {
        setTeams(data.teams)
        setLoading(false)
    }
    else {
      // setError(true)
      setLoading(true)
    }
  }
  getTeams();
  }, []);
  // console.log(teams);
    return (
        <div className="home-bg">
                <div className='ipl-heading-content'>
                    <img className='ipl-logo' src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl-logo"/>
                    <h1 className='ipl-heading'>IPL Dashboard</h1>
                </div>
                <ul className='list-container'>
                  {isLoading? <ColorRing height={50} width={50}/> : teams.map(team => (
                    <TeamCard team={team}/>
                  ))}
                </ul>
        </div>
    )
}
export default Home;