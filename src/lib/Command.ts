interface CommandOptions {
  name: string;
  description: string;
}

const commandMap = new Map<string, Command>();
export const commandDescMap = new Map<string, string>();

export interface CommandRenderOptions {
  commands: string[];
  command: string;
  commandDescArr: string[];
}

export abstract class Command {
  options: CommandOptions;

  constructor(options: CommandOptions) {
    this.options = options;
  }

  abstract render(renderOptions: CommandRenderOptions): JSX.Element | string;
}

export async function loadCommands() {
  const commands = await Promise.all([
    import("./commands/HelpCommand"),
    import("./commands/BioCommand"),
    import("./commands/SocialsCommand"),
    import("./commands/GuiCommand"),
    import("./commands/ClearCommand"),
    import("./commands/ContactCommand"),
    import("./commands/ProjectsCommand"),
    import("./commands/TimelineCommand"),
    import("./commands/TechsCommand")
  ]);

  for (const file of commands) {
    const command = new file.default();
    commandMap.set(command.options.name, command);
    commandDescMap.set(command.options.name, command.options.description);
  }

  return {commandMap, commandDescMap};
}
