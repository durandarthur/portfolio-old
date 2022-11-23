import { Command } from '../Command';
import { usedTechs } from '../data';

export default class TechsCommand extends Command {
    constructor() {
        super({ name: 'techs', description: "Listes les technologies que j'utilise." });
    }

    render(): string | JSX.Element {
        const techs = usedTechs.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase(); //toUpperCase to ignore case differences
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        return (
            <section>
                {techs.map((tech) => (
                    <a href={tech.link} target='blank' className='underline'>
                        {tech.name + '\n'}
                    </a>
                ))}
            </section>
        );
    }
}
