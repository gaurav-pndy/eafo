import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

const icons = {
  language: faLanguage,
  "chalkboard-user": faChalkboardUser,
};

const AdditionalInfoCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex items-center gap-4">
      <FontAwesomeIcon icon={icons[icon]} className="text-2xl text-blue-600" />
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default AdditionalInfoCard;
