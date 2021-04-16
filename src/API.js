import axios from "axios";
const baseURL = "https://avtoe-main-server.herokuapp.com";
export const loginAPI = ({ password, email }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(
        `${baseURL}/api/v1/user/signin`,
        {
          email,
          password,
        },
        { headers: new Headers({
           "Content-Type": "application/json",
          }) }

      );
     console.log(response)
      resolve(response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.config.data);
      localStorage.setItem('fullName', response.data.fullName)
    } catch (err) {
      console.log(err);
    }
  });
};
export const signUpAPI = ({ password, email, name, phoneNum }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(
        `${baseURL}/api/v1/user/signup`,
        {
          email,
          password,
          name,
          phoneNum,
        },
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );

      resolve(response);
      console.log(response);
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', response.config.data)
    } catch (err) {
      reject(err);
    }
  });
};

export const searchCar = ({ search, type }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/car/search/car?search=${search}&type=${type}`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
export const allCars = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/car`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
export const singleCar = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/car/${id}`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

export const allAuctions = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/auction/all/live`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
export const singleAuction = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/auction/${id}`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
export const allArticles = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/article`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
export const singleArticle = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/article/${id}`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
export const allAdvertisments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/findCar`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
export const singleAd = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/v1/findCar/${id}`,
        {},
        { headers: new Headers({ "Content-Type": "application/json" }) }
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
