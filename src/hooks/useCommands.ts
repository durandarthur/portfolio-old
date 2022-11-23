import * as React from 'react';
import create from 'zustand';
import { Command } from '../lib/Command';
import { CommandEntry, CommandStatus } from '../lib/types';
import { commandNotFound, getCommandName, initBanner } from '../lib/utils';

interface CommandStore {
    commandMap: Map<string, Command>;
    setCommandMap(map: CommandStore['commandMap']): void;

    commandDescMap: Map<string, string>;
    setCommandDescMap(map: CommandStore['commandDescMap']): void;

    entries: CommandEntry[];
    setEntries(entries: CommandEntry[]): void;
}

const DEFAULT_ENTRIES: CommandEntry[] = [
    { output: initBanner({ command: '' }), command: undefined, status: CommandStatus.Init },
    { output: null, command: null },
];

const useCommandsStore = create<CommandStore>((set) => ({
    commandMap: new Map(),
    setCommandMap: (map) => set({ commandMap: map }),

    commandDescMap: new Map(),
    setCommandDescMap: (map) => set({ commandDescMap: map }),

    entries: DEFAULT_ENTRIES,
    setEntries: (entries) => set({ entries }),
}));

export function useCommands() {
    const state = useCommandsStore();
    const commandsArr = React.useMemo(
        () => Array.from(state.commandMap.keys()),
        [state.commandMap],
    );
    const commandsDescArr = React.useMemo(
        () => Array.from(state.commandDescMap.keys()),
        [state.commandDescMap],
    );

    function handleNewCommand(args: string[], idx: number) {
        const { commandName, commandDesc, commandArgs, isSudo } = getCommandName(args);
        const fullCommand = isSudo ? `sudo ${commandName}` : commandName;
        const commandFunctionOptions = { command: commandName };

        if (commandName === 'contact') {
            return (window.location.href = '/gui.html#contactForm');
        }

        if (commandName === 'clear') {
            // return state.setEntries([{ command: null, output: null, status: CommandStatus.Succeeded }]);
            return state.setEntries(DEFAULT_ENTRIES);
        }

        if (commandName === 'startx') {
            return (window.location.href = '/gui.html');
        }

        if (commandName.trim() === '') {
            return _addCommandToEntries(idx, {
                status: CommandStatus.Succeeded,
                command: undefined,
                output: null,
                args: commandArgs,
            });
        }

        const command = state.commandMap.get(commandName);
        if (!command) {
            _addCommandToEntries(idx, {
                status: CommandStatus.Failed,
                command: fullCommand,
                output: commandNotFound(commandFunctionOptions),
                args: commandArgs,
            });

            return;
        }

        const output = command.render({
            commands: commandsArr,
            command: commandName,
            commandDescArr: commandsDescArr,
        });
        _addCommandToEntries(idx, {
            status: CommandStatus.Succeeded,
            command: fullCommand,
            output,
            args: commandArgs,
        });
    }

    function _addCommandToEntries(idx: number, entry: CommandEntry) {
        const newEntries = [...state.entries];
        newEntries[idx] = entry;
        state.setEntries([...newEntries, { command: null, output: null }]);
    }

    return {
        state,
        commandsArr,
        handleNewCommand,
    };
}
