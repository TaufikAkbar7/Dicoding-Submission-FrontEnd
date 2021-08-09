class DetailWeapon {
  static getDetailWeapon(id, axios) {
    axios.get(`https://valorant-api.com/v1/weapons/${id}`)
      .then((res) => {
        const accessData = res.data.data;
        return accessData;
      })
      .catch((err) => console.log(err));
  }
}

export default DetailWeapon;
