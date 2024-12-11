package com.startupapp
import com.facebook.react.bridge.JSIModulePackage
import com.swmansion.reanimated.ReanimatedJSIModulePackage
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "StartUpApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  /**
   * Returns the JSIModulePackage for enabling JS Modules, especially Reanimated
   */
  override fun getJSIModulePackage(): JSIModulePackage? {
      return ReanimatedJSIModulePackage() // Reanimated JSIModulePackage'ini ekliyoruz
  }
}
