import React from "react"
import CardResult from '@/app/ui/components/molecules/CardResult'
import { GoogleResultSearch } from "@/data/responses/contracts/GoogleResponse"

const SearchAll = (props: any) => {
  const { data } = props
  return (
    <div>
      {data.map((result: GoogleResultSearch, idx: number) => {
        return (
          <CardResult
            title={result.title}
            description={result.description}
            link={result.link}
            key={idx}
          />
        )
      })}
    </div>
  )
}

export default SearchAll
