import { useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import { ColorRing} from "react-loader-spinner";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";
import './index.css';
const TeamMaches = () => {
    const { id } = useParams();
    const [teamBanner,setTeamBanner] = useState(null)
    const [latestMatchDetails,setLatestMatchDetails] = useState([])
    const [recentMatches,setRecentMatches] = useState(null)
    const [bgGradient,setBgGradient] = useState('')
    const [isLoading,setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://apis.ccbp.in/ipl/${id}`)
          .then(response => response.json())
          .then(data => (
            setTeamBanner(data.team_banner_url),
            setLatestMatchDetails(data.latest_match_details),
            setRecentMatches(data.recent_matches),
            setLoading(false)
          ))
          .catch(error => (setLoading(true)));
          switch (id) {
            case 'RCB':
              setBgGradient('linear-gradient(to bottom, #a4261d, #0f172a)');
              break;
            case 'KKR':
              setBgGradient('linear-gradient(to bottom, #5755a7, #0f172a)');
              break;
            case 'KXP':
              setBgGradient('linear-gradient(to bottom, #d91c1f, #0f172a)');
              break;
            case 'CSK':
              setBgGradient('linear-gradient(to bottom, #f7db00, #0f172a)');
              break;
            case 'RR':
              setBgGradient('linear-gradient(to bottom, #da237b, #0f172a)');
              break;
            case 'MI':
              setBgGradient('linear-gradient(to bottom, #13418b, #0f172a)');
              break;
            case 'SH':
              setBgGradient('linear-gradient(to bottom, #f26d22, #0f172a)');
              break;
            case 'DC':
              setBgGradient('linear-gradient(to bottom, #4f5db0, #0f172a)');
              break;
            default:
              setBgGradient('linear-gradient(to bottom, #ffffff, #0f172a)');
              break;
          }
      }, [id]);
    // console.log(typeof bgColor)
    // console.log(recentMatches)
   /* */
    return (
        <div className={`team-matches-bg`} style={{backgroundImage : bgGradient}}>
            <div>
                <img src={teamBanner} alt={teamBanner} className="team-banner"/>
            </div>
            {isLoading ? <div testid="ColorRing"><ColorRing type='Oval' height={50} width={50}/></div>: <div>
          <div className="latest-matches-container">
              <p className="latest-matches-heading">Latest Matches</p>
              <LatestMatch latestMatchDetails={latestMatchDetails}/> 
          </div>
          <ul className="recent-match-container">
              {recentMatches.map(eachMatch => (
                  <MatchCard eachMatch={eachMatch} />
              ))}
          </ul>
            
         </div>}
        </div>
        
    )
}

export default TeamMaches;