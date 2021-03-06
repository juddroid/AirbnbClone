import styled from 'styled-components';
import TitleMain from './TitleMain';
import TitleMore from './TitleMore';

const TypeCityTitle = ({ cityName }) => {
  return (
    <TypeCityTitleStyle>
      <TitleMain {...{ cityName }} />
      <TitleMore />
    </TypeCityTitleStyle>
  );
};

export default TypeCityTitle;

const TypeCityTitleStyle = styled.div`
  color: rgb(34, 34, 34);
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
