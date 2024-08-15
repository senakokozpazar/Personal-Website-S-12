import { useLang } from "../contexts/LangContext";

export default function Profile() {
  const { data, loading, error } = useLang();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-custom-purple dark:bg-custom-dark-purple flex sm:flex-row flex-col justify-center items-center w-full sm:min-h-screen  overflow-hidden sm:p-10">
      <div className="flex flex-col justify-center sm:space-y-6 sm:w-1/3 w-1/2">
        <div className="max-w-md mx-auto sm:p-6 p-3">
          <div className="w-full flex items-start mb-4">
            <p className="sm:text-4xl text-2xl font-bold sm:mb-10  text-custom-green">
              {data?.profile?.title}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-white sm:text-xl text-lg">
              {data?.profile?.subTitle1}
            </h3>
          </div>

          {(Object.entries(data?.profile?.userInformation || {}) || []).map(
            ([key, value]) => (
              <div key={key} className="flex justify-between py-2">
                <span className="font-semibold text-custom-green mr-12 sm:text-base text-sm">
                  {key}
                </span>
                <span className="text-slate-100 ml-auto sm:text-base text-sm">
                  {value}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="sm:w-1/3 w-1/2 flex justify-center">
        <img
          src="/profile2.jpeg"
          alt="profile_img"
          className="w-[300px] sm:h-[290px]  h-[250px] object-cover rounded-md m-5"
        />
      </div>

      <div className="flex flex-col justify-center space-y-6 sm:w-1/3 w-1/2  p-6">
        <div className="mb-4">
          <h3 className="text-white sm:text-xl text-lg  mb-5">
            {data?.profile?.subTitle2}
          </h3>
          <p className="text-slate-100 sm:text-base text-sm">
            {data?.profile?.text}
          </p>
        </div>
      </div>
    </div>
  );
}
