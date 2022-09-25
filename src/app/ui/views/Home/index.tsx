import React, { useState } from 'react'
import { EnumTabsResult } from '@/app/infrastructures/misc/constants/common'
import { OPTIONS_SEARCH_GOOGLE } from '@/app/infrastructures/misc/constants/components'
import { Options } from '@/app/infrastructures/misc/types/components/DropdownSelect'
import {
  isOnlyWhiteSpace,
  serializeQuery
} from '@/app/infrastructures/misc/utils/useFormat'
import InputSearch from '@/app/ui/components/molecules/InputSearch'
import DropdownSelect from '@/app/ui/components/atoms/DropdownSelect'
import { useHistory } from 'react-router-dom'
import './style.scss'

const HomePage = () => {
  const history = useHistory()
  const [keyword, setKeyword] = useState('')
  const [typeSearch, setTypeSearch] = useState(OPTIONS_SEARCH_GOOGLE[0])

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onSelectOption = (option: Options) => {
    setTypeSearch(option)
  }

  const onSearch = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      const queryParams = {
        q: '',
        lr: 'lang_id',
        num: 100,
        start: 0,
        type: typeSearch.value
      }
      const params = { ...queryParams, q: keyword }
      history.push(`/result?${serializeQuery(params)}`)
    }
  }

  return (
    <div className='wrapper-home-page'>
      <div className='section-dropdown-select'>
        <DropdownSelect
          value={typeSearch}
          options={OPTIONS_SEARCH_GOOGLE}
          onSelectOption={onSelectOption}
        />
      </div>

      <div className='goose-logo'>
        <span className='font-goose-blue'>G</span>
        <span className='font-goose-red'>O</span>
        <span className='font-goose-yellow'>O</span>
        <span className='font-goose-blue'>S</span>
        <span className='font-goose-green'>E</span>
      </div>

      <InputSearch
        canEnter
        onInput={onInputSearch}
        onKeyDown={onSearch}
        onClickSearch={onSearch}
      />
    </div>
  )
}

export default HomePage
