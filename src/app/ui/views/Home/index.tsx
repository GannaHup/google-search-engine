import React, { useState } from 'react'
import { EnumTabsResult } from '@/app/infrastructures/misc/constants/common'
import {
  isOnlyWhiteSpace,
  serializeQuery
} from '@/app/infrastructures/misc/utils/useFormat'
import InputSearch from '@/app/ui/components/molecules/InputSearch'
import { useHistory } from 'react-router-dom'
import './style.scss'

const HomePage = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onSearch = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      const queryParams = {
        q: '',
        lr: 'lang_id',
        num: 100,
        start: 0,
        type: EnumTabsResult.ALL
      }
      const params = { ...queryParams, q: keyword }
      history.push(`/result?${serializeQuery(params)}`)
    }
  }

  return (
    <div className='wrapper-home-page'>
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
