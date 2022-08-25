import { ImageForm } from './styles'
import closeIcon from '../../assets/close.svg'
import { Error } from './Error'
import { EditImage } from './EditImage'
import { ImageInput } from './ImageInput'
import { Logo } from './Logo'
import { useDropFile } from '../../hooks/useDropFile'
import { DropContextProvider } from '../../contexts/DropFileCxt'
function UploadImageBase() {
  const { preview, isSaved, haveError, onClose } = useDropFile()
  return (

    < ImageForm bordered={!(preview && !isSaved)} >
      {((preview && !isSaved) || haveError) && (<button className='close-button'><img src={closeIcon} alt="Restart" onClick={onClose} /></button>)}
      < Logo />
      <div className='file'>
        <Error isVisible={haveError} />
        <EditImage />
        <ImageInput />
      </div>
    </ImageForm >

  )
}

export function UploadImage() {
  return (
    <DropContextProvider>
      <UploadImageBase />
    </DropContextProvider>
  )
}
