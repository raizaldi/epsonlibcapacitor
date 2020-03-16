declare module "@capacitor/core" {
  interface PluginRegistry {
    Epsonlibcapacitor: EpsonlibcapacitorPlugin;
  }
}

export interface EpsonlibcapacitorPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  Tambah(options: { angka1 : string, angka2: string}) : Promise<{ angka1:string, angka2:string}>;
  Kurang(options: { angka1 : string, angka2: string}) : Promise<{ angka1:string, angka2:string}>;
  Kali(options: { angka1 : string, angka2: string}) : Promise<{ angka1:string, angka2:string}>;
  Bagi(options: { angka1 : string, angka2: string}) : Promise<{ angka1:string, angka2:string}>;
}
