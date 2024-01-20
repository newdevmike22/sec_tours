import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://api.jsonstorage.net/v1/json/db8fa9a7-d029-420a-9208-fd7d0993e278/2896fb3c-d8c8-41d6-a976-b0c6255a9a27";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
    };

    const fetchTours = async () => {
      setLoading(true)
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
      
    };
    useEffect(() => {
      fetchTours();
    }, []);

    if (loading) {
      return (
        <main className="w-[90vw] max-w-[620px] my-[5rem] mx-[auto]">
          <Loading />
        </main>
      );
    }

    if (tours.length === 0) {
        return (
          <main className="w-[90vw] max-w-[620px] my-[5rem] mx-[auto]">
            <div className="text-center">
              <h2 className="capitalize text-2xl font-semibold">no tours left</h2>
              <button 
                type="button" 
                className="mt-[2rem] text-white bg-[#0c11a6] py-[0.375rem] px-[0.75rem] rounded-lg hover:bg-[#57549e]" 
                onClick={fetchTours}
              >
                  refresh
              </button>
            </div>
          </main>      
        )
    }

    return (
      <main className="w-[90vw] max-w-[1120px] my-[5rem] mx-[auto]">
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    )
  }
  
  export default App;