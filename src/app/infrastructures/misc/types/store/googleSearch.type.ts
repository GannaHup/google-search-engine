import {
  GoogleResultImage,
  GoogleResultNews,
  GoogleResultSearch
} from "@/data/responses/contracts/GoogleResponse"
import { QueryParamsSearch } from "."

export interface GoogleSearchLoading {
  type: string
  loading: boolean
}

export interface GoogleSearchAllResult {
  type: string
  data: GoogleResultSearch[]
}

export interface GoogleSearchImageResult {
  type: string
  imageResult: GoogleResultImage[]
}

export interface GoogleSearchNewsResult {
  type: string
  newsResult: GoogleResultNews[]
}

export interface GoogleQueryParams {
  type: string
  queryParams: QueryParamsSearch
}

export type GoogleSearchDispatchTypes = {
  type: string
  loading?: boolean
  data?: GoogleResultSearch[]
  imageResult?: GoogleResultImage[]
  newsResult?: GoogleResultNews[]
  queryParams?: QueryParamsSearch
}
