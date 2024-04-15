// EventService.js

const host = 'https://account.ceruai.com';
const base_url =  host + '/api/v1/public';
class EventService {
    static async getEvents() {
      try {
        // Make API request to fetch events data
        console.log(base_url + "/events");
        const response = await fetch(base_url + "/events");
        const data = await response.json();
        
        if(data.success) {
        const events = data.data.map(event => ({
          title: event.title,
          url: event.url,
          image_url:base_url+ event.image_url,
        }));

        
        return events;
      }else {
        return []
      }
      } catch (error) {
        console.error('Error fetching events:', error);
        return [];
      }
    }
  }
  
  export default EventService;
  