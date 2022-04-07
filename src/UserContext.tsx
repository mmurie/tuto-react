import { createContext } from 'react';

export interface IUser {
    username: string
}

export interface IThemeContext {
    user: IUser | null;
    setUser?: (user: IUser | null) => void;
}

export const defaultState = {
    user: null
};

export const UserContext = createContext<IThemeContext>(defaultState);