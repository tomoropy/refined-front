import axios from "axios";
import { FC } from "react";
import useSWR, { mutate } from "swr";

interface FortuneData {
  fortune: string;
}

const fetcher = async (url: string): Promise<FortuneData> => {
  const res = await axios.get(url);
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};

const Fortunes: FC = () => {
  const { data, error } = useSWR<FortuneData>("/api/fortunes", fetcher);

  const fortune = data?.fortune;
  const isLoading = !error && !data;

  const handleClick = () => {
    mutate("/api/fortunes");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-200 p-14 rounded-lg shadow-md">
        <h2 className="text-2xl mb-8 text-center">おみくじ</h2>
        {isLoading ? (
          <p>おみくじを引いています...</p>
        ) : (
          <>
            {fortune && <p className="text-4xl text-center">{fortune}</p>}
            {error && <p>おみくじの引き出しに失敗しました</p>}
            <button
              onClick={handleClick}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-10"
            >
              おみくじを引く
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Fortunes;
