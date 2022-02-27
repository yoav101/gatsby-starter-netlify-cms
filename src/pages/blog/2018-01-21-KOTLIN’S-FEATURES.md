---
templateKey: blog-post
title: KOTLIN’S FEATURES
date: 2018-01-21T15:04:10.000Z
featuredpost: false
featuredimage: /img/kotlin.png
description: Kotlin is a Type Safety (statically typed) programming language developed by JetBrains, started in 2010 for modern multiplatform applications.
tags:
  - Android
  - Kotlin
---
![](/img/kotlin.png)

#### Kotlin is a Type Safety (statically typed) programming language developed by JetBrains, started in 2010 for modern multiplatform applications.

#### In 2011 JetBrains published a post “Why JetBrains need Kotlin”

#### **The main topics were:**

#### **To increase the productivity**

#### Writing the IDEs in Java was taking a lot of time to compile with javac.

#### **To drive sales of IntelliJ IDEA**

#### JetBrains wanted a programming language to be a part of IntelliJ IDEA, which will increase sales.

#### **Drive company’s business by keeping a trust**

#### By developing a new programming language which will support other platforms, JetBrains wanted to increase the awareness and maintaining the community trust.

#### As it says in official Kotlin web site kotlinlang.org:

#### _“Kotlin can be used for any kind of development, be it server-side, client-side web and Android. With Kotlin/Native currently in the works, support for other platforms such as embedded systems, macOS and iOS is coming.”_

#### **The benefits of learning Kotlin**

#### There are many reasons to learn Kotlin:

*   Kotlin is an open source programming language.
*   It is 100% interoperable with Java and Android. In Google I/O 17 May 2017,
*   The Android team announced Kotlin as an official language for Android app development and it is fully compatible with JDK 6 and above.
*   Using Kotlin over Java will cut the number of code lines approximately by 40% which will decrease the number of errors (if there is less code, it’s more difficult for that code to fail).
*   Kotlin is many savers programming language than Java. It is aimed at removing the dangers of null references from the code.

#### Kotlin was influenced by Java, Scala, Groovy, C#, JavaScript and Gosu so it makes Kotlin easy to learn. Depends on FAQ at Kotline official web site, you can read and write Kotlin in a few days.

#### One of the major reasons to learn Kotlin is the fact that Kotlin climes to be a cross-platform language thanks to Kotlin/Native.

#### Kotlin/Native is a standalone compiler which compiles Kotline code directly to machine code with no dependency on any virtual machine.

_“Our vision for inter-platform code reuse is the following:  
one can write entire modules in Kotlin in a platform-independent way and compile them for any supported  
platform (currently these are Kotlin/JVM, Kotlin/JS and the upcoming Kotlin/Native).”_

#### **Popularity of Kotlin**

#### There is no doubt, Kotlin is the rising star of programming languages.

#### According to Tiobe.com, Kotlin ranking is 28 and it pretends for the programming language of the year. Kotlin was ranked 80th just in May this year.

#### There are many companies, using Kotlin these days. Companies like Pinterest, Square, Basecamp or Trello whose production code also includes some parts in Kotline.

#### Since Google announces Kotlin as an official language for Android app development, Kotlin became even more popular.

#### Well, only time will tell does Kotlin is really the next generation of programing language.

#### So why you should use Kotlin over Java?  
As I mentioned before, Kotlin can reduce your code by 40% let’s take a quick view:

**Below is an Example of POJO Class:**

```
 public class Person {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

**Here is how it looks in Kotlin:**
```
data class Person(val name: String)
```

#### Another and very useful feature is Extensions:

#### In Kotlin you can easily Extend a Function or a property without using inheritance:
```
 val n = 5
 n.sum(7) // will return a summarized value, in our case is 12


fun Int.sum(n: Int): Int {

        return this + n
    }
```

#### Kotlin Android Extensions how to use

#### This cool feature will free us from using the findViewById() function.  
To use this coll feature please take a look at the example below:

Add this line to your app build.gradle file: apply plugin: ‘kotlin-android-extensions’ just below the ‘kotlin-android’ plugin  
In MainActivity add this import import kotlinx.android.synthetic.main.activity\_main.\*  
now you have in the class members of your XML TextView – Their name is just like their XML id  
The code should look like

TextView
    android:id="@+id/helloView"
    android:layout\_width="fill\_parent"
    android:layout\_height="wrap\_content"

#### import kotlinx.android.synthetic.main.activity\_main.\* … override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(savedInstanceState) setContentView(R.layout.activity\_main) helloView.setText(“Hello, world!”) }

#### Null Safty

#### In Java all variables store references to a memory address, except the primitive types. That’s why you can set it to Null and can throw  NullPointerException.

#### In Kotlin variables are non-null references by default unless otherwise defined.

#### For Example, a non-null variable will show a compile error if you will try to asign it to a null.
```
var mVar: String
mVar = null //Compiler error
```
However, if we need to assign a null to a variable, we must declare it explicitly by adding a-? right after the data type.
```
var mVar: String?
mVar = null //No error
```
Now, if we will try to use our variable we will receive a compile error
```
var mVar: String?

mVar.length   //compile error the varible can be null
```
To avoid the error we will have to add ? to the variable:
```
var mVar: String?

mVar?.length   // the type of mVar is null no error
```
One of my favorites usages of the Safe calls is using it in chains. For example:
```
person?.name?.length
```
This code will return null if one of the properties is null.

#### Elvis Operator

```
var z: String? // Nullable value
```
Now z can be null. Let’s say we need to perform a safety check, whether z contains a value or its null.  
In Java we will use if…esle
```
 String z = null;
 int a = (z != null) ? z.length() : -1;
```
Or in Kotlin
```
var z: String? = null
 val a: Int = if (z != null) z.length else -1
```
Kotlin Elvis operator is the short equivalent version for the if…else statement
```
val a = z?.lengh ?: -1
```
#### The !! Operator
```
val a = z!!.length
```
In case we will need the NPE, we can always get it explicitly by adding !! to our variable

#### When Expression

#### When expression in Kotlin is the new switch case:

        when (a){
            1 -> Log.i(TAG, "The value is: 1")
            2 -> Log.i(TAG, "The value is: 2")
            in 3..5 -> Log.i(TAG, "The value is: $a")
            else -> Log.i(TAG, "The value is bigger then 5")
        }

Using when for checking a variable type

    when (a){
            is Int -> Log.i(TAG, "The value is Int")
            is String ->  Log.i(TAG, "The value is String")
            is Double ->  Log.i(TAG, "The value is Double")
        }

#### Equals  
In Kotlin we will use == instead of equals  
In Java, the == operator is used for compare references and in Kotline we are using the == operator to compare data or variables.
```
  val mike = Person("John")
  val john = Person("John")
  
  mike == john    // true  (structural equality)
  mike === john   // false (referential equality)
```

#### Lambdas in Kotlin

_Lambda expression in computer programming, also called anonymous function, a function (or a subroutine) defined, and possibly called, without being bound to an identifier_
```
val multi = {a: Int, z: Int -> a \* z}
val val = multi(5, 7)
```