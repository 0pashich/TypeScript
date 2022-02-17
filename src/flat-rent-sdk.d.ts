
export type Database = Item[];
export type Coordinates = [number, number]

export interface Item {
  id: string
  title: string
  details: string
  photos: string[]
  coordinates: Coordinates
  bookedDates: unknown[]
  price: number
}
export interface FormattedItem extends Item {
  totalPrice: number
}
export interface Parameters {
  city?: string
  checkInDate?: Date
  CheckOutDate?: Date
  priceLimit?: number
}

declare const database: Database
declare const backendPort: number
declare const localStorageKey: string


export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date

export class FlatRentSdk {
  database: Database
  /**
   * Get flat by ID.
   * 
   * @param {string} id Flat ID.
   * @returns {Promise<Object|null>} Flat.
   */
  get(id: string): Promise<Item | null>

  /**
   * Search for flats.
   * 
   * @param {Object} parameters Search parameters
   * @param {string}parameters.city City name
   * @param {Date} parameters.checkInDate Check-in date
   * @param {Date} parameters.checkOutDate Check-out date
   * @param {number} [parameters.priceLimit] Max price for a night
   * @returns {Object[]} List of suitable flats.
   */
  search(parameters: Parameters): Promise<Database>

  /**
   * Book flat.
   * 
   * @param {number} flatId 
   * @param {Date} checkInDate 
   * @param {Date} checkOutDate
   * @returns {number}
   */
  book(flatId: number, checkInDate: Date, checkOutDate: Date): Promise<number>

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void
  _resetTime(date: Date): void
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number
  _generateDateRange(from: Date, to: Date): Date[]
  _generateTransactionId(): number
  _areAllDatesAvailable(flat: Item, dateRange: Date[]): boolean
  _formatFlatObject(flat: Item, nightNumber?: number): FormattedItem
  _readDatabase(): Database
  _writeDatabase(database: Database): void
  _syncDatabase(database: Database): void
}
