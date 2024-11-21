import { camelCaseToWords } from '@/lib/helpers/core'
import { CellChemistry } from '@/lib/types/battery'

interface CellChemistryDetailsProps {
  cellChemistry: CellChemistry
}
export default function CellChemistryDetails({
  cellChemistry,
}: CellChemistryDetailsProps) {
  const materialsTypes = Object.keys(cellChemistry)

  return (
    <>
      {materialsTypes.map((materialType) => {
        return (
          <div key={materialType}>
            {camelCaseToWords(materialType)}{' '}
            {cellChemistry[materialType as keyof CellChemistry].map(
              (material) => {
                return (
                  <p key={material.materialName}>{material.materialName}</p>
                )
              }
            )}
          </div>
        )
      })}
    </>
  )
}
