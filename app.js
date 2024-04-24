import SocialPost from "social-post-api";
// import { config } from "dotenv";
import config from "config";


var apikey = config.get("LINKEDIN.APIKEY")

const social = new SocialPost(apikey);

// const post = await social.post({
//     "post": "Today is a great day!",
//     "platforms": ["linkedin"],
//     "mediaUrls": ["https://img.ayrshare.com/012/gb.jpg"],
// }).catch(console.error);

const getPostData = ()=>{
    return{
        post: "test2: https://imgur.com/a/DcJxRAI",
        "platforms": ["linkedin"],
        // "mediaUrls": ["https://imgur.com/RHMMjTF"]
    }
}


const run = async () =>{
    const content = getPostData();
    const json = await social.post(content).catch(console.error);

    console.log(json);
};

run();