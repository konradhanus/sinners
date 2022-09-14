import Score from "../Objects/Score";

function setScore(ctx, canvas){
    return new Score(ctx, canvas);
}
export default setScore;