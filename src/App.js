import React, {Component} from 'react';
import Landing from "./components/Landing/Landing";
import {Route, Switch} from 'react-router-dom';
import posed, {PoseGroup} from 'react-pose';
import Destination from "./components/Destinations/Destination";
import Detail from "./assets/images/Detail";

class App extends Component {
  render() {
      const RoutesContainer = posed.div({
          enter: {opacity: 1, delay: 400, beforeChildren: true},
          exit: {opacity: 0}
      });

    return (
        <Route render={({location}) => (
            <PoseGroup>
                <RoutesContainer key={location.pathname}>
                    <Switch location={location}>
                        <Route exact path="/" component={Landing} key="Home"/>
                        <Route exact path="/:destinasi" component={Destination} key="Home"/>
                        <Route exact path="/:destinasi/:id" component={Detail} key="Home"/>
                    </Switch>
                </RoutesContainer>
            </PoseGroup>
        )}/>
    );
  }
}

export default App;
