import { FileNotFoundError } from '../../errors'
import { Storage, Client } from '../../protocols'

export class GoogleStorageClient implements Client {
  public upload (path: string): boolean {
    console.log(`The file [${path}] was uploaded to [Google].`)
    if (path.trim().length === 0) throw new FileNotFoundError()

    return true
  }
}
export class GoogleStorage extends Storage {
  public createClient (): Client {
    return new GoogleStorageClient()
  }
}
