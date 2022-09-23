import { SET_ALL_RESULT, SET_LOADING_SEARCH, SET_QUERY_PARAMS } from "@/app/infrastructures/misc/constants/actions"
import { ALL_RESULT_GOOGLE, EnumTabsResult } from "@/app/infrastructures/misc/constants/common"
import { TGoogleSearchtState } from "@/app/infrastructures/misc/types/store"
import { GoogleQueryParams } from "@/app/infrastructures/misc/types/store/googleSearch.type"
import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"

const initialState: TGoogleSearchtState = {
  isLoading: false,
  // allResult: []
  allResult: ALL_RESULT_GOOGLE,
  queryParams: {
    q: '',
    lr: 'lang_id',
    num: 10,
    start: 0,
    type: EnumTabsResult.ALL
  }
}

export default function FormContactMeReducers (
  state: TGoogleSearchtState = initialState,
  action: {
    type: string,
    loading: boolean,
    data: GoogleResultSearch[],
    queryParams: GoogleQueryParams
  }
) {
  const { type, loading, data, queryParams } = action

  switch(type) {
    case SET_LOADING_SEARCH:
      return {
        ...state,
        isLoading: loading
      }

    case SET_ALL_RESULT:
      return {
        ...state,
        allResult: data
      }

    case SET_QUERY_PARAMS:
      return {
        ...state,
        queryParams: queryParams
      }

    default:
      return state
  }
}
