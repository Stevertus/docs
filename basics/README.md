---
sidebar: auto
footer: MIT Licensed | Copyright © 2020 Stevertus
prev: /guide/
next: /wrappers/
---

# Basics

## Widget

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/2Df24YXR5to" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
A widget is the base element for basically everything in objD.

| property          |                                                                      |
| ----------------- | -------------------------------------------------------------------- |
| generate(Context) | returns the underlying Widget Tree                                   |
| toMap()           | Similar to toString, but returns a Map tree of the child in generate |

**Example:**
We can use an Widget to get or build functionality. e.g

```dart
// building our own widget:
class CustomCommand extends Widget {
	@override
	Widget generate(Context context){
		// using an existing widget
		return Command('custom')
	}
}
```

## Context

Maybe you already wondered what this context argument here is:

```dart
Widget generate(Context context){
```

The Context is a way to get certain important information from the parents.

| properties |                                                                                   |
| ---------- | --------------------------------------------------------------------------------- |
| packId     | String of the current pack's name                                                 |
| file       | the current file name                                                             |
| prod       | see if project is in production mode(bool)                                        |
| loadFile   | the filename of your load file                                                    |
| mainFile   | the filename of your main file                                                    |
| prefixes   | a List of Strings that should be added in front of actions(mainly used by Groups) |

You can use this context to build more modular Widgets and don't need to hardcode certain files and the pack id:

```dart
class LoadWidget extends Widget {
	@override
	Widget generate(Context context){
		return Command('function ' + context.packId + ":" + context.loadFile)
	}
}
```

## Project

The project is a special Widget which is just defined once. It contains some built options, like description or name, but also the entire underlying tree of packs, files and actions.

| constructor   |                                            |
| ------------- | ------------------------------------------ |
| name          | the name of the datapack folder            |
| generate      | a widget that defines the projects content |
| [description] | A description that will go in pack.mcmeta  |

**Example:**

```dart
main() {
// create Project takes in one project and compiles it
createProject(
	Project(
		name:  "tested",
		generate:  MainWidget(),
	)
);
}
```

## Pack

A pack is logically the next step. This defines a sub-pack with an name again that will be our namespace afterwards.
Here we can also define included files as well as the main and load function:

| constructor |                                                                                  |
| ----------- | -------------------------------------------------------------------------------- |
| name        | the name of the sub-pack                                                         |
| [main]      | the main file that is ran every tick                                             |
| [load]      | the load file that is ran on reload                                              |
| [files]     | A List of type File witch includes other needed files                            |
| [modules]   | used to inject a List of Modules(read more about modules in the Modules section) |

**Example:**

```dart
Pack(
	name:"tpcraft",
	main: File(...),
	load: File(...),
	modules: [
		MyModule()
	]
	files: List<File> [
		File(...)
	]
)
```

The Pack class can be used as often as you want and where you want, so you can also define a new pack in some file.

> Notice: The namespace of the pack is accessible in these files by using the context variable. e.g:
> `Command("function" + context.packId + ":run")`

## File

The [Pack]() class already required some files. The file class simply generates a new mcfunction file with content and a path.

The File constructor has two required arguments:

| constructor |                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------- |
| String      | the desired file path going from `/data/:packId:/functions/` on                               |
| child       | the content of the file                                                                       |
| execute     | bool if the function should be executed directly(optional)                                    |
| create      | bool if the file should be created or just interpreted with execute(optional, default = true) |
| pack        | overrides the automatically detected namespace(optional)                                      |

The File class can be used as often as you want and where you want, so you can also define a new file in a For container for example.
**Example:**

```dart
Pack(
	name:"tpcraft",
	main: File(
		"main",
		// and defining a new file inside of an widget
		child: File.execute( // same as execute: true
			path: 'new'
			child: Command(...)
		)
	),
)
```

## IndexedFile

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/H141kG7Rqfc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The IndexedFile behaves similar to File. Additionally it makes sure that each File, created with IndexedFile, is unique and does not get overwritten. In order to do that IndexedFile saves for each inputted name an id, which gets incremented after each use.
This helps with large scale third-party file generation for example with [Group](#group), Execute or If.

| constructor |                                                                          |
| ----------- | ------------------------------------------------------------------------ |
| String      | the name of the desired file                                             |
| child       | the content of the file                                                  |
| execute     | bool if the function should be executed directly(optional)               |
| custom      | a custom name that overrides the id(useful for customization in Execute) |
| path        | an optional folder to add the new function(like `objd` for Example)      |
| pack        | overrides the automatically detected namespace                           |

**Example:**

```dart
IndexedFile("index",child:...)
IndexedFile("index",child:...)
IndexedFile(
	"index",
	child:...,
	execute: true,
	path: "objd",
	pack: "custom"
)
```

Creates 3 files: `index1, index2, objd/index3` and adds `function custom:objd/index3` into the current file.

## RawFile

The RawFile Widget enables you to generate your own Files right in the Wiget tree. Here you can define your own file extension, the file path and the content.

| constructor |                                                        |
| ----------- | ------------------------------------------------------ |
| String      | the name of the file(with fileextension)               |
| String      | the content of the file                                |
| path        | changes the default path(in your pack) of the new file |

**Example:**

```dart
RawFile(
	"predicate.json",
	'{...}',
	path: "/predicates",
)
```

## Extend

Extend is very similar to File, but instead of creating a new file it adds content to an existing file.

| constructor |                                                                             |
| ----------- | --------------------------------------------------------------------------- |
| String      | the desired file path going from `/data/:packId:/functions/` on             |
| child       | the additional content                                                      |
| [first]     | Boolean if the content should be added in front of the original(def. false) |

So lets say we already have some files in our pack, but want to add something to the main file somewhere entirely else in our project:

```dart
Extend(
	"main",
	child: Command("say okay"),
	first: true
)
```

This would add the command `say okay` in front of our main.mcfunction.

## Command

A Command is a raw action, that is executed by Minecraft directly.

| constructor |                                                       |
| ----------- | ----------------------------------------------------- |
| String      | the raw command in the format "/command" or "command" |

**Example:**

```dart
// using a command in a file:
File(
	path:"command",
	child: Command('/say hey')
)
// uses the say command in command.mcfunction:
say hey
```

## For

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/4P4o3a6xyUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
The For class enables you to add multiple endpoints to one Widget.

There is always a List of Widgets involved.

| constructor |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| to          | the ending index including itself                                  |
| create      | a function returning a Widget based on the index argument          |
| [from]      | the starting index(default 0)                                      |
| [step ]     | the value used in each iteration to increases the index(default 1) |

So the basic for class utilizes a loop from a value to another value:

```dart
File(
	path:"for",
	child: For(
		from: 0,
		to: 5,
		create: (index){
			return Command('/say ' + index.toString())
		}
	)
)
// results in:
say 0
say 1
say 2
say 3
say 4
say 5
```

There is also an other Constructor for looping through a given list of widgets:

| For.of          |                                     |
| --------------- | ----------------------------------- |
| List of Widgets | loops through each of these Widgets |

**Example:**

```dart
File(
	path:"for_of",
	child: For.of([
		Command('say 1'),
		Command('say 2'),
		Command('say 3')
	]),
)
// results in:
say 1
say 2
say 3
```

## CommandList

But there is a more efficient way to list raw Minecraft commands. The CommandList Widget allows you to input a List of Commands, a List of Strings representing a command or a multiline string.

| constructor |                               |
| ----------- | ----------------------------- |
| List        | a list of commands or strings |

This has basically the same function as For.of just for commands.

```dart
CommandList([
		Command('say 1'),
		Command('say 2'),
		Command('say 3')
]),
```

But there is also a subset which accepts one big multiline string:

| CommandList.str |                                          |
| --------------- | ---------------------------------------- |
| String          | list of commands each on a seperate line |

```dart
CommandList.str("""
	/say 1
	/say 2
	/say 3
"""),
```

The slashes are automatically filtered out.

## Group

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/egLIzL5i4wQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
The group groups actions similar to for but has an option to prefix each action and encapsulate the content in a new file.

| constructor |                                                                                  |
| ----------- | -------------------------------------------------------------------------------- |
| prefix      | a prefix type of String                                                          |
| children    | the underlying widgets                                                           |
| [suffix]    | a String that should be added at the end                                         |
| [filename]  | the targeted filename(will be combined with an unique id)                        |
| [groupMin]  | the minimum amount of children to encapsulate(default = 3, set to -1 to disable) |

If the children length is larger or equal groupMin a new file is created in `/objD/`(the working directory for objectiveD) and executed.

```dart
Group(
	prefix: "execute as @e run "
	children: [
		Command('say 1'),
		Command('say 2'),
		Command('say 3')
	],
	filename: "asgroup",
	groupMin: 2
),
```

## Gson

Minecrafts Data is stored in the nbt format. Each property in therefore encoded into key-value pairs(json format).
Additionally Minecraft introduced gson, which adds types.
The [gson](https://pub.dev/packages/gson) package handles the encoding and decoding of Minecrafts format in objD and provides dart wrappers for the specific types.

### Usage

To decode you can use

```dart
gson.decode("{...}");
```

and to encode you can use

```dart
gson.encode({...});
```

That means, when you need the gson string somewhere, you can input a Map or a List in to encode.
For most of the usecases the integrated Widgets to this automatically(Entity,Data,...) and generate valid gson out of the box.

### Types

Additionally to the dart types String,int, double, Map and List gson adds some specific types:

| Type    | Example      | Result  |
| ------- | ------------ | ------- |
| String  | "a"          | "a"     |
| int     | 0            | 0       |
| Map     | {"a":"a"}    | {a:"a"} |
| List    | ["a"]        | ["a"]   |
|         |              |         |
| Byte    | Byte(20)     | 20b     |
| Boolean | true         | 1b      |
| Float   | Float(90)    | 90f     |
| Double  | Double(0.75) | 0.75d   |
| Short   | Short(10)    | 10s     |
| Long    | Long(10000)  | 10000l  |

::: tip
For more information take a look at the Package at [pub.dev/packages/gson](https://pub.dev/packages/gson) or visit the [example](https://pub.dev/packages/gson#-example-tab-)
:::

## Entity

| constructor        | arguments are optional                                                        |
| ------------------ | ----------------------------------------------------------------------------- |
| selector           | the entity selector(e.g p,s,e or r)                                           |
| limit              | number of matched entities                                                    |
| tags               | a List of Strings or Tags that the entity should have                         |
| scores             | a List of Score matches that the entity should match                          |
| team               | a Team the entity has to be part of                                           |
| type               | [EntityType](), id of the entity                                              |
| nbt                | a Map of required nbt properties                                              |
| strNbt             | option to override the nbt map with a String to support expressions like `1b` |
| area               | A Area where the entity should be                                             |
| distance           | [Range]() to the entity                                                       |
| level              | Range of experience levels                                                    |
| gamemode           | Gamemode type(e.g Gamemode.creative, Gamemode.survival)                       |
| horizontalRotation | Range of the horizontal facing direction                                      |
| verticalRotation   | Range of the vertical facing direction                                        |
| isRotated          | a Rotation Object for testing a specific rotation                             |
| playerName         | a String if you prefer to use a playername instead of arguments               |
| predicate          | a String that refers to a Predicate in the Datapack                           |

|**Methods** | |
|sort|adds a sort attribute of type [Sort]()|
|storeResult | Command, path, scale,datatype, useSuccess |

storeResult stores a result or success of a command in the nbt path of an entity.
**Example:**

```dart
Entity.Selected().storeResult(
	Command('say hello'),
	path: "Invisisble",
	scale: 1,
	datatype: "byte"
	useSuccess:true
)

⇒ execute store success entity @s Invisisble byte 1 run say hello
```

### RestActions

RestActions behave like normal Methods/Widgets when used in the Widget tree. With it you can for Example use:

| method        | function                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| kill          | kills the entity                                                                                         |
| raycast       | sends out a raycast(take a look at the raycast docs)                                                     |
| tp/teleport   | teleports the entity to a certain location or another entity(ref teleport docs)                          |
| give          | gives an item to a player(ref Give docs)                                                                 |
| replaceitem   | replaces a certain slot with an Item(ref ReplaceItem docs)                                               |
| particle      | shows particles at the entitys position(ref Particle docs)                                               |
| crash         | crashes a players client                                                                                 |
| clear         | clears the players inventory(ref Clear docs)                                                             |
| tellraw       | prints a message in the players chat(ref Tellraw docs)                                                   |
| dataMerge     | merges nbt data into the entity                                                                          |
| dataGet       | uses execute to get nbt data from the entity                                                             |
| dataRemove    | removes the nbt data of a specific path                                                                  |
| dataModify    | modifies the nbt data of the entity(ref Data Widget!)                                                    |
| execute       | uses the execute on the entity(as)                                                                       |
| exec          | short for execute                                                                                        |
| executeStrait | uses the execute on the entity(as) with StraitWidget                                                     |
| execStrait    | short for executeStrait                                                                                  |
| asat          | uses execute with the entity and their location                                                          |
| asatStrait    | asat with Strait                                                                                         |
| as            | uses execute as the entity                                                                               |
| asStrait      | as with Strait                                                                                           |
| at            | uses execute with the entities location                                                                  |
| atStrait      | at with Strait                                                                                           |
| addTag        | adds a Tag(String) to the entity(ref Tag docs)                                                           |
| addTags       | adds a List of Tags(String) to the entity                                                                |
| removeTag     | removes a certain Tag(String)                                                                            |
| removeTags    | removes a List of Tags(String)                                                                           |
| joinTeam      | entity joins the given team                                                                              |
| leaveTeam     | entity leaves the current team                                                                           |
| forEach       | executes for each given Entity that fulfills the selector a Function with a List of Widgets(see example) |

**Example:**

```dart
Entity.Self().kill()

⇒ kill @s
```

However, you can as well use these Methods together with [StraitWidget](/utils#straitwidget) and add the `.queue()` method to let objd automatically add the generated Widget to the Widget list.
This makes the code more readable.

**Example:**

```dart
StraitWidget(
	(List<Widget> widgets){
		Entity.Self().kill().queue()
		widget.add(...)
	}
)

⇒ kill @s
⇒ ...
```

### Sort

| Sort           |
| -------------- |
| Sort.random    |
| Sort.furthest  |
| Sort.nearest   |
| Sort.albitrary |

### Range

The Range class defines a range of values(e.g 3..10 in vanilla)

| Range  |                              |
| ------ | ---------------------------- |
| [to]   | Number for the maximum range |
| [from] | Number for the minimal range |

```dart
Range(0,10)
```

Use Range.to to define less than and Range.from to define greater than.

Use Range.exact to get the exact Range(e.g 4)

```dart
Range.exact(4)
```

### EntityType

| EntityType |                                   |
| ---------- | --------------------------------- |
| String     | String representation of the type |

There is also an EntityType for every type_id in minecraft with `Entities.[type_id]`

```dart
Say(
	Entity(
		selector: "e",
		limit: 1,
		tags:["first","second"],
		scores:[Score(score1).matches(10)],
		team: Team("my_team"),
		type: Entities.armor_stand,
		distance: Range.to(2),
		area: Area.fromLocations(
			// use null for a unlimited selection
			Location.glob(x: -10,y: null,z: -10),
			Location.glob(x: 10, y: null, z: 10)
		),
		level: Range.from(1),
		gamemode: Gamemode.creative,
		horizontalRotation: Range.from(1),
		verticalRotation: Range(20, 80),
	).sort(Sort.random)
)

⇒ say @e[limit=1,tag=first,tag=second,scores:{test=10},team=my_team,type=armor_stand,distance=..2,x=-10,z=-10,dx=20,dz=20,level=1..,gamemode=creative,y_rotation=1..,x_rotation=20..80,sort=random]
```

| specific constructors     |                                                             |
| ------------------------- | ----------------------------------------------------------- |
| Entity.Selected(...)      | creates an entity with @s                                   |
| Entity.Self(...)          | Entity.Selected, but shorter                                |
| Entity.Player(...)        | creates an entity with @p                                   |
| Entity.PlayerName(String) | creates an entity with an implicit name                     |
| Entity.All(...)           | creates an entity with @a                                   |
| Entity.Random(...)        | creates an entity with @r                                   |
| Entity.Select(Selector)   | takes in a Selector to select the Entity                    |
| Entity.clone(Entity)      | creates a new instance of an already existing Entity object |

### Entity.not

With the not function you can negate specific arguments. It takes in the same options as `Entity()`.

**Example:**

```dart
Say(Entity().not(tags:["mytag"],nbt:{"istrue":1}))
⇒ say @e[tag=!mytag,nbt=!{"istrue":1}]
```

### Entity.copyWith

Creates a new Entity based on the existing one and applies new arguments. (same as constructors)

**Example:**

```dart
Entity ent1 = Entity(type:Entities.sheep)
Entity ent2 = ent1.copyWith(distance:Range.to(1))
```

### Entity.setValues

Modifies the properties of the existing Entity and applies new arguments(same as constructors)

**Example:**

```dart
Entity ent1 = Entity(type:Entities.sheep)
ent1.setValues(distance:Range.to(1))
⇒ @e[type=sheep,distance=..1]
```

## Tag

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/082d9Jb9eOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A tag saves a boolean value with an entity inside the game.

| constructor |                                             |
| ----------- | ------------------------------------------- |
| String      | the name of the tag                         |
| entity      | the entity you that want to assign a tag to |
| value       | the boolean value(default true)             |

**Example:**

```dart
Tag("firstTag",entity:Entity.Player(),value: true)
⇒ tag @p add firstTag
```

There is also the add or remove method for changing a variable:

```dart
Tag mytag = Tag("firstTag",entity:Entity.Player())
// in generate
mytag.add(),
mytag.remove()

⇒ tag @p add firstTag
⇒ tag @p remove firstTag
```

Also consider the addTag method on an entity.

### toggle

With the toggle method you can toggle the value(invert the tag). This is done with a temporary tag:

```dart
Tag("mytag",entity:Entity.Selected()).toggle()
⇒ execute if entity @s[tag=mytag] run tag @s add objd_temp
⇒ execute if entity @s[tag=objd_temp] run tag @s remove mytag
⇒ execute if entity @s[tag=!objd_temp] run tag @s add mytag
⇒ tag @s remove objd_temp
```

### removeIfExists

The `removeIfExists` method removes the tag and may execute some action before if the tag exists.

```dart
Tag("mytag",entity:Entity.Selected()).removeIfExists(
	then: Say("removed")
) // optional argument
⇒ execute if entity @s[tag=mytag] run say removed
⇒ execute if entity @s[tag=mytag] run tag @s remove mytag
```

### Operators

You can use Operators to use Conditions and Assignments of new values faster.

** >> **

Assignes a new boolean value to the Tag(removes or adds the tag).

```dart
	Tag("test") >> true
	⇒ /tag @s add test
```

** & **

Checks if the Tag is a certain value and returns a Condition to use in If.

```dart
	If(
		Tag("test") & true,
		then: [
			...
		]
	)
	⇒ /execute if entity @s[tag=test] run ...
```

### Prefixes

Often you find yourself giving all tags a prefix espacially for your project. This can get very repetitive and anoying, so objD has this prefix built in.
Just assign the wanted prefix to the Tag.prefix constant and most tags(initiated with Tag, Entity and Summon) will be converted:

```dart
Tag.prefix = "stevertus_"
```

## Scoreboard

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/WCzHHjScj28" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A scoreboard objective holds values, kind a like a Variable inside Minecraft. The Scoreboard class just handles adding or removing objectives. The value assignment is handled by the Score class.

| constructor |                                                                                 |
| ----------- | ------------------------------------------------------------------------------- |
| String      | name of the objective(required)                                                 |
| type        | the objective type (default = dummy)                                            |
| display     | TextComponent that displays the name                                            |
| addIntoLoad | bool whether the scoreboard should be added into your load file(default = true) |

objD automatically keeps a list of all scoreboards and inserts them into the given load file, ignoring doubled names.
**Example:**

```dart
Scoreboard(
"death_count",
type: "deathCount",
display: TextComponent("This is how many deaths you have:"),
addIntoLoad: true
)
Scoreboard("death_count")

// load.mcfunction:
/scoreboard objectives add death_count deathCount [{"text":"This is how many deaths you have:"}]
```

So the second scoreboard was not added because one "death_count" already existed.

The `Scoreboard.add` constructor does exactly the same but puts the result without checking in the current file.

`Scoreboard.remove` removes an objective by its name again.

With `Scoreboard.setdisplay` you can display the values:

| Scoreboard.setdisplay |                                                 |
| --------------------- | ----------------------------------------------- |
| String                | name of the objective(required)                 |
| display               | String for display location (default = sidebar) |

### Prefixes

Often you find yourself giving all scoreboards a prefix espacially for your project. This can get very repetitive and anoying, so objD has this prefix built in.
Just assign the wanted prefix to the Scoreboard.prefix constant and all your scores will be converted:

```dart
Scoreboard.prefix = "stevertus_"
```

### Accessing the Scores

A Scoreboard implements the operator []. With this operator you can retrieve a score quickly from its scoreboard by passing either an Entity or a String representing a player name(or fake name):

```dart
var board = Scoreboard("test");
...
var score1 = board[Entity.Self()];
var score2 = board["#some_constant"];
```

## Score

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/WCzHHjScj28" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The score class is the basis for setting values, calculating with scores and checking the values.
It implements one base class with no functionality and several methods to do actions:

| constructor |                                                                                       |
| ----------- | ------------------------------------------------------------------------------------- |
| Entity      | the entity within the scoreboard                                                      |
| String      | the name of the objective                                                             |
| addNew      | bool whether it should add the scoreboard itself if it does not exist(default = true) |

> With the addNew property it is not required to add a scoreboard before!

#### Calculations

These methods can be used to set or calculate the value:

| name            | arguments                                                                            |
| --------------- | ------------------------------------------------------------------------------------ |
| set             | int                                                                                  |
| reset           |                                                                                      |
| add             | int                                                                                  |
| subtract        | int                                                                                  |
|                 | **The following compare another Score**                                              |
| setEqual        | Score                                                                                |
| swapWith        | Score                                                                                |
| setToSmallest   | Score                                                                                |
| setToBiggest    | Score                                                                                |
| addScore        | Score                                                                                |
| subtractScore   | Score                                                                                |
| multiplyByScore | Score                                                                                |
| divideByScore   | Score                                                                                |
| modulo          | Score                                                                                |
| setToData       | Data                                                                                 |
| setToResult     | Command,useSuccess(bool)                                                             |
| setToWidget     | Widget,useSuccess(bool) (⇒ CAUTION make sure your Widget just generates one Command) |
| setToCondition  | Condition,useSuccess(bool)                                                           |
| findSmallest    | List\<Score>,min (⇒ finds the smallest value in a list of scores)                    |
| findBiggest     | List\<Score>,max (⇒ finds the biggest value in a list of scores)                     |

> All of these methods return a new instance of Score with the calculations applied.
> So you can also chain single calculations or use multiple on one base Score.

**Examples:**

```dart
// defining scores variables inside the widget
Score base = Score(Entity.Selected(),"score",addNew: true)
Score another = Score(Entity.Selected(),"score2")
// ... in the generate method:
base.set(5).add(3).subtract(10).reset()
⇒ scoreboard players set @s score 5
⇒ scoreboard players add @s score 3
⇒ scoreboard players remove @s score 10
⇒ scoreboard players reset @s score

base.setEqual(another).swapWith(another).setToBiggest(another)
⇒ scoreboard players operation @s score = @s score2
⇒ scoreboard players operation @s score >< @s score2
⇒ scoreboard players operation @s score > @s score2

another.addScore(base).divideByScore(base).modulo(base)
⇒ scoreboard players operation @s score2 += @s score
⇒ scoreboard players operation @s score2 /= @s score
⇒ scoreboard players operation @s score2 %= @s score



base.setToData(Data.get(Location("~ ~ ~"),"Items[0].Count"))
⇒ execute store result score @s score run data get block ~ ~ ~ Items[0].Count 1

// using success instead of result
base.setToResult(Command("say hi"),useSuccess:true)
⇒ execute store success score @s score run say hi
```

#### Conditions

These methods can be used for example with if to match values:

| name             | arguments | example Result         |
| ---------------- | --------- | ---------------------- |
| matches          | int       | @s score matches 5     |
| matchesRange     | Range     | @s score matches 0..20 |
| isEqual          | Score     | @s score = @s score2   |
| isSmaller        | Score     | @s score < @s score2   |
| isSmallerOrEqual | Score     | @s score <= @s score2  |
| isBigger         | Score     | @s score > @s score2   |
| isBiggerOrEqual  | Score     | @s score >= @s score2  |

### Operators

Operators are a way to make the common used methods easier and more accessible. You can use the operators(+,-,/,\*...) like you would with numbers or strings. The Score Widget detects the type automatically and returns the matching methods.

| Operator   | available Types                 | equivilant to                  |
| ---------- | ------------------------------- | ------------------------------ |
| >>         | int, Score, Data.get, Condition | score.set(int)                 |
| +          | int, Score                      | score.add(int)                 |
| -          | int, Score                      | score.substract(int)           |
| %          | int, Score                      | score.modulo(score2)           |
| /          | int, Score                      | score.divideByScore(score2)    |
| \*         | int, Score                      | score.multiplyByScore(score2)  |
| Conditions | used in If                      |
| &          | int,Score,Range                 | score.matches(int)             |
| >          | int, Score                      | score.isBigger(score2)         |
| <          | int, Score                      | score.isSmaller(score2)        |
| >=         | int, Score                      | score.isBiggerOrEqual(score2)  |
| <=         | int, Score                      | score.isSmallerOrEqual(score2) |

### Constant Score

Do you need constant values with scores? objD got you covered with `Score.con`:

| Score.con |                                                                                    |
| --------- | ---------------------------------------------------------------------------------- |
| int       | a constant number                                                                  |
| addNew    | bool whether it should add objd_consts itself if it does not exist(default = true) |

This will automatically create a scoreboard called `objd_consts` and set the value to the fake entity `#[value]`
**Example:**

```dart
Score.con(5)
⇒ scoreboard players set #5 objd_consts 5
```

### Selected Score

Often times you want the score of a selected Entity(@s). Score.fromSelected is the same as Score but has a predefined entity.
**Example:**

```dart
Score.fromSelected("objective").set(3)
⇒ scoreboard players set @s objective 3
```

The score class is the basis for setting values, calculating with scores and checking the values.
It implements one base class with no functionality and several methods to do actions:

| constructor |                                                                                       |
| ----------- | ------------------------------------------------------------------------------------- |
| Entity      | the entity within the scoreboard                                                      |
| String      | the name of the objective                                                             |
| addNew      | bool whether it should add the scoreboard itself if it does not exist(default = true) |

> With the addNew property it is not required to add a scoreboard before!

#### Calculations

These methods can be used to set or calculate the value:

| name            | arguments                                                         |
| --------------- | ----------------------------------------------------------------- |
| set             | int                                                               |
| reset           |                                                                   |
| add             | int                                                               |
| subtract        | int                                                               |
|                 | **The following compare another Score**                           |
| setEqual        | Score                                                             |
| swapWith        | Score                                                             |
| setToSmallest   | Score                                                             |
| setToBiggest    | Score                                                             |
| addScore        | Score                                                             |
| subtractScore   | Score                                                             |
| multiplyByScore | Score                                                             |
| divideByScore   | Score                                                             |
| modulo          | Score                                                             |
| setToData       | Data                                                              |
| setToResult     | Command,useSuccess(bool)                                          |
| findSmallest    | List\<Score>,min (⇒ finds the smallest value in a list of scores) |
| findBiggest     | List\<Score>,max (⇒ finds the biggest value in a list of scores)  |

> All of these methods return a new instance of Score with the calculations applied.
> So you can also chain single calculations or use multiple on one base Score.

**Examples:**

```dart
// defining scores variables inside the widget
Score base = Score(Entity.Selected(),"score",addNew: true)
Score another = Score(Entity.Selected(),"score2")
// ... in the generate method:
base.set(5).add(3).subtract(10).reset()
⇒ scoreboard players set @s score 5
⇒ scoreboard players add @s score 3
⇒ scoreboard players remove @s score 10
⇒ scoreboard players reset @s score

base.setEqual(another).swapWith(another).setToBiggest(another)
⇒ scoreboard players operation @s score = @s score2
⇒ scoreboard players operation @s score >< @s score2
⇒ scoreboard players operation @s score > @s score2

another.addScore(base).divideByScore(base).modulo(base)
⇒ scoreboard players operation @s score2 += @s score
⇒ scoreboard players operation @s score2 /= @s score
⇒ scoreboard players operation @s score2 %= @s score



base.setToData(Data.get(Location("~ ~ ~"),"Items[0].Count"))
⇒ execute store result score @s score run data get block ~ ~ ~ Items[0].Count 1

// using success instead of result
base.setToResult(Command("say hi"),useSuccess:true)
⇒ execute store success score @s score run say hi
```

#### Conditions

These methods can be used for example with if to match values:

| name             | arguments | example Result         |
| ---------------- | --------- | ---------------------- |
| matches          | int       | @s score matches 5     |
| matchesRange     | Range     | @s score matches 0..20 |
| isEqual          | Score     | @s score = @s score2   |
| isSmaller        | Score     | @s score < @s score2   |
| isSmallerOrEqual | Score     | @s score <= @s score2  |
| isBigger         | Score     | @s score > @s score2   |
| isBiggerOrEqual  | Score     | @s score >= @s score2  |

### Constant Score

Do you need constant values with scores? objD got you covered with `Score.con`:

| Score.con |                                                                                    |
| --------- | ---------------------------------------------------------------------------------- |
| int       | a constant number                                                                  |
| addNew    | bool whether it should add objd_consts itself if it does not exist(default = true) |

This will automatically create a scoreboard called `objd_consts` and set the value to the fake entity `#[value]`
**Example:**

```dart
Score.con(5)
⇒ scoreboard players set #5 objd_consts 5
```

### Selected Score

Often times you want the score of a selected Entity(@s). Score.fromSelected is the same as Score but has a predefined entity.
**Example:**

```dart
Score.fromSelected("objective").set(3)
⇒ scoreboard players set @s objective 3
```

## Block

There is also a util class called Block which provides a wrapper for all available blocks in Minecraft.
**Usage:**

```dart
Block([minecraft_block_id]) // as string or
Blocks.[minecraft_block_id]
```

All ids can be found [here](https://minecraft.gamepedia.com/Block#List_of_blocks).
But you can also insert a block by its string:

| constructor |                        |
| ----------- | ---------------------- |
| String      | the minecraft block id |

**Example:**

```dart
SetBlock(
	Blocks.stone,
	location: Location.here()
)
```

You can also use Blocks.all to get a List of all the block from the latest minecraft version and Blocks.snapshot to get the new blocks in the next version.

### Block.nbt

This is a special function that creates a block with the option to add nbt data and blockstates.

| Block.nbt       |                                                          |
| --------------- | -------------------------------------------------------- |
| Block or String | the Block type                                           |
| states          | a Map of Blockstates(e.g {"left":true}, optional)        |
| nbt             | Nbt in form of a Dart Map(optional)                      |
| strNbt          | Nbt in a pure String format, allows for 1b etc(optional) |

With this function you can fully configure your blocks.

## Location

In the block example we already used a class called Location. This translates into Minecraft Coordinates.

| constructor |                                              |
| ----------- | -------------------------------------------- |
| String      | the minecraft coordinate string(e.g "~ ~ ~") |

```dart
SetBlock(Blocks.stone,location: Location("~ 5 ~"))
```

There is also a shortcut for " ~ ~ ~ ":

| Location.here | Selects the current Position |
| ------------- | ---------------------------- |


```dart
Location.here()
⇒ ~ ~ ~
```

But the Location class also provides a wrapper for global coordinates:

| Location.glob |                                             |
| ------------- | ------------------------------------------- |
| x             | a double defining the absolute x coordinate |
| y             | a double defining the absolute y coordinate |
| z             | a double defining the absolute z coordinate |

```dart
Location.glob(x: 5,y: 51.5,z: 784.20)
⇒ 5 51.5 784.2
```

And also for relative coordinates:

| Location.rel |                                             |
| ------------ | ------------------------------------------- |
| x            | a double defining the relative x coordinate |
| y            | a double defining the relative y coordinate |
| z            | a double defining the relative z coordinate |

```dart
Location.rel(x: 5,y: 1.5,z: 0)
⇒ ~5 ~1.5 ~
```

And local coordinates(depends on the rotation of the head):

| Location.local |                                          |
| -------------- | ---------------------------------------- |
| x              | a double defining the local x coordinate |
| y              | a double defining the local y coordinate |
| z              | a double defining the local z coordinate |

```dart
Location.local(x: 0,y: 1,z: 2.5)
⇒ ^ ^1 ^2.5
```

To clone a Location use Location.clone:

| Location.clone |                     |
| -------------- | ------------------- |
| Location       | the source location |

```dart
Location.clone(Location.rel(y:2))
⇒ ~ ~2 ~
```

There is also a method for a location:

| methods     |                                            |
| ----------- | ------------------------------------------ |
| storeResult | Command, path, scale, datatype, useSuccess |

This stores a result or success of a command in the nbt path of a location.
**Example:**

```dart
Location.here().storeResult(
	Command('say hello'),
	path: "Items[0].tag.command",
	useSuccess:true,
	scale: 1,
	datatype: "byte"
)

⇒ execute store success block ~ ~ ~ Items[0].tag.command 1 byte run say hello
```

## Area

The Area class provides a way to select a three dimensional space between some locations.
Therefore it automatically builds the lowest and highest coordinates and calculates the distances.

| constructor | doubles         |
| ----------- | --------------- |
| x1          | one x corner    |
| y1          | one y corner    |
| z1          | one z corner    |
| x2          | second x corner |
| y2          | second x corner |
| z2          | second x corner |

This is especially useful for `if blocks`, Fill and Clone.

**Example:**

```dart
Area(x1: 100, y1: -15.75, z1: 0, x2: 2, y1: 10, z2: -10)
⇒ 2 -15.75 -10 100 10 0
```

### Area.rel

Use Area.rel if you want to select the area relative to an unknown position.

### Area.fromLocations

But if you would also like local or relative coordinates, you can always pass the locations directly:

| Area.fromLocations |            |
| ------------------ | ---------- |
| Location           | location 1 |
| Location           | location 2 |

### Area.fromRanges

There is as well a constructor to construct an Area within a defined Range of a Location(Works like fill or clone).

| Area.fromRanges |                           |
| --------------- | ------------------------- |
| x               | original location         |
| y               | original location         |
| z               | original location         |
| dx              | distance to next location |
| dy              | distance to next location |
| dz              | distance to next location |

**Example:**
ˋˋˋdart
Area.fromRanges(
x: 10,
y: 64,
z: 10,
dx: 10,
dy: 10,
dz: 10
)
==> 10 64 10 20 74 20
ˋˋˋ

## Rotation

The Rotation class is very similar to Location but takes in just two directions for an entities rotation:

| constructor |                                            |
| ----------- | ------------------------------------------ |
| String      | the minecraft coordinate string(e.g "~ ~") |

| Rotation.glob |                                       |
| ------------- | ------------------------------------- |
| x             | int representing global x orientation |
| y             | int representing global y orientation |

| Rotation.rel |                                                                 |
| ------------ | --------------------------------------------------------------- |
| x            | int representing rotation relative to the current x orientation |
| y            | int representing rotation relative to the current y orientation |

**Example:**

```dart
Rotation.rel(x: 90,y: 180)
⇒ ~90 ~180

Execute.rotated(Rotation.glob(x:0,y:90),children:[
	Command("tp @s ^ ^ ^10")
])
⇒ execute rotated 0 90 run command tp @s ^ ^ ^10
```

### Predefined Values

The Rotation object has some common values. These mainly include all the directions(north, west, south, east):

```dart
Rotation.n ⇒ 180
Rotation.s ⇒ 0
Rotation.e ⇒ -90
Rotation.w ⇒ 90
```

You can also generate a Rotation object directly:

```dart
Rotation.north() 		⇒ 180  0
Rotation.east(y: 10) 	⇒ -90 10
Rotation.south(dx: 45)  ⇒  45  0
```

Here you can also specify the y-value and an additional difference in x.

### Get Direction

The `getDirection` method allows you to extract a direction from the x value of a Rotation. This can be used in Blockstates for example.
All the direction are rounded to 90° steps.

Example:

```dart
var myrot = Rotation.global(x: 90, y: 56)
myrot.getDirection() ⇒ "west"
```

## Data

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/06IiFVCs1x4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Data Widgets allows you to edit nbt data of Entities or Blocks.

| constructor |                                                                               |
| ----------- | ----------------------------------------------------------------------------- |
| dynamic     | The target Entity, Block or Storage which you want to modify                  |
| nbt         | A Dart Map containing new nbt data                                            |
| strNbt      | option to override the nbt map with a String to support expressions like `1b` |
| type        | A String defining the operation type(default=merge)                           |

**Example:**

```dart
Data(
	Entity.Selected(),
	nbt: {
		"Invisible":1,
		"NoGravity":1
	}
)
⇒ data merge entity @s {"Invisible":1,"NoGravity":1}
```

> There are also subconstructors for each operation type(Data.merge, Data.get, Data.remove)

### DataModify

And the modify operation is also available, yet a bit more complex:

| Data.modify |                                                                  |
| ----------- | ---------------------------------------------------------------- |
| dynamic     | The target Entity OR Location which you want to modify           |
| path        | the nbt path you want to modify                                  |
| modify      | A DataModify object defining which parameters you want to modify |

So this is split up into a seperate class:

There are five sub operations again: set, merge, prepend, append and insert.
All follow this constructor rules:

| DataModify |                                                                                  |
| ---------- | -------------------------------------------------------------------------------- |
| dynamic    | The source of the modification. Can be a Map, String, Number, Entity or Location |
| fromPath   | optional path for the Entity or Location source from where to read the data      |

So we can for Example use

```dart
Data.modify(
	Entity.Selected(),
	path: "my_Custom_Path",
	modify: DataModify.set(
		"hey" // or {"nbt":"here"} or 56
	),
)
⇒ data modify @s my_Custom_Path set value "hey"
```

Or
So we can for Example use

```dart
Data.modify(
	Entity.Selected(),
	path: "my_Custom_Path2",
	modify: DataModify.insert(
		Entity.Selected(), // or Location... to get data from a block
		index: 2, // insert also needs an additional index
		fromPath: "my_Custom_Path"
	),
)
// this just copies one property to another
⇒ data modify @s my_Custom_Path2 insert from entity @s my_Custom_Path
```

### Data.copy

A handy shortcut for that is the Data.copy constructor, which just copies a property from one path to another:

| Data.copy |                                                        |
| --------- | ------------------------------------------------------ |
| dynamic   | The target Entity OR Location which you want to modify |
| path      | the nbt path you want to copy to                       |
| from      | The source Entity OR Block                             |
| fromPath  | The source nbt path                                    |

```dart
Data.copy(
	Entity.Selected(),
	path: "my_Custom_Path2",
	from: Location("~ ~-1 ~"),
	fromPath: "Items[0].tag.display.name"
)
⇒ data modify @s my_Custom_Path2 set from block ~ ~-1 ~ Items[0].tag.display.name
```

### Data.fromScore

You can also convert a score directly to a nbt field with Data.fromScore:
|Data.fromScore| |
|--|--|
|dynamic|The target Entity OR Location which you want to modify|
|path|the nbt path you want to copy to|
|score|The source Score|
|scale|optional int (default = 1)|
|datatype| a Java datatype for the score(default = byte) |

```dart
Data.fromScore(
	Entity.Selected(),
	path: "my_Custom_Path",
	score: Score(Entity(),"myscore")
)
⇒ execute store result entity @s my_Custom_Path 1 byte run scoreboard players get @e myscore
```

### DataStorage

Since 1.15 you can store nbt data globally. To use this with objD include a DataStorage as a target.

**Example:**

```dart
Data.merge(
	DataStorage("example:store"),
	nbt: {"test":true}
)
```

Also take a look at the objD [Storage API](/utils#storage) for easier accessibility.

## Item

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/6aS3K3khuYI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Item class represents an item in an inventory in Minecraft. It is used in the [Give]() or Nbt Commands.

| constructor             |                                                       |
| ----------------------- | ----------------------------------------------------- |
| Item \| Block \| String | the type of item(required, see example)               |
| count                   | Integer value for the amount of stacked items         |
| slot                    | The current Slot of the item(does not work for give)  |
| damage                  | the used durability of the item                       |
| hideFlags               | int from 1 to 63 describing which information to hide |
| model                   | int describing which model varient should be used     |
| name                    | a TextComponent showing a name                        |
| lore                    | a List of TextComponents giving extra information     |
| nbt                     | addional NBT as Dart Map                              |

**Example:**

```dart
Give(Entity.Selected(),
	item: Item(
		Items.iron_axe, // OR Blocks.stone OR "whatever id"
		count: 5,
		name: TextComponent("My Item",color:Color.Black),
		lore: [
			TextComponent("My Description",color:Color.Blue),
		],
		damage: 40,
		model: 3390001,
		nbt: {
			"customNBT":1
		}
	)
)

⇒ give @s minecraft:iron_axe{"customNBT":1,"Damage":40,"CustomModelData":3390001,"display":{"Name":"{\"text\":\"My Item\",\"color\":\"black\"}","Lore":["{\"text\":\"My Description\",\"color\":\"blue\"}"]}} 5
```

or very simple

```dart
Give(
	Entity.Selected(),
	item: Items.apple
)

⇒ give @s minecraft:apple
```

**Item.copyWith** creates a copy of the current Item overriding specified properties.

**Item.fromJson** creates an Item based on nbt or json data.

Items is like Entities or Blocks a utility class to provide a list of all available items.

| Item([minecraft_item_id]) | creates a Item from a String                      |
| ------------------------- | ------------------------------------------------- |
| Items.[minecraft_item_id] | there is also an value for each item in Minecraft |

### HideFlags

To help you with the hideFlags value, there is the HideFlags method. It translates the human readable boolean values into an int.

| HideFlags   | bools                                 |
| ----------- | ------------------------------------- |
| enchant     | whether to show the enchantments      |
| attributes  | whether to show the attributes        |
| unbreakable | whether to show the unbreakable tag   |
| canDestroy  | whether to show the canDestroy tag    |
| canPlaceOn  | whether to show the canPlaceOn tag    |
| others      | whether to show other nbt information |

**Example:**

```dart
var flags = HideFlags(attributes:true, unbreakable: true, others: true); // = 38
...
Item(Items.apple,hideFlags: flags)
```

## Slot

The Slot object gives you certain utils to manipulate Inventories and Containers with the Item, Replaceitem or Data.
Every Slot has a String(slot) like `inventory.10` used in replaceitem and an id like `19` that is used with nbt data.
objD should change between these values automatically for the specific usecase.

| constructor |                        |
| ----------- | ---------------------- |
| slot        | String for Replaceitem |
| id          | int for NBT            |

### Constants

More important are all the constants:

- Slot.Hotbar[0-8]
- Slot.Inventory[0-26]
- Slot.Enderchest[0-26]
- Slot.Container[0-53]
- Slot.MainHand
- Slot.OffHand
- Slot.Head
- Slot.Chest
- Slot.Legs
- Slot.Feet

**Example:**

```dart
ReplaceItem(
	Entity.All(),
	item:Items.golden_helmet,
	slot:Slot.Head
)
⇒ replaceitem entity @a armor.head minecraft:golden_helmet
```

### Helpers

Together with this objD also introduces helpers to quickly find the desired slot.

**Slot.inv** takes in two numbers, like `2,6`
The first number represents the row in the inventory, so the second row
And the second number is the sixth slot of that row.

objD calculates the corresponding Slot. In this case `inventory.14`.

> Notice: also the hotbar can be calculated with this. It is the 4th row

**Slot.chest** takes in numbers, like `5,6` and an optional boolean for using an enderchest
And does exactly the same but with a container, like a chest.

**Slot.drop** takes in numbers, like `1,3`
This calculates the rows and columns for a 3x3 Container like a Dropper or a Dispenser.
Therefore just values from 1 to 3 are allowed.

**Slot.craft** used to mark a 3x3 space inside a conventional container.
takes in two numbers, like Slot.inv or one number from 1-9. The start options marks the upper left.

**Example:**

```dart
ReplaceItem.block(
	Location.here(),
	item:Item(Items.beef),
	slot:Slot.chest(3,8)
)
⇒ replaceitem block ~  ~  ~  container.25 minecraft:beef
```
