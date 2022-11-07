import { Command, CommandRenderOptions } from "../Command";

export default class HelpCommand extends Command {
  constructor() {
    super({ name: "help" });
  }

  render({ commands }: CommandRenderOptions): string | JSX.Element {
    return (
      <div>
        <div className="mt-3">
          <p className="underline">Commandes disponibles</p>

          <ul className="flex flex-col">
            {commands.map((command) => (
              <li key={command}>{command}</li>
            ))}
          </ul>
        </div>

        <p className="flex flex-col mt-5">
          <span>
            <kbd>[tab]</kbd>: compléter commande
          </span>
          <span>
            <kbd>[ctrl+l]</kbd>: nettoyer terminal
          </span>
          <span>
            <kbd>[arrow-up]</kbd>: commande utilisée précédemment
          </span>
          <span>
            <kbd>[arrow-down]</kbd>: prochaine commande utilisée
          </span>
        </p>
      </div>
    );
  }
}
