import userInfo from '../mocks/userInfo';
import { useEffect } from 'react';
import useAxios, { REQ_TYPES } from '../hooks/useAxios';

export default function Profile() {

    const [getUserInfo, user, loading, error ] = useAxios([]);

    useEffect(()=>{
      getUserInfo({reqType: REQ_TYPES.POST, endpoint:'', payload: userInfo });
    }, []);

  

  return (
    <div className="bg-custom-purple dark:bg-custom-dark-purple flex justify-center items-center w-full min-h-screen overflow-hidden">
      
      <div className="flex flex-col justify-center space-y-6 w-1/3">
        <div className="max-w-md mx-auto p-6">
          <div className="w-full flex items-start mb-4">
            <p className="text-4xl font-bold text-custom-green">Profile</p>
          </div>

          <div className="mb-4">
            <h3 className="text-white text-xl">Basic Information</h3>
          </div>

          {user && Object.entries(userInfo).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2">
              <span className="font-semibold text-custom-green">{key}</span>
              <span className="text-slate-100">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 flex justify-center">
        <img src="/image 2.png" alt="profile_img" className="w-[300px] h-[290px] object-cover rounded-md" />
      </div>

      <div className="flex flex-col justify-center space-y-6 w-1/3 p-6">
        <div className="mb-4">
          <h3 className="text-white text-xl">About Me</h3>
          <p className="text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam tempora ipsum non amet, ea repudiandae animi incidunt consequatur vel ex nam in neque alias accusamus, libero laborum maxime quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
}
