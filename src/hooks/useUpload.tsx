import { useState } from 'react'

export function useFile() {
  const [file, setFile] = useState<Blob | MediaSource>({} as Blob)
  const fileURL = URL.createObjectURL(file)
  return { setFile, fileURL }
}
