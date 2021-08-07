import axios from "axios";
import { unsplashApiKey } from "../config";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: unsplashApiKey,
  },
});
