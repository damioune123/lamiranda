import DirectusSDK from '@directus/sdk-js';
import { config } from './config';

class DirectusAPI {
  directusClient;

  init = async () => {
    this.directusClient = new DirectusSDK({ ...config.directusAPI });
  };

  // API REQUESTS
  getGalleries = async () => {
    console.log('HEY GET GALLERIES');
    const { data } = await this.directusClient.getItems('galleries', {
      fields: 'id,name,gallery_items.*, gallery_items.image.data.*',
    });
    return data;
  };
}
const directusAPI = new DirectusAPI();
directusAPI.init();
export default directusAPI;
