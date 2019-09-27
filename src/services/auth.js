import { apiFetch, FETCH_METHODS } from "./api";
import config from "../../config.json";

export const postLogin = ({ email }) => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: config.api.baseUrl,
      endPoint: config.api.endpoints.login,
      method: FETCH_METHODS.POST,
      body: {
        email
      }
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}
