import { commandDescMap } from './Command';

export function getCommandName(args: string[]) {
    const [_commandName, _commandDesc, ...rest] = args;

    const isSudo = _commandName === 'sudo' && rest.length >= 1;
    const commandName = isSudo ? rest[0] : _commandName;
    const commandDesc = commandDescMap.get(commandName);
    const commandArgs = isSudo ? rest.slice(1, rest.length) : rest;

    return { isSudo, commandArgs, commandName, commandDesc };
}

export function classNames(...classNames: unknown[]) {
    return classNames.filter(Boolean).join(' ');
}

export interface CommandOutputOptions {
    command: string;
}

export type CommandOutputFunc = (options: CommandOutputOptions) => JSX.Element | string;

export const initBanner: CommandOutputFunc = () => (
    <p className='my-3 -ml-9'>
        <span className='block'>
            {`
       d8888         888    888                            8888888b.  888     888 8888888b.         d8888 888b    888 8888888b.  
       d88888         888    888                            888  "Y88b 888     888 888   Y88b       d88888 8888b   888 888  "Y88b 
      d88P888         888    888                            888    888 888     888 888    888      d88P888 88888b  888 888    888 
     d88P 888 888d888 888888 88888b.  888  888 888d888      888    888 888     888 888   d88P     d88P 888 888Y88b 888 888    888 
    d88P  888 888P"   888    888 "88b 888  888 888P"        888    888 888     888 8888888P"     d88P  888 888 Y88b888 888    888 
   d88P   888 888     888    888  888 888  888 888          888    888 888     888 888 T88b     d88P   888 888  Y88888 888    888 
  d8888888888 888     Y88b.  888  888 Y88b 888 888          888  .d88P Y88b. .d88P 888  T88b   d8888888888 888   Y8888 888  .d88P 
 d88P     888 888      "Y888 888  888  "Y88888 888          8888888P"   "Y88888P"  888   T88b d88P     888 888    Y888 8888888P"                                                                                                                                  
                                                                                                                                  `}
        </span>
        <span className='block mt-3'>
            {"Bienvenue! Ecrivez 'help' pour voir la liste des commandes."}
        </span>
    </p>
);

export const commandNotFound: CommandOutputFunc = ({ command }) => (
    <p>{`zsh: commande introuvable: ${command}. Essayez une commande différente.`}</p>
);
