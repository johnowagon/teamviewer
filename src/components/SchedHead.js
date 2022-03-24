import {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Paper, Grid, Divider, Accordion, Center, Loader } from '@mantine/core'
import teams from '@nhl-api/teams'
import SchedItem from './SchedItem'
import './styles.css'

export default function SchedHead(){
    const [isReady, setIsReady] = useState(false)
    const [todaySchedule, setTodaySchedule] = useState()
    //https://statsapi.web.nhl.com/api/v1/game/2020020411/feed/live?teamId=teamid
    //Link to live game stats! might be slow because the endpoint is huuuuge. 

    var endDate = new Date();
    var startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()-7).toLocaleDateString("sv-SE")
    endDate = endDate.toLocaleDateString("sv-SE")
    var today = new Date();
    let schedData;

    //console.log(teams)

    useEffect(() => {
        setIsReady(false)
        async function getData(){
            axios.get(`https://statsapi.web.nhl.com/api/v1/schedule`).then((res) => {//gets todays schedule
                schedData = res.data.dates
                //console.log(schedData);
                setTodaySchedule(schedData);
                setIsReady(true);
            })
        }
        getData();
    }, [])

    function AccordionLabel(){
        let tString = `Todays schedule, ${today.toLocaleDateString("en-us")}`
        return(
            <Divider my='md' label={tString} labelPosition="left" />
        )
    }

    return(
        <Container fluid>
            <Paper shadow='md' p='xl'>
                <h1 >
                    NHL Team Viewer
                </h1>
                <Accordion>
                    <Accordion.Item label={<AccordionLabel/>}>
                        <Grid>
                            {isReady ? (
                                todaySchedule[0].games.map((item, key) => {
                                    return(
                                        <SchedItem key={key} span={1} game={item}/>
                                    )
                                })
                            ) : (
                                <Center><Loader /></Center>
                            )}
                        </Grid>
                    </Accordion.Item>
                </Accordion>
            </Paper>
        </Container>
    )
}