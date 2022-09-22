export interface Cite {
  domain: string
  span: string
}

export interface AdditionalLinks {
  href: string
  text: string
}

export interface GoogleResultSearch {
  additionalLinks: AdditionalLinks[]
  cite: Cite
  description: string
  link: string
  title: string
}
