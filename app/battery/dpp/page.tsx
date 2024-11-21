import BatteryDPP from '@/components/views/BatteryDPP'
import { getBattery } from '@/lib/api/batteries'
import { QUERIES } from '@/lib/constants/queries'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

export default async function BatteryDPPPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERIES.BATTERY],
    queryFn: getBattery,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BatteryDPP />
    </HydrationBoundary>
  )
}
