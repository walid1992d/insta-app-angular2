# insta-app-angular2
Boilerplate allows you to write Angular app and package it out of the box as  web,mobile and desktop apps, it's boiler plate uses Angular 8 and Typescript 3 for the web, Ionic 4 (with ionic cli 5) for the mobile, and  Electron 5 for desktop.

<i>
for  older version which works on Angular5 and Ionic 3 follow this link
<a href="https://github.ibm.com/Walid-Abou-Ali/insta-app-angular">https://github.ibm.com/Walid-Abou-Ali/insta-app-angular </a><i>

# Overview
The name stands for “Instant App using Angular" so the purpose of it is to allow the developers to build apps using Angular in the easiest way, and I when says apps I mean web, mobile and desktop apps, so the developer can write the normal Ionic/Angular code he used to do for web and  build  it as IOS/Android App and OSX/Windows/Linux app without the need to learn new frameworks.
 
### Which developers will benefit from this?
Developers who needs to build MVP or small to medium apps for mobile or desktop with no requirement to do much hardware interaction, for example if you are building an app that’s all about requesting APIs and rendering data with no need to do background threading on mobile or complicated hardware interaction on desktop, this boilerplate allows you to build that with the react skills you know with no need to go for react-native,native script,Java or Swift for mobile, or going to C# NET or Swift to develop desktop apps.
Developers who needs to build MVP or small to medium app that needs to run on more than one platform , so instead of writing code for web , one for mobile and one for desktop it’s the single source code that deploys to all these platforms, and also the app shouldn’t have requirements that are beyond webview cordova and electron functionalities. In the case of multi platforms app the boilerplate also  has a utility to detect the platform ,so you can do a piece of code that only run on mobile and another one that run only desktop, you can find more details about this in the Readme file.
 
### Business Advantages
Angular exists in the IBM Garage Enterprise Stack even I noticed it's not used much till now (compared to react), If in near future we are having more Angular projects then this boilerplate helps the developers to utilize the existing Angular skills they have to build mobile and desktop apps  in shorter time instead of learning new frameworks (as soon as the requirements don’t need the power of native frameworks)
In case of MVP/app that needs to run on multi platforms it will decrease the resources cost as no need to put dedicated resources for each platform or let the resources working on multi platforms code so they take longer time which means more money, its one code shipped to all platforms
 
### Technical Stack Summary
I started from Ionic 4 Angular Blank Template and integrated electron for desktop builds.


# Getting Started

To run the app follow these instructions:

- Clone the repository 

    ```
    git clone https://github.ibm.com/Walid-Abou-Ali/intsa-app-angular2 
    ```

- Install the depenecies

    ```
    npm install
    ```

-  install ionic,cordova,electron globally

    ```
    npm install -g ionic
    npm install -g cordova
    npm install -g electron
    npm install -g corodva-res
    ```

## Serving the app in web mode
- the app is configured to run by default in web, just run 
    ```
    npm start
    ```
it will start on `http://localhost:4200/`

## Serving the app on Android Device
- Go to your Android device settings, and open `About Phone`
- Click 7 times on the `Build Number' to enable Developer Options in Android
-  Search in your settings for Developer Options and enable it
- Under Developer Option enable `USB Debugging`
- connect the mobile device through USB cable
- make sure the device is `File Transfer` mode when you are asked to select
- Make sure your JAVA_HOME on your machine is pointing to Java8 not later version
- run the android serving script
    ```
    npm run start:android
    ```


## Serving the app on IOS Device
Serving the app on IOS is not tesed yet, you can try it by yourself using the script

```
npm run start:ios
```
and feel free to update this Readme by the detailed steps. 
You can also go to the `Building the App for IOS` section, follow the steps, open the built project on Xcode then run it on device

## Serving the app on Desktop
- run the script
    ```
    npm run start:desktop
    ```
# SRC Folder Structure
| Foldername   | Description                                                                                                                                  |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| app          | has the main angular app module /app component and all other app elements                                                                                         |
| assets       | contains app assets like images/fonts                                                                                                                                                               |
| theme        | contains main theme files, currenly only variables.scss which themes the whole app |
| app/components   | contains the app components  |
| app/pages        | contains the app pages |
| app/services    | contains the app services, like services to fetch data from backend  |
|environments| contains the app environemnt files|


# Progressive Web App (PWA)
The web version comes with service worker enabled, and all modules are lazy loaded so the app has full support for PWA capabilities

to edit the service worker config like App name,icon...etc simple edit the `src/manifest.webmanifest`

# Adding new component
- Create the components file manually in the components folder, or use the ionic cli to generate a new component
```ionic generate component components/mycomponent```


# Adding new service
- Create the serivce file manually in the providers folder, or use the ionic cli to generate a new service
```ionic generate service services/myservice```

# Adding new page
- Create the page file manually in the pages folder, or use the ionic cli to generate a new page
```ionic generate page pages/mypage```

# Detect Device Platform
THe boiler comes out of the box with service `PlatfromService`  that detects the platform that the app is running in, its usefull of you want to write a code does specific thing in a spicific platform, it has these getter functions


| Getter Function  | Description                                                                         |
|------------------|-------------------------------------------------------------------------------------|
| isBrowser        | returns true if the app is running as web app in browser on any device              |
| isDesktopBrowser | returns true if the app is running as web app in browser on a desktop device        |
| isMobileBrowser  | returns true if the app is running as web app in browser on a mobile device         |
| isIOSBrowser     | returns true if the app is running as web app in browser on a mobile IOS device     |
| isAndroidBrowser | returns true if the app is running as web app in browser on a mobile Android device |
| isMobileDevice   | returns true if the app is running as mobile app on IOS/Android Device              |
| isIOSDevice      | returns true if the app is running as mobile app on IOS Device                      |
| isAndroidDevice  | returns true if the app is running as mobile app on Android Device                  |
| isDesktopDevice  | returns true if the app is running as desktop app on a desktop device               |

you can find sample implementation in  `src/app/pages/playground`



# Unit Testing
the boiler plate uses Jasmin with Karma task runner for unit testing as they are the standard for Angular projects

to run the unit tests use the command
```
npm test
```



# Enviroments
Under `src/environments` you find a file for each environment, you can add the environemnt variables in it, and there is the default file `environment.ts` which is used in unit testing.
As the boilerplate uses Angular cli capabilites it configures environemnts by replacing `environment.ts` with the rigt environment file, so in your code you always import `environment.ts`
 testing. While building the app you can select between `local`, `dev` and `prod`, it will be covered in details in Build the App section


# Setting the App Info
to set the app info like name, icon, description , version follow the steps of each platform

## Setting the App Info for Web App

You just need to the set the service worker config  by editing the `src/webmanifest.json`

## Setting the App Info for Mobile App

All mobile app info are in `config.xml`, you set there the app name, package name, version, description, but to edit the icon/splash screen follow these steps:

- replace `resources/icon.png` and `resources/spash.png` with your icon and spash files, make sure to keep the same name, format and images dimentions as the original files.


- run the command 
  ```
  ionic cordova resources
  ```


## Setting the App Info for Desktop App
 - to set the app name/info go to `electron-scripts/app-info.js`, and set the desired values
 - to set the icon, replace these icon files with your own icons and make sure to keep same name and format
 `resources/icon.icns`
 `resources/icon.ico`,
 `resources/icon.png`,


# Building the App
## Building the App for Web
run the script
```
npm run build
```
it  will build tha app by default for local env, if you want to specify the envronment from `local`,`dev`,`prod`, use the corresponding script for each env, 

```
npm run build:browser:local
npm run build:browser:dev
npm run build:browser:prod
 ```



 the output build will be under `www` folder


 ## Building the App for IOS/Android
run the script according to the desired env and platform

```
npm run build:android:local
npm run build:android:dev
npm run build:android:prod
npm run build:ios:local
npm run build:ios:dev
npm run build:ios:prod
 ```

for android  make sure your JAVA_HOME on your machine is pointing to Java8 not later version

 the output android  project will be under `platforms/android` folder and you can find the unsigned APK under `platforms/android/app/build/outputs/apk`. To continue further steps on the android build like signing the APK and publishing to the store, open the android build in Android Studio and do all the steps there like any native Android project

 For IOS the output Xcode project will be under `platforms/ios`, open it in Xcode and you can run it on device or publish it to the store from there.



 ## Building the App for OSX/Windows/Linux
run the script according to the desired OS and ENV

```
npm run build:osx:local
npm run build:osx:dev
npm run build:osx:prod
npm run build:windows:local
npm run build:windows:dev
npm run build:windows:prod
npm run build:linux:local
npm run build:linux:dev
npm run build:linux:prod
 ```




the output builds will be under `platforms` with app name and suffix for every OS, for example 
```
IBM Garage Angular-darwin-x64
IBM Garage Angular-linux-x64
IBM Garage Angular-win32-ia32
```
Please note that only the OSX build is tested by me till now and it works fine. for the windows and linux build didn't test them yet but expecting no problems in them




