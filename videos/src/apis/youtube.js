import axios from "axios";

const KEY = "AIzaSyCX6XwNd5QVAGBLqmGrP8PF5t9UNnJ-uo4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
