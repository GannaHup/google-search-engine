import React, { useState } from 'react'
import { isOnlyWhiteSpace } from '@/app/infrastructures/misc/utils/useFormat'
import { serializeQuery } from '@/app/infrastructures/misc/utils/useFormat'
import InputSearch from '@/app/ui/components/molecules/InputSearch'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from '@/app/ui/stores'
import './style.scss'

const HomePage = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()
  const { queryParams } = useAppSelector((state) => state.google)

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onSearch = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      const params = { ...queryParams, q: keyword }
      history.push(`/result?${serializeQuery(params)}`)
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
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
