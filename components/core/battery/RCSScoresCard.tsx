import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'

import { RCSScoresInfo } from '@/lib/types/battery'

const RADIAL_BAR_CHART_START_ANGLE = 180

const esgScoreChartConfig = {
  esgScore: {
    label: 'ESG Score',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

const dueDiligenceScoreChartConfig = {
  dueDiligenceScore: {
    label: 'Due Dilligence Score',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

const greenhouseGasScoreChartConfig = {
  greenhouseGasScore: {
    label: 'Greenhouse Gas Score',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

interface RCSScoresCardProps {
  data: RCSScoresInfo
}

export default function RCSScoresCard({ data }: RCSScoresCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>RCS Scores</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <Card>
          <CardHeader>ESG</CardHeader>
          <CardDescription>
            <ChartContainer
              config={esgScoreChartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={[
                  { esgScore: data.esgScore, fill: 'var(--color-esgScore)' },
                ]}
                startAngle={RADIAL_BAR_CHART_START_ANGLE}
                endAngle={
                  RADIAL_BAR_CHART_START_ANGLE -
                  RADIAL_BAR_CHART_START_ANGLE * (parseInt(data.esgScore) / 100)
                }
                innerRadius={80}
                outerRadius={140}
              >
                <RadialBar dataKey="esgScore" background />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-4xl font-bold"
                            >
                              {data.esgScore}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              EXCELLENT
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>Due Dilligence</CardHeader>
          <CardDescription>
            <ChartContainer
              config={dueDiligenceScoreChartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={[
                  {
                    dueDiligenceScore: data.dueDiligenceScore,
                    fill: 'var(--color-dueDiligenceScore)',
                  },
                ]}
                startAngle={RADIAL_BAR_CHART_START_ANGLE}
                endAngle={
                  RADIAL_BAR_CHART_START_ANGLE -
                  RADIAL_BAR_CHART_START_ANGLE *
                    (parseInt(data.dueDiligenceScore) / 100)
                }
                innerRadius={80}
                outerRadius={140}
              >
                <RadialBar dataKey="dueDiligenceScore" background />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-4xl font-bold"
                            >
                              {data.dueDiligenceScore}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              GOOD
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>Greenhouse Gas</CardHeader>
          <CardDescription>
            <ChartContainer
              config={greenhouseGasScoreChartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={[
                  {
                    greenhouseGasScore: data.greenhouseGasScore,
                    fill: 'var(--color-greenhouseGasScore)',
                  },
                ]}
                startAngle={RADIAL_BAR_CHART_START_ANGLE}
                endAngle={
                  RADIAL_BAR_CHART_START_ANGLE -
                  RADIAL_BAR_CHART_START_ANGLE *
                    (parseInt(data.greenhouseGasScore) / 100)
                }
                innerRadius={80}
                outerRadius={140}
              >
                <RadialBar dataKey="greenhouseGasScore" background />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-4xl font-bold"
                            >
                              B
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              {data.greenhouseGasScore}
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </CardDescription>
        </Card>
      </CardContent>
    </Card>
  )
}
