class Weapon {
  static getDataWeapon(axios) {
    return axios.get('https://valorant-api.com/v1/weapons')
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

export default Weapon;
