import styled from 'styled-components';
import SearchPage from './SearchPage';
import SearchRecent from './SearchRecent';
import SearchType from './SearchType';

const SectionSearch = () => {
  return (
    <SectionSearchStyle>
      <SearchType />
      <SearchPage />
      <SearchRecent />
    </SectionSearchStyle>
  );
};

export default SectionSearch;

const SectionSearchStyle = styled.div`
  min-height: calc(100vh - 80px);

  position: relative;
  width: 100%;
  z-index: 2;
  background: rgb(255, 255, 255);
  transition: transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s;

  @media (min-width: 744px) {
    min-width: 547px;
  }
  @media (min-width: 1128px) {
    width: 58vw;
  }
  @media (min-width: 1440px) {
    width: 840px;
  }
`;
