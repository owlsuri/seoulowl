import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IBoardWriteStyleProps } from "./boardWrite.types";
import { breakPoints } from "../../../../commons/styles/media";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const BoardWriteSection = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/wall.jpg);
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding-top: 200px;
  }
`;
export const BoardWriteTitleArticle = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  padding-bottom: 40px;
  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
  @media ${breakPoints.tablet} {
    font-size: 35px;
  }
`;
export const BoardWriteArticle = styled.div`
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 50px;
  @media ${breakPoints.mobile} {
    max-width: 370px;
    padding: 30px;
  }
  @media ${breakPoints.tablet} {
    max-width: 750px;
    padding: 30px;
  }
`;
export const WriterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const Label = styled.div`
  font-size: 16px;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 15px;
`;
export const WriterInfoInput = styled.input`
  width: 530px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  padding: 10px;
  @media ${breakPoints.mobile} {
    width: 320px;
  }
  @media ${breakPoints.tablet} {
    width: 330px;
  }
`;
export const BoardContents = styled.div``;
export const Block = styled.div`
  padding: 15px 0;
`;
export const ContentInput = styled.input`
  width: 1100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  padding: 10px;
  margin-top: 5px;
  @media ${breakPoints.mobile} {
    width: 330px;
  }
  @media ${breakPoints.tablet} {
    width: 680px;
  }
`;
export const RQuill = styled(ReactQuill)`
  .ql-editor {
    padding: 10px;
    min-height: 250px;
    line-height: 1.5;
  }
`;
export const ZipcodeInput = styled.input`
  height: 40px;
  width: 150px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  text-align: center;
`;
export const ZipcodeBtn = styled.button`
  margin-left: 10px;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  background-color: #213e6d;
  cursor: pointer;
`;
export const ImgBox = styled.div`
  display: flex;
`;
export const UploadWrapper = styled.div`
  margin-right: 30px;
  position: relative;
  width: 150px;
  height: 150px;

  div:last-of-type {
    position: absolute;
    top: 0;
    right: 10px;
  }

  &:last-of-type {
    div:last-of-type {
      display: none;
    }
  }
`;
export const DeleteBtn = styled.div`
  font-size: 22px;
  font-weight: 700;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
`;

export const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
export const SubmitBtn = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 10px;
  color: ${(props: IBoardWriteStyleProps) =>
    props.isActive ? "#FFFFFF" : "#000000"};
  background-color: ${(props) => (props.isActive ? "#213E6D" : "#E5E5E5")};
  font-size: 17px;
  cursor: pointer;
`;
export const Error = styled.div`
  font-size: 13px;
  color: red;
  padding-left: 10px;
`;
