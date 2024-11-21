import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'

import { camelCaseToWords } from '@/lib/helpers/core'
import { BatteryMaterial, CellChemistry } from '@/lib/types/battery'

interface CellChemistryDetailsProps {
  cellChemistry: CellChemistry
}
export default function CellChemistryDetails({
  cellChemistry,
}: CellChemistryDetailsProps) {
  const materialsTypes = Object.keys(cellChemistry)
  return (
    <Tabs defaultValue={materialsTypes[0]}>
      <TabsList className="grid w-full grid-cols-1 xl:grid-cols-6 h-full">
        {materialsTypes.map((materialType) => {
          return (
            <TabsTrigger value={materialType} key={materialType}>
              {camelCaseToWords(materialType)}
            </TabsTrigger>
          )
        })}
      </TabsList>
      {materialsTypes.map((materialType) => {
        return (
          <TabsContent key={materialType} value={materialType}>
            <BatteryMaterialTable
              batteryMaterials={
                cellChemistry[materialType as keyof CellChemistry]
              }
            />
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

function BatteryMaterialTable({
  batteryMaterials,
}: {
  batteryMaterials: BatteryMaterial[]
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="text-right">Weight</TableHead>
          <TableHead className="text-right">Percentage Mass Friction</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {batteryMaterials.map((material) => {
          return (
            <TableRow key={material.materialName}>
              <TableCell className="font-medium">
                {material.materialName}
              </TableCell>
              <TableCell className="text-right">
                {material.materialWeight}
              </TableCell>
              <TableCell className="text-right">
                {material.materialPercentageMassFraction}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
