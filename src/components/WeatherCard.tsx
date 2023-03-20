import Image from "next/image";
import React from "react";

interface WeatherCardProps {
  date: string;
  dateLabel: string;
  wether: string;
  minTemperature: number;
  maxTemperature: number;
  url: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  date,
  dateLabel,
  wether,
  minTemperature,
  maxTemperature,
  url,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-2 flex justify-between">
      <div>
        <h3 className="text-lg font-bold">{dateLabel}</h3>
        <h3 className="text-md font-bold">{date}</h3>
        <p className="text-gray-500">{wether}</p>
        {minTemperature && maxTemperature && (
          <p className="text-gray-500">
            {minTemperature + "℃" + " ~ " + maxTemperature + "℃"}
          </p>
        )}
      </div>

      <div>
        <Image src={url} alt="wether image" width={100} height={100} />
      </div>
    </div>
  );
};

export default WeatherCard;
