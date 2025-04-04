import { useState, useEffect } from "react";
import SkipCard from "./components/SkipCard";

const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

function App() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setSkips(data))
      .catch((error) => console.error("Error fetching skips:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Skip Size</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {skips.map((skip) => (
          <SkipCard 
            key={skip.id} 
            skip={skip} 
            isSelected={selectedSkip === skip.id} 
            onSelect={() => setSelectedSkip(skip.id)} 
          />
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button className="bg-gray-700 px-6 py-2 rounded-lg">Back</button>
        <button className={`px-6 py-2 rounded-lg ${selectedSkip ? "bg-blue-500" : "bg-gray-500 cursor-not-allowed"}`} disabled={!selectedSkip}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
