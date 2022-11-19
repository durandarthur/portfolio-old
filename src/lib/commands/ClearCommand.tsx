import { Command } from "../Command";

export default class ClearCommand extends Command {
  constructor() {
    super({ name: "clear", description: "Nettoie le terminal." });
  }

  render(): string | JSX.Element {
    return (
      <p>developing command...</p>
    );
  }
}