---
sidebar: auto
footer: MIT Licensed | Copyright © 2019 Stevertus
prev: /texts/
next: /modules/
---

# Utils
Util Widgets provide a complete solution that Minecraft does not support that easily out of the box and make your workflow easier and faster.
They are often generating packs, scoreboards and files themselves.


## Timeout

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/OMUokMwfalA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Timeout is a simple delay in your code. It is done with the Schedule Command and generates a File under the hood.

| constructor |  |
|--|--|
| String | the name of the timeout(used as filename) |
| children | the content that should be delayed |
| ticks | the delay as integer ticks |
| path |the folder path(optional, default = "timers")|

**Example:**
```dart
Timeout(
	"timeout1",
	children: [Say("Timeout reached")],
	ticks: 100
)
⇒ schedule function example:timers/timeout1 100t
// timers/timeout1:
⇒ say Timeout reached
```
## Timer

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/xRPOVAzH7XE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Timer is very similar to a Timeout, but instead of delaying the code it is run over and over again always delayed by the ticks. In the end it creates a loop with slower tick speed as 20t/s to perform some operations more performant.

| constructor |  |
|--|--|
| String | the name of the timeout(used as filename) |
| children | the content that should be delayed |
| ticks | the delay as integer ticks |
|infinite| should it run infinitely? (default = true) |
| path |the folder path(optional, default = "timers")|

**Example:**
```dart
Timer(
	"timer1",
	children: [Say("Timer reached")],
	ticks: 100
)
⇒ function example:timers/timer1
// timers/timer1:
⇒ say Timer reached
⇒ schedule function example:timers/timer1 100t
```
It is recommended to start these timers in your load function. 

With a finite timer, you can also stop the timer with `Timer.stop`:

```dart
Timer(
	"timer2",
	infinite:false,
	children: [Say("Timer reached")],
	ticks: 10
)
Timer.stop("timer2")
```
This uses a tag internally to stop scheduling the next timeout if the tag is existing.

## Repeat

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/JvF4r5OZTcw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Repeat Widget repeats a given action multiple times with a tick delay.

|constructor| |
|--|--|
|String|name of the Repeat|
|child|the action to perform(required)|
|to| times to repeat(required) |
|ticks| ticks between repetitions(default = 1 tick)  |
|path|where to generate a new repeat file(default = timers)|
|counter|the objective used to hold the current iteration(default = objd_repeat)|

**Example:**
```dart
Repeat("repeat1",
	to:  10,
	child:  Log("test"),
	ticks:  20
)
⇒ scoreboard players set repeat1 objd_repeat 0
⇒ function mypack:timers/repeat1
```
This would save the current iteration in a fake player repeat1 in objd_repeat and generate a schedule function:
```
# timers/repeat1
tellraw @a [{"text":"Console > ","color":"dark_aqua"},{"text":"test"}]
scoreboard players add repeat1 objd_repeat 1
execute if score repeat1 objd_repeat matches ..10 run schedule function mypack:timers/repeat1  20t
```
This function is executed until the score becomes 11.

video
dQvZRGUH4F8
## ArmorStand

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/dQvZRGUH4F8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

An armorstand can be created with the Summon Widget, but there is also a specific Widget with special properties for an ArmorStand.

|constructor| |
|--|--|
|Location| the location as type Location(default Location.here())|
|name|a TextComponent respresenting the name of the entity|
|nameVisible|bool if name is shown|
|invulnerable|bool|
|invisible|bool|
|marker|bool|
|basePlate|bool|
|hasArms|bool|
|small|bool|
|gravity|bool|
|glowing|bool|
|tags|List of tags as String|
|fire|ticks(int) the entity should be on fire|
|rotation|initial Rotation|
|mainHand| An Item placed in the main hand|
|offHand| An Item placed in the offhand|
|head| An Item placed in the head slot|
|chest| An Item placed in the chest slot|
|legs| An Item placed in the legs slot|
|boots| An Item placed in the boots slot|
|nbt|additional nbt as Map(key-value pairs)|

> Pose is coming soon

This generates a summon command: 
```dart
ArmorStand(
Location.here(),
name:  TextComponent("Test", color:  Color.DarkPurple),
nameVisible:  true,
marker:  true,
mainHand:  Item(ItemType.clock),
)
⇒ summon armor_stand ~  ~  ~  {"Marker":1,"HandItems":[{"id":"minecraft:clock"},{}],"CustomName":"{\"text\":\"Test\",\"color\":\"dark_purple\"}","CustomNameVisible":1}
```
Often times you need a static armorstand that just acts as a marker for a location, there is ArmorStand.staticMarker that sets properties automatically.
```dart
ArmorStand.staticMarker(Location.glob(),tags:["experimental"])
⇒ summon armor_stand 0  0  0  {"Marker":1,"Invisible":1,"Invulnerable":1,"NoGravity":1,"Tags":["experimental"]}
```
## AreaEffectCloud
An areaeffectcloud can be created with the Summon Widget, but there is also a specific Widget with special properties for an AreaEffectCloud.

| constructor |  |
|--|--|
|Location| the location as type Location(default Location.here())|
|name|a TextComponent respresenting the name of the entity|
|age|int|
|radius|the radius an effect applies|
|applicationDelay|int|
|tags|List of tags|
|duration|int|
|waitTime|int|
|nbt|additional nbt as Map|

This would create an Areaeffectcloud that only lasts the current tick: 
```dart
AreaEffectCloud(
	Location.here(),
	name: TextComponent("myname"),
	waitTime: 10,
)
⇒ summon area_effect_cloud ~  ~  ~  {"WaitTime":10,"CustomName":"{\"text\":\"myname\"}"}
```
To keep the entity alive there is`AreaEffectCloud.persistent` that sets the age to multiple years.

| AreaEffectCloud.persistent|  |
|--|--|
|Location| the location as type Location(default Location.here())|
|name|a TextComponent respresenting the name of the entity|
|radius|the radius an effect applies|
|applicationDelay|int|
|tags|List of tags|
|nbt|additional nbt as Map|

**Example:**
```dart
AreaEffectCloud.persistent(Location.here(),tags:["new_tag"])
⇒ summon area_effect_cloud ~  ~  ~  {"Duration":-1,"WaitTime":-2147483648,"Tags":["new_tag"],"Age":-2147483648}
```
## Hologram

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/4JsmLMeH3J0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Hologram shows a floating text at a specific Location using Armorstands.

| constructor |  |
|--|--|
|String|the text to display(can also be multiline string)|
|location|the position(required)|
|color|a Color|
|tags|additional tags for the armorstands|
|space|the space in between the lines(default = 0.25)|

**Example:**
```dart
Hologram("""
Hello,
World!
""",
	location:  Location.here(),
	color:Color.Aqua,
)
⇒ summon armor_stand ~  ~0.25  ~  {"Marker":1,"Invisible":1,"CustomName":"{\"text\":\"Hello,\",\"color\":\"aqua\"}","Invulnerable":1,"CustomNameVisible":1,"NoGravity":1,"Tags":["objd_hologram"]}

⇒ summon armor_stand ~  ~  ~  {"Marker":1,"Invisible":1,"CustomName":"{\"text\":\"World!\",\"color\":\"aqua\"}","Invulnerable":1,"CustomNameVisible":1,"NoGravity":1,"Tags":["objd_hologram"]}
```
If you wish you can also assign each line a seperate TextComponent with `Hologram.multiple`

| Hologram.multiple|  |
|--|--|
|List of TextComponents|Component for each line|
|...| same as Hologram|

## RandomScore

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/h8Bni09hVTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The RandomScore Widget assigns a random value to a score using the UUID of an areaeffectcloud.

| constructor |  |
|--|--|
|Entity| the entity to save the result to |
|to|the max value(required)|
|from|the minimum value(default = 0)|
|objective|The scoreboard objective to save the values(default = objd_random)|
|targetFileName|force a specific file|
|targetFilePath|force a specific folder(other than objd)|

**Example:**
```dart
RandomScore(
	Entity.Selected(),
	from: 5
	to:  100,
	targetFileName:  "random"
)
⇒ scoreboard players set #max objd_random 96
⇒ function mypack:objd/random
⇒ scoreboard players add @s objd_random 5
```
```
# objd/random1
summon area_effect_cloud ~ ~ ~ {"Tags":["objd_random"]}
execute store result score @s objd_random run data get entity @e[tag=objd_random,sort=nearest,limit=1] UUIDMost 0.0000000001
scoreboard players operation @s objd_random %= #max objd_random
```

## Storage
The Storage Widget gives you easy tools to store and recieve nbt data globally.
A Store takes in a name, by default it already uses the current pack namespace.

| constructor |  |
|--|--|
|String|name|
|autoNamespace| bool wheater to include the namespace automatically(default = true) |

**Example:**
```dart
var storage = Storage("mystorage",autoNamespace:true)
```

Or you can directly use named constructors to modify data.

### Storage.set
Here you can set one key to a specific value.

| Storage.set |  |
|--|--|
|...|same as constructor|
|key| the Nbt key(String) |
|value| a List, Map, String, Number or Boolean|

**Example:**
```dart
Storage.set("mystorage",key: "test",value:5)
⇒ data merge storage example:mystorage {"test":5}
```

### Storage.merge
But of course you can also insert a Map with multiple keys and values.

| Storage.merge |  |
|--|--|
|...|same as constructor|
|nbt| the Nbt Data as Map |

### Storage.get
To get a value back, use Storage.get.

| Storage.get |  |
|--|--|
|...|same as constructor|
|path| the path of the data(String) |
|scale|the double scale for numbers|

### Storage.remove
Removes certain Nbt Data.

| Storage.remove |  |
|--|--|
|...|same as constructor|
|key| the path of the data(String) |

### Storage.modify
Modifies Nbt Data(look at [Data Widget](/basics#data)).

| Storage.modify |  |
|--|--|
|...|same as constructor|
|modify| a DataModify Object |

### Storage.copyData
Copies Nbt Data from a **Data.get** Widget.

| Storage.copyData |  |
|--|--|
|...|same as constructor|
|data| a Data Object to copy from |
|key|the path to copy the data into|

### Storage.copyScore
Similar to copyData is copyScore which copies the value of a score into a nbt path.

| Storage.copyScore |  |
|--|--|
|...|same as constructor|
|score| a Score Object to copy from |
|key|the path to copy the data into|
|scale| the scale of the new data(optional) |
|datatype|the datatype that the number should take|

### Methods
All the constructors also exist as Methods and like the Score you can modify the created Storage through these.

* set
* merge
* get
* remove
* modify
* copyData
* copyScore

Check the arguments in your IDE to get more insight into these.

**Example:**
```dart
var storage = Storage("mystorage",autoNamespace:true)

storage.get("key")

storage.copyScore("key",score: Score.fromSelected("score"))

⇒ data get storage example:mystorage key
⇒ execute store result storage mypack:test new byte 1 run scoreboard players get @s test
```

## AroundLocation
Often times you need to check blocks or entities around one Location. AroundLocation utilizes this by using just one build method for all sides:

| constructor |  |
|--|--|
|double| the amount you want to go to each side(required)|
|build| a method requiring one Location argument and returning a Widget(required)|
|top|bool for +y|
|bottom|bool for -y|
|left|boo for +x|
|right|bool for -x|
|front|bool for +z|
|back|bool for -z|

**Example:**
```dart
AroundLocation(
	1,
	build: (Location loc){
		return Setblock(Block.stone,location:loc)
	}
)
⇒ setblock ~1 ~ ~ stone
⇒ setblock ~-1 ~ ~ stone
⇒ setblock ~ ~1 ~ stone
⇒ setblock ~ ~-1 ~ stone
⇒ setblock ~ ~ ~1 stone
⇒ setblock ~ ~ ~-1 stone
```
## Raycast

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/30Ig-zNUx8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Raycast Widget is one of the most powerful widgets by giving you many options to configure raytracing in Minecraft.
Internally it uses local coordinates, a distance counter and recursion.

|constructor|  |
|--|--|
| Entity | from which entity to go from |
|onhit|a List of Widgets that execute on a hit|
|max| maximum block distance(optional)|
|step| how many steps to go forward each iteration(default = 1) |
|through| a Block or Blocktag with passable Blocks(default = air) |
|ray|a Function with an interface for each iteration(optional)|
|scoreName|option to specify counter score(default = objd_count)|

There are a lot of values to play around, but this here would make a fully functioning raycast function:
```dart
Raycast(
	Entity.All(),
	onhit: [
		SetBlock(Block.sandstone,location:Location.here())
	]
)
⇒ execute as @a at @s anchored eyes positioned ^  ^  ^ anchored feet run function mypack:objd/ray1
```
```
# objd/ray1 file
execute unless block ~ ~ ~ minecraft:air run tag @s add objd_ray_hit
execute unless entity @s[tag=objd_ray_hit] positioned ^ ^ ^1 run function mypack:objd/ray1
execute if entity @s[tag=objd_ray_hit] run function mypack:objd/rayhit1
execute if entity @s[tag=objd_ray_hit] run tag @s remove objd_ray_hit

# objd/rayhit1 file
setblock  ~  ~  ~  minecraft:sandstone
```

objD takes the hard work and generates the commands based on your inputs.
### Customization
There is the ray argument to give you more control over the ray.
Here you can execute Widgets for each step and optionally stop or let the ray hit an obstacle.
In Dart this is done with a Function:
```dart
Raycast(
	Entity.All(),
	onhit: [
		SetBlock(Block.sandstone,location:Location.here())
	],
	ray: (stop, hit){
		return If(...,Then:[stop()]); 
		// stop and hit are functions as well 
		//that can be executed to perform actions
	}
)
```
Let's also change other inputs:
```dart
Raycast(
	Entity.All(),
	onhit: [
		SetBlock(Block.sandstone,location:Location.here())
	],
	ray: (stop, hit) => If(...,Then:[stop()]),
	max: 10, // set maximum distance to 10 blocks
	step: 0.1,
	through: Block("#minecraft:transparent"),
)
⇒ scoreboard players set @s objd_count 0
⇒ execute as @a at @s anchored eyes positioned ^ ^ ^ anchored feet run function mypack:objd/ray1
```
```
# objd/ray1 file
# our blocktag:
execute unless block ~ ~ ~ #minecraft:transparent run tag @s add objd_ray_hit
# the result of the ray function:
execute if ... run tag @s add objd_ray_stop
# our distance increases:
scoreboard players add @s objd_count 1
# command changed depending on our inputs:
execute unless entity @s[tag=objd_ray_hit] unless entity @s[tag=objd_ray_stop] if score @s objd_count matches ..100 positioned ^ ^ ^0.1 run function mypack:objd/ray1
execute if entity @s[tag=objd_ray_hit] run function mypack:objd/rayhit1
execute if entity @s[tag=objd_ray_hit] run tag @s remove objd_ray_hit
tag @s remove objd_ray_stop
```
## Do Until/While Loop

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/NbQ9V9N0s_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This Loop repeats a set of widget as long/until a condition is/becomes true.
The Loop uses a Grouped File and Recursion to repeat commands.

| Do.While|  |
|--|--|
|Condition or conditional value| a condition to test for each iteration |
|then| a List of Widgets to execute each time |
|testBefore| test before entering the loop if condition is true(optional) |

> Until just negates the Condition

**Example:**

```dart
Do.Until(Tag("istrue",entity:  Entity.All()),then:[
	Say("repeat")
])
⇒ execute unless entity @a[tag=istrue] run function  mypack:objd/doloop1
```
```
# objd/doloop1 file
say repeat
execute unless entity @a[tag=istrue] run function  mypack:objd/doloop1
```

## ForEach Loop
The ForEach Loop repeats a set of widgets for each value in a Score.
Therefore a file is called recursively and a counter score is increased.

| constructor |  |
|--|--|
|Score| the score to iterate through |
|then| A Function that takes in the count Score |
|from| the initial value for the counter(default = 0) |
|counter| an Entity to hold the count value(default = #objd_foreach) |
|step| how much to increase or decrease the counter each time(default = 1) |

**Example:**
```dart
ForEach(
	Score(Entity.All(), "myscore"), 
	then: (score) {
		return  Log(score);
	}
)
⇒ scoreboard players set #objd_foreach objd_count 0
⇒ execute if score #objd_foreach objd_count < @a myscore run function mypack:objd/foreach2
```
```
# objd/foreach2 file
tellraw  @a  [{"text":"Console > ","color":"dark_aqua"},{"score":{"name":"#objd_foreach","objective":"objd_count"}}]
scoreboard players add #objd_foreach objd_count 1
execute if score #objd_foreach objd_count <= @a myscore run function  mypack:objd/foreach2
```
## Builder

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/v0v0xbSg2yQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Builder Widget embedds a builder function in your Widget Tree. Here you can provide a similar method to the generate method of a Widget. This allows you to define new variables, make calculations and conditions.

| constructor |  |
|--|--|
|BuilderFunction| a Function that takes in the context and returns a Widget. |

**Example:**
```dart
Builder(
	(Context context){
		var var1 = 1
		if(true) return Widget()
		return Widget()
	}
)
```

## ItemBuilder
The ItemBuilder provides an interface to convert a List into Widgets using a Builder.
Each Item maps to a new Widget that you return in the build Function.

| constructor\<T\> |  |
|--|--|
|items| the List of Type T |
|build| the build function, takes in one item(type T) and returns a Widget |

**Example:**

```dart
List<String> list = ["hello","world"]
ItemBuilder<String>(
	items: list,
	build: (String item) => Log(item),
)
==> For.of([Log("hello"),Log("world")])
```

## StraitWidget

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/HD50K0DkEuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A StraitWidget allows you to build up a List of Widgets inside of a Widget. Like the Builder, you have to provide a Function, which takes in a List and then you can add on to this list.

| constructor |  |
|--|--|
|Function| the strait function that gives you a List of Widgets to modify |

**Example:**
```dart
StraitWidget(
	(List<Widget> widgets){
		widgets.add(Command(...))
		...
	}
)
```
### Queables

StraitWidget supports the RestAction and Entity Queables.
Read more about Queables [here](/basic#queables)

### Return Value
It is also possible to return something(Widget, Queable, RestAction, List):
```dart
StraitWidget(
	(List<Widget> widgets){
		return Entity.Self().kill()
	}
)
==> kill @s
```