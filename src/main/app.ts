import { AWSStorage, GoogleStorage } from '../infra'
import { Storage } from '../protocols'
import { StorageNotFoundError } from '../errors'

const TYPE_STORAGE: string = 'GOOGLE'

class App {
  private storage: Storage

  bootstrap (): void {
    switch (TYPE_STORAGE) {
      case 'AWS':
        this.storage = new AWSStorage()
        break
      case 'GOOGLE':
        this.storage = new GoogleStorage()
        break
      default:
        throw new StorageNotFoundError()
    }
  }

  runLogic (): void {
    const path = './description.txt'
    const uploadResult = this.storage.uploadFile(path)
    console.log(`The result of upload is [${String(uploadResult)}].\n`)
  }

  main (): void {
    this.bootstrap()
    this.runLogic()
  }
}

const app = new App()
app.main()
