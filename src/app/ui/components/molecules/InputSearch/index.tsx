import React, { useEffect, useState } from "react"
import { InputSearchPropTypes } from "@/app/infrastructures/misc/types/components/InputSearch.type"
import TextInput from '@/app/ui/components/atoms/TextInput'
import Icons from '@/app/ui/assets/Icons/index'
import './style.scss'

const InputSearch: React.FC = (props: InputSearchPropTypes) => {
  const { customClass, onInput } = props
  const [classWrapper, setClassWrapper] = useState('')

  const onInputText = (val: string) => {
    if (onInput) onInput(val)
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
      <TextInput customClass="pl-4 pr-11" onInput={onInputText} />
      <div className="icon-search">
        <Icons name="search" />
      </div>
    </div>
  )
}

export default InputSearch
