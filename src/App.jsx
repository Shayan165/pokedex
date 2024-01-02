import { useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let accumulatedData = [];
      for (let i = 1; i <= 25; i++) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          accumulatedData.push(response.data);
        } catch (error) {
          console.error(`Error fetching data for Pokemon ${i}:`, error);
        }
      }

      setDetails(accumulatedData);
    };

    fetchData();
  }, []);

  return (
    <>
    <h1>POKEDEX</h1>
      <div className="card-container">
        
        {details.length === 0 ? (
          <iframe style={{position:"absolute",top:"50%",transform:"translateY(-50%)"}} src="https://lottie.host/embed/fab0b647-f200-46d6-bd6c-b3f5916aa169/sxOkroaI8p.json"></iframe>
        ) : (
          details &&
          details.map((detail) => (
            <div className="card-item">
              <Card key={Math.random()} details={detail} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
