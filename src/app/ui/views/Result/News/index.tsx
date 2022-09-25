import React, { useEffect, useState } from "react"
import Icons from "@/app/ui/assets/Icons/index"
import CardNews from "@/app/ui/components/molecules/CardNews"
import { GoogleResultNews } from "@/data/responses/contracts/GoogleResponse"
import { getCookieDecode, setCookieEncode } from "@/app/infrastructures/misc/utils/cookies"
import "./style.scss"

interface NewsResultTypes {
  data: GoogleResultNews[]
}

const NewsResult = (props: NewsResultTypes) => {
  const { data } = props
  const tagNews = getCookieDecode('tag-news') || []
  const [idTagNews, setIdTagNews] = useState<string[]>([])

  const setListIdNews = (data: GoogleResultNews[]) => {
    if (data && data.length > 0) {
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
      title: news.title
    }
    if (idTagNews.includes(item.id)) {
      const result = tagNews.filter((bookNews: GoogleResultNews) => bookNews.id !== item.id)
      setCookieEncode('tag-news', result)
      setListIdNews(result)
    } else {
      setCookieEncode('tag-news', [...tagNews, item])
      setListIdNews([...tagNews, item])
    }
  }

  useEffect(() => {
    setListIdNews(tagNews)
  }, [])

  return (
    <div className="wrapper-news-result">
      {data && data.length > 0 ? (
        data.map((item: GoogleResultNews, idx: number) => {
          return (
            <CardNews
              item={item}
              marked={idTagNews.includes(item.id)}
              key={idx}
              onBookmark={onBookmark}
            />
          )
        })
      ) : (
        <div className="empty-state">
          <Icons name="empty-state" />
          <div className="text-empty-state">Oopss, Kami tidak dapat menemukan yang anda cari</div>
        </div>
      )}
    </div>
  )
}

export default NewsResult
