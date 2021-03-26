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

### 0.4.0

- added Folder Widget to dynamically create folders. All Files and Rawfiles in the child marked with inheritFolder will choose this folder as a default
- added Textcomponent.none for the edge case that you want to clear a previous set text
- added predicate parameter to Selector
- added Scoreboard.modify(whoever uses that)
- added self, all and player getters on a Scoreboard to easily use the most common score entities
- added path argument to Context to retrieve the current path set by Folders
- added a check to help to not exceed the 16 char limit on scoreboards
- added additional metrics to measure project generation
- updated all blocks, items and particles to include additions in 21w11a
- migrated to null safety, read more here: https://dart.dev/null-safety
- refactored apis, arrangement of required values and nullable types
- refactored filepaths and path concatenation
- changed dependencies (removed meta and changed colorize to ansicolor)
- fixed Area generating NULL instead of 0 by default
- fixed triggering hotreload if only properties on project changed and refactored mechanics

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="/changes">Full Changelog</a></div>
