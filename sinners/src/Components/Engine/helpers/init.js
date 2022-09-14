import setGameOver from './setGameOver';
import setPlatforms from "./setPlatforms";
import setBackground from "./setBackground";
import setPlayer from "./setPlayer";
import setStats from './setStats';
import setScore from "./setScore";
import setEnemies from "./setEnemies";

export default (canvas, ctx, level, state, hero) => {

    const levelPlatforms  = setPlatforms(level, ctx, canvas);
    const background      = setBackground(ctx, canvas);
    const player          = setPlayer(hero, ctx, canvas )
    const stats           = setStats(ctx, canvas);
    const score           = setScore(ctx, canvas);
    const gamveOver       = setGameOver(ctx, canvas);
    const enemies         = setEnemies(level, ctx, canvas);

    state.setPlatforms(levelPlatforms);
    state.setPlayer(player);
    state.setGenericObjects(background);
    state.setCtxState(ctx);
    state.setCanvasState(canvas);
    state.setStats(stats);
    state.setScore(score);
    state.setEnemies(enemies);
    state.setGameOver(gamveOver);
}