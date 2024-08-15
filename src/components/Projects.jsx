import { useEffect } from 'react';
import { useLang } from '../contexts/LangContext';


const Projects = () => {

  const { data, loading, error } = useLang();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

const projects = data?.projects?.data;




  return (
    <div className="bg-custom-green flex flex-col items-center w-full min-h-screen overflow-hidden p-6 dark:bg-custom-dark-green">
      <div className="w-full flex items-start mb-4">
        <p className="text-4xl font-bold text-custom-purple dark:text-custom-green">{data?.projects?.title}</p>
      </div>

      <div className="w-full max-w-4xl ">
        {(projects || []).map((project) => (
          <div
            key={project.id}
            className="bg-slate-100 shadow-lg rounded-md p-6 mb-6 flex dark:bg-custom-dark-grey"
          >
           <div className="flex-shrink-0 w-1/3 relative m-0 ">
                <img
                 src={project.src}
                 alt={project.title}
                 className="absolute w-full h-full object-cover "
                 />
          </div>
            <div className="flex-1 ml-6">
              <h2 className="text-2xl font-bold text-custom-purple dark:text-custom-blue mb-2">{project.title}</h2>
              <p className="text-black mb-4 dark:text-slate-100">{project.text}</p>
              <div className="mb-4 flex space-x-2">
                {project.buttons.map(button => (
                  <button
                    key={button.id}
                    className="bg-custom-purple dark:bg-custom-blue text-slate-100 px-4 py-2 rounded-full"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2">
                {project.links.map(link => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="text-black dark:text-custom-green underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
