import axios from "axios";

const apiAffirmation = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://www.affirmations.dev/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAffirmation() {
    return apiAffirmation.get("");
  },
};
