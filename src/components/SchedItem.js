import {useState} from 'react'
import { Popover, Image, Card, Group, Container, Text} from '@mantine/core'
import teams from '@nhl-api/teams'
import './styles.css'

export default function SchedItem(props){//this prop should be an object, for simplicity.
    let homeTeam = props.game.teams.home
    let awayTeam = props.game.teams.away
    const [opened, setOpened] = useState(false);

    //console.log(props.game)
    let homeLogo = teams.find((id) => {
        if(id.id === homeTeam.team.id){
            return true;
        }
    });
    let awayLogo = teams.find((id) => {
        if(id.id === awayTeam.team.id){
            return true;
        }
    })
    let today = new Date()
    let gameDate = new Date(props.game.gameDate)
    let gameTime = gameDate.toLocaleTimeString([], {hour : '2-digit', minute: "2-digit"})
    gameDate = gameDate.toLocaleDateString("en-US")

    return (
            
            <Container>
                    <Card withBorder>
                        <Text color='dimmed' size='xs' align='center'>Score</Text>
                        <Group direction='row' position='apart'>
                            <Image src={homeLogo.logo} height={60} width={100} fit='contain'/>
                            <Group direction='column' position='center' spacing='xs'>
                                <Text size='xl'>{homeTeam.score} - {awayTeam.score}</Text>
                                {props.game.status.detailedState === "Scheduled" ? <Text size='xs'>{gameTime}</Text> : <Text size='xs'>{props.game.status.detailedState}</Text>}
                                {gameDate === today.toLocaleDateString("en-US") ? null : <Text size='xs'>{gameDate}</Text>}
                            </Group>
                            <Image src={awayLogo.logo} height={60} width={100} fit='contain'/>
                        </Group>
                        <Group position='apart'>
                            <Text color='dimmed' size='xs' align='left'>Home</Text>
                            <Text color='dimmed' size='xs' align='right'>Away</Text>
                        </Group>
                    </Card>
            </Container>
    )
}