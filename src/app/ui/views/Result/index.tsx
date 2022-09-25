import React, { useEffect, useState } from "react"
import {
  isOnlyWhiteSpace,
  queryString,
  serializeQuery,
} from "@/app/infrastructures/misc/utils/useFormat"
import { useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/app/ui/stores"
import InputSearch from "@/app/ui/components/molecules/InputSearch"
import Tabs from "@/app/ui/components/atoms/Tabs"
import Icons from "@/app/ui/assets/Icons/index"
import {
  searchContent,
  searchImage,
  searchNews,
  setQueryParams,
} from "@/app/ui/stores/actions/GoogleSearchAction"
import {
  EnumTabsResult,
  ITEM_TABS_RESULT,
} from "@/app/infrastructures/misc/constants/common"
import SearchAll from "./Search"
import ImagesResult from "./Images"
import NewsResult from "./News"
import Bookmark from "./Bookmark"
import './style.scss'

const ResultPage = () => {
  const params = queryString(window.location.search)
  const history = useHistory()
  const dispatch = useAppDispatch()
  const { isLoading, queryParams, allResult, imageResult, newsResult } =
    useAppSelector((state) => state.google)
  const [keyword, setKeyword] = useState(params.q)
  const [currentTab, setCurrentTab] = useState(params.type)

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onSearch = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      const params = { ...queryParams, q: keyword }
      history.push(`/result?${serializeQuery(params)}`)
    }
  }

  const onSelectTab = (id: string) => {
    const params = { ...queryParams, type: id }
    history.push(`/result?${serializeQuery(params)}`)
    setCurrentTab(id)
  }

  useEffect(() => {
    if (params.q) {
      const newParams = { ...queryParams, ...params }
      dispatch(setQueryParams(newParams))
      if (params.type === EnumTabsResult.ALL) {
        dispatch(searchContent(newParams))
      } else if (params.type === EnumTabsResult.IMAGE) {
        dispatch(searchImage(newParams))
      } else if (params.type === EnumTabsResult.NEWS) {
        dispatch(searchNews(newParams))
      }
    }
    if (
      !params.q ||
      ![
        EnumTabsResult.ALL,
        EnumTabsResult.IMAGE,
        EnumTabsResult.NEWS,
        EnumTabsResult.BOOKMARK
      ].includes(
        params.type as EnumTabsResult
      )
    ) {
      history.push("/")
    }
  }, [params.q, params.type])

  return (
    <div className="wrapper-result">
      <div className="wrapper-input-search">
        <InputSearch
          value={keyword}
          canEnter
          onInput={(val) => onInputSearch(val)}
          onKeyDown={onSearch}
          onClickSearch={onSearch}
        />
      </div>
      <Tabs
        currentTab={currentTab}
        customClass="pr-10 md:pl-40 sm:pl-20 xs:pl-10 pl-5"
        itemTabs={ITEM_TABS_RESULT}
        onClick={onSelectTab}
      />
      <div className="content-result">
        {isLoading ? (
          <div className="mt-14">
            <Icons name="loading-bubble" />
          </div>
        ) : (
          <>
            {(() => {
              switch (currentTab) {
                case EnumTabsResult.ALL:
                  return <SearchAll data={allResult} />
                case EnumTabsResult.IMAGE:
                  return <ImagesResult data={imageResult} />
                case EnumTabsResult.NEWS:
                  return <NewsResult data={newsResult} />
                case EnumTabsResult.BOOKMARK:
                  return <Bookmark />
                default:
                  break
              }
            })()}
          </>
        )}
      </div>
    </div>
  )
}

export default ResultPage
