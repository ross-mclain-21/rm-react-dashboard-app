import React, { Dispatch, SetStateAction } from "react";
import { IAdventChallenge } from "../common/CommonInterfaces";

interface IAdventContext {
  adventData: IAdventChallenge[];
  setAdventData: Dispatch<SetStateAction<IAdventChallenge[]>>;
  selectedAdventData?: IAdventChallenge;
  setSelectedAdventData: Dispatch<SetStateAction<IAdventChallenge | undefined>>;
}

const defaultAdventContext = {
  adventData: [],
  setAdventData: () => {},
  selectedAdventData: undefined,
  setSelectedAdventData: () => {},
};

const AdventContext = React.createContext<IAdventContext>(defaultAdventContext);

export default AdventContext;
