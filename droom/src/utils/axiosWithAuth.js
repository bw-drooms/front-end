import axios from 'axios'

const axiosWithAuth = () => {

    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        baseURL: "https://droom6.herokuapp.com/"
    });
}
<<<<<<< HEAD

=======
export default axiosWithAuth
>>>>>>> 44f69783a6f629345d98a91ddd3f329cd5004567
