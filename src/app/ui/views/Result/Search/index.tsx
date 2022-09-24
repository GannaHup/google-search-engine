import React from "react"
import CardResult from "@/app/ui/components/molecules/CardResult"
import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"
import Icons from "@/app/ui/assets/Icons/index"
import './style.scss'

interface SearchAllTypes {
  data: GoogleResultSearch[]
}

const SearchAll = (props: SearchAllTypes) => {
  const { data } = props
  return (
    <div className="wrapper-search-all">
      {data && data.length > 0 ? (
        data.map((result: GoogleResultSearch, idx: number) => {
          return (
            <CardResult
              title={result.title}
              description={result.description}
              link={result.link}
              key={idx}
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

export default SearchAll
