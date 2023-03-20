import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ fortune: getFortune() });
};

const fortunes: string[] = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];

function getFortune(): string {
  const randomIndex: number = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}
