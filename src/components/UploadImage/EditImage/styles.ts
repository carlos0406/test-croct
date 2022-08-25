import styled from 'styled-components'

export const ImageEditorContainer = styled.div`
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

`
