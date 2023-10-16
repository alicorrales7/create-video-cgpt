import dotenv from "dotenv";

dotenv.config();

const MONGO_URL =
  "mongodb+srv://alicorrales2013:HjFvzA8Y02O5SFeh@weather.gvlvg2b.mongodb.net/Weather";
  

export default {
    PORT :3000,
    mongo: {
        url: MONGO_URL
    }
}