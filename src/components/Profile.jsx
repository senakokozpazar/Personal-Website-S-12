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
    <div className="bg-custom-purple dark:bg-custom-dark-purple flex justify-center items-center w-full min-h-screen overflow-hidden">
      
      <div className="flex flex-col justify-center space-y-6 w-1/3">
        <div className="max-w-md mx-auto p-6">
          <div className="w-full flex items-start mb-4">
            <p className="text-4xl font-bold text-custom-green">{data?.profile?.title}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-white text-xl">{data?.profile?.subTitle1}</h3>
          </div>

          {(
            Object.entries(data?.profile?.userInformation || {}) || []
          ).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2">
              <span className="font-semibold text-custom-green mr-12">
                {key}
              </span>
              <span className="text-slate-100 ml-auto">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 flex justify-center">
        <img src="/profile2.jpeg" alt="profile_img" className="w-[300px] h-[290px] object-cover rounded-md" />
      </div>

      <div className="flex flex-col justify-center space-y-6 w-1/3 p-6">
        <div className="mb-4">
          <h3 className="text-white text-xl mb-5">{data?.profile?.subTitle2}</h3>
          <p className="text-slate-100">
           {data?.profile?.text}
          </p>
        </div>
      </div>
    </div>
  );
}
