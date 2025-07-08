import diseases from '../assets/disease.json';
import '../components/ButtonList.css';

console.log('Imported diseases:', diseases);

const ButtonList: React.FC = () => {
  const diseaseList = Array.isArray(diseases) ? diseases : [diseases];

  if (!diseaseList || !diseaseList.length || !diseaseList[0]?.disease) {
    return (
      <div className="mb-4 text-red-500">
        No diseases found or data is invalid.
      </div>
    );
  }

  const diseaseMap: {
    [disease: string]: {
      [location: string]: any[];
    };
  } = {};

  diseaseList.forEach(d => {
    if (!diseaseMap[d.disease]) diseaseMap[d.disease] = {};
    if (!diseaseMap[d.disease][d.location]) diseaseMap[d.disease][d.location] = [];
    diseaseMap[d.disease][d.location] = d.history;
  });

  return (
    <div className="flex flex-wrap gap-2 mb-4 max-w-full" style={{maxWidth: '700px'}}>
      {Object.entries(diseaseMap).map(([disease, locations]) => (
        <button
          key={disease}
          className="px-4 py-2 text-white rounded hover:bg-blue-700 buttonListComponent whitespace-nowrap"
          onClick={() =>
            console.log({
              disease,
              location: locations
            })
          }
        >
          {disease}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;