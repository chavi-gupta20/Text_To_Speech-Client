import React from 'react';
import './styles.scss'
//import TextForm from './components/TextForm'
import Navbar from './components/Navbar'
//import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
 const Home = React.lazy(() => import('./components/Home'))
 const TextForm = React.lazy(() => import('./components/TextForm'))

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/voicemaker'>
            <TextForm heading="Enter the text to convert to speech using Voicemaker" />
          </Route>
          <Route exact path='/gtts'>
            <TextForm heading="Enter the text to convert to speech using gTTs" />
          </Route>
        </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
