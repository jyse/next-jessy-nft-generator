import styled from "styled-components";
import Header from "../components/Header";
import Body from "../components/Body";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Main>
      <h1>What's up</h1>
      <Header />
      <Body>{children}</Body>
    </Main>
  );
};

export default DefaultLayout;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  color: white;
  background-color: teal;
`;
