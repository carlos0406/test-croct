import { useDropFile } from '../../../hooks/useDropFile'
import { ImageEditorContainer } from './styles'

export function EditImage() {
  const { showEditImage, scale, setScale, setIsSaved } = useDropFile()
  if (!showEditImage) {
    return <></>
  }
  return (
    <ImageEditorContainer>
      <span className='left'>Crop</span>
      <input type="range" id="points" value={scale} onChange={e => { setScale(Number(e.target.value)) }} name="points" min="0" max="10" />
      <span> <button onClick={() => { setIsSaved(true) }}>Save</button></span>
    </ImageEditorContainer>
  )
}
