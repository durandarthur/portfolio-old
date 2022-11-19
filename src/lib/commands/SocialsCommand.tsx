import { Command } from "../Command";

export default class SocialsCommand extends Command {
  constructor() {
    super({ name: "socials", description: "Liste de mes liens sociaux." });
  }

  render(): string | JSX.Element {
    return (
      <ul>
        <li><a onMouseDown={() => window.open("https://github.com/durandarthur","_blank")} href="https://github.com/durandarthur" target="_blank" style={{textDecoration:"underline"}}>GitHub</a></li>
        <li><a onMouseDown={() => window.open("https://www.linkedin.com/in/arthur-durand-0967741b9/","_blank")} href="https://www.linkedin.com/in/arthur-durand-0967741b9/" target="_blank" style={{textDecoration:"underline"}}>LinkedIn</a></li>
      </ul>
    );
  }
}
