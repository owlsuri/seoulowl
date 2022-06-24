import Slider from "react-slick";
import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Img = styled.img`
  width: 550px;
  height: 450px;
`;
const PreImg = styled.img`
  width: 30px;
  height: 25px;
`;

export default function UsedItemImages(props: any) {
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <PreImg
            src={
              `${props.data?.fetchUseditem.images[i - 1 + 1]}`
                ? `${baseUrl}${props.data?.fetchUseditem?.images[i - 1 + 1]}`
                : "/images/noimages.jpg"
            }
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.data?.fetchUseditem.images
          ?.filter((el: string) => el)
          .map((el: string) => (
            <div key={el}>
              <Img
                src={
                  el.length !== 0 ? `${baseUrl}${el}` : "/images/noimages.jpg"
                }
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
