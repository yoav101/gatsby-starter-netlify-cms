---
templateKey: blog-post
title: STORYBOARDS BEST PRACTICES
date: 2019-07-15T15:04:10.000Z
featuredpost: false
featuredimage: /img/STORYBOARDS1.png
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
  <img width="1452" height="312" src="../../img/STORYBOARDS1.png">
</p>

When first encountered the XCode Storyboards I immediately grasped its main advantages, mainly being, how simple it is to build and design an App with minimum code along with providing a visual map, laying out the entire app in front of Developers \ Management. The construction of navigation and relationships between the different view controllers along with powerful layout tools let developers reduce the amount of time and code needed for lunching a project.

But what was once a perfect approach for small apps having 10 screens at most, might become a developer’s nightmare, turning each Git pull into a nerve racking affair for large teams, in which, more than 1 developer is working at the same time on a single massive Storyboard (40 screens and up). Part of the problem is that the storyboard is a machine-generated XML, which due to its nature, might cause merge conflicts even by opening a storyboard at different machine / XCode version – with no changes what so ever!

If I had to summarise the best practice we’ve learned, it will be to avoid conflicts before they occur. Still, keep the following in mind when starting a new project or maintaining an old one:

- Everyone on the same build of Xcode
- Multiple storyboards
- Use Nibs for custom view
- One person owns the storyboard setup
- Merge storyboards often

**XCode**

One of the common merge conflicts happens when a new version of XCode comes out. The conflict is due to 1 developer edits the storyboard in an older Interface Builder. No actual changes are even needed, just opening the storyboard will modify the file. It the file is then committed, merge conflict upon you. The conflict is because XCode updates the “document” tag. This merge conflict is relatively easy to resolve, usually just choose the newer version, to make sure later IB capabilities are included, or just don’t commit storyboard all together if no actual edits were made. Developer teams must always synchronise XCode version updates

<p align="center">
  <img width="1452" height="247" src="../../img/STORYBOARDS2.png">
  Figure 1
</p><br/>

**Multiple Storyboards**

Seeing your all App in a single view is nice but can and should be avoided. The flow of your app must be divided according to some sort of logical process. Login \ Logout, Viewing\Editing Account details, Purchasing and Orders for example should not be lumped together. This way, you can handle and assign different people in your team to work on 1 storyboard without tripping over each other. Keep in mind, that even these smaller sub-teams will be in danger of conflicting with their peers over common issues such as:

**<u>Resources</u>**

Storyboards UIVIews use numerous resources, for example images for buttons or UIImageView. Different images will be listed under the resources tag and if 1 developer adds or removes images resources, even from within different controller, a merge conflict can occur.

Usually simple to resolve, just choose “both sides” – in order not to lose any resource which might be needed – and merge the file.

<p align="center">
  <img width="1452" height="364" src="../../img/STORYBOARDS3.png">
  Figure 2
</p><br/>

**<u>Adding New Scene</u>**

The storyboard XML has a special Tag for listing all the different scenes in the storyboard. If 2 developers each add a scene to the storyboard, and that scene gets added in the same place, a merge conflict will occur. This conflict might be tricky to resolve because it depends how the diff looks like. If the diff is the entire scene on both sides, you’re in luck, just merge using “choose both”, the order doesn’t matter.

However, in cases like figure 3, in which some parts of the scenes appear to be unchanged, the solution might be more complex. The conflict shown in figure 3 is due to the fact each scene is really just an empty View Controller, so they share some similarities, obviously.

In this case you have to use a text editor to move the scene from the right side to be below the scene on the left side, then, remove the conflict tags and merge.

Make sure before you commit the resolved conflict, to open the storyboard and confirm the changes do not result in an unrenderable storyboard!

<p align="center">
  <img width="1452" height="362" src="../../img/STORYBOARDS4.png">
  Figure 3
</p>

**<u>Editing the same Scene</u>**

As the name suggest this type of conflict can occur when 2 developers work on the same view controller. Even if they edit different objects, it might result in a conflict due to constraints and relationships between different layout objects. This type of conflict is difficult to resolve manually since the XML is fairly complex.

The best approach to these conflicts is a Pre-Acting strike of avoiding them all together using multiple storyboards. You can divide and conquer your project into multiple storyboards, apparat of the “Main.Storyboard”, and then use storyboards reference objects, which allows you to place objects from 1 storyboard inside another.

**Use Nibs for custom view**

We’re already using Nibs for custom views such as table view cells and the like, why not extend this approach and abandon storyboard completely altogether?

In my opinion, simply creating a xib file for every View Controller might just be the magic solution. You have got your logic in the swift file, and the auto layout and UIViews in the xib. You can have 1 simple storyboard to handle Navigation Flow and just instantiate the view controller whenever you want to use it and then push it into the navigation stack.

**One person owns the storyboard setup**

Having to wait with storyboard changes until someone else commits and push his own is no fun, but it is the safest way. There should be a que for working on the storyboard and making sure to know at all time who’s turn it is.
