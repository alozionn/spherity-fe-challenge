'use client'

import { getBattery } from '@/lib/api/batteries'
import { QUERIES } from '@/lib/constants/queries'
import { useQuery } from '@tanstack/react-query'
import BateryDPPCard from '../core/battery/BateryDPPCard'
import RCSScoresCard from '../core/battery/RCSScoresCard'
import CellBatchQACard from '../core/battery/CellBatchQACard'

export default function Home() {
  const { isPending, isError, isLoading, data, error } = useQuery({
    queryKey: [QUERIES.BATTERY],
    queryFn: () => getBattery(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (data) {
    return (
      <main className="container py-6 flex justify-center flex-col mx-auto gap-y-6">
        <BateryDPPCard data={data.dpp} />
        <CellBatchQACard data={data.cellBatchQA} />
        <RCSScoresCard data={data.rcsScores} />
      </main>
    )
  }
}
