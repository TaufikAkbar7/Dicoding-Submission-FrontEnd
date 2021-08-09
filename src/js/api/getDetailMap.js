class DetailMap {
  static getDetailMap(id, axios) {
    return axios.get(`https://valorant-api.com/v1/maps/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
}

export default DetailMap;
