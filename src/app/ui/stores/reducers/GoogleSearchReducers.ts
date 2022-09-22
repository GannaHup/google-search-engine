import { SET_LOADING_SEARCH } from "@/app/infrastructures/misc/constants/actions"
import { TGoogleSearchtState } from "@/app/infrastructures/misc/types/store"
import { GoogleSearchDispatchTypes } from "@/app/infrastructures/misc/types/store/googleSearch.type"

const initialState: TGoogleSearchtState = {
  isLoading: false,
}

export default function FormContactMeReducers (
  state: TGoogleSearchtState = initialState,
  action: GoogleSearchDispatchTypes
) {
  const { type, payload } = action

  switch(type) {
    case SET_LOADING_SEARCH:
      return {
        ...state,
        isLoading: payload
      }

    default:
      return state
  }
}
