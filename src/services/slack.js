import { apiFetch, FETCH_METHODS } from "./api";
import config from "../../config.json";

export const postSlack = ({ message }) => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: config.api.baseUrl,
      endPoint: config.api.endpoints.slack,
      method: FETCH_METHODS.POST,
      body: {
        message
      }
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}
