import axios from 'axios';

class Map {
  static getDataMap() {
    return axios.get('https://valorant-api.com/v1/maps')
      .then((res) => {
        const accessData = res.data.data;
        const getData = accessData.map((item) => {
          const data = {
            name: item.displayName,
            img: item.splash,
          };
          return data;
        });
        return getData;
      }).catch((err) => console.log(err));
  }
}

export default Map;
