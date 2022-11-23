import { Command } from "../Command";
import { entries } from "../data";

export default class TimelineCommand extends Command {
  constructor() {
    super({ name: "timeline", description: "Afffiche mon parcours scolaire." });
  }

  render(): string | JSX.Element {
    return (
      <section>
        {entries.map((entry) => (
          <div>
            <p>{"|\n|\n|\n"}</p>
            <p>{entry.title}</p>
            <p>{entry.cardTitle}</p>
            <p>{entry.cardSubtitle}</p>
            <p>{entry.cardDetailedText}</p>
          </div>
        ))}
      </section>
    );
  }
}
