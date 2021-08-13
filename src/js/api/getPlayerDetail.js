class Player {
  static getDataPlayer(id, axios) {
    return axios.get(`https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr/na/${id}`)
      .then((res) => {
        const accessData = res.data.data;
        return accessData;
      }).catch((err) => console.log(err));
  }
}

export default Player;
