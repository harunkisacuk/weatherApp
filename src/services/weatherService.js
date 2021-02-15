import axios from "axios";
import Constants from "config/constants";

const options = {
  baseURL: Constants.WEATHER_API,
  method: "GET",
  url: "/current",
  params: { city: "London", country: "GB" },
  headers: {
    "x-rapidapi-key": Constants.API_KEY,
  },
};

export const getWeather = async (reqData = {}) => {
  try {
    const res = await axios.request({ ...options, ...reqData });
    console.log("​getWeather -> res?.data", res?.data);
    return res?.data;
  } catch (error) {
    console.error(error);
    return error.messages;
  }
};
