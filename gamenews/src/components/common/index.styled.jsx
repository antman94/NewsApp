import styled from 'styled-components';
import { 
  Typography
} from '@material-ui/core';

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100%;
`
export const GeneralWhiteText = styled(Typography)`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Lato';
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  background-color: #151515;
  padding: 15px;
  margin: auto;
`