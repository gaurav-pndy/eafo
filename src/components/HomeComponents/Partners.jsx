import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const partners = [
  {
    src: "/logos/EAFO.png",
  },
  {
    src: "/logos/EAFO.jpg",
  },
  {
    src: "/logos/ECRC.png",
  },
  {
    src: "/logos/EACF.png",
  },
  {
    src: "/logos/EASHNO.png",
  },
  {
    src: "/logos/FIRMST.png",
  },
  {
    src: "/logos/SKBiomed.png",
  },
  {
    src: "/logos/SK.png",
  },
  {
    src: "/logos/HD.png",
  },
  {
    src: "/logos/Pathologica.png",
  },
  {
    src: "/logos/SPLAT.png",
  },
  {
    src: "/logos/Garant.png",
  },
  {
    src: "/logos/Mark.png",
  },
  {
    src: "/logos/Здравствуй!.jpg",
  },
  {
    src: "/logos/pemecno.jpg",
  },
  {
    src: "/logos/Pasovit.png",
  },

  // {
  //   src: "/logos/MAHO.jpg",
  // },

  // {
  //   src: "/logos/Oncology.png",
  // },

  // {
  //   src: "/logos/Анастасия.jpg",
  // },
];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="w-full  lg:mt-5 py-12 bg-white "
    >
      <div className="container mx-auto  ">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {t("ourPartners")}
        </h2>

        <div className="">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {partners.map((partner, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center justify-center mx-2 md:mx-8 w-auto px-4 py-2 max-w-80"
              >
                <img
                  src={partner.src}
                  alt={partner.src}
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
