import React, { useState } from 'react'
import InputSearch from '@/app/ui/components/molecules/InputSearch'
import { useAppDispatch } from "@/app/ui/stores"
import { searchContent } from '@/app/ui/stores/actions/GoogleSearchAction'
import './style.scss'

const HomePage = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useAppDispatch()

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onEnterInput = () => {
    dispatch(searchContent(keyword))
  }

  const onClickSearch = () => {
    dispatch(searchContent(keyword))
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
