export interface CountryName {
  common: string
  official?: string
}

export interface Country {
  cca3: string
  name: CountryName
  flags?: { svg?: string; png?: string }
  population?: number
  region?: string
  subregion?: string
  capital?: string[]
  tld?: string[]
  languages?: Record<string, string>
  currencies?: Record<string, { name: string; symbol?: string }>
  borders?: string[]
}
