import barbarian from "../heroes/barbarian";
import soldier from "../heroes/soldier";
import wizard from "../heroes/wizard";

function getHero(hero) {
    switch(hero)
    {
        case 1:
            return barbarian;
        case 2:
            return wizard;
        case 3:
            return soldier;
        default:
            return barbarian
    }
}

export default getHero;