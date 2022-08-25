import { useContext } from 'react'
import { DropFileContext } from '../contexts/DropFileCxt'

export function useDropFile() {
  return useContext(DropFileContext)
}
