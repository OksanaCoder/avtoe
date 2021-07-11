export type CarType = {
  Fuel: string
  KPP: string
  Make: string
  Model: string
  Odometer: string | number
  Price: string | number
  Title: string
  Type: string
  Year: string | number
  color: string
  description: string
  extra_info: string
  images: { url: string }[]
  transmission: string
  id: string | number
}

export type ArticleType = {
  id: string
  Author: String
  Description: String
  Title: String
  images: { url: string }[]
}

export type CarItem = {
  Fuel: string
  KPP: string
  Make: string
  Model: string
  Odometer: string | number
  Price: string | number
  Title: string
  Type: string
  Year: string | number
  color: string
  description: string
  extra_info: string
  images: { url: string }[]
  transmission: string
  id: string | number
}

export type AuctionResponse = {
  Date: string
  EndDate: string
  startingPrice: string | number
  car: CarItem
  id: string | number
}
