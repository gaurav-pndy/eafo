import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMicroscope,
  faDna,
  faVial,
  faXRay,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  graph: faChartLine,
  users: faUsers,
};

const CourseModuleCard = ({ title, items, icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 w-full">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={icons[icon]} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-600">
      {items.map((item, i) => (
        <li key={i}>
          <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default CourseModuleCard;
