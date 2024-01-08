import { Map } from "./components/Map";
import { useJsApiLoader } from "@react-google-maps/api";

import { Header } from "./components/Header/Header";
import { ApartmentRent } from "./components/Apartments/ApartmentRent";
import { Form } from "./components/Form/Form";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 49.444433,
  lng: 32.059767,
};

const libraries = ["places"];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <div className="wrapper">
      <Header />
      <div className="container__main">
        {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
        <ApartmentRent />
      </div>
      <Form />
    </div>
  );
}

export default App;
