import axios from "axios";

export const addsenator = newRecord => {
    return axios
        .post("api/senator/add", newRecord, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          return  res.data
        })
        .catch(err => {
            console.log(err);
        });
};
