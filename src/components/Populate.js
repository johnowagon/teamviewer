import { useState} from 'react'
import teams from "@nhl-api/teams"
import Schedule from './Schedule'
import Logo from './Logo'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { Grid, Space, Group, Divider, Title, Box } from '@mantine/core'
import TeamViewer from './TeamViewer'
import SchedHead from './SchedHead'
import Playerstats from './Playerstats'
import IdLogo from './IdLogo'

export default function Populate() {
    const [id, setId] = useState(21)
    const [playerId, setPlayerId] = useState([])

    let selectteam = teams.find((pid) => {
        if(pid.id === id){
            return true;
        }
    });
    let logoTeamName = selectteam.name.toLowerCase()
    const arr = logoTeamName.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    logoTeamName = arr.join(" ");
    //^ this code is to literally format the team name, thats it.

    const responsive = {
        desktop: {
          breakpoint: { max: 6000, min: 1024 },
          items:20, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 10,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 20,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    return (//custom arrows? only show when hovering
        <div>
            <Carousel swipeable={false}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    transitionDuration={1}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">
                {teams.map( (team,i) => {
                    if(team.isActive){
                        return(
                            <div key='{team.id}'>  
                                <Logo team={team} id={team.id} changeId={(id) => setId(id)}/>
                            </div> 
                        )
                    }
                })}
                
            </Carousel>
            <SchedHead />
            <Space h='md'/>
            <Box>
                <Group direction='row'>
                    <IdLogo id={id} width={200} height={200} fit='contain'/>
                    <Title>{logoTeamName}</Title>
                </Group>
            </Box>
            <Space h='md'/>
            <Grid columns={3} align='space-evenly' gutter={-1}>
                <Grid.Col span={1}><TeamViewer id={id} changePlayer={(playerId) => setPlayerId(playerId)}/></Grid.Col>
                <Grid.Col span={1}><Schedule id={id}/></Grid.Col>
                <Grid.Col span={1}><Playerstats playerId={playerId}/></Grid.Col>
            </Grid>
        </div>
    )
}