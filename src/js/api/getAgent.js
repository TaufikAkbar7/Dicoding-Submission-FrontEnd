class Agent {
  static getDataAgent(axios) {
    return axios.get('https://valorant-api.com/v1/agents')
      .then((res) => {
        const accessData = res.data.data;
        const getData = accessData.map((item) => {
          const data = {
            id: item.uuid,
            name: item.displayName,
            img: item.displayIcon,
          };
          return data;
        });
        return getData;
      }).catch((err) => console.log(err));
  }
}

export default Agent;
