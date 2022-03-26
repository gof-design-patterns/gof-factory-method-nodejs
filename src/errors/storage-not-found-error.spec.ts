import { StorageNotFoundError } from './'

type SutTypes = {
  sut: StorageNotFoundError
}

const makeSut = (): SutTypes => {
  const sut = new StorageNotFoundError()
  return { sut }
}

describe('StorageNotFound', () => {
  test('Should be a type of error', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Error)
  })
  test('Should return a correct message', () => {
    const { sut } = makeSut()
    expect(sut.message).toEqual('This storage does not exist.')
  })
})
