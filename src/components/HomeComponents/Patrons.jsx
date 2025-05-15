import React from "react";
import { useTranslation } from "react-i18next";

const Patrons = () => {
  const { t } = useTranslation();
  // Doctor data
  const doctors = [
    {
      name: t("patrons.patron1.name"),
      details: t("patrons.patron1.details"),
      location: t("patrons.patron1.location"),
      imageUrl: "/doctors/image1.avif",
    },
    {
      name: t("patrons.patron2.name"),
      details: t("patrons.patron2.details"),
      location: t("patrons.patron2.location"),
      imageUrl: "/doctors/image2.avif",
    },
    {
      name: t("patrons.patron3.name"),
      details: t("patrons.patron3.details"),
      location: t("patrons.patron3.location"),
      imageUrl: "/doctors/image3.avif",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 xl:px-0">
      <div className="  mb-10">
        <h2 className="text-4xl font-bold ">Под патронажем:</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[26rem]"
          >
            {/* Doctor Image */}
            <img
              src={doctor.imageUrl}
              alt={`Dr. ${doctor.name}`}
              className="w-full h-full object-cover "
            />

            {/* Info Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 py-3 shadow-md">
              <h3 className="text-lg font-bold text-gray-800 ">
                {doctor.name}
              </h3>
              <p className=" text-gray-600">{doctor.details}</p>
              <p className="text-xs text-gray-600">{doctor.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Course Cards - Similar to the example image */}
    </div>
  );
};

export default Patrons;
