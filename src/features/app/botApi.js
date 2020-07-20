import BotApi from "../botproviders/elbot/api";

const botApi = new BotApi();

export default function getBotApi(){
    return botApi;
}