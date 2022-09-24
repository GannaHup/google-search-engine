import React from "react"
import { GoogleResultImage } from "@/data/responses/contracts/GoogleResponse"
import Icons from "@/app/ui/assets/Icons/index"
import "./style.scss"

interface ImageResultTypes {
  data: GoogleResultImage[]
}

const ImagesResult = (props: ImageResultTypes) => {
  const { data } = props
  return (
    <div className="wrapper-images-result">
      {data && data.length > 0 ? (
        data.map((item: GoogleResultImage, idx: number) => {
          return (
            <a href={item.link.href} className="images-result" key={idx}>
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="object-cover h-36"
              />
              <span className="hover:underline truncate">{item.link.title}</span>
            </a>
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

export default ImagesResult
