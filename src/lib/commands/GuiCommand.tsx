import { Command } from "../Command";

export default class GuiCommand extends Command {
  constructor() {
    super({ name: "startx", description: "Passe vers le site portfolio complet." });
  }

  render(): string | JSX.Element {
    return (
      <p>developing command...</p>
    );
  }
}