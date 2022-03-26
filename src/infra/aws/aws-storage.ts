import { FileNotFoundError } from '../../errors/file-not-found-error'
import { Storage, Client } from '../../protocols/'

export class AWSStorageClient implements Client {
  public upload (path: string): boolean {
    console.log(`The file [${path}] was uploaded to [AWS].`)
    if (path.trim().length === 0) throw new FileNotFoundError()

    return true
  }
}

export class AWSStorage extends Storage {
  public createClient (): Client {
    return new AWSStorageClient()
  }
}
