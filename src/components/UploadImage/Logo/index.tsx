import { useDropFile } from '../../../hooks/useDropFile'
import { ImagePreview } from '../styles'

export function Logo() {
  const { preview, scale, haveError } = useDropFile()
  if (!(!!preview && !haveError)) {
    return <></>
  }
  return (

    <ImagePreview escale={String(1 + (scale / 10))}>
      <div><img src={preview} alt="logo prview" /></div>
    </ImagePreview>

  )
}
