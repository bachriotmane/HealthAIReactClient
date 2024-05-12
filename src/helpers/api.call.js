import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8282/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('jwtToken');
    const token =
      "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyZWQxIiwiZXhwIjoxNzIyNDIwNTE2LCJpYXQiOjE3MTU1MDg1MTYsInNjb3BlIjoiUk9MRV9QQVRJRU5UIn0.L8oE3zlpwcrtlDmaJHdvQS2QjVGj29vUByYUMXSMrZk3YaOp3_oOcYevGSw0uNS3TLDUDmY9Zh43h3nOZIbVRw85szb5Ouvaq9jwtAyiuMgWU2AodnN7nZP3NdKbrF5a1dxUlWW--s1T8Lt4xxt8gMq_fs6LQ5iyEhDM996ySBF6dnsTZ_ULJUFP67cbxVhY6-3jrvmcbpGemgKYTRYr6bh-pyjz2HaS9sV9-VfepoOInSV0PM2qAOpGR7p4q3CwaCivrPW62djd7IqnxsvP97dfwBA3BT3w7IcZG9vRaLFgH2fBlniD7z9HIAJhv4g_9WO5bCoLY1Rjnr972AfXxXslqDrvukAPsmtb8Jz_GfYapKx7-Nx3rZ0KTzG94waaGtvxgiO4oZrleQgVt-V0pmJsGolCEuibMThJZZdZBFd4pb17b5N1RJTSao4dwQl7SE1YHWK1COsTbw4IwNBf1GeHebIpcMcwVcl9zC1Sfc2z6uQ76qSA4nhYpcKppYqC";
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized, logging out...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
