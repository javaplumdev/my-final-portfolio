import { createContext } from 'react';

export const ContextVariable = createContext();

export const ContextFunction = ({ children }) => {
	const AnimateHeroText = {
		initial: {
			y: -200,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 2,
			},
		},
	};

	return (
		<ContextVariable.Provider value={{ AnimateHeroText }}>
			{children}
		</ContextVariable.Provider>
	);
};
