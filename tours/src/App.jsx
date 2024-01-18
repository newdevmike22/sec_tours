import { useEffect, useState } from "react";
const url = "https://api.jsonbin.io/v3/b/65a8a9e4266cfc3fde7ac105";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url);
        const tours = await response.json();
        console.log(tours);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchTours();
    }, []);

    return (
      <div className="text-center">
        SEC Stadium Tours
      </div>
    )
  }
  
  export default App;