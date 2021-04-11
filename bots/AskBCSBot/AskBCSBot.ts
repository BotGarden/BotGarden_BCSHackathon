import path from 'path';
import properties from './properties.json'
import { BaseBot } from "../BaseBot";
import * as dotenv from 'dotenv';
if (process.env.NODE_ENV !== "production") {
    dotenv.config()
}

let allProperties: any = {
    token: "ODMwNTc0OTA3NDA1NTAwNTE2.YHIrKQ.RqqrV_jdKaTqZ8KLGTrJlI0we8o",
    prefix: properties.prefix,
    commands: properties.commands,
    botDirName: path.basename(__dirname),
    botFileName: path.basename(__filename)
}
export class AskBCSBot extends BaseBot {
    constructor() {
        super(allProperties);
    }
    async run() {
        await super.run();
    }
}