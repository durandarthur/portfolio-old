import { Command } from "../Command";

export default class GuiCommand extends Command {
  constructor() {
    super({ name: "startx", description: "Change le site en interface graphique." });
  }

  render(): string | JSX.Element {
    return (
      <p>developing command...</p>
    );
  }
}