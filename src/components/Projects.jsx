import { useLang } from "../contexts/LangContext";

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
    <div className="bg-custom-green flex flex-col items-center w-full min-h-screen overflow-hidden  dark:bg-custom-dark-green">
      <div className="w-full flex items-start mb-4">
        <p className="sm:text-4xl text-2xl p-10 font-bold text-custom-purple dark:text-custom-green">
          {data?.projects?.title}
        </p>
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
                className="absolute w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 ml-6">
              <h2 className="sm:text-2xl text-xl font-bold text-custom-purple dark:text-custom-blue mb-2">
                {project.title}
              </h2>
              <p className="text-black mb-4 dark:text-slate-100 sm:text-base text-sm">
                {project.text}
              </p>
              <div className="mb-4 flex space-x-2">
                {project.buttons.map((button) => (
                  <button
                    key={button.id}
                    className="bg-custom-purple dark:bg-custom-blue text-slate-100 px-4 py-2 rounded-full sm:text-base text-sm"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2">
                {project.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="text-black dark:text-custom-green underline sm:text-base text-sm"
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
