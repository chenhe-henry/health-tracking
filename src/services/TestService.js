import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://corona-virus-stats.herokuapp.com/api/v1/cases/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getGeneralInfo() {
    return apiClient.get("general-stats");
  },
  getSpecificListing() {
    return apiClient.get("countries-search");
  },
};
