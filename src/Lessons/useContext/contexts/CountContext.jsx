import { createContext } from 'react';

export const MyContext = createContext(10)
MyContext.displayName = 'COUNT'