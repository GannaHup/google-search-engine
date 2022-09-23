import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"
import { GoogleSearchDispatchTypes } from "./googleSearch.type"

export type ActionDispatch = GoogleSearchDispatchTypes

export interface TGoogleSearchtState {
  isLoading: boolean
  allResult: GoogleResultSearch[]
}

export interface ReducersAllTypes  {
  google: TGoogleSearchtState
}
