import axiosLib from "axios";



export default function axios() {

    if(new Date(localStorage.getItem("expires_in") < new Date())){
        window.location.href = "/";
        return;
    }
  axiosLib.defaults.baseURL = "http://20.244.56.144/";
  // axiosLib.defaults.baseURL = "https://qaapigc.mic.gov.in/api";
  axiosLib.defaults.headers.common = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA3OTk1NjMsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYjNkYjFmMmYtZGY4MC00NmMzLWE4YWMtNjMwZDA2ZGRhZDU4Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjA0In0.-ZJL1MiK6-K8rbkdfJddXjZWsJeUFhSObeZhbr_DZWU`,
    Accept: "application/json",
    
  };

//   axiosLib.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       if (error?.response?.status === 401) {
//         await auth().logout("/", true);
//       } else {
//         throw error;
//       }
//     }
//   );

  return axiosLib;
}