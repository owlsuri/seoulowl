import { useEffect, useState } from "react";
import axios from "axios";
import PublicBikeUI from "./publicBike.presenter";

export default function PublicBike() {
  const [station, setStation] = useState<string[]>([]);
  const [bikeCnt, setBikeCnt] = useState<string[]>([]);

  useEffect(() => {
    const aaa = async () => {
      const result: any = await axios.get(
        "http://spartacodingclub.shop/sparta_api/seoulbike"
      );
      const kk = result.data.getStationList.row;
      kk.map(
        (el: any) => (
          setStation((prev) => [...prev, el.stationName]),
          setBikeCnt((prev) => [...prev, el.parkingBikeTotCnt])
        )
      );
      console.log(result);
    };
    aaa();
  }, []);

  return <PublicBikeUI station={station} bikeCnt={bikeCnt} />;
}
