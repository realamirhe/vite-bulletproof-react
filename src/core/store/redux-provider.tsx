import { Provider } from "react-redux";

import store from "./store";

interface IProps {
  children: JSX.Element;
}

export default function ReduxProvider({ children }: IProps) {
  return <Provider store={store}>{children}</Provider>;
}
