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

    private boolean _isDetox() {
      try {
        Class<?> instrumentationRegistry = Class.forName("androidx.test.platform.app.InstrumentationRegistry");
        Method getArguments = instrumentationRegistry.getMethod("getArguments");
        Bundle args = (Bundle) getArguments.invoke(null);
        boolean argsContainDetox = args != null && args.getString("detoxServer") != null;

        return argsContainDetox;
      } catch (Exception e) {
        return false;
      }
    }

    @ReactMethod
    public void isDetox(Promise promise) {
      promise.resolve(this._isDetox());
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public boolean isDetoxSync() {
      return this._isDetox();
    }
}
