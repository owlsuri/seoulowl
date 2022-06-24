import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const MarketWrite = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/wall.jpg);
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MarketWriteTitleSection = styled.div`
  font-size: 40px;
  color: #ffffff;
  font-weight: 600;
  padding-bottom: 40px;
`;
export const MarketWriteSection = styled.div`
  max-width: 1200px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 50px;
`;
export const MarketWriteInputArticle = styled.div`
  padding: 15px 0;
`;
export const Label = styled.div`
  font-size: 16px;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 15px;
`;
export const Input = styled.input`
  width: 1100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  padding: 10px;
  margin-top: 5px;
`;
export const RQuill = styled(ReactQuill)`
  .ql-editor {
    padding: 10px;
    min-height: 250px;
    line-height: 1.5;
  }
`;
export const Tags = styled.div`
  border: none;
  width: 1000px;
  height: 15px;
  font-size: 10px;
  color: #a6a6a6;
  display: flex;
  align-items: center;
  padding: 15px 0 0 15px;
`;
export const TagPreview = styled.div`
  font-size: 14px;
  padding: 0 10px;
`;
export const MapBox = styled.div`
  padding-top: 20px;
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
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#000000")};
  background-color: ${(props) => (props.isActive ? "#213E6D" : "#E5E5E5")};
  font-size: 17px;
  cursor: pointer;
`;
export const Error = styled.div`
  font-size: 13px;
  color: red;
  padding-left: 10px;
`;
