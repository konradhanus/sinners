import {useState} from 'react';
import logo from './../../assets/logo.png';
import './index.css';
import Engine from "../Engine";
import level0 from '../../levels/level1';
import level1 from '../../levels/level1';
import level2 from '../../levels/level2';
import testLevel from '../../levels/testLevel';

const NewGame = () => {
    const [newGame, setNewGame] = useState(false); 
    const [level, setLevel] = useState(level0);
    return (newGame ?  <Engine level={level}/>  : <>
    <div class="background">
        <div class="center ">
        <center>
            <img src={logo} alt="THE SINNERS" width="100%" />
        
        <div><button onClick={()=>{ setNewGame(true) }}>NEW GAME </button></div>
        <div><button onClick={()=>{ setLevel(level0); setNewGame(true);  }}>NEW GAME LEVEL 0 </button></div>
         <div><button onClick={()=>{ setLevel(level1); setNewGame(true);  }}>NEW GAME LEVEL 1 </button></div>
         <div><button onClick={()=>{ setLevel(level2); setNewGame(true);  }}>NEW GAME LEVEL 2 </button></div>
         <div><button onClick={()=>{ setLevel(testLevel); setNewGame(true);  }}>NEW GAME LEVEL TEST </button></div>
            </center>
        </div>
    </div>
    </>);
}

export default NewGame;