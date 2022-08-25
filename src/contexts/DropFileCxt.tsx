
import React, { createContext, ReactNode, useCallback, useState } from 'react'
type AuthContextType = {
  setFile: (file: Blob | MediaSource) => void;
  scale: number;
  setScale: (value: number) => void;
  preview: string | null;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  isSaved: boolean;
  haveError: boolean;
  onDrop: (acceptedFiles: Array<Blob | MediaSource>) => void
  onClose: () => void,
  showEditImage: boolean,
  showInput: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}
export const DropFileContext = createContext({} as AuthContextType)

export function DropContextProvider({ children }: AuthContextProviderProps) {
  const [file, setFile] = useState<Blob | MediaSource>()
  const [scale, setScale] = useState(0)
  const [isSaved, setIsSaved] = useState(false)
  const [haveError, setHaveError] = useState(false)
  const preview = file !== undefined ? URL.createObjectURL(file) : null
  const showEditImage = (!haveError && preview !== null && !isSaved)
  const showInput = (!haveError && !preview) || (!!preview && isSaved)
  const onDrop = useCallback((acceptedFiles: Array<Blob | MediaSource>) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
      setScale(0)
      setIsSaved(false)
    } else {
      setHaveError(true)
      setFile(undefined)
    }
  }, [])
  const onClose = useCallback(() => {
    setScale(0)
    setIsSaved(false)
    setHaveError(false)
    setFile(undefined)
  }, [])
  return (
    <DropFileContext.Provider value={{
      setFile,
      scale,
      setScale,
      preview,
      setIsSaved,
      isSaved,
      haveError,
      onDrop,
      onClose,
      showEditImage,
      showInput
    }}>
      {children}
    </DropFileContext.Provider>
  )
}
