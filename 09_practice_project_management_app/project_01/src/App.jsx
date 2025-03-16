import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      };
    });
  }

  let content;

  if(projectsState.selectedProject === null) {
    content = <NewProject />;
  } else if(projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
