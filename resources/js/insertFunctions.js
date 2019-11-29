import axios from "axios";

export const addsenator = newRecord => {
    return axios
        .post("api/senator", newRecord, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
};
