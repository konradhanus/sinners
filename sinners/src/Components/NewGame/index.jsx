import {useState} from 'react';
import logo from './../../assets/logo.png';
import './index.css';
import Engine from "../Engine";
import level0 from '../../levels/level0';
import level1 from '../../levels/level1';
import level2 from '../../levels/level2';
import testLevel from '../../levels/testLevel';
import barbarian from '../../assets/characters/barbarian/barbarian_1.png';
import soldier from '../../assets/characters/wizard/wizard_1.png';
import wizard from '../../assets/characters/soldier/soldier.png';


const HEROES = { BARBARIAN: 1, WIZARD: 2, WARRIOR: 3}
const NewGame = () => {
    const [newGame, setNewGame] = useState(false); 
    const [hero, setHero] = useState(HEROES.BARBARIAN);
    const [chooseHero, setChooseHero] = useState(false);
    const [level, setLevel] = useState(level0);
    return (newGame ?  <Engine level={level} hero={hero}/>  : <>
    <div className="background">
        <div className="center ">
       
        <center>
            <img src={logo} alt="THE SINNERS" width="100%" />
            </center>
            {chooseHero ? <>
                <div style={{display: 'flex'}}>
                    <div ><center><img src={barbarian} width="150"/><button onClick={()=>{ setLevel(level0); setHero(HEROES.BARBARIAN); setNewGame(true); }}>Barbarian </button></center></div>
                    <div ><center><img src={soldier} width="150"/><button onClick={()=>{ setLevel(level0); setHero(HEROES.WIZARD); setNewGame(true); }}>Wizard</button></center></div>
                    <div ><center><img src={wizard} width="150"/><button onClick={()=>{ setLevel(level0); setHero(HEROES.WARRIOR); setNewGame(true);}}>Warrior </button></center></div>
                </div></>:
        <center>
            <div><button onClick={()=>{ setChooseHero(true) }}>NEW GAME </button></div>
            <div><button onClick={()=>{ setLevel(level0); setNewGame(true);  }}>LEVEL 0 </button></div>
            <div><button onClick={()=>{ setLevel(level1); setNewGame(true);  }}>LEVEL 1 </button></div>
            <div><button onClick={()=>{ setLevel(level2); setNewGame(true);  }}>LEVEL 2 </button></div>
            <div><button onClick={()=>{ setLevel(testLevel); setNewGame(true);  }}>LEVEL TEST </button></div>
        </center>
        }
        </div>
    </div>
    </>);
}

export default NewGame;