import { atom, useRecoilState } from 'recoil'

const codeViewState = atom({ key: 'codeview', default: false })

export const useCodeView = () => {
  const [codeView, setCodeView] = useRecoilState(codeViewState)

  const toggleCodeView = () => {
    setCodeView(!codeView)
  }

  return { codeView, toggleCodeView }
}
