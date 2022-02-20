import styled from "styled-components";

export const ChatColumn = styled.div``;

export const MessageListColumn = styled.div`
  overflow: auto;
  background-color: white;
  box-sizing: border-box;
  height: 475px;
`;

export const MessageLeft = styled.div`
  padding: 0.5rem;
  margin: 0.25rem;
  float: left;
  background: #f4f7f9;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 70%;
`;

export const MessageRight = styled.div`
  padding: 0.5rem;
  margin: 0.25rem;
  float: right;
  background: #a1daf1;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 60%;
`;

export const MessageListTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
`;
export const MessageForm = styled.form`
  max-width: 100%;
  padding: 20px;
  margin: 0;
  display: flex;
`;

export const Col9 = styled.div`
  width: 75%;
`;

export const Col3 = styled.div`
  width: 25%;
`;
export const Col4 = styled.div`
  width: 5%;
  min-width: 25px;
  margin-right: 5px;
  padding: 0;
`;

export const MessageInput = styled.input`
  display: block;
  width: 90%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 15px;
`;

export const MessageButton = styled.button`
  width: 100%;
  background-color: white;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
`;
