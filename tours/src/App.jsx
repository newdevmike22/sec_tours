import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://api.jsonstorage.net/v1/json/db8fa9a7-d029-420a-9208-fd7d0993e278/88f262a7-4ea0-42c6-9d0e-500993bd1488";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

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

    return (
      <main className="w-[90vw] max-w-[1120px] my-[5rem] mx-[auto]">
        <Tours tours={tours} />
      </main>
    )
  }
  
  export default App;