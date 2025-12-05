import { pricingPlans } from "../../data/pricingData";
import PricingCard from "../ui/PricingCard";

const PricingSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-400 flex justify-center items-center space-x-2">
        <p>Can't find your plan! Want to setup a tailor-plan for only you? </p>
        <a href="/contact" className="text-yellow-400 underline"> Contact Us</a>
      </div>
    </div>
  );
};

export default PricingSection;
