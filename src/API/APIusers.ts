import axios from "axios";

// import {usersTypes} from '../types'

const TOKEN =
  "2059663204eaaea41f53c585f73a6c417c220c648103494ec75901fee6493bef";

axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

const BASEURL = "https://gorest.co.in";

export const users = axios.create({
  baseURL: `${BASEURL}`,
});

async function getUsersRequest(): Promise<any | undefined> {
  try {
    let response = await users.get(`/public/v1/users`);
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isCancel(error)) {
      return Promise.reject();
    } else {
      console.log("Error", error);
      return;
    }
  }
}

export { getUsersRequest };
