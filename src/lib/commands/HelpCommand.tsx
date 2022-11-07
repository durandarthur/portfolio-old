import { Command, CommandRenderOptions } from "../Command";

export default class HelpCommand extends Command {
  constructor() {
    super({ name: "help", description: "Liste les commandes disponibles." });
  }
  
  render({ commands, commandDescArr }: CommandRenderOptions): string | JSX.Element {
    const commandList = ["bio","gui","help","socials"];
    const descriptionList = ["Affiche ma biographie.","Change le site en interface graphique.","Liste les commandes disponibles.","Liste de mes liens sociaux."];
    return (
      <div>
        <div className="mt-3">
          <p className="underline">Commandes disponibles</p>

          <ul className="flex flex-col">
            {commandList.map((command, i) => (
              <li key={command}><span className="underline leading-loose">{command}</span>{"\n" + descriptionList[i] + "\n"}</li>
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
