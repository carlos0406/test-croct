import { ImagePreviewError } from '../styles'
import error from '../../../assets/error.svg'
interface ErrorProps {
  isVisible: boolean
}
export function Error({ isVisible }: ErrorProps) {
  if (!isVisible) {
    return <></>
  }
  return (
    <ImagePreviewError >
      <div className='image-error'>
        <div className='error'><img src={error} alt="logo prview" /></div>
        <div>vrau</div>
      </div>

    </ImagePreviewError >

  )
}
