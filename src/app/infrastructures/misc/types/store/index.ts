import {
  GoogleResultImage,
  GoogleResultNews,
  GoogleResultSearch
} from "@/data/responses/contracts/GoogleResponse"
import { EnumTabsResult } from "@/app/infrastructures/misc/constants/common"
import { GoogleSearchDispatchTypes } from "./googleSearch.type"

export type ActionDispatch = GoogleSearchDispatchTypes

export interface QueryParamsSearch {
  q: string
  lr: string
  num: number
  start: number
  type: EnumTabsResult
}

export interface TGoogleSearchtState {
  isLoading: boolean
  allResult: GoogleResultSearch[]
  imageResult: GoogleResultImage[]
  newsResult: GoogleResultNews[]
  queryParams: QueryParamsSearch
}

export interface ReducersAllTypes  {
  google: TGoogleSearchtState | any
}
