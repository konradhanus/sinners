import Stats from '../Objects/Stats';

function setStats(ctx, canvas){
    return  new Stats(ctx, canvas);
}

export default setStats;