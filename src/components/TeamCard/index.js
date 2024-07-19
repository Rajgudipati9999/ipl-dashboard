import { Link } from 'react-router-dom'
import './index.css'

const TeamCard = (props) => {
    const {team} = props 
    const {name,id,team_image_url} = team 
    console.log(team)
    // console.log(team_image_url)
    return (
        <li className='team-card-list'>
        <Link to={`/team-matches/${id}`} className='team-list-container'>
            <img src={team_image_url} alt={name} className="team-logo"/>
            <p className="team-name">{name}</p>
        </Link>
        </li>
    )
}

export default TeamCard; 
