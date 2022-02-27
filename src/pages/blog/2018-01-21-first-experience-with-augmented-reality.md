---
templateKey: blog-post
title: First experience with augmented reality
date: 2018-01-21T15:04:10.000Z
featuredpost: false
featuredimage: /img/Cat-VR.jpg
description: Brewing with a Chemex probably seems like a complicated, time-consuming ordeal, but once you get used to the process, it becomes a soothing ritual that's worth the effort every time.
tags:
  - Android
  - Augmented Reality
---
![](/img/Cat-VR.jpg)

ARCore is a software development kit developed by Google that allows to build augmented reality applications. When first time I needed to start using ARCore, I started with making little research on the web to find out what is it exactly and what it can do.

### I found out that there are three things that ARCore focuses about:

**Motion tracking**: The ability of the device to determine the position and orientation of the phone as it moves.  
**Environmental understanding**: Detecting of horizontal surfaces like a table or floor in order to place the AR object on.  
**Light estimation**: Estimate and detection the light conditions in the environment to apply AR objects.  
I downloaded a demo from Google Play store to my S8, (which was one of the devices that ARCore can run on, the other one is Pixel) to get a real experience of the ARCore platform and not just watching videos of it on YouTube.

The demo let you place the Android robot on horizontal surfaces (bullet 2 above). I could also see the difference sizes of the objects when I place them close or far from me(bullet 1 above).

Google let you choose what platform you want to develop the [ARCore](https://developers.google.com/ar/),  
I preferred using Unity because Unity has their assets store which you can download 3D objects instead of creating them with OpenGL if I would choose the other option which is Android Studio.

     [![augmented androids](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171030-151541-768x374-768x290.jpg)](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171030-151541-768x374-768x290.jpg)    [![](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171015-135717-150x150.jpg)](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171015-135717-150x150.jpg)  [](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171030-151541-768x374-768x290.jpg)[![](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171015-121522-1024x498-150x150.jpg)](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171015-121522-1024x498-150x150.jpg)

###### Point Cloud’s magic

Then I wanted to switch the Android robot with a different object, I found a quick guide that uses the ARCore SDK of Unity and explains exactly how to do this.  
The guide was really good, explains how to make the surfaces detection (Point Cloud), plenty of small yellow dots that let you see that the device is searching for flat surfaces.

[![augmented reality on the floor](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171030-155313.jpg)](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171030-155313.jpg)

The Points Cloud

Just before the end of guide, the author explains how to insert the 3D asset from Unity assets store to the project,  
It was a small kitty with animations.

     [![](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171016-175856-1-498x1024.jpg)](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171016-175856-1-498x1024.jpg)[![augmented cat in rokevet](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171016-203158.jpg)](https://msapps.mobi/wp-content/uploads/2018/01/Screenshot_20171016-203158.jpg)

I installed the APK of the ARCore project to my device and played with this awhile (including in the train on the way home). Next day I tried to pick other asset from the store and switch the kitty. I downloaded a soccer ball, then a small car, both of them had no animations at all.  
Finally I downloaded a soccer player with few animations, when I added the asset and tested it on the device. I didn’t see any animation unlike the model of the kitty which had a few. Finally I figured out that I should make a Prefab (which is like a GameObject but quite different) and add an Animation Controller to it.

The animation controller is pretty cool. I could choose the order of the animation to be started, for example that the player will first jump, then run and finally slide, and repeat of these 3 actions over and over.

[![](https://msapps.mobi/wp-content/uploads/2018/01/Screen-Shot-2017-10-30-at-16.48.27-269x400.jpg)](https://msapps.mobi/wp-content/uploads/2018/01/Screen-Shot-2017-10-30-at-16.48.27-269x400.jpg)

Animation Controller

I did pretty much the same with ARKit (which is Apple’s augmented reality platform).

I had a really nice and fun experience with augmented reality. And I truly think that in the next few years augmented reality will make our life much easier in many ways. After this experience my next step was directed to [face recognition](https://msapps.mobi/2019/11/26/face-recognition-ios/) on iOS.
