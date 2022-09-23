import { Dispatch } from 'redux'
import GoogleServiceApi from '@/app/infrastructures/services/GoogleService'
import { AppDispatch } from '@/app/ui/stores'
import { SET_ALL_RESULT, SET_LOADING_SEARCH } from '@/app/infrastructures/misc/constants/actions'
import { GoogleSearchLoading, GoogleSearchAllResult } from '@/app/infrastructures/misc/types/store/googleSearch.type'
import { GoogleResultSearch } from '@/data/responses/contracts/GoogleResponse'

export const searchContent = (keyword: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    GoogleServiceApi
      .get(`api/v1/search/q=${keyword}&lr=lang_id&num=10&start=40`)
      .then((res) => {
        const { results } = res.data
        dispatch(setAllResult(results))
        dispatch(setLoading(false))
      })
      .catch(() => {
        dispatch(setLoading(false))
      })
  }
}

// Mutation
function setLoading(bool: boolean) {
  return (dispatch: Dispatch<GoogleSearchLoading>) => {
    dispatch({
      type: SET_LOADING_SEARCH,
      loading: bool
    })
  }
}

function setAllResult(data: GoogleResultSearch[]) {
  return (dispatch: Dispatch<GoogleSearchAllResult>) => {
    dispatch({
      type: SET_ALL_RESULT,
      data: data
    })
  }
}
