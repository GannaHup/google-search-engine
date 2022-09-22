import { GoogleSearchDispatchTypes } from "./googleSearch.type"

export type ActionDispatch = GoogleSearchDispatchTypes

export interface TGoogleSearchtState {
  isLoading: boolean
}

export interface ReducersAllTypes  {
  google: TGoogleSearchtState
}
