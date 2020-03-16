import { WebPlugin } from '@capacitor/core';
import { EpsonlibcapacitorPlugin } from './definitions';
export declare class EpsonlibcapacitorWeb extends WebPlugin implements EpsonlibcapacitorPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    Tambah(options: {
        angka1: string;
        angka2: string;
    }): Promise<{
        angka1: string;
        angka2: string;
    }>;
    Kurang(options: {
        angka1: string;
        angka2: string;
    }): Promise<{
        angka1: string;
        angka2: string;
    }>;
    Kali(options: {
        angka1: string;
        angka2: string;
    }): Promise<{
        angka1: string;
        angka2: string;
    }>;
    Bagi(options: {
        angka1: string;
        angka2: string;
    }): Promise<{
        angka1: string;
        angka2: string;
    }>;
}
declare const Epsonlibcapacitor: EpsonlibcapacitorWeb;
export { Epsonlibcapacitor };
