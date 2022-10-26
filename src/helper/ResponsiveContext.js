import { createContext } from 'react';

const isMobile = false;
// document.window.innerWidth <= 700 && document.window.innerHeight <= 900
// 	? true
// 	: false;

export const ResponsiveContext = createContext(isMobile);
//
