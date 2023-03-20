import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import WeatherCard from "../components/WeatherCard";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface WeatherData {
  date: string;
  dateLabel: string;
  telop: string;
  temperature: {
    min: {
      celsius: number;
    };
    max: {
      celsius: number;
    };
  };
  image: {
    url: string;
  };
}

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/weather?cityId=130010", fetcher); // 130010 is the cityId for Tokyo
  const weatherData = data?.forecasts;

  if (error) {
    return <div>Error fetching weather data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container w-1/2 mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-center">京都の天気予報</h1>
      <div className="grid gap-4">
        {weatherData.map((weather: WeatherData) => (
          <WeatherCard
            key={weather.dateLabel}
            date={weather.date}
            dateLabel={weather.dateLabel}
            wether={weather.telop}
            minTemperature={weather.temperature.min.celsius}
            maxTemperature={weather.temperature.max.celsius}
            url={weather.image.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
