import axios from "axios";
const MainUrl = axios.create({
  baseURL: "https://66361b59415f4e1a5e264995.mockapi.io/api/leader",
});
export default MainUrl;
