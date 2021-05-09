import React from 'react';

const App = () => {
  return <h1 title="This works">Hi, <span>this is </span>A ReactJS App!</h1>;//this wirks because it translates to React.createElement('h1', {title: 'this works'}, ...)
};


// class App extends React.Component{    //this is the same regular expression
//   render(){
//     return <h1 title="This works">Hi, <span>this is </span>A ReactJS App!</h1>;
//   }
// }


export default App;
