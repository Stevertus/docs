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
footer: MIT Licensed | Copyright © 2019 Stevertus
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
                  Then: [
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