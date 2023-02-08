import axios from "axios";
import { usersTypes } from "../types";

const TOKEN =
  "2059663204eaaea41f53c585f73a6c417c220c648103494ec75901fee6493bef";

axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

const BASEURL = "https://gorest.co.in";

const users = axios.create({
  baseURL: `${BASEURL}`,
});

async function getUsersRequest(
  page: number
): Promise<usersTypes.UsersPromise | undefined> {
  try {
    let response = await users.get(`/public/v1/users?page=${page}`);
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

async function patchUserRequest(data: {
  id: string | undefined;
  dataUser: { name: string; email: string; gender: string; status: string };
}): Promise<usersTypes.User | undefined> {
  const { id, dataUser } = data;
  try {
    const response = await users.patch(`/public/v1/users/${id}`, dataUser);
    return response.data.data;
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
async function getUser(id: string): Promise<usersTypes.User | undefined> {
  try {
    const response = await users.get(`/public/v1/users/${id}`);
    return response.data.data;
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

export { getUsersRequest, patchUserRequest, getUser };
