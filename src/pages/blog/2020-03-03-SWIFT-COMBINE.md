---
templateKey: blog-post
title: SWIFT COMBINE
date: 2020-03-03T15:04:10.000Z
featuredpost: false
featuredimage: /img/using-combine-swift.png
author: MSApps
tags:
- iOS
---

<!-- ![](/img/using-combine-swift.png) -->
<style>
img{
  border-radius: 15px;
}
</style>
<p align="center">
  <img src="../../img/using-combine-swift.png">
</p>

Last year at the [WWDC2019](https://developer.apple.com/videos/wwdc2019 "WWDC2019"),  Apple has decided to focus on building and releasing their own functional reactive programming framework, Swift Combine. The Combine framework provides a declarative Swift API for processing values over time..

<p align="center">
  <img width="100%" height="100%" src="../../img/ios_swift1-1024x404.jpeg">
</p>

<br/>

Several Foundation types expose their functionality through publishers, including Timer, NotificationCenter, and URLSession. Combine also provides a built-in publisher for any property that’s compliant with Key-Value Observing.

<br/>
I wanted to introduce some of its ideas and show how to integrate it into code with simple example. But first of all I will present you with three important protocols:
<br><br/>

<u><h1>Protocol publisher:</h1></u>

**Declares that a type can transmit a sequence of values over time** <br/><br/>
There are four kinds of messages:

- subscription – A connection between publisher and subscriber.
- value – An element in the sequence.
- error – The sequence ended with an error(.failure(e)).
- completion – The sequence ended successfully (.finished).
Both .failure and .finished are terminal messages.

<u><h1>Protocol subscriber:</h1></u>

A protocol that declares a type that can receive input from a publisher (subscriber can receive emitted elements from a Publisher).

A Subscriber acts on elements as it receives them. Publishers only emit values when explicitly requested to do so by subscribers.

<u><h1>Protocol cancellable:</h1></u>
A protocol indicating that an activity or action may be canceled.

Calling cancel() frees up any allocated resources. It also stops side effects such as timers, network access, or disk I/O.


Another important thing to know, in RxSwift subscription results in a Disposable, which allows you to stop the subscription, Swift Combine does not have this. Instead, if you do not want to receive further updates, you can just dereference the Publisher chain. Apple calls a Cancellable.
