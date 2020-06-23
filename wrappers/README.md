---
sidebar: auto
footer: MIT Licensed | Copyright © 2020 Stevertus
prev: /basics/
next: /texts/
---

# Command Wrappers

In this section are a few classes that build commands with inputs(Entities, Texts, Blocks, Locations).

## Comment

The Comment widget generates a simple line with some annotations(# ...).
It also features a simple line break and a Null Value:
**Example:**

```dart
Comment("hello world")
⇒ # hello world
Comment.LineBreak()
⇒
Comment.Null() // dead end in widget tree

Comment.Seperate(10)
⇒ ##########

```

### Comment.FileHeader

This constructor generates a header for a File that includes context information, a description and the author.

| Comment.FileHeader |                                                        |
| ------------------ | ------------------------------------------------------ |
| String             | a description of the functionality of the current file |
| author             | prints your name in the header(optional)               |
| calledFrom         | tells other people where this file is called(optional) |
| context            | which entity executes the file with which position?    |

To avoid repeating your name all the time, objd does it automatically when set the constant Comment.Author before using it:

```dart
Comment.Author = 'Stevertus'
```

It is a good practise to combine the Header with the File's header property:
**Example:**

```dart
File(
    'test',
	header: Comment.FileHeader(
    	"tests whether the entity exists",
    	calledFrom: "main",
    	context: "@s",
    ),
)
⇒
################################################
#
# Author:
#  Stevertus
#
# Description:
#  tests whether the entity exists
#
# Called in:
#  main
#
# Context:
#  @s
#
################################################
```

## Execute

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/nhiEE9vY-78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

One of the most used commands has a widget too. The execute command has multiple syntaxes that allow to manipulate the position, executer or condition.

| constructor    |                                                                       |
| -------------- | --------------------------------------------------------------------- |
| children       | a List of children that should be executed(required)                  |
| encapsulate    | weither the children should be in an extra file for a certain length  |
| as             | an [Entity](#entity) that runs the commands                           |
| at             | an [Entity](#entity) from where the command should run                |
| If             | a Condition that must be true to execute the commands                 |
| location       | a Location or Entity from where to run the commands                   |
| align          | String with align statements e.g: "xyz"                               |
| anchor         | either Facing.eyes or Facing.feet                                     |
| facing         | A Location or Entity to rotate to                                     |
| rotation       | A rotation of type [Rotation](#rotation)                              |
| dimension      | Dimension of overworld, the_end or the_nether                         |
| targetFilePath | force the group to use this path instead of `/objd/`                  |
| targetFileName | force the group to use this name instead of automatic generated names |

All Execute classes are also an Group, so they will group commands in seperate files and allow multiple children.
Example:

```dart
Execute(
	as: Entity.player(),
	at: Entity.Selected(),
	If: Condition.entity(Entity())
	location: Location.here(),
	align: "yz",
	anchor: Facing.eyes,
	facing: Location().glob(x:0,y:0,z:0)
	rotation: Rotation.rel(x:10,y:20),
	dimension: Dimension.the_nether
	children: List<Widget> [
		Command("/say I get executed")
		Say("Me too")
	]
),

⇒ execute as @p at @s if entity @e positioned ~ ~ ~ align yz anchored eyes facing 0 0 0 rotated ~10 ~20 in the_nether run say I get executed
  execute as @p at @s if entity @e positioned ~ ~ ~ align yz anchored eyes facing 0 0 0 rotated ~10 ~20 in the_nether run say Me too
```

| Execute. as   |                                               |
| ------------- | --------------------------------------------- |
| Entity        | the entity from which the children should run |
| children      | a List of children that should be executed    |
| [encapsulate] | same as base                                  |

This is just a different notation for Execute.

```dart
Execute.as(
	Entity.player(),
	children: List<Widget> [
		Command("/say I get executed")
	]
),

⇒ execute as @p run say I get executed
```

| Execute. at   |                                               |
| ------------- | --------------------------------------------- |
| Entity        | the entity from where the children should run |
| children      | a List of children that should be executed    |
| [encapsulate] | same as base                                  |

```dart
Execute.at(
	Entity.player(),
	children: List<Widget> [
		Command("/say I get executed")
	]
),

⇒ execute at @p run say I get executed
```

| Execute.asat  |                                                         |
| ------------- | ------------------------------------------------------- |
| Entity        | the entity from which and where the children should run |
| children      | a List of children that should be executed              |
| [encapsulate] | same as base                                            |

Asat combines as and at to just one entity.

```dart
Execute.asat(
	Entity.player(),
	children: List<Widget> [
		Command("/say I get executed")
	]
),

⇒ execute as @p at @s run say I get executed
```

| Execute.positioned |                  |
| ------------------ | ---------------- |
| Entity\|Location   | the new position |
| ...                |                  |

Positioned sets the execution point of the command to a new Location or Entity.

```dart
Execute.positioned(
	Entity.player(), // Location...
	children: List<Widget> [
		Command("/say I get executed")
	]
),

⇒ execute positioned as @p run say I get executed
```

| Execute.align |                                 |
| ------------- | ------------------------------- |
| String        | representation of the alignment |
| ...           |                                 |

Aligns the position to the corners of the block grid.

| Execute.anchored |                            |
| ---------------- | -------------------------- |
| Facing           | Facing.eyes or Facing.feet |
| ...              |                            |

Sets the execution position(^ ^ ^) to the eyes or the feet.

| Execute.facing     |                                                     |
| ------------------ | --------------------------------------------------- |
| Entity or Location | the target to face(required)                        |
| facing             | either face the Facing.eyes(default) or Facing.feet |
| ...                |                                                     |

Sets the execution rotation so that it faces a location or an entity's feet or eyes.
**Example:**

```dart
Execute.facing(
	Entity.player(), // or Location...
	facing: Facing.feet // optional
	children: List<Widget> [
		Command("/say I get executed")
	]
)
⇒ execute facing entity @p feet run say I get executed
```

| Execute.rotated |                     |
| --------------- | ------------------- |
| Rotation        | the rotation object |
| ...             |                     |

Sets the execution rotation to the given rotation.

| Execute.dimension |                          |
| ----------------- | ------------------------ |
| Dimension         | the given dimension type |
| ...               |                          |

Sets the execution dimension(execute in) to either `Dimension.overworld`, `Dimension.the_end` or `Dimension.the_nether`.

### Methods

All of these constructors are also available as methods with some additional utils:

| Methods |                                             |
| ------- | ------------------------------------------- |
| center  | centeres the alignment(middle of the block) |

That means you can chain the actions, like with score, and use multiple actions at once:

```dart
// declaring the base
Execute ex = Execute(
	children:[
		Say("Hello"),
		Command("say e")
	]
)
// in the generate method:
ex.asat(
Entity.All())
	.center()
	.positioned(Location.rel(x:0,y:20,z:0))
⇒ execute as @a at @s align xyz positioned ~0.5 ~0.5 ~0.5 positioned ~ ~20 ~ run say Hello
   execute as @a at @s align xyz positioned ~0.5 ~0.5 ~0.5 positioned ~ ~20 ~ run say e
```

## If

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/fnC6_Ibm5q0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The if widget accepts a Condition and runs the children if the condition is true.
If just gives you an execute wrapper with if and else statements. The conditions have their own class.

| constructor    |                                                                       |
| -------------- | --------------------------------------------------------------------- |
| Condition      | the condition                                                         |
| then           | a List of Wigets that runs on match                                   |
| orElse         | a List of Widget that runs if it does not match(optional)             |
| targetFilePath | force the group to use this path instead of `/objd/`                  |
| targetFileName | force the group to use this name instead of automatic generated names |
| encapsulate    | bool whether it should create a new file                              |
| assignTag      | the Entity that recieves the tag(when specifing orElse)               |
| useTag         | a tag that should be used instead of `objd_isTrue`                    |

**Example:**

```dart
If(
	Condition(Entity.Player()),
	then: [
		Say("true")
	],
	orElse: [
		Say("false")
	]
)
⇒ execute if entity @p run tag @p add objd_isTrue
⇒execute as @p if entity @s[tag=objd_isTrue] run say true
⇒execute as @p unless entity @s[tag=objd_isTrue] run say false
```

You can also negate the Condition with `If.not`:

```dart
If.not(
	Condition(Entity.Player()),
	then: [
		Say("true")
	]
)
⇒ execute unless entity @p run say true
```

## Condition

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/fnC6_Ibm5q0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Condition class defines conditions for the if widget and more. It can also combines conditions and generates an argument list.

| constructor |                            |
| ----------- | -------------------------- |
| dynamic     | the thing you want to test |

Well it is not as easy as it looks. A condition can accept many values and this makes the Condition very complex.

| The argument can be a... | and generates e.g                 |                                                             |
| ------------------------ | --------------------------------- | ----------------------------------------------------------- |
| Block                    | if block ~ ~ ~ minecraft:stone    | To test a specific location use Condition.block             |
| Entity                   | if entity @s                      |
| Score                    | if score @s objective matches 5   | Attention! This needs a score condition method!             |
| Data.get                 | if data entity @s flying          | Just Data.get is accepted!                                  |
| Tag                      | if entity @s[tag=test]            | turns a tag into an entity                                  |
| Location                 | unless block ~ ~2 ~ air           | Just checks whether a block is present                      |
| Condition                | if entity @s if block ~ ~ ~ stone | Yes, you can nest Conditions like Widgets and combine them. |

**Examples:**

```dart
If(
	Condition(
		Entity.Selected()
	)
	,then:[Log('entity')],
)
⇒ execute if entity @s run say entity
If(
	Condition(
		Location.here()
	),
	then:[Say('block')],
)
⇒ execute unless block ~ ~ ~ minecraft:air run say block
If.not(
	Condition(
		Score(
			Entity.PlayerName("Stevertus"),
			"objective"
		).matches(10)
	),
	then:[Say('score')],
)
⇒ execute unless score Stevertus objective matches 10 run say score
```

For Score, Block and Entity there is also a named constructor along with:

| Condition.blocks |                                                             |
| ---------------- | ----------------------------------------------------------- |
| Area             | the Area of blocks that you want to compare                 |
| compare          | the lowest comparison Location of the area of the same size |

**Condition.block**: also requires a block type:

```dart
If(
	Condition.block(
		Location.here(),
		block: Blocks.stone
	),
	then:[Say('stone')],
)
⇒ execute if block ~ ~ ~ minecraft:stone run say stone
```

**Condition.predicate**: checks for a predicate:

```dart
If(
	Condition.predicate(
		Predicate("example:new")
	),
	then:[Say('predicate true')],
)
⇒ execute if predicate example:new run say predicate true
```

**Condition.not**: accepts same dynamic condition types as above but negates them
(if ⇒ unless, unless ⇒ if)

**Condition.and**: accepts a list of dynamic condition types, that all have to be true to trigger:

```dart
If(
	Condition.and([
		Location.here(),
		Entity(),
		Condition(...)
	]),
	then:[Say('true')],
)
⇒ execute unless block ~ ~ ~ minecraft:air if entity @e if ... run say true
```

**Condition.or**: accepts a list of dynamic condition types, but just one has to be true to trigger:

```dart
If(
	Condition.or([
		Location.here(),
		Entity(),
		Condition(...)
	]),
	then:[Say('true')],
)
⇒ execute unless block ~ ~ ~ minecraft:air run tag @p add objd_isTrue1
⇒ execute if entity @e run tag @p add objd_isTrue1
⇒ execute if ... run tag @p add objd_isTrue1
⇒ execute as @p if entity @s[tag=objd_isTrue1] run say true
⇒ tag @p remove objd_isTrue1
```

> Just temporary, will be done with tags later...

With this knowledge we can build pretty complex logical conditions:

```dart
If.not(
	Condition.and([
		Condition.not(Entity.Player()),
		Condition.or([
			Entity.Random(),
			Condition.blocks(
				Area(x1: 0, y1: 0, z1: 0, x2: 10, y2: 10, z2: 10),
				compare: Location('~ ~ ~'),
			),
			Condition.not(
				Condition.score(
					Score(Entity.Selected(),"test")
					  .matchesRange(Range(from:0,to:5))
				),
			),
		]),
	]),
	then: [Say("I'm done")]
)
⇒
execute if entity @p unless entity @r run tag @p add objd_isTrue1
execute if entity @p unless blocks 0 0 0 10 10 10 ~ ~ ~ run tag @p add objd_isTrue1
execute if entity @p if score @s test matches 0..5 run tag @p add objd_isTrue1
execute as @p if entity @s[tag=objd_isTrue1] run say I'm done
tag @p remove objd_isTrue1
```

## Team

The team Wiget is a wrapper for the team command and allows you to group entities together and apply group rules.

There are a few constructors:

**Team(String)** - just adds a new team
**Team.add(String,[options])** - adds the team and also applies some modifiers to it(take a look at Team.modify)
**Team.empty(String)** - clears the team and removes all entities in it
**Team.join(String, Entity)** - adds the entity to the team(an entity can only be in one team at a time)
**Team.leave(Entity)** - the entity is removed from their current team

| Team.modify or Team.add |                                                                  |
| ----------------------- | ---------------------------------------------------------------- |
| String                  | name of the team                                                 |
| display                 | TextComponent showing the team name in chat or scoreboard        |
| color                   | the teams Color                                                  |
| nametag                 | Either ModifyTeam.[always,never,hideForOtherTeam,hideForOwnTeam] |
| collision               | Either ModifyTeam.[always,never,pushOtherTeams,pushOwnTeam]      |
| deathMessage            | Either ModifyTeam.[always,never,hideForOtherTeam,hideForOwnTeam] |
| friendlyFire            | Should a member be able to hit a team mate?(bool)                |
| seeInvisisble           | Should a member be able to see an invisible team mate?(bool)     |
| prefix                  | a String showing in front of a player name                       |
| suffix                  | a String showing after a player name                             |

**Example:**

```dart
Team.add(
	"test",
	collision:ModifyTeam.always,
	color:Color.Red,
	display:  TextComponent("Hello"),
	friendlyFire:  true,
	suffix:  "Test",
	deathMessage:  ModifyTeam.hideForOwnTeam
)
⇒ team add test
⇒ team modify test displayName {"text":"Hello"}
⇒ team modify test color red
⇒ team modify test deathMessageVisibility hideForOwnTeam
⇒ team modify test friendlyFire true
⇒ team modify test collisionRule always
⇒ team modify test suffix Test
```

## Effect

This command is used to give an entity a specific effect and affect their gameplay.

| constructor   |                                                            |
| ------------- | ---------------------------------------------------------- |
| EffectType    | the kind of effect - usage: EffectType.[effect_id]         |
| entity        | the Entity you want to give the effect to(required)        |
| duration      | the amount of seconds the effect should last(default = 30) |
| amplifier     | the strength of the effect(default = 1)                    |
| showParticles | bool if effect particles should be visible(default = true) |

**Example:**

```dart
Effect(
	EffectType.jump_boost,
	entity: Entity.Player(),
	duration: 20,
	amplifier: 3,
	showParticles: false
)
⇒ effect give @p minecraft:jump_boost 20 3 true
```

Of course you can clear an effect again:

| constructor |                                                |
| ----------- | ---------------------------------------------- |
| Entity      | the entity that you want to clear              |
| EffectType  | the type of effect you want to clear(optional) |

**Example:**

```dart
Effect.clear(Entity.Player(),EffectType.jump_boost)
⇒ effect clear @p minecraft:jump_boost
```

## SetBlock

The SetBlock Command Class sets a Block at the specified location:

| constructor |                                 |
| ----------- | ------------------------------- |
| Block       | the Block type you want to set  |
| location    | where you want to set the block |
| nbt         | nbt as Map for the block        |

Example:

```dart
SetBlock(
	Blocks.stone,
	location: Location.glob(
		x: 5,
		y: 0,
		z: 20
	)
)
⇒ setblock 5 0 20 minecraft:stone
```

## Fill

Fill acts similar to setblock, but fills a whole area instead.

| constructor |                   |
| ----------- | ----------------- |
| Block       | the fill material |
| area        | the Area to fill  |

> Tip: There are also constructors for Fill.destroy, Fill.hollow, Fill.outline and Fill.keep

**Example:**

```dart
Fill(
	Blocks.dirt,
	area: Area.fromLocations(
		Location.glob(x: 0, y: 0, z: 0),
		Location.glob(x: 10, y: 20, z: 10)
	),
)
⇒ fill 0 0 0 10 20 10 minecraft:dirt
```

You can also just replace specific other blocks:

| Fill.replace |                                    |
| ------------ | ---------------------------------- |
| ...          | Everything the same                |
| replace      | the Block type you want to replace |

**Example:**

```dart
Fill.replace(
	Blocks.dirt,
	area: Area.fromLocations(
		Location.glob(x: 0, y: 0, z: 0),
		Location.glob(x: 10, y: 20, z: 10)
	),
	replace: Blocks.stone,
)
⇒ fill 0 0 0 10 20 10 minecraft:dirt replace minecraft:stone
```

## Clone

The clone command clones an Area to another Location with different modes.

| constructor |                                    |
| ----------- | ---------------------------------- |
| Area        | The Area that you want to copy     |
| to          | A Location where to paste the area |

**Example:**

```dart
Clone(
	Area(x1:0,y1:0,z1:0,x2:10,y2:10,z2:10),
	to: Location.here()
)
⇒ clone 0 0 0 10 10 10 ~ ~ ~
```

There are also the masked and replace modes:

| Clone.masked or Clone.replace |                                                                            |
| ----------------------------- | -------------------------------------------------------------------------- |
| Area                          | ...                                                                        |
| to                            | ...                                                                        |
| mode                          | a String assembling another option(optional. either normal, force or move) |

The same goes with `Clone.filtered` but it also accepts a property called block to just copy the specified block

**Example:**

```dart
Clone.filtered(
	Area(x1:0,y1:0,z1:0,x2:10,y2:10,z2:10),
	to: Location.here(),
	block: Blocks.air,
	mode: "move"
)
⇒ clone 0 0 0 10 10 10 ~ ~ ~ filtered minecraft:air move
```

## Say

The Say Class writes a simple message or an entity in the chat.

| constructor |                         |
| ----------- | ----------------------- |
| msg         | MessageString or Entity |

Example:

```dart
Say(
	"Hello"
)
⇒ say Hello
Say(
	Entity.Player()
)
⇒ say @p
```

## Give

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/6aS3K3khuYI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Gives a item to a player.

| constructor |                                     |
| ----------- | ----------------------------------- |
| Entity      | The player                          |
| item        | the Item you want to give(required) |

**Example:**

```dart
Give(Entity.Player(),
	item: Item(
		Items.apple,
		count: 5
	)
)

⇒ give @s minecraft:apple 5
```

## ReplaceItem

Sets a specific container slot to a item.

- for Entities:

| constructor |                                           |
| ----------- | ----------------------------------------- |
| Entity      | The entity                                |
| item        | the Item you want to set(required)        |
| slot        | a Slot Object with the slot set(required) |

**Example:**

```dart
ReplaceItem(Entity.Player(),
	slot: Slot.Hotbar5,
	item: Item(
		Items.apple,
		count: 5,
		model: 339001
	)
)

⇒ replaceitem entity @p hotbar.5 minecraft:apple{"CustomModelData":339001} 5
```

This works the same with ReplaceItem.block:

| ReplaceItem.block |                                           |
| ----------------- | ----------------------------------------- |
| Location          | The block location                        |
| item              | the Item you want to set(required)        |
| slot              | a Slot Object with the slot set(required) |

video
q8cI-Irpv9Q

## Particle

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/q8cI-Irpv9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The particle command spawns particles in the world to enhance certain graphics.

| constructor  |                                                                       |
| ------------ | --------------------------------------------------------------------- |
| ParticleType | the type of the particle( Particles.[particle_id] )                   |
| location     | where to show the particle(required)                                  |
| delta        | the directions in which the particle expands(Location.glob, optional) |
| speed        | the speed of the expanding particle(optional, but delta required)     |
| count        | the amount of particles(optional, but delta required)                 |
| force        | bool if the particle should be visible from far away(optional)        |

**Example:**

```dart
Particle(
	Particles.flame,
	location: Location.here(),
)
⇒ particle minecraft:flame ~ ~ ~
Particle(
	Particles.end_rod,
	location: Location.here(),
	delta: Location.glob(x: 1,y:4,z:0),
	speed: 2
	count: 100,
	force: false
)
⇒ particle minecraft:end_rod ~ ~ ~ 1 4 0 2 100 normal
```

For the Block and Item particle(shows item or block break) there is a named constructor:

| Particle.block or Particle.item |                                    |
| ------------------------------- | ---------------------------------- |
| Item or Block                   | the block or item you want to show |
| ...                             | same as Particle                   |

**Example:**

```dart
Particle.block(Blocks.sandstone,location:Location.here())
⇒ particle minecraft:block sandstone ~ ~ ~
```

## Summon

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/YjWIazvYCGg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The summon class creates a new entity at a given location.

| constructor  |                                                        |
| ------------ | ------------------------------------------------------ |
| EntityType   | the type of entity(required)                           |
| location     | the location as type Location(default Location.here()) |
| name         | a TextComponent respresenting the name of the entity   |
| nameVisible  | bool if name is shown                                  |
| invulnerable | bool                                                   |
| persistent   | bool                                                   |
| noAI         | bool                                                   |
| silent       | bool                                                   |
| small        | bool                                                   |
| gravity      | bool (put negated value in NoGravity)                  |
| glowing      | bool                                                   |
| passengers   | List of Summon Widgets that ride the entity            |
| effects      | List of Effects                                        |
| tags         | List of tags as String                                 |
| fire         | ticks(int) the entity should be on fire                |
| age          | int                                                    |
| rotation     | initial Rotation                                       |
| nbt          | additional nbt as Map(key-value pairs)                 |

**Example:**

```dart
Summon(
	Entities.armor_stand,
	location: Location.rel(x: 0,y:1,z:0),
	name: TextComponent("this is my name",color: Color.DarkBlue),
	invulnerable:true,
	small: true,
	gravity: false,
	fire: 100,
	effects:[Effect(EffectType.glowing,duration: 10,showParticles:false)],
	rotation: Rotation.abs(x: 10,y:100),
	nbt: {"Invisible":1},
)
⇒ summon armor_stand ~  ~1  ~  {"Invisible":1,"CustomName":"{\"text\":\"this is my name\",\"color\":\"dark_blue\"}","Invulnerable":1,"Small":1,"NoGravity":1,"ActiveEffects":[{"Id":24,"Amplifier":0,"Duration":200,"ShowParticles":0}],"Fire":100,"Rotation":[10.0,100.0]}
```

### Item.SpawnEgg

Gives you an Item object that can hold summon data for a spawnegg.

| Item.SpawnEgg |                                                                 |
| ------------- | --------------------------------------------------------------- |
| Item          | the type of spawnegg                                            |
| Summon        | a summon widget that tells it what entity to create by clicking |
| ...           | all other arguments of the item also apply                      |

**Example:**

```dart
Item.SpawnEgg(
	Items.pig_spawn_egg,
	Summon(
		Entities.cow,
	),
)
⇒ {"id": "minecraft:pig_spawn_egg", "tag": {"EntityTag": {"id": "minecraft:cow"}}}
```

## Schedule

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/OMUokMwfalA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Schedule schedules a file for the future. It delays its execution by the given ticks.

| constructor |                                                    |
| ----------- | -------------------------------------------------- |
| String      | name of a function(without namespace)              |
| ticks       | the delay                                          |
| mode        | either ScheduleMode.replace or ScheduleMode.append |

You can also use Schedule.file that requires a file instead to define both in one statement.

**Example:**

```dart
Schedule("timer",ticks:20)
⇒ schedule function example:timer 20t
```

### Schedule.append

Appends a Scheduled Function to the current Schedule.

It is also possible to directly generate files with Schedule.appendFile:

**Example:**

```dart
Schedule.append(
	File(
		"timer",
		child:Log("test")
	),
	ticks:20,
)
⇒ schedule function example:timer 20t append
```

### Schedule.clear

Clears all schedules for a function.

**Example:**

```dart
Schedule.clear(
	"timer",
)
⇒ schedule clear example:timer
```

## Teleport/Tp

Sets the location of an Entity to a new Location and Rotation(optional).

| constructor |                                             |
| ----------- | ------------------------------------------- |
| Entity      | the entity you want to teleport(required)   |
| to          | the target Location(required)               |
| facing      | a Location or Entity to face                |
| rotation    | a Rotation object defining the new rotation |

**Example:**

```dart
Teleport(
	Entity.Player(),
	to: Location.glob(x: 5, y: 10, z: 5),
	facing: Location.here()
)
⇒ tp @p 5 10 5 facing ~ ~ ~
```

And you can also teleport to another entity:

| Teleport.entity |                                           |
| --------------- | ----------------------------------------- |
| Entity          | the entity you want to teleport(required) |
| to              | the target entity(required)               |
| facing          | a Location or Entity to face              |

```dart
Teleport(
	Entity.Player(),
	to: Entity(name: "target", limit: 1)
)
⇒ tp @p @e[name="target",limit=1]
```

## Trigger

Trigger is a way to give the player(without op) permission to change his score in a scoreboard.
The permission must be granted with `Trigger.enable`:

| Trigger.enable |                                |
| -------------- | ------------------------------ |
| Score          | the entity and score to enable |

Then you can trigger the score:

| constructor |                                                                  |
| ----------- | ---------------------------------------------------------------- |
| String      | the objective to change                                          |
| addNew      | if the objective should automatically be created(default = true) |

Or add or set a specific value:

| Trigger.add or Trigger.set |                                              |
| -------------------------- | -------------------------------------------- |
| String                     | ...                                          |
| value                      | an int to add to the current value(required) |
| addNew                     | ...                                          |

**Example:**

```dart
Trigger.set(
	"test_objective",
	value: 5
)
⇒ trigger test_objective set 5
```

## Advancement

The advancement gives you a convenient interface to trigger or revoke specific advancements and advancement groups. It implements the advancement command.

This gives the advancement to the player:

| Advancement.grant |                                                                            |
| ----------------- | -------------------------------------------------------------------------- |
| Entity            | the target player                                                          |
| String            | your advancement                                                           |
| mode              | the advancement mode(default = only, modes are also seperate constructors) |
| criterium         | optional String criterium for an advancement                               |

You can also revoke it again:

| Advancement.revoke |                           |
| ------------------ | ------------------------- |
| . . .              | same as Advancement.grant |

### Named Constructors

Every mode also has a seperated named constructor:

| Advancement.everything | Unlocks everything             |
| ---------------------- | ------------------------------ |
| Entity                 | the target player              |
| revoke                 | set true if you want to revoke |

| Advancement.only | Only unlocks on Advancment         |
| ---------------- | ---------------------------------- |
| Entity           | the target player                  |
| String           | your advancement                   |
| revoke           | set true if you want to revoke     |
| criterium        | optional String for an advancement |

There are also `Advancement.from`, `Advancement.until` and `Advancement.through` that have the same arguments as only.

**Example:**

```dart
Advancement.only(
	Entity.Player(),
	"minecraft:story/mine_stone",
	revoke: true
)
⇒ advancement revoke @p only minecraft:story/mine_stone
```

## Clear

The Clear Widget removes Items from the inventory of an specified Entity.

| constructor |                                                        |
| ----------- | ------------------------------------------------------ |
| Entity      | the target Entity                                      |
| Item        | the item to clear(you can also set the count in there) |

**Example:**

```dart
Clear(Entity.All(),Item(Items.apple,count:10))
⇒ clear @a minecraft:apple 10
```

## Kill

Kills an Entity. It defaults to Entity.Self.

**Example:**

```dart
Kill(Entity.All())
⇒ kill @a
```

## Spectate

Puts a spectator(@s) into an entity.

**Example:**

```dart
Spectate(Entity(limit:1).sort(Sort.nearest))
⇒ spectate @e[limit=1,sort=nearest]
```

## SetGamemode

Sets a players gamemode(either Gamemode.creative, Gamemode.adventure, Gamemode.survival or Gamemode.spectator) to an optional target.

**Example:**

```dart
SetGamemode(Gamemode.adventure,target: Entity.All())
⇒ gamemode creative @a
```

## Spawnpoint

Sets the respawn point of a player to a certain position.

| constructor |                                          |
| ----------- | ---------------------------------------- |
| entity      | the Entity selector for your player      |
| position    | the Location of the spawnpoint(optional) |

**Example:**

```dart
Spawnpoint(
	entity: Entity.Player(),
	position: Location.rel(y: -10),
)
⇒ spawnpoint @p ~ ~-10 ~
```

## Attribute

The Attribute Widget adds certain abilities to an entity. This Widget gives you a varienty of methods to modify speed, attack damage, health and more.

| Attribute.get | gets the calculated modifier(with base, armor and custom) |
| ------------- | --------------------------------------------------------- |
| Entity        | the target                                                |
| String        | the name of the attribute that you want to get            |
| scale         | scaling of the retured value(optional)                    |

| Attribute.set | sets the base modifier to a value                 |
| ------------- | ------------------------------------------------- |
| Entity        | the target that you want to modify                |
| String        | the name of the attribute that you want to modify |
| value         | the new value                                     |

| Attribute.get_base | gets the base modifier                 |
| ------------------ | -------------------------------------- |
| Entity             | the target that you want to get from   |
| String             | the name of the attribute              |
| scale              | scaling of the retured value(optional) |

| Attribute.add | adds a modifier with an uuid         |
| ------------- | ------------------------------------ |
| Entity        | the target that you want to get from |
| String        | the name of the attribute            |
| uuid          | the id of your new modifier          |
| value         | the value of your modifier           |
| name          | the name of your modifier            |

| Attribute.remove | removes a modifier with an uuid again |
| ---------------- | ------------------------------------- |
| Entity           | the target that you want to get from  |
| String           | the name of the attribute             |
| uuid             | the id of your new modifier           |

| Attribute.get_modifier | gets the modifiers value by uuid       |
| ---------------------- | -------------------------------------- |
| Entity                 | the target that you want to get from   |
| String                 | the name of the attribute              |
| uuid                   | the id of your new modifier            |
| scale                  | scaling of the retured value(optional) |

> You can store the retured value in a Score using Score.setToWidget
