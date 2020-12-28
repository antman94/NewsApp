import styled from 'styled-components';
import { 
  Typography
} from '@material-ui/core';

export const AppContainer = styled.div`
  width: 80%;
  min-height: 100%;
`
export const GeneralWhiteText = styled(Typography)`
  color: #FFFFFF;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 85%;
  padding: 15px;
  float: right;
`

export const LeftMenu = styled.div`
width: 15%;
padding-top: 20px;
padding-left: 15px;
background: #111111;
float: left;

`