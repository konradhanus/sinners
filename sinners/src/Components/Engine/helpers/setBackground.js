import createImage from './createImage';
import GenericObject from '../Objects/GenericObject';
import background from '../../../assets/background.png';

function setBackground(ctx, canvas) {
    return [new GenericObject(ctx, canvas, 0, 0, createImage(background))]
}
export default setBackground;