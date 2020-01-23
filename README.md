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


<iframe style="margin: 0 calc(50% - 280px)" src="https://discordapp.com/widget?id=152120147782533120&theme=light" width="560" height="700" allowtransparency="true" frameborder="0"></iframe>

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="https://discord.gg/WVDFXUv">Join the Discord</a></div>

## Changelog of all the recent additions

### 0.3.2
* added setToCondition to the Score to allow values based on a condition
* added an Item.SpawnEgg constructor to allow generating spawn eggs more quicker
* added Predicates subpackage, that allows to create all major types of predicates right in objD
* added Predicate Widget to register a new Predicate with content
* added VersionCheck and ServerVersionCheck
* added Storage.toData to convert to a Data Widget
* added global Scoreboard.prefix and Tag.prefix that get applied to all created Scoreboards and Tags
* added the [] operator to scoreboard to quickly retrieve its scores
* added Comment.seperate to generate a comment line
* added Comment.fileHeader to generate a file header with author, description, context and calledin
* added header field to File to be able to add a header to a file directly
* added Spectate and Gamemode Widgets
* added a PassTrait widget, that uses the Context to provide Data across the successive widget tree
* added support for Dart Web, enabling online generators powered by objD
* added Zip Exporter that can be enabled with the --zip flag or by builing the project in production mode
* added --no-zip flag to allow usual file generation
* added an web example
* added getArchive and saveAsZip methods to manually create and modify the Zip encoder
* added HideFlags method that calculates the hideFlags for you
* added getAllFiles and getJsonMap functions to allow 3rd party developers and the web to use objDs output
* updated the gson library to also support Dart Web
* updated Condition.predicate and If to allow for Predicates(and automatically register them)
* updated Block class to allow public insight into nbt and states
* **changed If Then and Else to `then` and `orElse`, old syntax is deprecated**
* extended the ForEach widget to support translation location for each step
* **moved Block, ItemType, EntityType and ParticleTypes constants to seperate Blocks, Items, Entities and Particle classes**
* moved the file generator to a new file seperating it from the system io 
* fixed the conversionFlags parameter for TextComponents, accepts TextComponents now
* fixed crash when Scoreboard was used without any load File
* fixed Tag toggle wrong negation
* fixed text options with the conversionFlags in TextComponent.translate
* refactoring code

<div class="hero" style="padding:16px"><a class="nav-link action-button" href="/changes">Full Changelog</a></div>