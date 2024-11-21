import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CellBatchQAInfo } from '@/lib/types/battery'

import ScansTable from './ScansTable'

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
