import attack1 from './../../../assets/characters/soldier/soldier_attack_001.png';
import attack2 from './../../../assets/characters/soldier/soldier_attack_002.png';
import attack3 from './../../../assets/characters/soldier/soldier_attack_003.png';

import crouch1 from './../../../assets/characters/soldier/soldier_crouch_001.png';
import crouch2 from './../../../assets/characters/soldier/soldier_crouch_002.png';

import die1 from './../../../assets/characters/soldier/soldier_die_001.png';
import die2 from './../../../assets/characters/soldier/soldier_die_002.png';
import die3 from './../../../assets/characters/soldier/soldier_die_003.png';
import die4 from './../../../assets/characters/soldier/soldier_die_004.png';
import die5 from './../../../assets/characters/soldier/soldier_die_005.png';

import hit1 from './../../../assets/characters/soldier/soldier_hit_001.png';
import hit2 from './../../../assets/characters/soldier/soldier_hit_002.png';

import jump1 from './../../../assets/characters/soldier/soldier_jump_001.png';
import jump2 from './../../../assets/characters/soldier/soldier_jump_002.png';
import jump3 from './../../../assets/characters/soldier/soldier_jump_003.png';
import jump4 from './../../../assets/characters/soldier/soldier_jump_004.png';

import walk1 from './../../../assets/characters/soldier/soldier_walk_001.png';
import walk2 from './../../../assets/characters/soldier/soldier_walk_002.png';
import walk3 from './../../../assets/characters/soldier/soldier_walk_003.png';
import walk4 from './../../../assets/characters/soldier/soldier_walk_004.png';
import walk5 from './../../../assets/characters/soldier/soldier_walk_005.png';
import walk6 from './../../../assets/characters/soldier/soldier_walk_006.png';
import walk7 from './../../../assets/characters/soldier/soldier_walk_007.png';
import walk8 from './../../../assets/characters/soldier/soldier_walk_008.png';

import walkBack1 from './../../../assets/characters/soldier/soldier_walk_back_001.png';
import walkBack2 from './../../../assets/characters/soldier/soldier_walk_back_002.png';
import walkBack3 from './../../../assets/characters/soldier/soldier_walk_back_003.png';
import walkBack4 from './../../../assets/characters/soldier/soldier_walk_back_004.png';
import walkBack5 from './../../../assets/characters/soldier/soldier_walk_back_005.png';
import walkBack6 from './../../../assets/characters/soldier/soldier_walk_back_006.png';
import walkBack7 from './../../../assets/characters/soldier/soldier_walk_back_007.png';
import walkBack8 from './../../../assets/characters/soldier/soldier_walk_back_008.png';

import run1 from './../../../assets/characters/soldier/soldier_run_001.png';
import run2 from './../../../assets/characters/soldier/soldier_run_002.png';
import run3 from './../../../assets/characters/soldier/soldier_run_003.png';
import run4 from './../../../assets/characters/soldier/soldier_run_004.png';
import run5 from './../../../assets/characters/soldier/soldier_run_005.png';
import run6 from './../../../assets/characters/soldier/soldier_run_006.png';
import run7 from './../../../assets/characters/soldier/soldier_run_007.png';
import run8 from './../../../assets/characters/soldier/soldier_run_008.png';

import stand from './../../../assets/characters/soldier/soldier.png';

import createImage from '../helpers/createImage';
const soldier = {
    attack: [createImage(attack1), createImage(attack2), createImage(attack3)],
    crouch: [createImage(crouch1), createImage(crouch2)],
    die: [createImage(die1),createImage(die2),createImage(die3),createImage(die4),createImage(die5)],
    hit: [createImage(hit1),createImage(hit2)],
    jump: [createImage(jump1),createImage(jump2),createImage(jump3),createImage(jump4)],
    run: [createImage(run1), createImage(run2),createImage(run3),createImage(run4),createImage(run5),createImage(run5),createImage(run6),createImage(run7),createImage(run8)],
    walk: [createImage(walk1),createImage(walk2),createImage(walk3),createImage(walk4),createImage(walk5),createImage(walk6),createImage(walk7),createImage(walk8)],
    walkBack: [createImage(walkBack1),createImage(walkBack2),createImage(walkBack3),createImage(walkBack4),createImage(walkBack5),createImage(walkBack6),createImage(walkBack7),createImage(walkBack8)],
    stand: [createImage(stand)],
}

export default soldier;