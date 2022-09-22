import React, { useEffect, useState } from "react"
import { InputSearchPropTypes } from "@/app/infrastructures/misc/types/components/InputSearch.type"
import TextInput from '@/app/ui/components/atoms/TextInput'
import Icons from '@/app/ui/assets/Icons/index'
import './style.scss'

const InputSearch = (props: InputSearchPropTypes) => {
  const { canEnter, customClass, onInput, onKeyDown, onClickSearch } = props
  const [classWrapper, setClassWrapper] = useState('')

  const onInputText = (val: string) => {
    if (onInput) onInput(val)
  }

  const onKeyDownInput = (val: string) => {
    if (canEnter && onKeyDown) {
      onKeyDown(val)
    }
  }

  const onSearch = () => {
    if (onClickSearch) onClickSearch()
  }

  useEffect(() => {
    let activeClass = 'w-full relative flex flex-row rounded-lg overflow-hidden'
    if (customClass) {
      activeClass += ` ${customClass}`
    } else {
      activeClass += ' max-w-2xl'
    }
    setClassWrapper(activeClass)
  }, [customClass])

  return (
    <div className={classWrapper}>
      <TextInput
        customClass="pl-4 pr-11"
        canEnter={canEnter}
        onInput={onInputText}
        onKeyDown={onKeyDownInput}
      />
      <div className="icon-search" onClick={onSearch}>
        <Icons name="search" />
      </div>
    </div>
  )
}

export default InputSearch
