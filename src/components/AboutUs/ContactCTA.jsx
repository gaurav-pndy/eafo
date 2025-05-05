import { useTranslation } from 'react-i18next';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white ">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('contact.subtitle')}</p>
          <button className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300">
            {t('contact.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
