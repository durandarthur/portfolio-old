import { Command } from '../Command';
import { entries } from '../data';

export default class TimelineCommand extends Command {
    constructor() {
        super({ name: 'timeline', description: 'Affiche mon parcours scolaire.' });
    }

    render(): string | JSX.Element {
        return (
            <section>
                {entries.map((entry, i) => (
                    <div key={i}>
                        <p>{'|\n|\n|\n'}</p>
                        <p>{entry.title}</p>
                        <p>{entry.cardTitle}</p>
                        <p>{entry.cardSubtitle}</p>
                        <p>{entry.cardDetailedText}</p>
                    </div>
                ))}
            </section>
        );
    }
}
