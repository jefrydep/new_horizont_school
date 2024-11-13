 

// Datos de ejemplo (puedes poner el array completo aquí)

import { achievements } from "@/app/data/data";
import AchievementCard from "./AchievementCard";

 
const AchievementList: React.FC = () => {
  return (
    <div className="sm:grid  sm:grid-cols-3 flex flex-col  container m-auto  items-center space-y-6">
      {achievements.map((data, index) => (
        <AchievementCard
          key={index}
          year={data.año}
          level={data.nivel}
          achievements={data.logros}
        />
      ))}
    </div>
  );
};

export default AchievementList;
