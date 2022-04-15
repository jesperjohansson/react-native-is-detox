package com.reactnativeisdetox;

import android.os.Bundle;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.lang.reflect.Method;

@ReactModule(name = IsDetoxModule.NAME)
public class IsDetoxModule extends ReactContextBaseJavaModule {
    public static final String NAME = "IsDetox";

    public IsDetoxModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    public void isDetox(Promise promise) {
      try {
        Class<?> instrumentationRegistry = Class.forName("android.support.test.InstrumentationRegistry");
        Method getArguments = instrumentationRegistry.getMethod("getArguments");
        Bundle args = (Bundle) getArguments.invoke(null);
        boolean argsContainDetox = args != null && args.getString("detoxServer") != null;
        promise.resolve(argsContainDetox);
      } catch (Exception e) {
        promise.resolve(false);
      }
    }

    public static native int nativeMultiply(int a, int b);
}
