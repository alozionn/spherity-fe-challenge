// for basic typing
export interface Battery {
  id: string
  cellBatchQA: CellBatchQAInfo
  dpp: BatteryDPPInfo
  rcsScores: RCSScoresInfo
}

export interface BatteryMaterial {
  materialName: string
  materialWeight: number
  materialPercentageMassFraction: number
}

export interface CellChemistry {
  anodeActiveMaterials: BatteryMaterial[]
  anodeCompositionOther: BatteryMaterial[]
  cathodeActiveMaterials: BatteryMaterial[]
  electrolyteComposition: BatteryMaterial[]
  cathodeCompositionOther: BatteryMaterial[]
  recyclateContentActiveMaterials: BatteryMaterial[]
}

export interface BatteryScan {
  scanDate: string
  scanImage: string
  scanTitle: string
  scanImageSize: string
  QARequirementsMet: string
}

export interface File {
  fileUrl: string
  fileName: string
  fileSize: string
  uploadDate: string
}

export interface CellBatchQAInfo {
  PPAP: {
    QAConfirmed: true
    approvalDate: '2023-08-01'
  }
  CTScans: {
    impurities: 'None detected'
    anodeOverhang: 'Within specification limits'
    batteryCellScan: BatteryScan
    housingAndTheCathode: BatteryScan
    casingCathodeAndAnode: BatteryScan
    casingAndElectrodeAlignment: 'Perfect alignment'
  }
  batchUUID: '41fdeaaa-e4fa-49e4-92c8-d3bac58c51fe'
  cellSampleUUID: '6331a84e-df51-4b8a-9669-169ed6e550d7'
  performanceMetrics: {
    energyDensity: 250
    capacityRetention: '95% after 500 cycles'
    chargeDischargeRate: '1 hour to charge (10% to 80%), 2C discharge rate'
  }
  safetyDurabilityTests: {
    lifeCycle: '1000 cycles before reaching 70% capacity'
    vibrationShock: 'Can withstand up to 1500G'
    shortCircuitResistance: 'High'
  }
  batteryCellHomologation: {
    chargeRate: '1C'
    energyDensity: 260
    lifeExpectancy: '8 years'
  }
  temperatureToleranceTests: {
    operatingRange: '-20C to 60C'
    thermalStability: '80C'
    coolingEfficiency: '25C to 35C'
  }
}

export interface BatteryDPPInfo {
  id: 'did:web:api-rcs.susi.spherity.dev:did-registry:acme-power-drive-x-1000-3985-cb-1739186-d-8-d'
  esgScore: '87'
  location: '6206 Columbus Junctions'
  voltageMin: '3.2'
  batteryModel: 'ACME-Model-X'
  manufacturer: 'ACME Batteries Inc.'
  batteryWeight: '450'
  cellChemistry: CellChemistry
  materialFiles: [
    {
      fileUrl: 'https://example.com/materialDataSheet1.pdf'
      fileName: 'Material_Data_Sheet_1.pdf'
      fileSize: '1MB'
      uploadDate: '2023-07-20'
    },
  ]
  ratedCapacity: '100'
  voltageMaximum: '4.2'
  voltageNominal: '3.7'
  batteryCategory: 'EV'
  lifeCycleStatus: 'active'
  supplyChainFiles: [
    {
      fileUrl: 'https://example.com/supplyChainReport2023.pdf'
      fileName: 'Supply_Chain_Report_2023.pdf'
      fileSize: '5MB'
      uploadDate: '2023-07-22'
    },
    {
      fileUrl: 'https://jlr-data.pages.dev/dd report.pdf'
      fileName: 'Information of the due diligence report'
      fileSize: '1MB'
      uploadDate: '22/09/2023'
    },
  ]
  dueDiligenceScore: '95'
  manufacturingDate: '2023-07-15'
  certificationFiles: [
    {
      fileUrl: 'https://jlr-data.pages.dev/waste prevention.pdf'
      fileName: 'Preventing and managing waste batteries'
      fileSize: '455'
      uploadDate: '22/09/2023'
    },
    {
      fileUrl: 'https://jlr-data.pages.dev/conformity.pdf'
      fileName: 'EU declaration of conformity'
      fileSize: '513'
      uploadDate: '22/09/2023'
    },
  ]
  expectedLifetimeKm: '200000km'
  greenhouseGasScore: 'A'
  manufacturingPlace: 'Shanghai, China'
  chemistryComposition: 'Li-ion'
  tripEnergyEfficiency: '6.2km/h'
  expectedLifetimeMiles: '124274.238 miles'
  expectedLifetimeYears: '10'
  maximumPowerPermitted: '150'
  cycleLifeReferenceTest: '800 cycles at 80% DOD'
  originalPowerCapability: '100'
  temperatureIdleStateMax: '45'
  temperatureIdleStateMin: '-20'
  commercialWarrantyPeriod: '8'
  initialDischargeCapacity: '95'
  manufacturerIdentification: 'ACME123456'
  exhaustionCapacityThreshold: '80'
}

export interface RCSScoresInfo {
  id: 'did:web:api-rcs.susi.spherity.dev:did-registry:acme-power-drive-x-1000-3985-cb-1739186-d-8-d'
  esgScore: '83'
  dueDiligenceScore: '62'
  greenhouseGasScore: '1806.87'
}
