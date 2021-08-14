import axios from 'axios';
import {
  Agent, Weapon, Leaderboard, DetailAgent, DetailWeapon, Player,
} from './api';
import './components/DataListAgent/dataListAgent';
import './components/DataListWeapon/dataListWeapon';
import './components/detailAgent';
import './components/dataListLeader';
import './components/detailWeapon';
import './components/detailPlayer';


const main = () => {
  const dataListElementAgent = document.querySelector('#agent');
  const dataListElementWeapon = document.querySelector('#weapon');
  const getElementDetailAgent = document.querySelector('detail-agent');
  const getElementDetailWeapon = document.querySelector('detail-weapon');
  const dataListElementLeader = document.querySelector('data-list-leader');
  const getElementDetailPlayer = document.querySelector('detail-player');
  
  const renderAgents = (results) => {
    dataListElementAgent.listData = results;
  };
  const renderWeapons = (results) => {
    dataListElementWeapon.listData = results;
  };
  const renderLeader = (results) => {
    dataListElementLeader.listData = results;
  };
  const renderDetailAgent = (results) => {
    getElementDetailAgent.data = results;
  };
  const renderDetailWeapon = (results) => {
    console.log(results)
    getElementDetailWeapon.data = results;
  };
  const renderDetailPlayer = (results) => {
    getElementDetailPlayer.data = results;
  }

  const render = async () => {
    try {
      const resultAgent = await Agent.getDataAgent(axios);
      const resultWeapon = await Weapon.getDataWeapon(axios);
      const resultLeader = await Leaderboard.getDataLeaderboard(axios);
      renderLeader(resultLeader);
      renderAgents(resultAgent);
      renderWeapons(resultWeapon);
    } catch (message) {
      console.log(message);
    }
  };

  const getParams = (id) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(id);
  };

  const renderFuncDetailAgent = async () => {
    try {
      const resultDetailAgent = await DetailAgent.getDetailAgent(getParams('id'), axios);
      renderDetailAgent(resultDetailAgent);
    } catch (error) {
      console.log(error);
    }
  };

  const renderFuncDetailWeapon = async () => {
    try {
      const resultDetailWeapon = await DetailWeapon.getDetailWeapon(getParams('id'), axios);
      renderDetailWeapon(resultDetailWeapon);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPlayer = async () => {
    try {
      const resultDetailPlayer = await Player.getDataPlayer(getParams('id'), axios);
      
      renderDetailPlayer(resultDetailPlayer)
    } catch (error) {
      console.log(error);
    }
  }

  switch(window.location.pathname) {
    case '/detailAgent.html':
      renderFuncDetailAgent();
      break;
    case '/detailWeapon.html':
      renderFuncDetailWeapon();
      break;
    case '/detailPlayer.html':
      renderPlayer();
      break;
    default:
      render();
  }

};

export default main;
