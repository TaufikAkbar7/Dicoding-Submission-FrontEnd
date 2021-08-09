import axios from 'axios';
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
    getElementDetail.data = results;
  };

  const render = async () => {
    try {
      const resultAgent = await Agent.getDataAgent(axios);
      const resultWeapon = await Weapon.getDataWeapon(axios);
      const resultMap = await Map.getDataMap(axios);

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
      const resultDetailAgent = await DetailAgent.getDetailAgent(getParams('id', axios));

      renderDetailAgent(resultDetailAgent);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLink = () => {
    const getIconElement = document.querySelector('span');
    getIconElement.addEventListener('click', (e) => {
      e.preventDefault();
      e.view.window.location.href = '/';
    });
  };

  if (window.location.pathname === '/detail.html') {
    renderDetail();
    handleLink();
  } else {
    render();
  }
};

export default main;
