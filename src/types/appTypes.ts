// export type CarType = {
//   type: string
//   date: string
//   _id: string
//   name: string
//   make: string
//   model: string
//   startPrice: number
//   startingPrice: number
//   buyNowPrice: number
//   year: string
//   fuel: string
//   odometer: number
//   transmission: string
//   drive: string
//   color: string
//   description: string
//   extraInfo: string
//   typeSale: string
//   __v: number
//   id: string
//   image1: string
//   image2: string
//   image3: string
//   startingDate: string
//   city: string
//   bids: Array<string | number>
//   time: string | number
//   status: boolean
//   images: string[]
//   url: string
// }

export type CarType = {
  Fuel: string
  KPP: string
  Make: string
  Model: string
  Odometer: string | number
  Price: string | number
  Title: string
  Type: string
  Year:  string | number
  color: string
  description: string
  extra_info: string
  images: string[]
  transmission:  string 
  url: string
  id:  string | number
}
export type ArticleType = {
  id: string
  author: String
  content: String
  date: string
  heading: String
  images: string[]
  image1: string
}
