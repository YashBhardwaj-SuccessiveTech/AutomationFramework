appium --allow-insecure chromedriver_autodownload

AVD (Android Virtual Device) Commands:

List all AVDs: avdmanager list avd
List available system images: avdmanager list sys-images
Create a new AVD: avdmanager create avd -n <avd_name> -k "system_image_package" --device "<device_name>"
Delete an AVD: avdmanager delete avd -n <avd_name>
Start an AVD: emulator -avd <avd_name>
Start with additional options: emulator -avd <avd_name> -netdelay none -netspeed full -gpu auto
Wipe data: emulator -avd <avd_name> -wipe-data
Cold boot: emulator -avd <avd_name> -no-snapshot-load
Run emulator in headless mode (no GUI): emulator -avd <avd_name> -no-window


Connect to running emulator: adb devices
Install an APK: adb install path/to/app.apk
Reboot emulator: adb reboot
AVDs are stored in: ~/.android/avd/
System images are installed in: ~/Library/Android/sdk/system-images/
Install APK: adb install <apk_path>
Install APK and allow re-install: adb install -r <apk_path>
Uninstall an app: adb uninstall <package_name>
List installed packages: adb shell pm list packages
List connected devices: adb devices
Connect to a device over Wi-Fi: adb connect <device_ip>:<port>  [Default port is usually 5555.]
Disconnect from a device: adb disconnect <device_ip>:<port>
Push file to device: adb push <local> <remote> [e.g. adb push myfile.txt /sdcard/]
Pull file from device: adb pull <remote> <local> [adb pull /sdcard/myfile.txt ./localcopy.txt]
Start an activity: adb shell am start -n <package>/<activity>
Force stop an app: adb shell am force-stop <package_name>
Clear app data: adb shell pm clear <package_name>


Enter interactive shell: adb shell
Run shell command directly: adb shell <command>    [e.g. adb shell ls /sdcard/]
Reboot device: adb reboot
Reboot to recovery: adb reboot recovery
Reboot to bootloader: adb reboot bootloader
Take screenshot: adb shell screencap /sdcard/screen.png, adb pull /sdcard/screen.png
Record screen: adb shell screenrecord /sdcard/demo.mp4, adb pull /sdcard/demo.mp4
Simulate touch input: adb shell input tap <x> <y>
Simulate text input: adb shell input text "hello"
Forward a port from device to PC: adb forward tcp:<host_port> tcp:<device_port>
Factory reset: adb shell recovery --wipe_data


Start ADB server: adb start-server
Kill ADB server: adb kill-server
Restart ADB server: adb kill-server, adb start-server
Check ADB server status (indirectly): adb devices
Set custom ADB server port (before running any adb command): 
export ADB_SERVER_PORT=5038  # On macOS/Linux
set ADB_SERVER_PORT=5038     # On Windows
Then: adb start-server
Target a specific device: adb -s <device_serial> <command> [adb -s emulator-5554 install app.apk]
Get device serials: adb get-serialno
Installed App package Name: adb shell pm list packages
app activity name: adb shell cmd package resolve-activity --brief <appPackageName> e.g. org.altruist.BajajExperia
Stop running app on Emulator: adb shell am force-stop <appPackageName> e.g. org.altruist.BajajExperia
Find PID of Appium server to kill: netstat -aon | findstr :4723
Kill Appium server: taskkill /PID 19348 /F


adb shell cmd package resolve-activity --brief com.vipplay.app.stg

Example:
com.vipplay.app.dev
com.vipplay.app.dev/com.vipplay.app.MainActivity

com.vipplay.app.stg
com.vipplay.app.stg/com.vipplay.app.MainActivity


{
  "platformName": "Android",
  "appium:platformVersion": "13",
  "appium:deviceName": "emulator-5554",
  "appium:appPackage": "com.vipplay.app.dev",
  "appium:appActivity": "com.vipplay.app.dev/com.vipplay.app.MainActivity",
  "appium:automationName": "UiAutomator2"
}

adb shell am force-stop com.vipplay.app.stg

adb uninstall com.vipplay.app.stg
