import { Command } from "../Command";

export default class ContactCommand extends Command {
  constructor() {
    super({ name: "contact", description: "Envoie vers un formulaire de contact." });
  }

  render(): string | JSX.Element {
    return (
      <p>developing command...</p>
    );
  }
}