import { AskBCSBot } from "./bots/AskBCSBot/AskBCSBot"

class Index {
    async run() {
        await new AskBCSBot().run();
    }
}
new Index().run();