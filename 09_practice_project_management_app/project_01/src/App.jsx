import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} />;

  if(projectsState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if(projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
