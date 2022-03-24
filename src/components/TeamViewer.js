import {react, useEffect, useState} from 'react'
import { Table, Anchor, Center, Loader } from '@mantine/core'
import axios from 'axios'
import './styles.css'
import teams from "@nhl-api/teams"


export default function TeamViewer(props){
    const [loadingData, setLoadingData] = useState(false);//think of this more as isReady! haven't changed yet
    const [data, setData] = useState()
    let teamData;
    
    useEffect(() => {
        setLoadingData(false)
        async function getData(){
            axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${props.id}?expand=team.roster`).then((res) => {
                teamData = res.data.teams[0].roster.roster
                //console.log(teamData);
                setData(teamData);
                setLoadingData(true);
            })
        }
        getData();
    }, [props.id])

    return(
        <div className="table-container">
                <Table striped horizontalSpacing={-1} verticalSpacing='xs'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadingData ? (
                            data.map((item, key) => {
                                return(
                                    <tr key={key}>
                                        <td>{item.jerseyNumber}</td>
                                        <td><Anchor onClick={() => props.changePlayer([item.person.id, item.person.fullName, item.position.name])}>{item.person.fullName}</Anchor></td>
                                        <td>{item.position.name}</td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr><td><Center><Loader /></Center></td></tr>
                        )}
                    </tbody>
                </Table>
        </div>
    )
    
    
}