import './index.css'
const LatestMatch = ({latestMatchDetails}) => {
    const {
        umpires,
        result,
        venue,
        first_innings,
        second_innings,
        competing_team,
        competing_team_logo,
        date,man_of_the_match,
        match_status
    } = latestMatchDetails
    return (
        <div className="latest-matches-content">
            <div className='right-side-section'>
                    <div className='competing-team-details'>
                        <h1>{competing_team}</h1>
                        <p>{date}</p>
                        <p>{venue}</p>
                        <p>{result}</p>
                    </div>
                    <div className='competing-teamlogo-container'>
                        <img className="competing-team-logo" src={competing_team_logo} />
                    </div>
             </div>
             <hr className='horizontal-line'/>
                    <ul className="latest-matches-details-list">
                        <li className="list-heading">First Innings</li>
                        <li>{first_innings}</li>
                        <li className="list-heading">Second Innings</li>
                        <li>{second_innings}</li>
                        <li className="list-heading">Man Of The Match</li>
                        <li>{man_of_the_match}</li>
                        <li className="list-heading">Umpires</li>
                        <li>{umpires}</li>
                    </ul>
            </div>
    )
}

export default LatestMatch