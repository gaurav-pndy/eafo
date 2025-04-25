import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faBan, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const icons = {
  "calendar-days": faCalendarDays,
  ban: faBan,
  "graduation-cap": faGraduationCap,
};

const TimelineItem = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={icons[icon]} className="text-blue-600 text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default TimelineItem;
