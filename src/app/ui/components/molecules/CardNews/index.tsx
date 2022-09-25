import React from "react"
import { CardNewsProps } from "@/app/infrastructures/misc/types/components/CardNews.type"
import { formatDate } from "@/app/infrastructures/misc/utils/useFormat"
import Icons from "@/app/ui/assets/Icons/index"
import './style.scss'

const CardNews = (props: CardNewsProps) => {
  const { item, marked, onBookmark } = props

  const onClick = () => {
    onBookmark(item)
  }

  return (
    <div className="wrapper-card-news-result">
      <div className="mt-1 cursor-pointer h-max pb-1" onClick={onClick}>
        <Icons
          name={marked ? 'bookmark-bold' : 'bookmark'}
          color={marked ? '#4185f4' : '#4d4d4d'}
        />
      </div>
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
    </div>
  )
}

export default CardNews
