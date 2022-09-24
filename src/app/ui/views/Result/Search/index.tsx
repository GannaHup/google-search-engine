import React from "react"
import CardResult from "@/app/ui/components/molecules/CardResult"
import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"
import Icons from "@/app/ui/assets/Icons/index"

interface SearchAllTypes {
  data: GoogleResultSearch[]
}

const SearchAll = (props: SearchAllTypes) => {
  const { data } = props
  return (
    <div className="pl-40">
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
        <div className="mt-10">
          <Icons name="empty-state" />
        </div>
    )}
    </div>
  )
}

export default SearchAll
