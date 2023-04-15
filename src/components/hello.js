const BASE_URL = 'https://api.harvardartmuseums.org';
const KEY = 'apikey=0cfffd98-eeb3-4f2b-8317-beb5b98e86de';

async function fetchObjects () {
    const url = `${ BASE_URL }/object?${ KEY }`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    } 
    
    catch (error) {

    console.error(error);

    }
}

fetchObjects().then(x => console.log(x));