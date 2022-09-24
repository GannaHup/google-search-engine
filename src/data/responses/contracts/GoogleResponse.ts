// Google Result Search
export interface Cite {
  domain?: string
  span?: string
}

export interface AdditionalLinks {
  href?: string
  text?: string
}

export interface GoogleResultSearch {
  additional_links?: AdditionalLinks[]
  cite?: Cite
  description?: string
  link?: string
  title?: string
}

// Google Result Image
export interface ImageGoogle {
  src?: string
  alt?: string
}

export interface LinkImageGoogle {
  href?: string
  title?: string
  domain?: string
}

export interface GoogleResultImage {
  image: ImageGoogle
  link: LinkImageGoogle
}

//Google Result News 
export interface LinkNewsGoogle {
  href: string
  rel: string
  type: string
}

export interface SourceNewsGoogle {
  href: string
  title: string
}

export interface SummaryDetailNewsGoogle {
  base: string
  language: string | null
  type: string
  value: string
}

export interface GoogleResultNews {
  guidislink: boolean
  id: string
  link: string
  links: LinkNewsGoogle[]
  published: string
  published_parsed: number[]
  source: SourceNewsGoogle
  summary: string
  summary_detail: SummaryDetailNewsGoogle
  title: string
  title_detail: SummaryDetailNewsGoogle
}
