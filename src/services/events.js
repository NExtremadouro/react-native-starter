import { apiFetch, FETCH_METHODS } from "./api";
import config from "../../config.json";

export const postEvent = ({ timestamp, userId, value, comment }) => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: config.api.baseUrl,
      endPoint: config.api.endpoints.events,
      method: FETCH_METHODS.POST,
      body: {
        timestamp,
        userId,
        value,
        comment
      }
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}
