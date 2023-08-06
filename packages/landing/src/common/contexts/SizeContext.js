import { useState, useEffect } from 'react';

export function withInnerWidth(Component) {
    return function WithInnerWidth(props) {
        function getSize() {
            return {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
                outerHeight: window.outerHeight,
                outerWidth: window.outerWidth,
            };
        }


        let [windowSize, setWindowSize] = useState({});

        function handleResize() {
            setWindowSize(getSize());
        }

        useEffect(() => {
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return <Component {...props} size={windowSize} />;
    };
}
