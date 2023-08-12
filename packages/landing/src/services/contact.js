import { BASE_URL } from 'common/constants'

export class ContactUsService {
    constructor() {
        this.baseURL = BASE_URL;
    }

    submit = async (contactInfo) => {
        const apiUrlWithQuery = `${this.baseURL}/marketing/contact`;
        const response = await fetch(apiUrlWithQuery, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        });
        const data = await response.json();

        return data;
    }
}