import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconCard = ({ id, icon, title, text }) => {
  return (
    <div id={id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-center mb-4 text-blue-900">
          <FontAwesomeIcon icon={icon} className="text-3xl mr-3" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{text}</p>
      </div>
    </div>
  );
};

export default IconCard;