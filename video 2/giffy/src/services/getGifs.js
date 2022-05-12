const API_KEY = 'qIH3GdEddKnEDPJBq4V2L8JxqtkYZPNm&q';

export default function getGifs ({keyword = 'f1'} = {}) {

    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keyword}&limit=10&offset=0&rating=g&lang=en`;


    return fetch(API_URL)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const gifs = data.map(image => {
                const {images, title, id} = image
                const { url } = images.downsized_medium
                return {title, id, url}
            });
        return gifs;
    })
}