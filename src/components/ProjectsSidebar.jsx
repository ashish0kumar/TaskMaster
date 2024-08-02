import Button from "./Button";
import logo from "../assets/no-projects.png"

export default function ProjectSidebar({ onStartAddProject, onSelectProject, selectedProjectId, projects }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <div className="flex align-middle gap-3">
                <img src={logo} alt="logo" className="w-6 h-6 mt-1" />
                <h2 className="mb-8 font-bold md:text-xl text-stone-200">TaskMaster</h2>
            </div>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-stone-800 text-stone-200";
                    } else {
                        cssClasses += " text-stone-400";
                    }

                    return (
                        <li key={project.id}>
                            <button
                                className={cssClasses}
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}