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
  width: 80%;
  background-color: #151515;
  min-height: 100vh;
  padding: 15px;
  float: right;
`

export const LeftMenu = styled.div`
width: 20%;
min-height: 100vh;
padding-top: 20px;
padding-left: 35px;
background: #111111;
float: left;
`