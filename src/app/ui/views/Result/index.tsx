import React, { useEffect, useState } from "react"
import {
  isOnlyWhiteSpace,
  queryString,
} from "@/app/infrastructures/misc/utils/useFormat"
import { useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/app/ui/stores"
import CardResult from '@/app/ui/components/molecules/CardResult'
import InputSearch from "@/app/ui/components/molecules/InputSearch"
import Tabs from "@/app/ui/components/atoms/Tabs"
import Icons from "@/app/ui/assets/Icons/index"
import { searchContent } from "@/app/ui/stores/actions/GoogleSearchAction"
import { ITEM_TABS_RESULT } from "@/app/infrastructures/misc/constants/common"

const ResultPage = () => {
  const params = queryString(window.location.search)
  const history = useHistory()
  const dispatch = useAppDispatch()
  const { isLoading, queryParams, allResult } = useAppSelector((state) => state.google)
  const [keyword, setKeyword] = useState(params.q)
  const [currentTab, setCurrentTab] = useState('all')

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onEnterInput = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      history.push(`/result?q=${keyword}&start=0&lr=lang_id&num=10`)
    }
  }

  const onClickSearch = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      history.push(`/result?q=${keyword}&start=0&lr=lang_id&num=10`)
    }
  }

  const onSelectTab = (id: string) => {
    setCurrentTab(id)
  }

  useEffect(() => {
    if (params.q) {
      const newParams = {
        ...queryParams,
        ...params
      }
      dispatch(searchContent(newParams))
    }
  }, [params.keyword])

  return (
    <div className="max-w-4xl flex flex-col gap-5 pl-40 py-10">
      <InputSearch
        value={keyword}
        canEnter
        customClass="max-w-4xl"
        onInput={(val) => onInputSearch(val)}
        onKeyDown={() => onEnterInput()}
        onClickSearch={() => onClickSearch()}
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
          allResult.map((result, idx) => {
            return (
              <CardResult
                title={result.title}
                description={result.description}
                link={result.link}
                key={idx}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default ResultPage
