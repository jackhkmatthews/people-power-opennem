import { DISCRIMINATORS, SeriesItem, useSnapshot } from "./useSnapshot";
import { RegionId, RegionIdArray } from "./regions";
import { useState } from "react";

function getStateDataPoints(items?: SeriesItem[], regionId?: RegionId) {
  if (!items || !regionId) return items;
  return items.filter((item) => item.metadata.region.id === regionId);
}

function getDemandFuelTypeName(fuelTypeName: string) {
  const regex = /Demand \(([^)]+)\)/;
  const match = fuelTypeName.match(regex);

  // Check if there is a match and return the captured text
  return match ? match[1] : null;
}

export function Snapshot() {
  const snapShot = useSnapshot();
  const [state, setState] = useState<RegionId>("NSW");

  const stateDataPoints = getStateDataPoints(
    snapShot.data?.seriesCollection,
    state
  );

  const { demand, generation } = (stateDataPoints || []).reduce(
    (acc, curr) => {
      if (curr.metadata.discriminator === DISCRIMINATORS.demand) {
        return { ...acc, demand: [...acc.demand, curr] };
      } else if (curr.metadata.discriminator === DISCRIMINATORS.generation) {
        return { ...acc, generation: [...acc.generation, curr] };
      } else {
        return acc;
      }
    },
    { demand: [] as SeriesItem[], generation: [] as SeriesItem[] }
  );

  return (
    <div className="flex flex-col gap-3 items-center justify-center pt-20">
      <select
        value={state}
        onChange={(e) => setState(e.target.value as RegionId)}
      >
        {RegionIdArray.map((regionId) => (
          <option key={regionId} value={regionId}>
            {regionId}
          </option>
        ))}
      </select>
      {snapShot.isLoading ? (
        <div>Loading...</div>
      ) : snapShot.isError ? (
        <div>Error: {snapShot.error.message}</div>
      ) : (
        <>
          <h1 className="text-3xl">Generation</h1>
          <table>
            <thead>
              <tr>
                <th>Fuel Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {generation?.map((item) => (
                <tr key={item.metadata.fuelType.id}>
                  <td>{item.metadata.fuelType.name}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className="text-3xl">Demand</h1>
          <table>
            <thead>
              <tr>
                <th>Fuel Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {demand?.map((item) => (
                <tr key={item.metadata.fuelType.id}>
                  <td>{getDemandFuelTypeName(item.metadata.fuelType.name)}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
