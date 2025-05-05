import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  const tags = t('teams.tags', { returnObjects: true });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('team.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img className="rounded-xl shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0d3603c07b-31ddc30da7568040bd71.png" alt="Team" />
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">{t('teams.description')}</p>
            <div className="flex flex-wrap gap-4">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
