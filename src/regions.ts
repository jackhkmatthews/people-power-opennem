export const RegionIds = {
  QLD: "QLD",
  NSW: "NSW",
  VIC: "VIC",
  WA: "WA",
  SA: "SA",
  TAS: "TAS",
} as const;

export const RegionIdArray = Object.values(RegionIds);

export type RegionId = (typeof RegionIds)[keyof typeof RegionIds];

export interface Region {
  id: RegionId;
  abbreviation: string;
  name: string;
  order: number;
}

export const QLDRegion: Region = {
  id: "QLD",
  abbreviation: "QLD",
  name: "Queensland",
  order: 6,
};
