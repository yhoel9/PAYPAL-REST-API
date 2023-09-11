import {config} from "dotenv";

config();

//credentials for syscom
export const SYSCOM_API_CLIENT = process.env.SYSCOM_API_CLIENT;
export const SYSCOM_API_SECRET = process.env.SYSCOM_API_SECRET;
//link for to api
export const SYSCOM_API = process.env.SYSCOM_API;

export const PORT = process.env.PORT;
export const HOST = process.env.HOST;


