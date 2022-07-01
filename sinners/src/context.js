import { createContext } from "react";
const newContext = createContext({ time: 2 });
const { Provider } = newContext;

export { Provider };
export default newContext;
