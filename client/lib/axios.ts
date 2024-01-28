import axios from "axios";
import { serverURI } from "./utils";
export default axios.create({
  baseURL: serverURI,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
