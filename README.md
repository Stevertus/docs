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
footer: MIT Licensed | Copyright © 2020 Stevertus
---

## Program Datapacks!

Use a programming language to generate Datapacks and benefit from the unlimited enhancements.

# A simple project, in a few lines:

```dart
import 'package:objd/core.dart';

void main() {
  createProject(
    Project(
      name: "folder name",
      target: "./",
      generate: Pack(
          name: "mypack",
          load: File(
              "load",
              child: Log("Reloaded!")
          )
      ),
    )
  );
}
```

## objD is build upon Modules

Each part of a Datapack is seperated into Widgets. A Widget can be a simple Command, a group of Commands, whole Files or Packs.

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/2Df24YXR5to" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 40+ Included APIs and Widgets

objD features a lot of in-built Widgets, like [Basics](/basics)(Pack, File, Entity, Group) all the [Commands](/wrappers), [Text Generators](/texts) and Utils, like Timers, RNG, Raycasting and Loops.

Get all the information that you need in this youtube series:

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL5AxRIlgrL5GnKz69w4AUyqpZC35BlxdD" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Simple Click Counter Example:

```dart
import 'package:objd/core.dart';

void main() {
  createProject(
    Project(
      name: "folder name",
      target: "./",
      generate: Pack(
          name: "mypack",
          modules: [
              ClickEvent(
                  "onclick",
                  onClick: Score("counter",Entity.Self()) + 1,
              )
          ],
          load: File(
              "load",
              child: Log("Runs on Load")
          ),
          main: File(
              "main",   // runs every tick
              child: If(
                  Score("counter",Entity.All()) >= 10,
                  then: [
                      Title(
                          Entity.All(),
                          show:[
                              TextComponent("click ten times!",color:Color.Red)
                          ]
                      )
                      Score("counter",Entity.All()).reset(),
                  ]
              )
          ),
      ),
    )
  );
}
```

## Installation

Get started today by installing objD and playing around.

<div class="hero"><a class="nav-link action-button" href="/guide">Get Started →</a></div>
Or

[Contribute on GitHub](https://github.com/Stevertus/objD)

## Get Connected With the Community and get Updates

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="https://discord.gg/WVDFXUv">Join the Discord</a></div>

## Changelog of all the recent additions

### 0.3.3

**BREAKING**

- added Item.type replacing ItemType and made it unmutable
- divided Blocks.all and Items.all in 1.15 items and newer [snapshot] items
- removed named parameters for Range. If you want to set a upper or lower limit use Range.to or Range.from now on.
- changed Comment.Seperate to Comment.Separate
- changed Advancement cricterium to cricteria in Advancement.grant() parameters

**Widgets**

- added PlayerJoin Widget
- added Enchant Widget
- added experimental CustomBlock Widget
- added Spawnpoint Widget
- added Attribute Widget

**Fixes**

- added new 1.16 blocks, items, particles and entities
- added Attribute Type and an Attribute List to support Minecraft attributes
- added useTag argument in the If Widget to allow custom tags marking the else statement
- added Item.copyWith() to clone Items more easily
- added Color.fromInt and Color.fromRGB to support new color spaces
- added an optional bool property to Slot.chest to support Enderchests
- fixed Data.modify rejecting a List as value
- fixed missing increment for Ifs objd_is_true tag
- fixed if an else option is provided for If, encapsulate would not have an effect
- fixed crash when leaving the generate parameter of Project empty
- fixed bug with Trigger.enable
- fixed Do Widget to also execept null as translate parameter
- fixed errors when trying to use gson component in a give command
- fixed that Entity.not used to reset all previous applied tags
- removed all deprecated and unessary parts

Thanks to kadmuffin for contributing and fixing typos!

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="/changes">Full Changelog</a></div>
