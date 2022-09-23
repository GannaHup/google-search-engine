import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"
import { GoogleSearchDispatchTypes } from "./googleSearch.type"

export type ActionDispatch = GoogleSearchDispatchTypes

export interface QueryParamsSearch {
  q: string
  lr: string
  num: number
  start: number
}

export interface TGoogleSearchtState {
  isLoading: boolean
  allResult: GoogleResultSearch[]
  queryParams: QueryParamsSearch
}

export interface ReducersAllTypes  {
  google: TGoogleSearchtState
}
