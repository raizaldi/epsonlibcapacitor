package com.lib.capacitor;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class Epsonlibcapacitor extends Plugin {

    public static final String CHANGE_EVENT = "StatusChange";


    public void Hello(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "Hello World");
        call.success(ret);
    }

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void Tambah(PluginCall call) {
        String angka1 = call.getString("angka1");
        String angka2 = call.getString("angka2");
        float hitung = Float.parseFloat(angka1) + Float.parseFloat(angka2);
        JSObject ret = new JSObject();
        ret.put("Total", String.valueOf(hitung));
        call.success(ret);
    }

    @PluginMethod()
    public void Kurang(PluginCall call) {
        String angka1 = call.getString("angka1");
        String angka2 = call.getString("angka2");
        float hitung = Float.parseFloat(angka1) - Float.parseFloat(angka2);
        JSObject ret = new JSObject();
        ret.put("Total", String.valueOf(hitung));
        call.success(ret);
    }

    @PluginMethod()
    public void Kali(PluginCall call) {
        String angka1 = call.getString("angka1");
        String angka2 = call.getString("angka2");
        float hitung = Float.parseFloat(angka1) * Float.parseFloat(angka2);
        JSObject ret = new JSObject();
        ret.put("Total", String.valueOf(hitung));
        call.success(ret);
    }

    @PluginMethod()
    public void Bagi(PluginCall call) {
        String angka1 = call.getString("angka1");
        String angka2 = call.getString("angka2");
        float hitung = Float.parseFloat(angka1) / Float.parseFloat(angka2);
        JSObject ret = new JSObject();
        ret.put("Total", String.valueOf(hitung));
        call.success(ret);
    }
}
