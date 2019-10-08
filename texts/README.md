---
sidebar: auto
footer: MIT Licensed | Copyright © 2019 Stevertus
prev: /wrappers/
next: /utils/
---
# Texts and Strings

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/wGpHZ2QNkgA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In Minecraft text in the chat or as title is defined with JSON-data. objD makes the JSON part of it easier by utilizing a few classes:
## TextComponent
|TextComponent| |
|--|--|
|String|the text displayed (required)|
|color|a the color of the type Color|
|bold|bool whether it is bold|
|italic|bool whether it is italic|
|underlined|bool whether it is underlined|
|strikethrough|bool whether it is strikethrough|
|obfuscated|bool whether it is obfuscated|
|clickEvent|A TextClickEvent to handle left clicks|
|hoverEvent|A TextHoverEvent to handle mouse overs|
|insertion| a String witch is inserted into the input if shift left clicked|

Puuh, that are a lot of properties, we'll come to Color, TextClickEvent  and TextHoverEvent  in a bit.

**Example**
```dart
Title(
	Entity.Player(),
	show: [
		TextComponent("Hello",
			color: Color.White,
			bold: true,
			italic:true,
			underlined: true,
			strikethrough: false,
			obfuscated: false,
			clickEvent: TextClickEvent.open_url("https://stevertus.com"),
			hoverEvent: TextHoverEvent.text([TextComponent("hover me")]),
			insertion: "panic"
		)
	]
)
⇒ title @p title [{"text":"Hello","color":"white","bold":true,"italic":true,"underlined":true,"clickEvent":{"action":"open_url","value":"https://stevertus.com"},"hoverEvent":{"action":"text","value":[{text:"hover me"}]}}]
```
Now, its up to you to decide which is easier to read.
There are also some other data sources: 

|TextComponent.translate| |
|--|--|
|String|the translate key (required)|
|conversionFlags|a List of strings that replace placeholder values(e.g $s)|
|...same properties...|from TextComponent|

|TextComponent.score| |
|--|--|
|Entity|the entity with the score(required)|
|objective|Name of the Scoreboard Objective(required)|
|...same properties...|from TextComponent|

```dart
TextComponent.score(
	Entity.Selected(),
	objective: "myscores",
	color:Color.Black
)
⇒ {"score":{"name": "@s","objective":"myscores"},"color":"black"}
```

|TextComponent.selector| |
|--|--|
|Entity|the entity whose name you want to display(required)|
|...same properties...|from TextComponent|

```dart
TextComponent.selector(
	Entity(name:"hello"),
	color:Color.Black
)
⇒ {"selector":"@e[name=hello]","color":"black"}
```

|TextComponent.entityNbt| |
|--|--|
|Entity|the entity which has nbt to display|
|path| the path as a String |
|interpret|bool if nbt should be interpreted as TextComponent(optional)|
|...same properties...|from TextComponent|

```dart
TextComponent.entityNbt(
	Entity.Selected(),
	path: "CustomName"
	underlined: true
)
⇒ {"entity":"@s","nbt":"CustomName","underlined":true}
```

|TextComponent.blockNbt| |
|--|--|
|Location|a location of a block|
|path| the path as a String |
|interpret|bool if nbt should be interpreted as TextComponent(optional)|
|...same properties...|from TextComponent|

```dart
TextComponent.blockNbt(
	Location.glob(x:5,y:10,z:100),
	path: "Items[0].tag.display.Name"
	interpret: true
)
⇒ {"block":"5 10 100","nbt":"Items[0].tag.display.Name","interpret":true}
```

|TextComponent.lineBreak|
|--|--|
|This inserts a simple line break|

|TextComponent.customFont||
|--|--|
|String| a Custom Font Character(\u[HEX]) to insert in your text|
|...same properties...|from TextComponent|

```dart
TextComponent.customFont("\uFaa4")
⇒ {"text":"\uFaa4","color":"white"}
```
::: warning
**Attention: This requires a custom negative spaces font by AmberW installed([get it here](https://cdn.discordapp.com/attachments/157097006500806656/486915349569208322/NegativeSpaceFont3.zip))**
:::

|TextComponent.space|  |
|--|--|
|int| the pixel amount you want to move the next TextComponent (positive or negative)|
|...same properties...|from TextComponent|

This automatically calculates the custom characters for moving your text horizontally.

```dart
Tellraw(
	Entity.All(),
	show:[
		TextComponent.space(478),
		TextComponent("This is moved")
	]
)
⇒ tellraw  @a  [{"text":"\uF82D\uF82C\uF82B\uF829\uF828\uF826"},{"text":"This is moved"}]
```


## Colors

|Color([color_name]) |or |
|--|--|
|Color.[color_name]|Uppercase!|

See all available colors: https://minecraft.gamepedia.com/Formatting_codes#Color_codes

**Examples:**
```dart
Color.Black,
Color.DarkPurple
Color("gold")
Color('dark_green')
```

## TextClickEvent
Fires on left click, Part of TextComponent.

|constructors||
|--|--|
|TextClickEvent.open_url(String)|Opens the specified web url|
|TextClickEvent.run_command(Command)|runs the command|
|TextClickEvent.suggest(Command)|puts the command in the chat input|
|TextClickEvent.change_page(int)|turns a books page to the value(just Books!)|


## TextHoverEvent
Fires on mouse over, Part of TextComponent.

|constructors||
|--|--|
|TextClickEvent.text(List\<TextComponent>)|Accepts a new List of TextComponents to display|
|TextClickEvent.achievement(String)|shows achievement|
|TextClickEvent.item(Item)|shows item|
|TextClickEvent.entity(String,String,String)|displays a dummy entity with name, type and UUID(in this order))|

## Log

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/bt8HPbia23M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The log widgets displays a console logging in the players chat. That way you can quickly check execution times, score values, numbers, booleans and entities.

|constructor||
|--|--|
|String, Number, Boolean, Score or Entity| message to display |
|to|which player you want to send the log(default = `Entity.All()`) |
|desc| a message that is inserted before the value |
|color|the color of the console indicator(default = Color.DarkAqua)|

**Example:**
```dart
Log("Hello there!",color:Color.White),
⇒ tellraw @a [{"text":"Console > ","color":"white"},{"text":"Hello there!"}]
Log(Score(Entity.Selected(),"objective"),to: Entity.Selected())
⇒ tellraw @s [{"text":"Console > ","color":"dark_aqua"},{"score":{"name":"@s","objective":"objective"}}]
```

## Title

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/wGpHZ2QNkgA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To display our TextComponent, we need the `/title` command and the Title class wrapper.

|constructor||
|--|--|
|selector|the Entity for the title to show|
|show|A List of TextComponents to show|

**Example**
```dart
Title(
	Entity.Player(),
	show: List<TextComponent>[
		TextComponent(
			"hey",
			color: Color.Black
		)
	]
)
⇒ title @p title [{"text":"hey","color":"black"}]
```
The same goes also for subtitle and actionbar:

|Title.subtitle or Title.actionbar||
|--|--|
|selector|the Entity for the title to show|
|show|A List of TextComponents to show|

Title.clear clears all titles again:

|Title.clear||
|--|--|
|selector|clears title for the selector|

Title.times sets the timings

|Title.times||
|--|--|
|selector|edit the durations for this selector|
|fadein|the fadein time in ticks(default 20)|
|display|the time the title stays in ticks(default 60)|
|fadeout|the fadeout time in ticks(default 20)|

And also a resetter for that:

|Title.resetTimes||
|--|--|
|selector|resets times for this selector|

**Examples:**
```dart
Title.actionbar(
	Entity.All(),
	show: [
		TextComponent("hey")
	]
)
⇒ title @a actionbar [{"text":"hey"}]
Title.clear(Entity())
⇒ title @e clear

Title.times(Entity.All(),fadein:30,display:40,fadeout:20)
⇒ title @a times 30 40 20

Title.resetTimes(Entity.All())
⇒ title @a reset
```

## Tellraw 
The Tellraw class is very similar to the Title class, but shows its texts in the chat:

|constructor||
|--|--|
|selector|the Entity for the text to show|
|show|A List of TextComponents to show|

**Example**
```dart
Tellraw(
	Entity.Player(),
	show: List<TextComponent>[
		TextComponent(
			"hey",
			color: Color.Black
		)
	]
)
⇒ tellraw @p [{"text":"hey","color":"black"}]
```
### Item.Book

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/rqxkHukgizA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This provides a book generator to use TextComponents with Books.

| Item.Book |  |
|--|--|
| List of BookPage | content of the pages |
| title | a String to give the book a title(optional) |
|author| displays an author message (optional) |
|...| same as **Item**|

The page itself is another class:
| BookPage |  |
|--|--|
| content | either a String, TextComponent or List of TextComponents |

Or with a custom font character:

|BookPage.customFont|  |
|--|--|
| String | your custom character(\u[HEX]) |

A possible book could look like this:

```dart
Item.Book(
 [
   BookPage("This is the title page"),
   BookPage(
     TextComponent("Colored text",color:Color.Blue),
   ),
   BookPage.customFont("\uEaa2"),
   BookPage([
     TextComponent("one text"),
     TextComponent(
	     "another clickable text",
	     clickEvent:TextClickEvent.change_page(0)
     )
   ])
 ],
 title: "my book",
 lore: [TextComponent("This is my description")]
)
⇒ minecraft:written_book{"title":"my book","author":"","pages":["[{\"text\":\"This is the title page\"}]","[{\"text\":\"Colored text\",\"color\":\"blue\"}]","[{\"text\":\"\uEaa2\",\"color\":\"white\"}]","[{\"text\":\"one text\"},{\"text\":\"another clickable text\",\"clickEvent\":{\"action\":\"change_page\",\"value\":\"0\"}}]"],"display":{"Lore":["{\"text\":\"This is my description\"}"]}}
```

## Bossbar

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/Zb3jpRmZ8SE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Bossbar shows up on the top of a specific player screen and displays a text with a value bar.

|constructor||
|--|--|
|String|id of the bossbar(tip: use [namespace]:id to avoid interference)|
|name| a String for the displayed text(optional) |

This alone would add a new bossbar to the game:
```dart
Bossbar("test:mybar","This is my bar")
⇒ bossbar add test:mybar {"text":"This is my bar"}
```
To modifiy some properties, there are some methods on the Bossbar to change the output:
### Methods

**remove** - removes the selected bossbar in the game
**show** - takes in an entity and shows the bossbar for the selected players
**get** - gets an BossbarOption of the specified Bossbar

> BossbarOption.max, BossbarOption.value, BossbarOption.visible or BossbarOption.players

|set| sets an option of the bossbar |
|--|--|
|name| displayed String |
|nameTexts| a List of TextComponents that override the name with more control |
|color| the Color of the Bossbar |
|style| a Style Mode |
|value| the displayed value |
|max| the maximum amount of the displayed value |
|visible| bool if the bossbar is visible|
|players| the Entityselector to which the bossbar is displayed |

The set method generates multiple commands: 
```dart
Bossbar("test:mybar").set(
	name:"My name",
	value: 5,
	max: 10,
	color: Color.Red,
	players: Entity.All()
)
⇒ bossbar set test:mybar name {"text":"My name"}
⇒ bossbar set test:mybar color red
⇒ bossbar set test:mybar value 5
⇒ bossbar set test:mybar max 10
⇒ bossbar set test:mybar players @a 
```