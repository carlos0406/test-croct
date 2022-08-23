import styled from 'styled-components'

export const ImageForm = styled.form`
  width: 553px;
  height: 177px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F2F5F8;
  border: 2px dashed #C7CDD3;
  border-radius: 8px;
  input[type=file]{
      display: none;
  }
  .file{
   flex:1;
   height: 100%;
   cursor: pointer;
   div{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   }
    h3,p{
      font-size: 14px;
      text-align: center;
      font-family: Inter;
      color: #677489;
      line-height: 180%;
    }
    h3{
      font-weight: 500;
      color: #495567;
    }
}

`
type Props ={
  escale:string
}

export const ImagePreview = styled.div<Props>`
  padding: 32px;
  div{
      width: 114px;
      height: 114px;
      border-radius:100%;
      overflow: hidden;
    img{
      width: 114px;
      height: 114px;
      transform: ${props => `scale(${props.escale})`};
      }
  }
`
