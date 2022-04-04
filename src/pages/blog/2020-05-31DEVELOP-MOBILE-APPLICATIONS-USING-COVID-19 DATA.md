---
templateKey: blog-post
title: DEVELOP MOBILE APPLICATIONS USING COVID
date: 2020-05-31T15:04:10.000Z
featuredpost: false
featuredimage: /img/DEVELOP MOBILE APPLICATIONS USING COVID-19 DATA1.webp
author: MSApps
tags:
  - Android
  - iOS
  - Coronavirus
  - Swift

---
<style>
img{
  border-radius: 15px;
}
</style>
<p align="center">
  <img src="../../img/DEVELOP MOBILE APPLICATIONS USING COVID-19 DATA1.webp">
</p>

In the modern world, one of the most important resources is information. Huge streams of information revolve around us — social networks, blogs, news sites… And all this is available in our pocket. Our smartphone is a guide to the world of information.

Recently, a lot of Internet resources talk about the new virus COVID-19. We see various news, statistics, tips, directions of the Ministry of Health…

On this wave, developers began to develop applications that concentrate the most important and useful information about the existing pandemic. Each App and each product is unique in its own way and can be used for the benefit of society.

---

We can find open APIs that help developers use the database for their Apps. And also I decided to develop my application with statistics of cases COVID-19. I found one of the open and free APIs and built a nice little application with a widget, which could be convenient for people to track statistics.

I’ve sent to submit this “Corona Counter” App to App Store…

<p align="left">
  <img width="487" height="341" src="../../img/DEVELOP MOBILE APPLICATIONS USING COVID-19 DATA2.webp">
</p>

## BUT…

I’ve got <b>REJECT…</b>

> We found in our review that your app provides services or requires sensitive user information related to the COVID-19 pandemic. Since the COVID-19 pandemic is a public health crisis, services and information related to it are considered to be part of the healthcare industry. In addition, the seller and company names associated with your app are not from a recognized institution, such as a governmental entity, hospital, insurance company, non-governmental organization, or university

> <i>From Apple</i>

I found that Apple and Google began to very tightly control COVID-19 application releases.

And they are right as I am a regular developer and have no responsibility for the information provided in my App. I didn’t check the API data, I could just compare them with the statistics from the news.

Therefore, I can only say thanks to Apple and Google for regulating the flows of information that come to our smartphones during this difficult for all of us time.

---

## NEXT…

<p align="left">
  <img width="1024" height="576" src="../../img/DEVELOP MOBILE APPLICATIONS USING COVID-19 DAT3.webp">
</p>

> Apple and Google are providing additional resources for developers working with the first version of their Exposure Notification API, the development tools the companies have created and are working on in order to provide a cross-platform way for public health agencies to notify individuals of potential exposure to a person with a confirmed case of COVID-19.

It was an idea for an application that would be similar to “finding my friends” App. I would like to show users on a map with the ability to notify about virus infection.

I wondered if I could use this API to develop my own App. And after a short research, I realized that it is almost impossible. And here quote from Exposure Notification guideline:

> 1. This entitlement is limited to government health organizations or developers who have been endorsed and approved by a government health organization.

> 2. Entitlement Profile(s) are limited to one (1) Application per country unless the country has a regional approach, or as otherwise agreed by Apple.

> 3. A Contact Tracing App may not use location-based APIs, may not use Bluetooth functionality (excluding Bluetooth functionality included in the Exposure Notification APIs) and may not collect any device information to identify the precise location of users.

> > https://www.apple.com/covid19/contacttracing

So, I decided to leave this idea since I am not an official representative of the Ministry of Health. Only one permission per country will be given to use this API. And also I cannot display any personal information about the user (location or name).

## Conclusion

It’s good to understand those giants like Apple and Google are involved in the fight against the virus and help society feel more secure and safe.
