import React from "react";

function useScrollListener() {
    const [data, setData] = React.useState({
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
    });

    React.useEffect(() => {
        const handleScroll = () => {
            setData((last) => {
                return {
                    x: window.scrollX,
                    y: window.scrollY,
                    lastX: last.x,
                    lastY: last.y,
                };
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return data;
}

const ScrollContext = React.createContext(null);

export { useScrollListener, ScrollContext };
