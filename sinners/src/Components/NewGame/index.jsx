import {useState} from 'react';
import logo from './../../assets/logo.png';
import './index.css';
import Engine from "../Engine";
import level1 from '../../levels/level1';

const NewGame = () => {
    const [newGame, setNewGame] = useState(false); 

    return (newGame ?  <Engine level={level1}/>  : <>
    <div class="background">
        <div class="center ">
        <center>
            <img src={logo} alt="THE SINNERS" width="100%" />
        
        <div><button onClick={()=>{ setNewGame(true) }}>NEW GAME </button></div>
            </center>
        </div>
    </div>
    </>);
}

export default NewGame;