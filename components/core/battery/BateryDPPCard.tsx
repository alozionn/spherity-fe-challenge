import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BatteryDPPInfo } from '@/lib/types/battery'

interface BateryDPPCardProps {
  data: BatteryDPPInfo
}

export default function BateryDPPCard({ data }: BateryDPPCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Battery DPP</CardTitle>
        <CardDescription>Details of the battery</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Model: {data.batteryModel}</p>
        <p>Category: {data.batteryCategory}</p>
        <p>Manufacturer: {data.manufacturer}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <a href="/battery/dpp">Details</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
