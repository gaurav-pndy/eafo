import { FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AwardsCTA = () => {
  const { t } = useTranslation();

  return (
    <div id="awards-cta" className="text-center">
      <span className="inline-flex items-center px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer">
        <FaPaperPlane className="mr-2" />
        {t('Awards.cta.button')}
      </span>
    </div>
  );
};

export default AwardsCTA;
