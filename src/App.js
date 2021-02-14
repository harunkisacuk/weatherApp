import { Main, CurrentDayForecast, NextDaysForecast } from "pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
function App() {
  const [weathers, setWeathers] = useState([]);
  const [city, setCity] = useState({});

  // return ;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main setWeathers={setWeathers} city={city} setCity={setCity} />
        </Route>
        <Route path="/currentDay" exact>
          <CurrentDayForecast weather={weathers[0]} city={city.label} />
        </Route>
        <Route path="/nextDays">
          <NextDaysForecast weathers={weathers} city={city.label} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
