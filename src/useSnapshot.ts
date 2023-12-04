import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Region } from "./regions";
import { FuelType } from "./fuel-types";

export const DISCRIMINATORS = {
  demand: "DemandInputMetadata",
  generation: "GenerationInputMetadata",
};

export type Discriminator =
  (typeof DISCRIMINATORS)[keyof typeof DISCRIMINATORS];

export interface Metadata {
  region: Region;
  fuelType: FuelType;
  identifier: string;
  discriminator: Discriminator;
}

export interface SeriesItem {
  id: string;
  timeStamp: string;
  value: number;
  metadata: Metadata;
}

export interface Data {
  timeStamp: string;
  seriesCollection: SeriesItem[];
}

async function fetchSnapshot() {
  const response = await fetch(
    "https://ausrealtimefueltype.global-roam.com/api/seriessnapshot"
  );
  const data = (await response.json()) as Data;
  return data;
}

export function useSnapshot(options?: UseQueryOptions<Data>) {
  return useQuery({
    ...options,
    queryKey: ["snapshot"],
    queryFn: fetchSnapshot,
  });
}
