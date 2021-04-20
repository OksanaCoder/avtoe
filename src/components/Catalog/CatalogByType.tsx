import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CarType } from '../../types/appTypes'
import Catalog from './Catalog'

type Props = {
  data: CarType[]
}

const CatalogByType = ({ data = [] }: Props) => {
  const { type } = useParams<{ type: string }>()
  const [filteredData, setFilteredData] = useState<CarType[]>([])

  useEffect(() => {
    if (type) {
      setFilteredData(data.filter((item) => item.type === type))
    }
  }, [data, type])

  return <Catalog data={filteredData} />
}

export default CatalogByType
