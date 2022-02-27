---
templateKey: blog-post
title: ANDROID INSTANT APP
date: 2018-01-21T15:04:10.000Z
featuredpost: false
featuredimage: /img/Android-Instant-App.png
description:
tags:
  - Android
---
![](/img/Android-Instant-App.png)

Have you ever thought about the idea to make people use your android app instant ly, without open your app in listing on Google Play Store and make them wonder if they should install it or not.

That idea is called ‘Instant App’ which developed by Google.  
Android Instant Apps allows Android users to run your apps instantly, without installation,

Instant App is a good idea if you want to let people try part of your app and if they do like it they can download it and enjoy the app as is with its full features and screens.

Or if you want try your app for a single purpose, pay for a parking ticket for example.  
Users can get to your app from any URL – including search, social media, messaging, and other [deep links](https://developer.android.com/training/app-links/deep-linking) – without needing to install your app first.  
And if you wonder how the user experience would be, this is not an issue at all, because Instant Apps runs natively and smooth.

As you read previously, Instant app runs in response to launching a URL,  
So how it works exactly?

How does it work?
-----------------

When Google Play receives a request for a URL that matches an instant app, it sends the necessary code files to the Android device that sent the request. The device then runs the app.

The URL which launches instant app must be using HTTPS, Instant apps does not support HTTP.  
Each activity launches by a different route, keep reading, it will be much clear.

Requirements for instant app
----------------------------

To create an instant app you need to following:

*   Android Studio version 3.0 or later
*   Latest Android Support Library
*   Android SDK Build Tools 26+
*   Android SDK Tools 25+
*   Latest Android Repository
*   Android SDK platform O

Android Instant Apps uses the runtime permissions model that was introduced in Android 6.0 (API level 23).  
Instant app also need to break up the app into smaller modules and refactor them into feature modules.  
When making an APK for instant app, the build output are Instant App APKs that contain one or more feature APKs.

Each feature APK is built from a feature module in your project. And can be downloaded on demand by the user and launched as an instant app.

Every instant app must have one base feature APK, which includes all the configuration of the app, and the other modules kind of inherit the configurations from the base feature.

[![instant app apk schema](https://msapps.mobi/wp-content/uploads/2018/01/aia_features_diagram.png)](https://msapps.mobi/wp-content/uploads/2018/01/aia_features_diagram.png)

Instant App APK

As mentioned, your URL must be using HTTPS to launch your app. If you don’t have an HTTPS domain, imho the easiest solution to get one is Firebase hosting service.

Firebase hosting service provides hosting with a HTTPS domain. Which exactly what we to make instant app launch.When you make a new project on Android Studio make sure you enabling ‘Include Android Instant App support’ checkbox.

Beginning
---------

In the configure activity screen you need to provide the URL host(which must be HTTPS), Instant app URL Route, which launch the activity you want in the next input field (Activity name)

[![configure activity for instant app](https://msapps.mobi/wp-content/uploads/2018/01/aia-instant-app-route.png)](https://msapps.mobi/wp-content/uploads/2018/01/aia-instant-app-route.png)

Configure the activity with the App URL and URL route for the instant app.

[![‘Include Android Instant App support’ checkbox](https://msapps.mobi/wp-content/uploads/2018/01/blur.png)](https://msapps.mobi/wp-content/uploads/2018/01/blur.png)

Creation Android Instant App support. Android Studio

After finish all the configurations you need to define entry points for your app. You need to use URL entry points or deep links to launch instant app from a URL. In the manifest file you need to configure it like the following example:

[![snippet of instant app's manifest file](https://msapps.mobi/wp-content/uploads/2018/01/Screen-Shot-2018-01-11-at-12.12.11.png)](https://msapps.mobi/wp-content/uploads/2018/01/Screen-Shot-2018-01-11-at-12.12.11.png)

Snippet from the manifest file that defines an entry-point activity and default URL for an instant app.

\* If you wonder why we include HTTP although that network traffic from inside instant apps must use HTTPS. This is because that all declared intent filters in your instant app must support both HTTPS and HTTP protocols.

There is an App Links Assistant which can help you configure the entry point and the URL’s in your app.

[![app links assistant](https://msapps.mobi/wp-content/uploads/2018/01/App-Links-Assistant.png)](https://msapps.mobi/wp-content/uploads/2018/01/App-Links-Assistant.png)

Android Studio. Top bar menu settings

Step 3
------

in the App Links Assistant, associate the website (from firebase for example) by generating a digital asset links file which is a json file called ‘assetlinks.json’.  
You need to upload that file to your website in a folder named ‘.well-known’.

for example: https://example.com/.well-known/assetlinks.json  
(if you trying to make the .well-known folder and rejected because its name starts with dot,  
Try to make it that folder in the terminal by the command ‘mkdir .well-known’ on both Windows or Mac operating systems, and it might be hidden after creating it.

_\* Try to add Firebase Dynamic Links, which much recommended when making instant apps to guarantee that clicks on your links always take users to your instant app, and to track statistics on link events._

You can generate the assetlinks.json file for dubug and release modes.

After uploading the file to your website, click on ‘Link and Verify’ button to test it.  
You can test it also on ‘https://developers.google.com/digital-asset-links/tools/generator’ by providing the hosting site domain, app package name and the app package fingerprint that can be found in the assetlinks.json file.

Step 4
------

in the App links assistant is to make sure that the corresponding route launches the activity you want and test it on the device or emulator.  
If everything is verified and tested successfully you can build an APK for the base App and the instant app.

When selecting Generate Signed APK, you will be asked to choose the module,  
one for the app itself and the other for the instant app.  
AS will create a zip-file with the APK of your modules when trying to generate a signed APK for instant app.  
In Google Play Developer Console, upload the app APK and then, in the Instant app section, upload the zip file.

After Google approve the app, check the instant app by sharing the URL (with WhatsApp for example) with the route as the entry point which launches the activity you configured in the Manifest file.

I know that lots of things must be done to [develop](https://msapps.mobi/) an Instant App, but in the end of it, it worth all the effort.
