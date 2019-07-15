Simple Timeline with React js
===

[![Code version](https://img.shields.io/badge/version-1.0.0-blue.svg)](http://www.npmjs.com/package/react-simple-timeline)

See the Example [`Simple Timeline`](https://daym3l.github.io/react-simple-timeline/)

React simple timeline is a React Js component for building a timeline

Features of `react-simple-timeline`
* Vertical timeline view


## Getting started

```
npm install react-simple-timeline
```

### Example 

Need more? See [`sample/src/index.js`](https://github.com/Daym3l/react-simple-timeline/tree/master/sample/src/index.js)

```js

import SimpleTimeLine from "react-simple-timeline";

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


export default () => {    

    return <SimpleTimeLine timelineData={timelineData} />;
}
```
# Props
* `timelineData`: (required) Array of objects, ({ text: "", date: "",category: {tag: "",color: ""},author: ""})
 

# Build the example locally

```
git clone https://github.com/Daym3l/react-simple-timeline.git
cd react-simple-timeline
npm install
npm start
```

Then open [`localhost:3001`](http://localhost:3001) in a browser.


# License

MIT

