import { useLang } from "../contexts/LangContext";

export default function Skills() {
  const { data, loading, error } = useLang();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-start items-left m-0 dark:bg-custom-dark-grey h-auto w-full">
      <div className="sm:m-20 m:10 p-10 flex justify-between sm:space-x-80 space-x-36">
        <div className="mb-4 flex-grow text-left">
          <p className="sm:text-4xl text-2xl font-bold text-custom-purple dark:text-custom-green">
            {data?.skills?.title}
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 sm:gap-x-20 gap-x-5">
          {data?.skills &&
            (data?.skills?.data || []).map((skill) => (
              <div
                key={skill.id}
                className="flex items-center space-x-4 sm:p-4 p-2"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="sm:w-24 sm:h-24 w-10 h-10"
                />
                <p className="sm:text-lg text-md font-medium dark:text-slate-100">
                  {skill.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
