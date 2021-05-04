import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./Components/List";

class App extends Component {

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">DISHES</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/dishes"><b>All Dishes</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dishes/Cakes">Cakes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dishes/Meat">Meat</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dishes/Drinks">Drinks</a>
              </li>
            </ul>
          </div>
        </nav>

        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() =>
                <>
                  <h3 class="m-2">Random Dish</h3>
                  <List query="Random" />
                </>
              }
            />

            <Route
              path="/dishes/:category?"
              render={({ match }) => {
                const { category } = match.params;
                return <List query={category} />
              }}
            />

            <Route render={() => <h1>Nothing was found</h1>} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
