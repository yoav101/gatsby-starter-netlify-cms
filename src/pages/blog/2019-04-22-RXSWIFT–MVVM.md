---
templateKey: blog-post
title: FRXSWIFT – MVVM
date: 2019-07-15T15:04:10.000Z
featuredpost: false
featuredimage: /img/6407041.png
author: MSApps
tags: 
- iOS
---
<style>
img{
  border-radius: 15px;
}
</style>

<!-- ![](/img/6407041.png) -->
<p align="center">
  <img width="280" height="270" src="../../img/6407041.png">
</p>

Every developer should have heard of Rx. Whether it happened at the last developer conference or did a course on it or maybe even reading a book or while reading a blog article like what you see here. It is almost impossible not to have heard of it, but what exactly is [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming "Reactive Programming")? Article about [difference between MVP and MVVM](https://msapps.mobi/ "difference between MVP and MVVM") approaches and patterns

> From Wikipedia, Reactive programming: [In computing, reactive programming is a declarative programming paradigm concerned with data streams and the propagation of change. With this paradigm it is possible to express static (e.g., arrays) or dynamic (e.g., event emitters) data streams with ease, and also communicate that an inferred dependency within the associated execution model exists, which facilitates the automatic propagation of the changed data flow](https://en.wikipedia.org/wiki/Reactive_programming "In computing, reactive programming is a declarative programming paradigm concerned with data streams and the propagation of change. With this paradigm it is possible to express static (e.g., arrays) or dynamic (e.g., event emitters) data streams with ease, and also communicate that an inferred dependency within the associated execution model exists, which facilitates the automatic propagation of the changed data flow")

It’s great when code does exactly what you tell it to. Change something in the code program, tell the code to update, and it does. It sound good no?!?! Most programming in the Object-Oriented era has been imperative like that: Your code tells your program what to do and has many ways to listen to changes—but you generally must actively tell the system when something changes. That’s fine as far as it goes, but wouldn’t it be even better if you could set things up so that when something in your app changes, the code updates automatically? That’s the basic idea of reactive programming: your application can react to changes in the underlying data without you telling it to do so directly.

One of the ways to understand this is how best to use RXSwift is uses the MVVM design pattern. What is MVVM design pattern:

<p align="center">
  <img width="1456" height="524" src="../../img/mvvm-Model-1024x369.png">
</p><br/><br/><br/>

<p style="color:black">The “Model-View ViewModel” design pattern, or “MVVM”, is similar to the MVC as implemented in iOS, but provides betterdecoupling of the UI and business logic. This decoupling results in thin, flexible, and easy-to-read view controller classes in iOS.  MVVM also provides better encapsulation. Business logic and workflows are contained almost exclusively in theviewModel (referred to as the view manager in the example project). The view/view controllers concern themselves only with the UI and know little, if anything, about  the business logic and work flow in the viewModel.<p/>
<p style="color:black">MVVM is built around three fundamental parts: data model, view/view-controller, and viewModel:<p/>

> <p style="color:black">1) Data Model – Just like in the MVC design pattern, the MVVM data model is a class that declares properties for managing business data. For instance, a banking app would need to manage user account data like account balances, transaction history, etc. These data objects are declared in the model as class properties with appropriate getters and setters.<p/>

> <p style="color:black">2) ViewModel – The ViewModel is at the heart of the MVVM design pattern and provides the connection between the business logic and the view/view controller. The view (UI) responds to user input by passing input data (defined by the model) to the viewModel. In turn, the viewModel evaluates the input data and responds with an appropriate UI presentation according business logic workflow. The viewModel then is the hub of activity in the MVVM design, acting as an intelligent traffic control center for the model, business logic, workflow, and view/view-controller.<p/>

> <p style="color:black">3) View/View Controller  –  The view/view controller is the context (i.e. the view controller class) that presents user interface elements. As mentioned above, in iOS the view/view controller is usually coupled to business logic within a view controller class. Conversely, in MVVM, the view/view controller contains little or no business logic and is primarily responding to the viewModel to configure and present UI elements (e.g. table views, buttons, etc.)<p.>

**2 THOUGHTS ON “RXSWIFT – MVVM”**

> Pingback: [Swift Combine - mobile development company's blog](https://msapps.mobi/ "Swift Combine - mobile development company's blog")

> Pingback: [MVVM vs MVP - mobile developement company's blog](https://msapps.mobi/ "MVVM vs MVP - mobile developement company's blog")
