---
home: true
heroImage: /logo.png
title: ObjD
actionText: Get Started →
actionLink: /guide/
features:
  - title: Built-in Generators
    details: "All your favorite generators in one place: Raycasting, Title, Book, Nbt, Entity, and much more Generators"
  - title: Comfort
    details: objD generates Scoreboards, setup files and namespaces by itself and provides a high level API
  - title: Expand
    details: You can build your own Widgets, customize arguments and create your own APIs using the tools that objD gives you.
footer: MIT Licensed | Copyright © 2021 Stevertus
---

## Program Datapacks!

Use a programming language to generate Datapacks and benefit from the unlimited enhancements.

# A simple project, in a few lines:

```dart
import 'package:objd/core.dart';

@Prj()
final example = NamespacePack();

@Pck()
final namespace = [LoadFile];

@Func()
final load = Log('Reloaded!');
```

## objD is build upon Modules

Each part of a Datapack is seperated into Widgets. A Widget can be a simple Command, a group of Commands, whole Files or Packs.

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/2Df24YXR5to" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 70+ Included APIs and Widgets

objD features a lot of in-built Widgets, like [Basics](/basics)(Pack, File, Entity, Group) all the [Commands](/wrappers), [Text Generators](/texts) and Utils, like Timers, RNG, Raycasting and Loops.

Get all the information that you need in this youtube series:

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL5AxRIlgrL5GnKz69w4AUyqpZC35BlxdD" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Simple Click Counter Example:

```dart
import 'package:objd/core.dart';

@Prj(name: 'folder name')
final example = Pack(
  name: 'mypack',
  modules: [
    ClickEvent(
      name: 'onclick',
      onClick: Score(Entity.Self(), 'counter') + 1,
    )
  ],
  load: LoadFile,
  main: MainFile,
);

@Func()
final load = Log('Runs on Load');

@Wdg
Widget showTitle(String text) => Title(
      Entity.All(),
      show: [TextComponent(text, color: Color.Red)],
    );

@Func()
final main = If(
  Score(Entity.Self(), 'counter') >= 10,
  then: [
    ShowTitle('clicked ten times!'),
    Score(Entity.Self(), 'counter').reset(),
  ],
);
```

## Installation

Get started today by installing objD and playing around.

<div class="hero"><a class="nav-link action-button" href="/guide">Get Started →</a></div>
Or

[Contribute on GitHub](https://github.com/Stevertus/objD)

## Get Connected With the Community and get Updates

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="https://discord.gg/WVDFXUv">Join the Discord</a></div>

## Changelog of all the recent additions

### 0.3.5

- added Annotation classes to be used with objd_gen, which drastically lowers code complexity
- added ReplaceItem.copy, ReplaceItem.clear and ReplaceItem.modify implementing 1.17 item command
- added a version parameter to context to allow widget to generate version specific code
- added Particle.dust and Particle.copyWith alongside with major rework of the Particle command and simplification of code
- added Recipe Widget with ability to generate Minecraft Recipe Files of any type
- added the possibility to use a String as an Argument for Dimensions to support custom dimensions
- added missing toPath property to Storage.modify
- updated ReplaceItem to adapt automatically to the projects version
- updated blocks, items, particles and entities to include content from 21w03a
- fixed Effect nbt Generator not using the Byte Generator correctly
- fixed issues with having two Packs at the top level of the tree
- removed default scale value from Data.get

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="/changes">Full Changelog</a></div>
