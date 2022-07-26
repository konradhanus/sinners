export default (handleUserKeyDownPress, handleUserKeyUpPress) => {
    window.removeEventListener("keydown", handleUserKeyDownPress);
    window.removeEventListener("keyup", handleUserKeyUpPress);
}