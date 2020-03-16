import { WebPlugin } from '@capacitor/core';
import { EpsonlibcapacitorPlugin } from './definitions';

export class EpsonlibcapacitorWeb extends WebPlugin implements EpsonlibcapacitorPlugin {
  constructor() {
    super({
      name: 'Epsonlibcapacitor',
      platforms: ['web']
    });
  }

  async Hello(options: { value: string }): Promise<{value: string}> {
    console.log('Hello', options);
    return options;
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async Tambah(options: { angka1: string,angka2:string }): Promise<{angka1: string,angka2:string}> {
    console.log('Tambah', options);
    return options;
  }

  async Kurang(options: { angka1: string,angka2:string }): Promise<{angka1: string,angka2:string}> {
    console.log('Kurang', options);
    return options;
  }

  async Kali(options: { angka1: string,angka2:string }): Promise<{angka1: string,angka2:string}> {
    console.log('Kali', options);
    return options;
  }

  async Bagi(options: { angka1: string,angka2:string }): Promise<{angka1: string,angka2:string}> {
    console.log('Bagi', options);
    return options;
  }
}

const Epsonlibcapacitor = new EpsonlibcapacitorWeb();

export { Epsonlibcapacitor };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Epsonlibcapacitor);
