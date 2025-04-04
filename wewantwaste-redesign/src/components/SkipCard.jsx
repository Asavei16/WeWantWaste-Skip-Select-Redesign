import PropTypes from "prop-types";

function SkipCard({ skip, isSelected, onSelect }) {
  const { size, hire_period_days, price_before_vat, vat, allowed_on_road } = skip;
  const totalPrice = price_before_vat ? (price_before_vat * (1 + vat / 100)).toFixed(2) : "N/A";

  return (
    <div 
      className={`p-4 rounded-xl border ${isSelected ? "border-blue-500 bg-gray-800" : "border-gray-700"} transition cursor-pointer`}
      onClick={onSelect}
    >
      <h2 className="text-xl font-semibold">🗑 {size} Yard Skip</h2>
      <p className="text-gray-400">Hire Period: {hire_period_days} days</p>
      <p className="text-lg font-bold text-blue-400">£{totalPrice} total</p>
      <p className={`text-sm mt-2 ${allowed_on_road ? "text-green-400" : "text-red-400"}`}>
        {allowed_on_road ? "✅ Allowed on Road" : "❌ Private Property Only"}
      </p>
      <button className={`mt-4 w-full py-2 rounded-lg ${isSelected ? "bg-blue-500" : "bg-gray-700"}`}>
        {isSelected ? "Selected" : "Select This Skip"}
      </button>
    </div>
  );
}

SkipCard.propTypes = {
  skip: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SkipCard;
