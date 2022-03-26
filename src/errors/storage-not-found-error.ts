export class StorageNotFoundError extends Error {
  constructor () {
    super('This storage does not exist.')
    this.name = 'StorageNotFoundError'
  }
}
