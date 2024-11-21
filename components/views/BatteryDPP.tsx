'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getBattery } from '@/lib/api/batteries'
import { QUERIES } from '@/lib/constants/queries'
import { useQuery } from '@tanstack/react-query'
import CellChemistryDetails from '../core/battery/CellChemistryDetails'
import { File } from '@/lib/types/battery'
import { ArrowDownToLine, File as FileIcon } from 'lucide-react'
import { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
          <Card className="col-span-1 lg:col-span-3">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around flex-wrap gap-4">
              <div>
                <h2>Basics</h2>
                <ul className="list-disc pl-8">
                  <li>Rated Capacity: {batteryDPP.ratedCapacity}</li>
                  <li>Category: {batteryDPP.batteryCategory}</li>
                  <li>Lifecycle Status: {batteryDPP.lifeCycleStatus}</li>
                </ul>
              </div>
              <div>
                <h2>Expected Lifetime </h2>
                <ul className="list-disc pl-8">
                  <li>KM: {batteryDPP.expectedLifetimeKm}</li>
                  <li>Miles: {batteryDPP.expectedLifetimeMiles}</li>
                  <li>Years: {batteryDPP.expectedLifetimeYears}</li>
                </ul>
              </div>
              <div>
                <h2>Electronics</h2>
                <ul className="list-disc pl-8">
                  <li>Voltage Maximum: {batteryDPP.voltageMaximum}</li>
                  <li>Voltage Nominal: {batteryDPP.voltageNominal}</li>
                  <li>
                    Trip Energy Efficency: {batteryDPP.tripEnergyEfficiency}
                  </li>
                  <li>
                    Maximum Power Permitted: {batteryDPP.maximumPowerPermitted}
                  </li>
                </ul>
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
            <CardTitle>Files</CardTitle>
          </CardHeader>
          <CardContent>
            <Files
              files={[
                ...batteryDPP.materialFiles,
                ...batteryDPP.supplyChainFiles,
                ...batteryDPP.certificationFiles,
              ]}
            />
          </CardContent>
        </Card>
      </main>
    )
  }
}

function Files({ files }: { files: File[] }) {
  const [visibleFiles, setVisibleFiles] = useState(files)
  const [search, setSearch] = useState('')

  function searchFile(event: React.ChangeEvent<HTMLInputElement>) {
    const newFiles = files.filter((file) =>
      file.fileName
        .toLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    )

    setVisibleFiles(newFiles)
    setSearch(event.target.value)
  }

  return (
    <div>
      <Label htmlFor="searchFile">Search file (by name)</Label>
      <Input
        id="searchFile"
        className="w-1/4 mb-4"
        onChange={searchFile}
        value={search}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {visibleFiles.map((file) => {
          return (
            <Card key={file.fileName}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileIcon />
                  <p>{file.fileName}</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="break-words">
                <p>{file.fileUrl}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p>{file.fileSize}</p>
                <p>{file.uploadDate}</p>
                <Button>
                  <ArrowDownToLine />
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
