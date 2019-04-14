
import axios from "axios";

const KEY = "AIzaSyDYBRjSEzBiyNwpdwDLsdl5ZcHjB0g-cu8";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResult: 5,
        key : KEY
    }
});

