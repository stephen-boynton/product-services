export interface Filters {
  [key: string]: string | number | boolean | undefined
}

export const createQueryStrings = <T extends Filters>(filters: T) =>
  Object.entries(filters)
    .filter(([, f]) => f)
    .map(
      ([filter, value], i, arr) =>
        `${filter}=${value}${i < arr.length - 1 ? '&' : ''}`
    )
