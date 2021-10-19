import styled from 'styled-components'

export const Form = styled.form`
  font-style: normal;
  font-weight: bold;
  color: ${({theme}) => theme.colors.menuText};
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0 100px 80px rgba(0, 0, 0, 0.07), 0 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481), 0 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185), 0 20px 13px rgba(0, 0, 0, 0.035), 0 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815), 0 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);
  padding: 20px;
  margin-top: 10px;
  border-radius: 20px;
  label{
    padding-top: 10px;
  }
`
export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  height: 30px;
`
export const ErrorMessage = styled.div`
  margin-top: 10px;
  &:before{
    content: '⚠';
    padding-right: 4px;
    color: ${({theme}) => theme.colors.primary};
  }
`