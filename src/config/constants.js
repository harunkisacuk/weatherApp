const Cities = [
  {
    value: "london,GB",
    label: "London, GB",
  },
  {
    value: "New York,US",
    label: "New York, US",
  },
  {
    value: "Mumbai,IN",
    label: "Mumbai, IN",
  },
  {
    value: "Sydney,AU",
    label: "Sydney, AU",
  },
  {
    value: "Tokyo,JP",
    label: "Tokyo, JP",
  },
];

const CONSTANTS = {
  WEATHER_API: process.env.REACT_APP_WEATHER_API,
  API_KEY: process.env.REACT_APP_API_KEY,
  PATH_ICON: process.env.REACT_APP_PATH_ICON,
  CITIES: Cities,
};

export default CONSTANTS;
