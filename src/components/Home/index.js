
import { useEffect,useState } from 'react';
import {ColorRing} from 'react-loader-spinner';
import TeamCard from '../TeamCard';
import './index.css'

const Home = () => {

  const [teams, setTeams] = useState(null);

  useEffect(() => {
    fetch('https://apis.ccbp.in/ipl')
      .then(response => response.json())
      .then(data => setTeams(data.teams))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(teams);
    return (
        <div className="home-bg">
                <div className='ipl-heading-content'>
                    <img className='ipl-logo' src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl-logo"/>
                    <h1 className='ipl-heading'>IPL Dashboard</h1>
                </div>
                <ul className='list-container'>
                {teams ? teams.map(team => (<TeamCard team={team}/>)):<div testid="ColorRing"><ColorRing type="Oval" color="#ffffff" height={50} width={50} /></div>}
                </ul>
        </div>
    )
}

export default Home;