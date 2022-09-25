import React, { useEffect, useState } from "react"
import {
  getCookieDecode,
  setCookieEncode,
} from "@/app/infrastructures/misc/utils/cookies"
import { formatDate } from "@/app/infrastructures/misc/utils/useFormat"
import Icons from "@/app/ui/assets/Icons/index"
import { GoogleResultNews } from "@/data/responses/contracts/GoogleResponse"
import "./style.scss"

const Bookmark = () => {
  const tagNews = getCookieDecode("tag-news") || []
  const [idTagNews, setIdTagNews] = useState<string[]>([])

  const setListIdNews = (data: GoogleResultNews[]) => {
    if (data) {
      const listId = data.map((item: GoogleResultNews) => item.id)
      setIdTagNews(listId)
    }
  }

  const onBookmark = (news: GoogleResultNews) => {
    const item = {
      id: news.id,
      link: news.link,
      published: news.published,
      source: news.source,
      title: news.title,
    }
    if (idTagNews.includes(item.id)) {
      const result = tagNews.filter(
        (bookNews: GoogleResultNews) => bookNews.id !== item.id
      )
      setCookieEncode("tag-news", result)
      setListIdNews(result)
    } else {
      setCookieEncode("tag-news", [...tagNews, item])
      setListIdNews([...tagNews, item])
    }
  }

  useEffect(() => {
    setListIdNews(tagNews)
  }, [])

  return (
    <div className="wrapper-bookmark">
      {tagNews && tagNews.length > 0 ? (
        tagNews.reverse().map((news: GoogleResultNews) => {
          return (
            <div className="card-bookmark" key={news.id}>
              <div className="section-title-bookmark">
                <a href={news.link} className="title-bookmark">
                  {news.title}
                </a>
                <div
                  className="cursor-pointer"
                  onClick={() => onBookmark(news)}
                >
                  <Icons
                    name={
                      idTagNews.includes(news.id) ? "bookmark-bold" : "bookmark"
                    }
                    color={idTagNews.includes(news.id) ? "#4185f4" : "#4d4d4d"}
                  />
                </div>
              </div>
              <div className="section-date-news">
                <a href={news.source.href} className="source-news">
                  {news.source.title}
                </a>
                <span className="published-news">
                  {formatDate(news.published)}
                </span>
              </div>
            </div>
          )
        })
      ) : (
        <div className="empty-state">
          <Icons name="empty-state" />
          <div className="text-empty-state">Oopss, Bookmark anda kosong. Yuk tandai berita untuk bisa dibaca kapan aja</div>
        </div>
      )}
    </div>
  )
}

export default Bookmark
