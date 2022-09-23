import React from "react"
import './style.scss'

interface CardResultProps {
  title?: string
  link?: string
  description?: string
}

const CardResult = (props: CardResultProps) => {
  const { title, link, description } = props
  return (
    <div className="wrapper-card-result">
      <a href={link} className="title-result-article">{title}</a>
      <span className="description-result-article">{description}</span>
    </div>
  )
}

export default CardResult
