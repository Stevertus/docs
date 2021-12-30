---
sidebar: auto
footer: MIT Licensed | Copyright © 2021 Stevertus
prev: false
next: /basics/
---

# Guide

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/yJLpQVRSLD8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why a framework?

A framework is a set of utilities to reduce the amount of repetitive work.
I've tried many ways in the past to achieve a quick and easy way to generate Datapacks for Minecraft: A own programming language [mcscript](https://stevertus.com/mcscript), several graphical online generators at [stevertus.com](https://stevertus.com) or premade utilities.

Instead of developing a language, why not using the tools and parser an other language gives you?
By building a custom frame around it you get the **reliability** and the **extensive** debugging tools in Editors.

The generation of Datapacks is **easy**,**fast** and aims to be **less repetitive** and **modular** by utilizing the concept of Widgets as one of the main features.

## Installation

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/BoaFCxmwGjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You need the Dart SDK for this framework. Download and install it from [dartlang.org](https://www.dartlang.org/tools/sdk)

I would also recommend Visual Studio Code along with the dart plugin to edit dart files very conveniently.

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/jBH1xL0FgVw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Make a new folder that will house your project wherever you want(I would recommend datapacks folder).

And inside of that create a file named `pubspec.yaml` and another folder called `lib`.

Open the pubspec.yaml file and add

```yaml
name: [unique_namespace]
environment:
  sdk: ">=2.15.0 <3.0.0"
dependencies:
  objd: ^0.4.4
```

Also remember to replace the `[unique_namespace]` with your own project name.
And run

```
$  pub get
```

with the console in the new folder(VS code does this automatically)
::: tip
You can also generate a full project with a console command. [read more](https://stevertus.com/objD/documentation/Global%20Commands)
:::

## Getting started

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/dCc_uED6nbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Let's get started and create our first dart file with `lib/main.dart` file.

Then we import the framework with:

```dart
import 'package:objd/core.dart';
```

Then we need to create a new datapack project:

```dart
void main(List<String> args){
	createProject(
		Project(
			name:"This is going to be the generated folder name",
			target:"./", // path for where to generate the project
			generate: CustomWidget() // The starting point of generation
		),
		args,
	);
}
```

Next of we need to build this custom Widget:

```dart
class CustomWidget extends Widget {
	@override
	Widget generate(Context context){

	}
}
```

To get more details on why we build it like that, check out the [Widget]() documentation.

Like we can see the generate method, which is called on build, has to return another Widget, in our case an instance of the Pack class.

```dart
Widget generate(Context context){
	return Pack(
		name:"mypack",
		main: File( // optional
			'main'
		),
	);
}
```

What we are doing right now is to generate a new subpack with a name(This will be the namespace of your functions later) and a main file(runs every tick) with the name "main.mcfunction".

You can run the project already and the result should be a pack with an empty main.mcfunction file.

So lets add some functionality to our project in our main file.
We can use the Log Widget to display a message to the player.

```dart
main: File(
	'main',
	child: Log('Hello World')
)
```

But how to add a list of Actions then? Well there's also an Widget for that:
`For.of`

```dart
child: For.of([
	Log('Hello World'),
	Command('setblock 0 0 0 air'),
])
```

So now we have a [List](https://www.dartlang.org/guides/language/language-tour#lists) of Widget, so we can use as many as we want

Whole code:

```dart
import 'package:objd/core.dart';

void main(List<String> args){
    createProject(
        Project(
            name:"This is going to be the generated folder name",
            target:"./",
            generate: CustomWidget()
        ),
        args
    );
}

class CustomWidget extends Widget {
    @override
    Widget generate(Context context){
        return Pack(
            name:"mypack",
            main: File( // optional
                'main',
                child: For.of([
					Log('Hello World'),
					Command('setblock 0 0 0 air')
				])
            ),
        );
    }
}
```

And here are a few Tips & Tricks that you might want to apply when coding with objD:

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/zT4E9RDaq9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
