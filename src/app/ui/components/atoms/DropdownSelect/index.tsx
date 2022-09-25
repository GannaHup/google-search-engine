import React, { useState } from "react"
import { DropdownSelectProps, Options } from "@/app/infrastructures/misc/types/components/DropdownSelect.type"
import Icons from "@/app/ui/assets/Icons/index"
import './style.scss'

const DropdownSelect = (props: DropdownSelectProps) => {
  const { value, options, onSelectOption } = props
  const [showOptions, setShowOptions] = useState(false)

  const onClick = () => {
    setShowOptions(prevState => !prevState)
  }

  const selectOption = (option: Options) => {
    onSelectOption(option)
    setShowOptions(false)
  }

  return (
    <div className="wrapper-dropdown-select">
      <div
        className={showOptions ? 'dropdown-select active' : 'dropdown-select'}
        onClick={onClick}
      >
        <span>{value.label}</span>
        <div className="chevron-dropdown-select">
          <Icons name="chevron" />
        </div>
      </div>

      {/* Options */}
      {showOptions && (
        <div className="wrapper-options">
          {options.map((option: Options, idx: number) => {
            return (
              <div
                className={option.value === value.value ? 'option active' : 'option'}
                key={idx}
                onClick={() => selectOption(option)}
              >{option.label}</div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default DropdownSelect
