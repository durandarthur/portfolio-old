import { Command } from '../Command';

export default class SocialsCommand extends Command {
    constructor() {
        super({ name: 'socials', description: 'Liste de mes liens sociaux.' });
    }

    render(): string | JSX.Element {
        return (
            <ul>
                <li>
                    <a href='https://github.com/durandarthur' target='_blank' className='underline'>
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.linkedin.com/in/arthur-durand-0967741b9/'
                        target='_blank'
                        className='underline'
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        );
    }
}
