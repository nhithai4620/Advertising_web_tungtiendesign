import React from 'react';
import {Route} from "react-router-dom";
import Home from './section/Home';

export class Section extends React.Component{
  render() {
    return (
      <section>
        <Route path="/home" component={Home} exact/>
        <Route path="/" component={Home} exact/>
      </section>
    );
  }
}

export default Section;

