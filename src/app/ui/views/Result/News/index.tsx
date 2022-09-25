import React from "react"
import Icons from "@/app/ui/assets/Icons/index"
import CardNews from "@/app/ui/components/molecules/CardNews"
import { GoogleResultNews } from "@/data/responses/contracts/GoogleResponse"
import "./style.scss"

interface NewsResultTypes {
  data: GoogleResultNews[]
}

const NewsResult = (props: NewsResultTypes) => {
  const { data } = props
  return (
    <div className="wrapper-news-result">
      {data && data.length > 0 ? (
        data.map((item: GoogleResultNews, idx: number) => {
          return (
            <CardNews item={item} key={idx} />
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
