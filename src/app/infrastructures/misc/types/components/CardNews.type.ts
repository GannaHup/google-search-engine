import { GoogleResultNews } from "@/data/responses/contracts/GoogleResponse"

export interface CardNewsProps {
  item: GoogleResultNews
  marked: boolean
  onBookmark: (item: GoogleResultNews) => void
}
