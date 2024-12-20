export type OptionYear = {
  value: number | string
  label: number | string
}

export const optionsYear: OptionYear[] = [
  { value: 1990, label: 1990 },
  { value: 1991, label: 1991 },
  { value: 1992, label: 1992 },
  { value: 1993, label: 1993 },
  { value: 1994, label: 1994 },
  { value: 1995, label: 1995 },
  { value: 1996, label: 1996 },
  { value: 1997, label: 1997 },
  { value: 1998, label: 1998 },
  { value: 1999, label: 1999 },
  { value: 2000, label: 2000 },
  { value: 2001, label: 2001 },
  { value: 2002, label: 2002 },
  { value: 2003, label: 2003 },
  { value: 2004, label: 2004 },
  { value: 2005, label: 2005 },
  { value: 2006, label: 2006 },
  { value: 2007, label: 2007 },
  { value: 2008, label: 2008 },
  { value: 2009, label: 2009 },
  { value: 2010, label: 2010 },
  { value: 2011, label: 2011 },
  { value: 2012, label: 2012 },
  { value: 2013, label: 2013 },
  { value: 2014, label: 2014 },
  { value: 2015, label: 2015 },
  { value: 2016, label: 2016 },
  { value: 2017, label: 2017 },
  { value: 2018, label: 2018 },
  { value: 2019, label: 2019 },
  { value: 2020, label: 2020 },
  { value: 2021, label: 2021 },
]

export type OptionBrand = {
  value: string
  label: string
}

export const optionsBrand: OptionBrand[] = [
  { value: 'Acura', label: 'Acura' },
  { value: 'Alfa Romeo', label: 'Alfa Romeo' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Audi', label: 'Audi' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Bugatti', label: 'Bugatti' },
  { value: 'Buick', label: 'Buick' },
  { value: 'Cadillac', label: 'Cadillac' },
  { value: 'Chery', label: 'Chery' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Citroen', label: 'Citroen' },
  { value: 'Dacia', label: 'Dacia' },
  { value: 'Daewoo', label: 'Daewoo' },
  { value: 'Daihatsu', label: 'Daihatsu' },
  { value: 'Datsun', label: 'Datsun' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Dodge', label: 'Dodge' },
  { value: 'DS', label: 'DS' },
  { value: 'Ferrari', label: 'Ferrari' },
  { value: 'Fiat', label: 'Fiat' },
  { value: 'Fisker', label: 'Fisker' },
  { value: 'Ford', label: 'Ford' },
  { value: 'Geely', label: 'Geely' },
  { value: 'Genesis', label: 'Genesis' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Honda', label: 'Honda' },
  { value: 'Hummer', label: 'Hummer' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'Infiniti', label: 'Infiniti' },
  { value: 'Isuzu', label: 'Isuzu' },
  { value: 'Iveco', label: 'Iveco' },
  { value: 'Jaguar', label: 'Jaguar' },
  { value: 'Jeep', label: 'Jeep' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Lancia', label: 'Lancia' },
  { value: 'Land Rover', label: 'Land Rover' },
  { value: 'Lexus', label: 'Lexus' },
  { value: 'LincoIn', label: 'LincoIn' },
  { value: 'Maserati', label: 'Maserati' },
  { value: 'Mazda', label: 'Mazda' },
  { value: 'Mercedes', label: 'Mercedes' },
  { value: 'Mercury', label: 'Mercury' },
  { value: 'MG', label: 'MG' },
  { value: 'Mini', label: 'Mini' },
  { value: 'Mitsubisi', label: 'Mitsubisi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Opel', label: 'Opel' },
  { value: 'Pegeot', label: 'Pegeot' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Porsche', label: 'Porsche' },
  { value: 'Renault', label: 'Renault' },
  { value: 'Rolls-Royce', label: 'Rolls-Royce' },
  { value: 'Rover', label: 'Rover' },
  { value: 'Saab', label: 'Saab' },
  { value: 'Saturn', label: 'Saturn' },
  { value: 'Scania', label: 'Scania' },
  { value: 'Seat', label: 'Seat' },
  { value: 'Skoda', label: 'Skoda' },
  { value: 'Smart', label: 'Smart' },
  { value: 'SsangYong', label: 'SsangYong' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Suzuki', label: 'Suzuki' },
  { value: 'Tesla', label: 'Tesla' },
  { value: 'Toyota', label: 'Toyota' },
  { value: 'Volkswagen', label: 'Volkswagen' },
  { value: 'Volvo', label: 'Volvo' },
]

export type OptionPrice = {
  id: number
  startPrice: number
  endPrice: number | null
}

export const optionsPrice: OptionPrice[] = [
  {
    id: 1,
    startPrice: 0,
    endPrice: 3000,
  },
  {
    id: 2,
    startPrice: 3000,
    endPrice: 9000,
  },
  {
    id: 3,
    startPrice: 9000,
    endPrice: 20000,
  },
  {
    id: 4,
    startPrice: 20000,
    endPrice: 50000,
  },
  {
    id: 5,
    startPrice: 50000,
    endPrice: null,
  },
]
