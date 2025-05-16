import { useTranslation } from "react-i18next";
import PricingCard from "./PricingCard";
import { useState } from "react";
import { TableModal } from "./TableModal";
import PreRegisterForm from "../PreRegisterForm";

const PricingOptions = () => {
  const { t } = useTranslation();
  const cards = t("pricingOptions.cards", { returnObjects: true });
  const [showForm, setShowForm] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [selectedTableIndex, setSelectedTableIndex] = useState(0);

  const handleOpenModal = (index) => {
    setSelectedTableIndex(index);
    setOpenModal(true);
    console.log("Selected Table Index:", selectedTableIndex);
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("pricingOptions.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <PricingCard
              key={index}
              index={index}
              onOpenModal={handleOpenModal}
              setShowForm={setShowForm}
              cards={cards}
              {...card}
            />
          ))}

          <TableModal
            isOpen={openModal && !showForm}
            onClose={handleCloseModal}
            tableList={cards.filter((card) => card.tableData)}
            initialIndex={selectedTableIndex}
            setShowForm={setShowForm}
          />

          {showForm && (
            <PreRegisterForm
              courseId="67fb8bc722a71bd3d19d580d"
              onClose={() => setShowForm(false)}
            />
          )}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/pricing.pdf"
            download
            className="w-fit bg-blue-800 text-white py-3 px-8 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300 font-semibold mx-auto mt-auto"
          >
            {t("pricingOptions.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingOptions;
