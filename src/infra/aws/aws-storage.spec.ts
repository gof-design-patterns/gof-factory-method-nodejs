import { FileNotFoundError } from '../../errors/file-not-found-error'
import { AWSStorage, AWSStorageClient } from './aws-storage'
import { Storage } from '../../protocols'

type SutTypes = {
  sut: AWSStorage
}

const makeSut = (): SutTypes => {
  const sut = new AWSStorage()
  return { sut }
}

describe('AWS Storage', () => {
  test('Should return an object of type Storage', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Storage)
  })

  test('Should return an object of type AWSStorageClient', () => {
    const { sut } = makeSut()
    expect(sut.createClient()).toBeInstanceOf(AWSStorageClient)
  })

  test('Should return true if the upload was successful', () => {
    const { sut } = makeSut()
    expect(sut.uploadFile('./describe')).toEqual(true)
  })

  test('Should call console.log', () => {
    const { sut } = makeSut()

    jest.spyOn(console, 'log')
    sut.uploadFile('./describe')
    expect(console.log).toHaveBeenCalled()
  })

  test('Should return FileNotFoundError if the path is void', () => {
    const { sut } = makeSut()
    expect(() => sut.uploadFile('')).toThrow(FileNotFoundError)
  })
})
