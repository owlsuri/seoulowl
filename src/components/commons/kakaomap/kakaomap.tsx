import styled from "@emotion/styled";
import { useEffect } from "react";
import { breakPoints } from "../../../commons/styles/media";

const Map = styled.div`
  width: 1100px;
  height: 548px;
  @media ${breakPoints.mobile} {
    width: 320px;
    height: 250px;
  }
  @media ${breakPoints.tablet} {
    width: 720px;
    height: 450px;
  }
`;

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMapPage(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2354913af21df03ad4d0ed912052c38&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.address || props.data?.fetchUseditem.useditemAddress.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              // 마커 이미지의 이미지 주소입니다
              const imageSrc = "/images/owllocation.png";

              // 마커 이미지의 이미지 크기 입니다
              const imageSize = new window.kakao.maps.Size(50, 50);

              // 마커 이미지를 생성합니다
              const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize
              );

              // 마커를 생성합니다
              const marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: coords, // 마커를 표시할 위치
                image: markerImage, // 마커 이미지
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="padding:6px 0;background-color:#213e6d;"><div style="width:250px;text-align:center;font-size:17px;font-weight:600;color:#ffe004;">거래장소</div><div style="text-align:center;font-size=15px;color:#FFFFFF">${
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress.address
                }</div><div style="color:white;text-align:center">${
                  props.data?.fetchUseditem.useditemAddress.addressDetail || ""
                }</div></div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data?.fetchUseditem.useditemAddress?.address, props.address]);

  return (
    <div>
      <Map id="map"></Map>
    </div>
  );
}
