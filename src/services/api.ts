import axios from "axios";

const BaseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const api = axios.create({
  baseURL: BaseUrl,
  timeout: 5000,
});

export default api;
