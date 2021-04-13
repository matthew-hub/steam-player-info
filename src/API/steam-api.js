/* eslint-disable import/no-extraneous-dependencies */
import steamAPI from 'steam-api-client';

// initialization steam api
const init = steamAPI.init();
// set the server URL, you can create own or use this
init.setDomainURL('https://steam-api-server.herokuapp.com');

export default init;
