export default (handleUserKeyDownPress, handleUserKeyUpPress) => {
    window.addEventListener("keydown", handleUserKeyDownPress);
    window.addEventListener("keyup", handleUserKeyUpPress);
}