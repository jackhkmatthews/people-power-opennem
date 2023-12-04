export const FuelTypeIDs = {
  blackCoal: "Black Coal",
  gas: "Gas",
  liquidFuel: "Liquid Fuel",
  other: "Other",
  hydro: "Hydro",
  wind: "Wind",
  largeSolar: "Large Solar",
  smallSolar: "Small Solar",
  brownCoal: "Brown Coal",
  batteryStorage: "Battery Storage",
  operationalDemand: "Operational Demand",
  pumpingHydroDemand: "Hydro",
  batteryChargingDemand: "Battery Storage",
  aemoCantSeeDemand: "DemandAemoCanNotSee",
} as const;

export const FuelTypeIDArray = Object.values(FuelTypeIDs);

export type FuelTypeID = (typeof FuelTypeIDs)[keyof typeof FuelTypeIDs];

export interface FuelType {
  id: FuelTypeID;
  order: number;
  name: string;
}

export const blackCoalFuelType: FuelType = {
  id: "Black Coal",
  order: 1,
  name: "Black Coal",
};

export const gasFuelType: FuelType = {
  id: "Gas",
  order: 3,
  name: "Gas",
};

export const liquidFuelFuelType: FuelType = {
  id: "Liquid Fuel",
  order: 4,
  name: "Liquid Fuel",
};

export const otherFuelType: FuelType = {
  id: "Other",
  order: 5,
  name: "Other",
};

export const hydroFuelType: FuelType = {
  id: "Hydro",
  order: 6,
  name: "Hydro",
};

export const windFuelType: FuelType = {
  id: "Wind",
  order: 7,
  name: "Wind",
};

export const largeSolarFuelType: FuelType = {
  id: "Large Solar",
  order: 8,
  name: "Large Solar",
};

export const smallSolarFuelType: FuelType = {
  id: "Small Solar",
  order: 9,
  name: "Small Solar",
};

export const batteryStorageFuelType: FuelType = {
  id: "Battery Storage",
  order: 10,
  name: "Battery Storage",
};

export const operationalDemandType: FuelType = {
  id: "Operational Demand",
  order: 101,
  name: "Demand (AEMO Operational)",
};

export const pumpingHydroDemandType: FuelType = {
  id: "Hydro",
  order: 102,
  name: "Demand (Pumping Hydro)",
};

export const batteryChargingDemandType: FuelType = {
  id: "Battery Storage",
  order: 103,
  name: "Demand (Battery Charging)",
};

export const aemoCantSeeDemandType: FuelType = {
  id: "DemandAemoCanNotSee",
  order: 104,
  name: "Demand (The AEMO can't see)",
};
