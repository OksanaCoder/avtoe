import axios from "axios";
const baseURL = "http://localhost:4000";
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
            'Authorization': `Basic ${token}` 
          }) }
      );
      //   let data;
      //   data = await searchCar({ search: "BMW", type: "SUV" });
      //   console.log("searchCar");
      //   console.log(data.data);
      //   data = await allAdvertisments();
      //   console.log("allAdvertisments");

      //   console.log(data.data);
      //   data = await allCars();
      //   console.log("allCars");
      //   console.log(data.data);
      //   data = await allArticles();
      //   console.log("allArticles");
      //   console.log(data.data);
      //   data = await allAuctions();
      //   console.log("allAuctions");
      //   console.log(data.data);
      //   data = await singleArticle("605ea3c527186555e001a5ec");
      //   console.log("singleArticle");
      //   console.log(data.data);
      //   data = await singleAd("605ea56127186555e001a5f4");
      //   console.log("singleAd");
      //   console.log(data.data);
      resolve(response);
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
        `${baseURL}/api/v1/auction`,
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
