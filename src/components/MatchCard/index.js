import './index.css'

const RecentMatch = ({eachMatch}) => {
    const {competing_team,competing_team_logo,result,match_status,id} = eachMatch 
    // console.log(match_status)
    const status = match_status === 'Won'?'#18ed66':' #e31a1a' 
    return (
        <li className="recent-matches-list">
            <img src={competing_team_logo} className="recent-competing-team-logo"/>
            <p className="recent-competing-team">{competing_team}</p>
            <p className="match-result">{result}</p>
            <p className="match-status" style={{color:status}}>{match_status}</p>
        </li>
    )
}

export default RecentMatch ;

