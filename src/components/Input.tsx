import * as React from 'react';
import { useInput } from '../hooks/useInput';
import { classNames } from '../lib/utils';
import { CommandEntry, CommandStatus } from '../lib/types';

interface Props {
    entry: CommandEntry | null;
    handleNewCommand(args: string[]): void;
}

export function Input({ entry, handleNewCommand }: Props) {
    const [password, setPassword] = React.useState('');

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const passwordRef = React.useRef<HTMLInputElement | null>(null);

    const input = useInput({
        entry,
        inputRef,
        passwordRef,
        handleNewCommand,
    });

    const arrowTextColor = entry
        ? entry.status === CommandStatus.Failed
            ? 'text-red-500'
            : 'text-green-500'
        : 'text-gray-100';

    React.useEffect(() => {
        input.handleInputAreaClick();
    }, [entry]);

    function handlePasswordKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            input.handleInputKeydown(event, password);
        }
    }

    return (
        <div
            onClick={input.handleInputAreaClick}
            className={classNames('w-full p-3', input.state.askForPassword ? 'h-16' : 'h-10')}
        >
            <div className='flex items-center h-4'>
                <span className={`mr-2 ${arrowTextColor}`}>{'>'}</span>
                <span className='mr-2'>$</span>
                <input
                    spellCheck='false'
                    type='text'
                    autoFocus
                    disabled={input.state.askForPassword || !!entry?.command}
                    ref={inputRef}
                    className={classNames(
                        'p-0 bg-transparent outline-none focus:border-transparent focus:ring-0',
                        input.state.currentCommand
                            ? input.command.isValidCommand
                                ? 'text-green-500'
                                : 'text-red-500'
                            : 'text-slate-300',
                    )}
                    value={input.state.currentCommand}
                    onChange={(ev) =>
                        input.state.setCurrentCommand(ev.currentTarget.value.toLowerCase())
                    }
                    onKeyDown={(ev) => input.handleInputKeydown(ev, password)}
                    size={input.state.currentCommand.length}
                />
            </div>

            {input.state.askForPassword ? (
                <div className='mt-1 block ml-10'>
                    <span>[sudo] password for arthurdurand:</span>
                    <input
                        ref={passwordRef}
                        type='password'
                        className='ml-2 bg-transparent outline-none'
                        autoComplete='off'
                        aria-autocomplete='none'
                        onKeyDown={handlePasswordKeyDown}
                        value={password}
                        onChange={(ev) => setPassword(ev.currentTarget.value)}
                    />
                </div>
            ) : null}
        </div>
    );
}
