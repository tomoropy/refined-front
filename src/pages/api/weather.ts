import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cityId = req.query.cityId;

  try {
    const response = await axios.get(
      `https://weather.tsukumijima.net/api/forecast/city/${cityId}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
}
