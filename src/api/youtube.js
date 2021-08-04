import axios from 'axios';
const KEY = 'AIzaSyCKIH7kpx9yg1XeG6Ztq1ENLo2eW89jxvA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})