import { useState, useEffect } from 'react';

export function withInnerWidth(Component) {
    return function WithInnerWidth(props) {
        if (!process.browser) return <Component {...props} size={{}} />;

        function getSize() {
            return {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
                outerHeight: window.outerHeight,
                outerWidth: window.outerWidth,
            };
        }


        let [windowSize, setWindowSize] = useState(getSize());

        function handleResize() {
            setWindowSize(getSize());
        }

        useEffect(() => {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return <Component {...props} size={windowSize} />;
    };
}
