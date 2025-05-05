import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-16 bg-white max-w-6xl mx-auto relative px-4">
      {/* Mobile (default) and Desktop (lg+) - overlapping layout */}
      <div className="hidden md:block lg:block relative h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden">
        {/* Video container */}
        <div className="absolute inset-0 z-0 rounded-xl overflow-hidden lg:ml-60">
          <video
            className="w-full h-full object-cover object-center"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        {/* Content box */}
        <div className="absolute top-1/2 left-0 w-full md:w-[55%] transform -translate-y-1/2 z-10 bg-white bg-opacity-90 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-xl shadow-xl mx-4 md:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">{t('mission.title')}</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4">
            {t('mission.paragraph1')}
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
            {t('mission.paragraph2')}
          </p>
        </div>
      </div>

      {/* Medium devices (md) - stacked layout */}
      <div className="md:block lg:hidden">
        {/* Video on top */}
        <div className="h-[300px] md:h-[350px] rounded-xl overflow-hidden mb-6">
            <div className=''>
          <video
            className="w-full h-full object-cover object-center"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          </div>
        </div>
        
        {/* Content below */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-900">{t('mission.title')}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            {t('mission.paragraph1')}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-2">
            {t('mission.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;