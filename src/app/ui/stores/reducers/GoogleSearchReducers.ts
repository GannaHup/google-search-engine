import {
  SET_ALL_RESULT,
  SET_IMAGE_GOOGLE,
  SET_LOADING_SEARCH,
  SET_NEWS_GOOGLE,
  SET_QUERY_PARAMS
} from "@/app/infrastructures/misc/constants/actions"
import { EnumTabsResult } from "@/app/infrastructures/misc/constants/common"
import { TGoogleSearchtState } from "@/app/infrastructures/misc/types/store"
import { GoogleSearchDispatchTypes } from "@/app/infrastructures/misc/types/store/googleSearch.type"

const initialState: TGoogleSearchtState = {
  isLoading: false,
  allResult: [],
  imageResult: [],
  newsResult: [],
  queryParams: {
    q: '',
    lr: 'lang_id',
    num: 100,
    start: 0,
    type: EnumTabsResult.ALL
  }
}

export default function GoogleSearchReducers (
  state: TGoogleSearchtState = initialState,
  action: GoogleSearchDispatchTypes
) {
  const {
    type,
    loading,
    data,
    queryParams,
    imageResult,
    newsResult
  } = action

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

    case SET_IMAGE_GOOGLE:
      return {
        ...state,
        imageResult: imageResult
      }

    case SET_NEWS_GOOGLE:
      return {
        ...state,
        newsResult: newsResult
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
