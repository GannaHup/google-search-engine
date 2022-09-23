import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"

export interface GoogleSearchLoading {
  type: string
  loading: boolean
}

export interface GoogleSearchAllResult {
  type: string
  data: GoogleResultSearch[]
}

export type GoogleSearchDispatchTypes = GoogleSearchLoading | GoogleSearchAllResult
