import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AnimatedStat = ({ value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const number = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, ""); // like "+" or any symbol

  return (
    <p ref={ref} className="text-4xl font-bold text-[#1e3a8f]">
      {inView ? <CountUp end={number} suffix={suffix} duration={2} /> : "0"}
    </p>
  );
};

export default AnimatedStat;
