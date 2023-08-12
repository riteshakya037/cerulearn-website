import { BASE_URL } from 'common/constants'

export class NewsletterSubscriptionService {
    constructor() {
        this.baseURL = BASE_URL;
    }

    subscribe = async (email) => {
        const apiUrlWithQuery = `${this.baseURL}/marketing/newsletter?email=${email}`;
        const response = await fetch(apiUrlWithQuery);
        const data = await response.json();

        return data;
    }
}