
package com.lazaronixon.formsheet;

import android.app.Activity;
import android.content.DialogInterface;
import android.content.DialogInterface.OnDismissListener;
import android.os.Bundle;
import androidx.appcompat.app.AlertDialog;
import android.view.LayoutInflater;
import android.view.View;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

public class RNFormSheetModule extends ReactContextBaseJavaModule {

    private AlertDialog alertDialog;
    private ReactRootView nativeView;

    public RNFormSheetModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNFormSheetModule";
    }

    @ReactMethod
    public void present(final ReadableMap options) {
        runOnUiThread(new Runnable() {
            public void run() {
                ReactContext reactContext = getReactApplicationContext();
                ReactNativeHost host = ((ReactApplication) reactContext.getApplicationContext()).getReactNativeHost();
                Activity activity = getCurrentActivity();

                String component = options.getString("component");
                int width = options.getInt("width");
                int height = options.getInt("height");
                boolean shouldDismissOnBackgroundViewTap = options.getBoolean("shouldDismissOnBackgroundViewTap");
                ReadableMap props = options.hasKey("passProps") ? options.getMap("passProps") : null;
                Bundle passProps = props != null ? Arguments.toBundle(props) : null;

                AlertDialog.Builder mBuilder = new AlertDialog.Builder(activity);

                LayoutInflater inflater = activity.getLayoutInflater();
                View dialogView = inflater.inflate(R.layout.dialog_native, null);
                nativeView = dialogView.findViewById(R.id.react_root_view);
                nativeView.startReactApplication(host.getReactInstanceManager(), component, passProps);

                mBuilder.setView(dialogView);
                if (alertDialog != null) alertDialog.dismiss();
                alertDialog = mBuilder.create();
                alertDialog.setCanceledOnTouchOutside(shouldDismissOnBackgroundViewTap);
                alertDialog.show();
                alertDialog.getWindow().setLayout(width, height);

                alertDialog.setOnDismissListener(new OnDismissListener() {
                    public void onDismiss(final DialogInterface dialog) {
                        if (nativeView != null) nativeView.unmountReactApplication();
                    }
                });
            }
        });
    }

    @ReactMethod
    public void dismiss() {
        if (alertDialog != null) alertDialog.dismiss();
    }

}