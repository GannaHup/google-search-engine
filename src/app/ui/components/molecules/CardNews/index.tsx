import React from "react"
import { formatDate } from "@/app/infrastructures/misc/utils/useFormat"
import { GoogleResultNews } from "@/data/responses/contracts/GoogleResponse"
import './style.scss'

interface CardNewsProps {
  item: GoogleResultNews
}

const CardNews = (props: CardNewsProps) => {
  const { item } = props
  return (
    <div className="card-news-result">
      <div className="news-info">
        <a href={item.source.href} className="news-source">
          {item.source.title}
        </a>
        <span>•</span>
        <span className="news-date-published">
          {formatDate(item.published)}
        </span>
      </div>
      <a href={item.link} className="news-title">
        {item.title}
      </a>
    </div>
  )
}

export default CardNews
