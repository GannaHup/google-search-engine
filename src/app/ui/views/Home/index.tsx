import React, { useState } from 'react'
import { isOnlyWhiteSpace } from '@/app/infrastructures/misc/utils/useFormat'
import InputSearch from '@/app/ui/components/molecules/InputSearch'
import { useHistory } from 'react-router-dom'
import './style.scss'

const HomePage = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onEnterInput = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      history.push(`/result?keyword=${keyword}&start=0`)
    }
  }

  const onClickSearch = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      history.push(`/result?keyword=${keyword}`)
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
        onKeyDown={onEnterInput}
        onClickSearch={onClickSearch}
      />
    </div>
  )
}

export default HomePage
