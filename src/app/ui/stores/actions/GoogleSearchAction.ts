import { Dispatch } from 'redux'
import GoogleServiceApi from '@/app/infrastructures/services/GoogleService'
import { AppDispatch } from '@/app/ui/stores'
import { QueryParamsSearch } from '@/app/infrastructures/misc/types/store'
import {
  SET_ALL_RESULT,
  SET_IMAGE_GOOGLE,
  SET_LOADING_SEARCH,
  SET_NEWS_GOOGLE,
  SET_QUERY_PARAMS
} from '@/app/infrastructures/misc/constants/actions'
import {
  GoogleSearchLoading,
  GoogleSearchAllResult,
  GoogleQueryParams,
  GoogleSearchImageResult,
  GoogleSearchNewsResult
} from '@/app/infrastructures/misc/types/store/googleSearch.type'
import {
  GoogleResultImage,
  GoogleResultNews,
  GoogleResultSearch
} from '@/data/responses/contracts/GoogleResponse'
import { serializeQuery } from '@/app/infrastructures/misc/utils/useFormat'

export const searchContent = (queryParams: QueryParamsSearch) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    GoogleServiceApi
      .get(`api/v1/search/${serializeQuery(queryParams)}`)
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

export const searchImage = (queryParams: QueryParamsSearch) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    GoogleServiceApi
      .get(`api/v1/image/${serializeQuery(queryParams)}`)
      .then((res) => {
        const { image_results } = res.data
        dispatch(setImageResult(image_results))
        dispatch(setLoading(false))
      })
      .catch(() => {
        dispatch(setLoading(false))
      })
  }
}

export const searchNews = (queryParams: QueryParamsSearch) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    GoogleServiceApi
      .get(`api/v1/news/${serializeQuery(queryParams)}`)
      .then((res) => {
        const { entries } = res.data
        dispatch(setNewsResult(entries))
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

function setImageResult(data: GoogleResultImage[]) {
  return (dispatch: Dispatch<GoogleSearchImageResult>) => {
    dispatch({
      type: SET_IMAGE_GOOGLE,
      imageResult: data
    })
  }
}

function setNewsResult(data: GoogleResultNews[]) {
  return (dispatch: Dispatch<GoogleSearchNewsResult>) => {
    dispatch({
      type: SET_NEWS_GOOGLE,
      newsResult: data
    })
  }
}

export function setQueryParams(data: QueryParamsSearch) {
  return (dispatch: Dispatch<GoogleQueryParams>) => {
    dispatch({
      type: SET_QUERY_PARAMS,
      queryParams: data
    })
  }
}
