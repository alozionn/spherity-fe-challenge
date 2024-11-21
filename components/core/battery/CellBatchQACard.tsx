import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BatteryScan, CellBatchQAInfo } from '@/lib/types/battery'
import Image from 'next/image'

interface CellBatchQACardProps {
  data: CellBatchQAInfo
}

export default function CellBatchQACard({ data }: CellBatchQACardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cell Batch QA</CardTitle>
        <CardDescription>
          PPAP: QA{' '}
          <Badge
            className={`${data.PPAP.QAConfirmed ? 'bg-lime-700' : 'bg-red-600'}`}
          >
            {data.PPAP.QAConfirmed ? 'YES' : 'NO'}
          </Badge>
          <p>Approved on: ( {data.PPAP.approvalDate} )</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performanceMetrics">
          <TabsList className="grid w-full grid-cols-1 lg:grid-cols-5 h-full">
            <TabsTrigger value="performanceMetrics">
              Performance Metrics
            </TabsTrigger>
            <TabsTrigger value="safetyDurabilityTests">
              Safety Durability Tests
            </TabsTrigger>
            <TabsTrigger value="batteryCellHomologation">
              Battery Cell Homologation
            </TabsTrigger>
            <TabsTrigger value="temperatureToleranceTests">
              Temperature Tolerance Tests
            </TabsTrigger>
            <TabsTrigger value="CTScans">CT Scans</TabsTrigger>
          </TabsList>
          <TabsContent value="CTScans">
            <p>Impurities: {data.CTScans.impurities}</p>
            <p>Anode Overhang: {data.CTScans.anodeOverhang}</p>
            <ScansTable
              scans={[
                data.CTScans.batteryCellScan,
                data.CTScans.housingAndTheCathode,
                data.CTScans.casingCathodeAndAnode,
              ]}
            />
          </TabsContent>
          <TabsContent value="performanceMetrics">
            <p>Energy Density: {data.performanceMetrics.energyDensity}</p>
            <p>
              CapacityRetention: {data.performanceMetrics.capacityRetention}
            </p>
            <p>
              Charge Discharge Rate:{' '}
              {data.performanceMetrics.chargeDischargeRate}
            </p>
          </TabsContent>
          <TabsContent value="safetyDurabilityTests">
            <p>Life cycle: {data.safetyDurabilityTests.lifeCycle}</p>
            <p>Vibration Shock: {data.safetyDurabilityTests.vibrationShock}</p>
            <p>
              Short Circuit Resistance:{' '}
              {data.safetyDurabilityTests.shortCircuitResistance}
            </p>
          </TabsContent>
          <TabsContent value="batteryCellHomologation">
            <p>Charge Rate: {data.batteryCellHomologation.chargeRate}</p>
            <p>Energy Density: {data.batteryCellHomologation.energyDensity}</p>
            <p>
              Life Expectancy: {data.batteryCellHomologation.lifeExpectancy}
            </p>
          </TabsContent>
          <TabsContent value="temperatureToleranceTests">
            <p>
              Operation Range: {data.temperatureToleranceTests.operatingRange}
            </p>
            <p>
              Thermal Stability:{' '}
              {data.temperatureToleranceTests.thermalStability}
            </p>
            <p>
              Cooling Efficency:{' '}
              {data.temperatureToleranceTests.coolingEfficiency}
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function ScansTable({ scans }: { scans: BatteryScan[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Image Size</TableHead>
          <TableHead className="text-right">Requirements Met</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scans.map((scan: BatteryScan) => (
          <TableRow key={scan.scanTitle + scan.scanDate}>
            <TableCell className="font-medium">{scan.scanTitle}</TableCell>
            <TableCell>{scan.scanDate}</TableCell>
            <TableCell>
              <Image
                width={150}
                height={150}
                src={scan.scanImage}
                alt={scan.scanTitle}
              />
            </TableCell>
            <TableCell>{scan.scanImageSize}</TableCell>
            <TableCell className="text-right">
              <Badge
                className={`${scan.QARequirementsMet === 'Yes' ? 'bg-lime-700' : 'bg-red-600'}`}
              >
                {scan.QARequirementsMet}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
