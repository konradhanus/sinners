import run1 from './../../../assets/characters/enemy/run/frame-1.png';
import run2 from './../../../assets/characters/enemy/run/frame-2.png';
import run3 from './../../../assets/characters/enemy/run/frame-3.png';
import run4 from './../../../assets/characters/enemy/run/frame-4.png';

import createImage from '../helpers/createImage';

const enemy = {
    run: [createImage(run1), createImage(run2),createImage(run3),createImage(run4)],
}

export default enemy;