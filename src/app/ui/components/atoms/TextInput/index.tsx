import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { TextInputPropTypes } from "@/app/infrastructures/misc/types/components/TextInput.type"
import './style.scss'

const TextInput = (props: TextInputPropTypes) => {
  const { canEnter, customClass, onInput, onKeyDown } = props
  const [classWrapper, setClassWrapper] = useState('')

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    if (onInput) onInput(value)
  }

  const onKeyDownInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && canEnter) {
      if (onKeyDown) onKeyDown(event.code)
    }
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
      <input
        type='text'
        className="w-full"
        onChange={onChangeInput}
        onKeyDown={onKeyDownInput}
      />
    </div>
  )
}

TextInput.defaultProps = {
  canEnter: false
}

export default TextInput
