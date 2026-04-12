export interface SubCard {
  title: string
  body: string
}

export interface Card {
  id: string
  title: string
  icon: string
  summary: string
  subcards: SubCard[]
}

export interface SiteConfig {
  title: string
  framing: string
  notebooklmUrl: string
  cards: Card[]
}
