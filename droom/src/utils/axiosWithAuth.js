import axios from 'axios'

export const axiosWithAuth = () => {

    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token  /// "bearer"
        },
        baseURL: "https://droom6.herokuapp.com/"
    });
}