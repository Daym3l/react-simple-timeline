import React from 'react';
import { render } from 'react-dom';
import SimpleTimeLine from '../../src/index';



const App = () => {

    const timelineData = [{
        text: "This is a simple timeline 1",
        date: "July 15, 2019",
        category: {
            tag: "Any",
            color: "#e17b77"
        },
        author: "Me"
    }, {
        text: "This is a simple timeline 2",
        date: "July 16, 2019",
        category: {
            tag: "Any",
            color: "#e17b77"
        },
        author: "Me"
    }];

    return <SimpleTimeLine timelineData={timelineData} />;
};


render(<App />, document.getElementById("root"));