export interface InputSearchPropTypes {
  canEnter?: boolean
  value?: string
  customClass?: string
  onInput?: (val: string) => void
  onKeyDown?: (val: string) => void
  onClickSearch?: () => void
}
