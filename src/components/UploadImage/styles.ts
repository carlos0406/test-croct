import styled from 'styled-components'
interface ImageFormProps{
  bordered:Boolean
}
export const ImageForm = styled.form<ImageFormProps>`
  width: 553px;
  height: 177px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F2F5F8;
  border: ${props => props.bordered ? '2px dashed #C7CDD3' : 'none'};
  border-radius: 8px;
  position: relative;
  input[type=file]{
      display: none;
  }
  .close-button{
    position: absolute;
    top: 35px;
    right: 28px;
    border: none;
    cursor: pointer;
  }
  .file{
   flex:1;
   height: 100%;
   cursor: pointer;
   div{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    input[type=range],span{
      width: 276px;
      height: 2px;
    }
    span{
      display: flex;
      margin-top: 35px;
      align-items: flex-end;
      justify-content: right;
      padding-top:20px ;
      button{
        border:none;
        background: #3D485F;
        border-radius: 16px;
        width: 109px;
        height: 32px;
        color: white;
        font-family: Inter;
      }
      &.left{
        justify-content: left;
        font-weight: 400;
        font-family: Inter;
        line-height: 28.8px;
        padding-bottom: 30px;
        color: #677489;
      }
    }
   }

}

`
type Props ={
  escale?:string
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
      transform: ${props => props.escale ? `scale(${props.escale})` : ''};
      }
      img.error{
        height:20px;
        width: 20px;
  }
  }

  div.error{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color:#C3CBD5 ;
    img{
      width: 20px;
      height: 20px;
    }
  }
`

export const ImagePreviewError = styled.div<Props>`
  div.image-error{
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  div{
      width: 114px;
      height: 114px;
      border-radius:100%;
      overflow: hidden;
    img{
      width: 114px;
      height: 114px;
      transform: ${props => props.escale ? `scale(${props.escale})` : ''};
      }
      img.error{
        height:20px;
        width: 20px;
  }
  }

  div.error{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color:#C3CBD5 ;
    img{
      width: 20px;
      height: 20px;
    }
  }
  }
`
