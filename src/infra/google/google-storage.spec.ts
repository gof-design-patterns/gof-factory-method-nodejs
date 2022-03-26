import { FileNotFoundError } from '../../errors/file-not-found-error'
import { GoogleStorage, GoogleStorageClient } from './google-storage'
import { Storage } from '../../protocols'

type SutTypes = {
  sut: GoogleStorage
}

const makeSut = (): SutTypes => {
  const sut = new GoogleStorage()
  return { sut }
}

describe('AWS Storage', () => {
  test('Should return an object of type Storage', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Storage)
  })

  test('Should return an object of type GoogleStorageClient', () => {
    const { sut } = makeSut()
    expect(sut.createClient()).toBeInstanceOf(GoogleStorageClient)
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
