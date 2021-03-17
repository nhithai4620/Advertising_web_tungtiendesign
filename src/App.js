import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

import {DataProvider} from './components/Context';

class App extends React.Component{
  render() {
    return (
      <DataProvider>
        <div className="app"> 
          <Router>
            <Header/>
            <Section/>
            <Footer/>
          </Router>
        </div>
      </DataProvider>
      );
  }
}

export default App;
