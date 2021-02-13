import { CurrentDayForecast, NextDaysForecast } from "pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      Weather App
      <Route path="/" exact component={CurrentDayForecast} />
      <Route path="/nextDays" component={NextDaysForecast} />
    </Router>
  );
}

export default App;
