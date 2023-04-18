import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempratureAndDeatils from './components/TempratureAndDeatils';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/WeatherService';
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setquery] = useState({q:'london'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState();

  useEffect(() => {
  const fetchWeather=  async ()=>{
     await getFormattedWeatherData({...query, ...units}).then((data)=>{ setWeather(data)});
  }
    fetchWeather();

  }, [query,units])
  

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };


  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>   {/*  */}
     <TopButtons setquery={setquery}/>
     <Inputs setquery={setquery} units={units} setUnits={setUnits}/>
     {weather && (
      <div>
       <TimeAndLocation weather={weather}/>
       <TempratureAndDeatils weather={weather}/>
       <Forcast title={'hourly forecast'}  items= {weather.hourly}/>
       <Forcast title={'daily forecast'}  items= {weather.daily}/>
       </div>

     )}
    <ToastContainer />

    </div>
  );
}

export default App;
