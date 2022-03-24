import teams from '@nhl-api/teams'
import { Image } from '@mantine/core'


//this component is designed to return a logo given a team id. 
export default function IdLogo(props){
    const logoTeam = teams.find((id) => {//object of team from teams array.
        if(id.id === props.id){
            return true;
        }
    });

    return (
        <Image src={logoTeam.logo} width={props.width} height={props.height} fit={props.fit}/>
    )
}