import React, { useState } from 'react'
import InputSearch from '@/app/ui/components/molecules/InputSearch'
import './style.scss'

const HomePage = () => {
  const [keyword, setKeyword] = useState('')

  const onInputSearch = (val: string) => {
    setKeyword(val)
  }

  const onEnterInput = () => {
    console.log(keyword)
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
      />
    </div>
  )
}

export default HomePage
