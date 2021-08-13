class Leaderboard {
  static getDataLeaderboard(axios) {
    return axios.get('https://api.henrikdev.xyz/valorant/v1/leaderboard/na')
      .then((res) => {
        const accessData = res.data;
        const result = accessData.filter((item) => item.leaderboardRank <= 5);
        return result;
      }).catch((err) => console.log(err));
  }
}

export default Leaderboard;
