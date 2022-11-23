import { Command } from '../Command';
import { projects } from '../data';

export default class ProjectsCommand extends Command {
    constructor() {
        super({ name: 'projects', description: 'Affiche mes projets terminés.' });
    }

    render(): string | JSX.Element {
        return (
            <section>
                {projects.map((project, i) => (
                    <a
                        href={project.link}
                        target='_blank'
                        rel='noreferrer'
                        className='underline'
                        key={i}
                    >
                        {project.title + '\n'}
                    </a>
                ))}
            </section>
        );
    }
}
