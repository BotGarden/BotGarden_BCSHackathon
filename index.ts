import { AskBCSBot } from "./bots/AskBCSBot/AskBCSBot"
import { AskTABot } from "./bots/AskTABot/AskTABot"

class Index {
    async run() {
        await new AskBCSBot().run();
        await new AskTABot().run();
    }
}
new Index().run();