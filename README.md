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

### 0.3.6

- added Pose class and corresponding pose argument in ArmorStand
- added Summon.select method to easily get an entity selector
- added a getCommands method which generates the commands of a given Widget
- added JsonFile Widget to easily generate json files
- added further checks for encapsulating groups when using strait functionality
- changed Location to be immutable and providing const constructors
- changed Summon parameters to be class fields
- changed ArmorStand and AreaEffectCloud to inherit Summon, you can now use all possibilites of Summon
- changed Execute.storeScore to use Score instead of two seperate parameters
- changed Bossbar.storeResult, Entity.storeResult and Location.storeResult to accept any Widget
- changed Command generation behaviour from List to StringBuffer
- updated blocks, items, particles and entities to include content from 21w07a
- fixed TextHoverEvent.item using the id as value instead of whole nbt
- fixed giving a negative `from` value to RandomScore would only generate positive numbers
- fixed Bossbar methods would override previous uses of the same object
- fixed Item.getMap returning the id in `item` instead of `id`, added optional parameter

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="/changes">Full Changelog</a></div>
