import { Command } from "../Command";
import { projects } from "../data";

export default class ProjectsCommand extends Command {
  constructor() {
    super({ name: "projects", description: "Afffiche mes projets terminés." });
  }

  render(): string | JSX.Element {
    return (
      <section>
        {projects.map((project) => (
            <a href={project.link} target="_blank" className="underline">{project.title + "\n"}</a>
        ))}
      </section>
    );
  }
}
