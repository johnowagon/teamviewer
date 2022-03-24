import './App.css';
import Populate from './components/Populate'

export const App = () => {
  return(//Implement who scored, and stuff.
        //Error on pages with no data, if a team isnt playing any games it breaks. make sure data is not null in scheditem
        //Dropdown gonna take some effort. Use a collapse! Use same endpoint as vvv
        //Updating scores live, use games.link option in object.
        //alert when game is starting soon?
        //add a new tab for multiple players?
        //Animate some stuff: loading components, showing logo, showing name of team, etc.
        //"Tweet this bitch!" button. 
    <div>
      <Populate /> 
    </div>
  )
}


export default App;
