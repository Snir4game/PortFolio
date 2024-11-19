import { BarChart2 } from 'lucide-react';
import SkillLevel from './SkillLevel'
import React from 'react';
import './SkillSection.css';

const SkillSection = () =>{
    const skills = [
        {name:'JavaScript',level:85},
        {name:'HTML',level:90},
        {name:'CSS',level:85 },
        {name:'React',level:80},
        {name:'React-Native',level:100},
        {name:'FireBase',level:95},
        {name:'BootStrap',level:75},
        {name:'MongoDB',level:70},
    ];


return(
<div className="container mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex align-items-baseline">
            <BarChart2 className="BarChart" />
            <h2 className="Title-SKills">Technical Skills</h2>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full table-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 p-4">
                        SKill
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 p-4">
                        Proficiency
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 m-4">
            {skills.map((skill) => (
              <tr key={skill.name}
              className='hover:bg-gray-50 transition-colors'
              >
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">
                    {skill.name}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <SkillLevel level={skill.level} />
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
)
}
export default SkillSection;