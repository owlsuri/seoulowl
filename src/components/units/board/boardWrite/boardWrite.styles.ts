import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const BoardWriteSection = styled.div`
  width: 100%;
  padding: 150px;
  background-image: url(/backgroundImages/night.jpg);
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BoardWriteTitleArticle = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  padding-bottom: 40px;
`;
export const BoardWriteArticle = styled.div`
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 50px;
`;
export const WriterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
export const Label = styled.div`
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
  font-size: 17px;
`;
