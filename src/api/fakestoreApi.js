import axiosClient from "./axiosClient";

const fakestoreApi = {
    getAllProducts: () => {
        const url = '/products';
        return axiosClient.get(url);
    },

    getDetail: (id) => {
        const url = '/products/' + id;
        return axiosClient.get(url);
    }
}

export default fakestoreApi;