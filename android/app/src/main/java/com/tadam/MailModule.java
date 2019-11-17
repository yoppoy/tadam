package com.tadam;


import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.content.Intent;


public class MailModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    MailModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "MailOpener";
    }


    @ReactMethod
    public void open() {
        Intent intent = new Intent(Intent.ACTION_MAIN);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.addCategory(Intent.CATEGORY_APP_EMAIL);
        getReactApplicationContext().startActivity(intent);
    }
}
