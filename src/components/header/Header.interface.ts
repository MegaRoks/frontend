import { ConnectedProps } from "react-redux";

import { connector } from "./Header.service";

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface IHeaderProps extends PropsFromRedux {}