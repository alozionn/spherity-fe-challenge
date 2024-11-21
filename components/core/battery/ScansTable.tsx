import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { BatteryScan } from '@/lib/types/battery'
import Image from 'next/image'

export default function ScansTable({ scans }: { scans: BatteryScan[] }) {
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
