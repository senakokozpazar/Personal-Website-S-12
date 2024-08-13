import { useEffect } from 'react';
import skillCardData from '../mocks/skill_card_data';
import useAxios, { REQ_TYPES } from '../hooks/useAxios';

export default function Skills() {
  const [getSkills, skills, loading, error ] = useAxios([]);

  useEffect(()=>{
    getSkills({reqType: REQ_TYPES.POST, endpoint:'', payload: skillCardData });
  }, []);
 

  return (
    <div className="flex justify-start items-left m-20">
      <div className="mb-4 flex-grow text-left">
        <p className="text-4xl font-bold text-custom-purple">Skills</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 flex-grow">
        {skills && skills.map(skill => (
          <div key={skill.id} className="flex items-center space-x-4 p-4">
            <img src={skill.src} alt={skill.alt} className="w-24 h-24" />
            <p className="text-lg font-medium">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
