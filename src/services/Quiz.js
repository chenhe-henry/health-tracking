import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=10",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getQuiz() {
    return apiClient.get("");
  },
};
