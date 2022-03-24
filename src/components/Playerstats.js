import {useState, useEffect} from 'react'
import axios from 'axios'
import {Table, Paper, Group, Container, Kbd, Loader, Center, Image, Text} from '@mantine/core'
import IdLogo from './IdLogo'

export default function Playerstats(props){
    const [playerImage, setPlayerImage] = useState(0)
    const [player, setPlayer] = useState()
    const [isReady, setIsReady] = useState(false)

    let urlInput = props.playerId[0]//needed because i was having trouble accessing array indicies in the string modifier things -- template literals.

    useEffect(() => {
        async function getData(){
            setIsReady(false)
            await axios.get(`http://nhl.bamcontent.com/images/headshots/current/168x168/${urlInput}.jpg`).then((res) => {//gets player headshot
                //console.log(res);
                setPlayerImage(res.config.url)
            })

            await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${urlInput}/stats?stats=yearByYear`).then((res) => {//gets player stats
                //console.log(res)
                setPlayer(res.data.stats[0].splits)
                setIsReady(true);
            })
        }
        if(props.playerId[0]){
            getData();
        }
    },[props.playerId])
    
    
    return(
        
        <Container fluid>
            <Paper shadow='md' p='sm'>
            {playerImage === 0 ? (<Kbd>←Select a player over there</Kbd>) : //if state has not been initialized
                (isReady && player ? (
                    <div>
                        <Text size='lg' weight={500} underline>{props.playerId[1]}</Text>
                        <Image src={playerImage} width={120} height={150}/>
                        <Table striped horizontalSpacing={-1}/* <- weird mantine trick? */ verticalSpacing='xs'>
                            <thead>
                                {props.playerId[2] === 'Goalie' ? (
                                    <tr>
                                        <th>Year</th>
                                        <th>Team</th>
                                        <th>Games</th>
                                        <th>Wins</th>
                                        <th>GAA</th>
                                        <th>Sv%</th>
                                        <th>Shutouts</th>
                                    </tr>
                                ) : (
                                    <tr>
                                        <th>Year</th>
                                        <th>Team</th>
                                        <th>Games</th>
                                        <th>Goals</th>
                                        <th>Assists</th>
                                        <th>Points</th>
                                        <th>S Pct</th>
                                    </tr>
                                )}
                            </thead>
                            <tbody>
                                {props.playerId[2] === 'Goalie' ? (
                                    player.map((item, key) => {
                                        if(item.league.id === 133){
                                            return(
                                                <tr key={key}>
                                                    <td>{item.season}</td>
                                                    <td><IdLogo id={item.team.id} height={20} width={20} fit='contain'/></td>
                                                    <td>{item.stat.games}</td>
                                                    <td>{item.stat.wins}</td>
                                                    <td>{Math.round(item.stat.goalAgainstAverage * 100) / 100}</td>
                                                    <td>{Math.round(item.stat.savePercentage * 1000) / 1000}</td>
                                                    <td>{item.stat.shutouts}</td>
                                                </tr>
                                            )
                                        }
                                    })
                                ) : (
                                    player.map((item, key) => {
                                        if(item.league.id === 133){
                                            return(
                                                <tr key={key}>
                                                    <td>{item.season}</td>
                                                    <td><IdLogo id={item.team.id} height={20} width={20} fit='contain'/></td>
                                                    <td>{item.stat.games}</td>
                                                    <td>{item.stat.goals}</td>
                                                    <td>{item.stat.assists}</td>
                                                    <td>{item.stat.points}</td>
                                                    <td>{item.stat.shotPct}</td>
                                                </tr>
                                            )
                                        }
                                    })
                                )}
                            </tbody>
                        </Table>
                    </div>
                ) : (<Center><Loader /></Center>))}
            </Paper>
        </Container>
    )
}