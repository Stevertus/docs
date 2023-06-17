---
home: true
heroImage: /logo.png
title: ObjD
actionText: Get Started →
actionLink: /guide/
features:
  - title: IDE tooling
    details: "Use all the powerfull IDE tools of Dart: Autocompletion, Inline Documentation, Linting, Formatting... Directly in intelliJ or vsCode"
  - title: Comfort
    details: objD generates Scoreboards, setup files and namespaces by itself and provides a high level API
  - title: Expand
    details: You can build your own Widgets, customize arguments and create your own APIs using the tools that objD gives you.
footer: MIT Licensed | Copyright © 2022 Stevertus
---

## Program Datapacks!

Use a programming language to generate Datapacks and benefit from the unlimited enhancements.

# A simple project, in a few lines:

```dart
import 'package:objd/core.dart';

@Prj()
final example = NamespacePack();

@Pck(load: 'load')
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

<div class="hero"><a class="nav-link action-button" href="/cli">Get Started →</a></div>
Or

[Contribute on GitHub](https://github.com/Stevertus/objD)

## Get Connected With the Community and get Updates

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="https://discord.gg/McYXVC8">Join the Discord</a></div>

## Changelog of all the recent additions

### 0.4.5


- added new Time object for dealing with ticks, seconds, days and infinite Duration
- added time extensions to number allowing to write `10.seconds`, `2.ticks`, `2.4.minutes` etc. to generate time objects 
- added FillBiome Widget
- added Execute.on, Execute.summon and Heightmap
- added Damage Widget
- added Return Widget and Score.setToFunction tranfering the return value to a score
- added Biome and corresponding Biomes list
- added Display Widget for spawing display objects and animate them
- added Interaction Widget for spawing interaction entities
- ...

**Breaking**: 

- Effect, Schedule, Title, Repeat, Timer, ScoreTimer use the new Time object instead of an integer for representing time, you can just append a `.ticks` to the old integer: `ticks: 10 => ticks: 10.ticks` 
- objD now requires Dart 3, please check if you have the newest version of dart and run `dart fix`  
- Dimension is no longer an Enum. `Execute.dimension` no longer accepts strings, when using a custom dimension use `Dimension(<name>)`

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="/changes">Full Changelog</a></div>
