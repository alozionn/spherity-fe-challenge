import { Battery } from '../types/battery'
import { api } from './core'

export async function getBattery() {
  try {
    const batteryData = await api.get('/').json()

    if (!batteryData) return

    // @ts-expect-error skip because we know it's an array
    const reducedData = batteryData.reduce((ac, cv) => {
      if (
        cv.id ==
        'urn:dpp:ev-battery-cell-batch-quality-assurance-1-0-19:e60e9de6-9bfe-4a86-96c2-8256328ca6d2'
      ) {
        ac.cellBatchQA = { ...cv.credentialSubject }
      }
      if (
        cv.id ==
        'urn:dpp:spherity-battery-dpp-1-0-15:f8a20e31-314a-431a-b479-ac001a9a0dcd'
      ) {
        ac.dpp = { ...cv.credentialSubject }
      }
      if (
        cv.id ==
        'urn:dpp:rcs-battery-manufacturer-scores-1-0-7:ec39912a-6063-4527-85b4-599b05601e85'
      ) {
        ac.rcsScores = { ...cv.credentialSubject }
      }
      return ac
      //@ts-expect-error skip because we know it's an array
    }, batteryData[0])

    const battery: Battery = {
      id: reducedData.id,
      cellBatchQA: reducedData.cellBatchQA,
      dpp: reducedData.dpp,
      rcsScores: reducedData.rcsScores,
    }

    return battery
  } catch (error) {
    console.error(error)
  }

  return ''
}
