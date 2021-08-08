import { Agent, Weapon, Map } from './api';
import './components/dataList';

const main = () => {
  const dataListElementAgent = document.querySelector('#agent');
  const dataListElementWeapon = document.querySelector('#weapon');
  const dataListElementMap = document.querySelector('#map');

  const renderAgents = (results) => {
    dataListElementAgent.listData = results;
  };
  const renderWeapons = (results) => {
    dataListElementWeapon.listData = results;
  };
  const renderMap = (results) => {
    dataListElementMap.listData = results;
  };

  const render = async () => {
    try {
      const resultAgent = await Agent.getDataAgent();
      const resultWeapon = await Weapon.getDataWeapon();
      const resultMap = await Map.getDataMap();

      renderAgents(resultAgent);
      renderWeapons(resultWeapon);
      renderMap(resultMap);
    } catch (message) {
      console.log(message);
    }
  };

  render();
};

export default main;
