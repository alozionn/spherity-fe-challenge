'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getBattery } from '@/lib/api/batteries'
import { QUERIES } from '@/lib/constants/queries'
import { useQuery } from '@tanstack/react-query'
import CellChemistryDetails from '../core/battery/CellChemistryDetails'

export default function BatteryDPP() {
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
    const batteryDPP = data.dpp
    return (
      <main className="container py-6 flex justify-center flex-col mx-auto gap-y-6">
        <div className="grid grid-cols-4 gap-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Manufacture Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Model: {batteryDPP.batteryModel}</p>
              <p>Category: {batteryDPP.batteryCategory}</p>
              <p>Manufacturer: {batteryDPP.manufacturer}</p>
              <p>Location: {batteryDPP.manufacturer}</p>
              <p>Manufacturing Place: {batteryDPP.manufacturingPlace}</p>
              <p>Manufacturing Date: {batteryDPP.manufacturingDate}</p>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
              <div>
                <p>Rated Capacity: {batteryDPP.ratedCapacity}</p>
                <p>Category: {batteryDPP.batteryCategory}</p>
                <p>Lifecycle Status: {batteryDPP.lifeCycleStatus}</p>
                <br />
                <p>Expected Lifetime: </p>
                <ul className="list-disc pl-8">
                  <li>KM: {batteryDPP.expectedLifetimeKm}</li>
                  <li>Miles: {batteryDPP.expectedLifetimeMiles}</li>
                  <li>Years: {batteryDPP.expectedLifetimeYears}</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold">Electronics</h2>
                <p>Voltage Maximum: {batteryDPP.voltageMaximum}</p>
                <p>Voltage Nominal: {batteryDPP.voltageNominal}</p>
                <p>Trip Energy Efficency: {batteryDPP.tripEnergyEfficiency}</p>
                <p>
                  Maximum Power Permitted: {batteryDPP.maximumPowerPermitted}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Cell Chemistry</CardTitle>
          </CardHeader>
          <CardContent>
            <CellChemistryDetails cellChemistry={batteryDPP.cellChemistry} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Material Files</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Model: {batteryDPP.batteryModel}</p>
            <p>Category: {batteryDPP.batteryCategory}</p>
            <p>Manufacturer: {batteryDPP.manufacturer}</p>
            <p>Location: {batteryDPP.manufacturer}</p>
          </CardContent>
        </Card>
      </main>
    )
  }
}
