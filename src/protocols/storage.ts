import { Client } from './client'

export abstract class Storage {
  public abstract createClient (): Client

  public uploadFile (path: string): boolean {
    return this.createClient().upload(path)
  }
}
