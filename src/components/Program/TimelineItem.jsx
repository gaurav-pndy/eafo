import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faBan,
  faGraduationCap,
  faFlag,
  faCalendar,
  faTrophy,
  faLanguage,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FaCalendar, FaFlag, FaLanguage, FaTrophy } from "react-icons/fa";

const icons = {
  flag: faFlag,
  calendar: faCalendar,
  trophy: faTrophy,
  translate: faLanguage,
};

const icons2 = [
  <FaFlag className="text-xl text-green-700" />,
  <FaCalendar className="text-xl text-blue-700" />,
  <FaTrophy className="text-xl text-red-700" />,
  <FaLanguage className="text-3xl text-yellow-700" />,
];

const TimelineItem = ({ title, description, color, idx, points }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
    <div className="flex  gap-4">
      {/* <FontAwesomeIcon
          icon={icons[icon]}
          className="text-blue-600 text-2xl"
        /> */}

      {icons2.map(
        (icon, index) =>
          index === idx && (
            <div
              key={index}
              className={`min-w-16  h-16 bg-${color}-100 rounded-full flex items-center justify-center`}
            >
              {icon}
            </div>
          )
      )}

      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        {points && (
          <ul className="space-y-2 mt-2 text-gray-600">
            {points.map((item, i) => (
              <li key={i}>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mr-2"
                />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

export default TimelineItem;
