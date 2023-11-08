import styled from 'styled-components';
import { dispatch, useSelector } from '../store/store';
import { setPrimaryCSSVariable } from '../store/slices/pageSettingsSlice';
import { getParamsof } from '../services/queryParams';

const StyledDrawerContainer = styled.div`
  display: none;
`;

function SettingsDrawer() {
  const primaryColor = useSelector((state) => state.pageSettings.primaryColor);
  if (getParamsof('primary') && primaryColor !== getParamsof('primary')) {
    console.log('yes');
    document.documentElement.style.setProperty(
      '--color-primary',
      '#' + getParamsof('primary')
    );
    dispatch(
      setPrimaryCSSVariable({
        cssVal: getParamsof('primary')!,
      })
    );
  }

  return <StyledDrawerContainer>SettingsDrawer</StyledDrawerContainer>;
}

export default SettingsDrawer;
