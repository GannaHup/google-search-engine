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
import { searchContent, setQueryParams } from "@/app/ui/stores/actions/GoogleSearchAction"
import { EnumTabsResult, ITEM_TABS_RESULT } from "@/app/infrastructures/misc/constants/common"
import SearchAll from "./Search"
import ImagesResult from "./Images"
import NewsResult from "./News"

const ResultPage = () => {
  const params = queryString(window.location.search)
  const history = useHistory()
  const dispatch = useAppDispatch()
  const { isLoading, queryParams, allResult } = useAppSelector((state) => state.google)
  const [keyword, setKeyword] = useState(params.q)
  const [currentTab, setCurrentTab] = useState('search')

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
      const newParams = {
        ...queryParams,
        ...params,
        type: EnumTabsResult.ALL
      }
      dispatch(setQueryParams(newParams))
      // dispatch(searchContent(newParams))
    }
  }, [params.q])

  return (
    <div className="max-w-4xl flex flex-col gap-5 pl-40 py-10">
      <InputSearch
        value={keyword}
        canEnter
        customClass="max-w-4xl"
        onInput={(val) => onInputSearch(val)}
        onKeyDown={onSearch}
        onClickSearch={onSearch}
      />
      <Tabs
        currentTab={currentTab}
        itemTabs={ITEM_TABS_RESULT}
        onClick={onSelectTab}
      />
      <div className="mt-0 flex flex-col gap-5">
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
                  return <ImagesResult />
                case EnumTabsResult.NEWS:
                  return <NewsResult />
                default:
                  break;
              }
            })()}
          </>
        )}
      </div>
    </div>
  )
}

export default ResultPage
