export interface Cite {
  domain?: string
  span?: string
}

export interface AdditionalLinks {
  href?: string
  text?: string
}

export interface ImageGoogle {
  src?: string
  alt?: string
}

export interface LinkImageGoogle {
  href: string
  title: string
  domain: string
}

export interface GoogleResultSearch {
  additionalLinks?: AdditionalLinks[]
  cite?: Cite
  description?: string
  link?: string
  title?: string
}

export interface GoogleResultImage {
  image: ImageGoogle
  link: LinkImageGoogle
}
