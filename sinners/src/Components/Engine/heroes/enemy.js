import run1 from './../../../assets/characters/enemy/run/frame-1.png';
import run2 from './../../../assets/characters/enemy/run/frame-2.png';
import run3 from './../../../assets/characters/enemy/run/frame-3.png';
import run4 from './../../../assets/characters/enemy/run/frame-4.png';

import dizzy1 from './../../../assets/characters/enemy/dizzy/frame-1.png';
import dizzy2 from './../../../assets/characters/enemy/dizzy/frame-2.png';

import createImage from '../helpers/createImage';

const enemy = {
    run: [createImage(run1), createImage(run2),createImage(run3),createImage(run4)],
    dizzy: [createImage(dizzy1), createImage(dizzy2), createImage(dizzy1), createImage(dizzy2)]
}

export default enemy;