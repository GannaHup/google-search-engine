import { SET_ALL_RESULT, SET_LOADING_SEARCH } from "@/app/infrastructures/misc/constants/actions"
import { ALL_RESULT_GOOGLE } from "@/app/infrastructures/misc/constants/common"
import { TGoogleSearchtState } from "@/app/infrastructures/misc/types/store"
import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"

const initialState: TGoogleSearchtState = {
  isLoading: false,
  // allResult: []
  allResult: ALL_RESULT_GOOGLE
}

export default function FormContactMeReducers (
  state: TGoogleSearchtState = initialState,
  action: {
    type: string,
    loading: boolean,
    data: GoogleResultSearch[]
  }
) {
  const { type, loading, data } = action

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

    default:
      return state
  }
}
