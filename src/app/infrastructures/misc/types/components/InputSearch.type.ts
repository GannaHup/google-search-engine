export interface InputSearchPropTypes {
  canEnter?: boolean
  customClass?: string
  onInput?: (val: string) => void
  onKeyDown?: (val: string) => void
  onClickSearch?: () => void
}
