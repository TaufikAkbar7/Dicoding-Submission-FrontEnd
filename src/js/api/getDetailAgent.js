class DetailAgent {
  static getDetailAgent(id, axios) {
    return axios.get(`https://valorant-api.com/v1/agents/${id}`)
      .then((res) => {
        const accessData = res.data.data;
        return accessData;
      })
      .catch((err) => console.log(err));
  }
}

export default DetailAgent;
