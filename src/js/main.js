import {
  Agent, Weapon, Map, DetailAgent,
} from './api';
import './components/dataList';
import './components/detailAgent';

const main = () => {
  const dataListElementAgent = document.querySelector('#agent');
  const dataListElementWeapon = document.querySelector('#weapon');
  const dataListElementMap = document.querySelector('#map');
  const getElementDetail = document.querySelector('#detail');

  const renderAgents = (results) => {
    dataListElementAgent.listData = results;
  };
  const renderWeapons = (results) => {
    dataListElementWeapon.listData = results;
  };
  const renderMap = (results) => {
    dataListElementMap.listData = results;
  };
  const renderDetailAgent = (results) => {
    // console.log(results)
    getElementDetail.data = results;
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

  const getParams = (id) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(id);
  };

  const renderDetail = async () => {
    try {
      const resultDetailAgent = await DetailAgent.getDetailAgent(getParams('id'));

      renderDetailAgent(resultDetailAgent);
    } catch (error) {
      console.log(error);
    }
  };

  if (window.location.pathname === '/detail.html') {
    renderDetail();
  } else {
    render();
  }
};

export default main;
