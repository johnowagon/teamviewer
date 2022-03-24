import { Paper, Image} from '@mantine/core'
import './styles.css'

export default function Logo(props){//team should be an object from teams
    //THIS LOGO COMPONENT IS STRICTLY USED FOR THE CAROUSEL.
    var curTeam = props.team
    var style = {}
    if(curTeam.id === 14){
        style = {
            background: "rgb(0, 70, 184)",//for tampa bay looking weird with first color
        }
    }else{
        style = {
            background: curTeam.colors[0],
        }
    }
    return (//highlight when teams information is being displayed? maybe a parent->child state transfer
        <div className="logo" style={style} onClick={() => props.changeId(curTeam.id)}>
                <Paper style={style}>
                        <Image height={30} fit="contain" src={curTeam.logo} alt={curTeam.name}></Image>
                </Paper>
        </div>
    )
}