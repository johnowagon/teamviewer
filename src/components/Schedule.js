import {react, useEffect, useState} from 'react'
import axios from 'axios'
import './styles.css'
import {Center, Loader} from '@mantine/core'
import teams from "@nhl-api/teams"
import SchedItem from './SchedItem'


export default function TeamViewer(props){
    const [isReady, setIsReady] = useState(false)
    const [schedule, setSchedule] = useState()
    //https://statsapi.web.nhl.com/api/v1/game/2020020411/feed/live?teamId=teamid
    //Link to live game stats! might be slow because the endpoint is huuuuge. 

    var endDate = new Date();
    var startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()-7).toLocaleDateString("sv-SE")
    endDate = endDate.toLocaleDateString("sv-SE")
    let schedData;

    useEffect(() => {
        setIsReady(false)
        async function getData(){
            axios.get(`https://statsapi.web.nhl.com/api/v1/schedule?startDate=${startDate}&endDate=${endDate}&teamId=${props.id}`).then((res) => {
                schedData = res.data.dates
                //console.log(schedData);
                setSchedule(schedData);
                setIsReady(true);
            })
        }
        getData();
    }, [props.id])

    return(
        <div className="schedule-container">
        {isReady ? (
            schedule.map((item) => {
                return(
                    item.games.map((item2) => {
                        return(
                            <SchedItem game={item2}/>
                        )
                    })
                )
            })
        ) : (
            <Center><Loader /></Center>
        )}
        </div>
    )
    
    
}