import React from "react"
import { GoogleResultNews } from "@/data/responses/contracts/GoogleResponse"
import './style.scss'

interface NewsResultTypes {
  data: GoogleResultNews[]
}

const NewsResult = (props: NewsResultTypes) => {
  const { data } = props
  return (
    <div className="wrapper-news-result">
      {data.map((item: GoogleResultNews, idx: number) => {
        return (
          <div key={idx} className="card-news-result">
            <div className="news-info">
              <a href={item.source.href} className="news-source">{item.source.title}</a>
              <span>•</span>
              <span className="news-date-published">{item.published}</span>
            </div>
            <a href={item.link} className="news-title">{item.title}</a>
          </div>
        )
      })}
    </div>
  )
}

export default NewsResult
