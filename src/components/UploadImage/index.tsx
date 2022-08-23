import { ImageForm, ImagePreview } from '../styles'
import vector from '../../assets/Vector.svg'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
export function UploadImage() {
  const [file, setFile] = useState<Blob | MediaSource>()
  const [scale, setScale] = useState(0)
  const preview = file !== undefined ? URL.createObjectURL(file) : null
  const onDrop = useCallback((acceptedFiles: Array<Blob | MediaSource>) => {
    setFile(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  return (
    < ImageForm {...getRootProps()}>
      {preview && (<ImagePreview escale={String(1 + (scale / 10))}>
        <div><img src={preview} alt="logo prview" /></div>
      </ImagePreview>)}
      <label htmlFor="arquivo" className='file'>
        <div>
          <input {...getInputProps()} />
          {preview
            ? (<input type="range" id="points" value={scale} onChange={e => { setScale(Number(e.target.value)) }} name="points" min="0" max="10" />)
            : (<>
              <h3><img src={vector} alt="" /> Organization Logo </h3>
              <p>Drop the image here or click to browse.</p>
            </>)}
        </div>
      </label>

    </ImageForm >
  )
}
