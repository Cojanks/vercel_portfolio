import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../services/apiSkills';
import { listenerCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';

function Skills() {
  const {
    isLoading,
    data: skills,
    error,
  } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills,
  });

  return (
    <div>
      <ul>
        {skills &&
          skills.map((skill) => {
            return <li>{skill.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Skills;
