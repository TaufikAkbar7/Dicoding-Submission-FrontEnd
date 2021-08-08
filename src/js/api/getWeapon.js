import axios from 'axios';

class Weapon {
  static getDataWeapon() {
    return axios.get('https://valorant-api.com/v1/weapons')
      .then((res) => {
        const accessData = res.data.data;
        const getData = accessData.map((item) => {
          const data = {
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
