import axios from "axios-typescript"

export const api = axios.create({
  withCredentials: true,
  baseURL: "https://76126ca1-84df-41b4-9028-f9ea86721f83.mock.pstmn.io/",
})

// defining a custom error handler for all APIs
const errorHandler = (error: any) => {
  const statusCode = error.response?.status

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

// // registering the custom error handler to the
// // "api" axios instance
// api.interceptors.response.use((undefined), (error) => {
//   return errorHandler(error)
// })