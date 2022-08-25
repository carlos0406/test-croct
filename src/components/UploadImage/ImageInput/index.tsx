
import { useDropzone } from 'react-dropzone'
import vector from '../../../assets/Vector.svg'
import { useDropFile } from '../../../hooks/useDropFile'
import { ImageInputContainer } from './styles'

export function ImageInput() {
  const { onDrop, showInput } = useDropFile()
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  })
  if (!showInput) {
    return <></>
  }
  return (
    <ImageInputContainer {...getRootProps()}>
      <input {...getInputProps({ accept: 'image/png' })} accept="image/*" multiple={false} />
      <h3><img src={vector} alt="" /> Organization Logo </h3>
      <p>Drop the image here or click to browse.</p>
    </ImageInputContainer>
  )
}
