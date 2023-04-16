import styled from "styled-components";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Main>
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
