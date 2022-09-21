import React, { ChangeEvent, useEffect, useState } from "react"
import { TextInputPropTypes } from "@/app/infrastructures/misc/types/components/TextInput.type"
import './style.scss'

const TextInput = (props: TextInputPropTypes) => {
  const { customClass, onInput } = props
  const [classWrapper, setClassWrapper] = useState('')

  const onInputText = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    if (onInput) onInput(value)
  } 


  useEffect(() => {
    let activeClass = 'wrapper-text-input'
    if (customClass) {
      activeClass += ` ${customClass}`
    }
    setClassWrapper(activeClass)
  }, [customClass])

  return (
    <div className={classWrapper}>
      <input type='text' className="w-full" onChange={onInputText} />
    </div>
  )
}

export default TextInput
