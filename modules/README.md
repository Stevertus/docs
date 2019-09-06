---
sidebar: auto
footer: MIT Licensed | Copyright © 2019 Stevertus
prev: /utils/
next: /cli/
---

## Module
<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/XgJ74JBXoco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Module extends the functionality of a Widget. It allows deeper intregration and file generation.

The Module is therefore mostly used in your tick function or with the modules provider of the Pack.

It is supposed to make the concept of animations, timers and continuous ticks easier and gives an high level interface to add complex operations to objD.

### Definition
A Module has like a Widget a generate method to return the underlying tree and a registerFiles method.

```dart
class ExampleModule extends Module {
	Widget generate(Context context){
		return ...
	}
	List<File> registerFiles(){
		return [
			File(...)
			...
		]
	}
}
```
The registered files are just added to the pack as if they were defined in it or in the Widget tree.

A Module can still be used as a widget everywhere and also handles conditions and groups.

## ScoreTimerModule

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/fAV0w1JZ7WE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The ScoreTimerModule implements a continuous timer with a delay of a number of ticks. It therefore uses a Score to count up or down in steps and resets to the start value afterwards. 

> To work probably this has to be executed every tick or added to the Packs modules.

| constructor |  |
|--|--|
|String| the name of the Timer and the Scoreboard |
|ticks| the delay in ticks between each execution(required) |
|child| a Widget that is executed after the delay |
|steps| the number that it counts up every time(default = 1) |
|start| a number that is used to reset the timer after the delay(default = 0) |
|selector| a custom selector to hold the score (default = playername of name) |
|path| a custom path to hold the required function(default = timers/) | 

**Example:**

```dart
ScoreTimerModule(
          "timer1",
          ticks: 200, // 10sec
          child: Log("Timer triggered"),
          steps: 1,
          start: 0,
)
```

[//]: # (modules/click_event)
## ClickEvent
The ClickEvent Module uses the trigger of a carrot on a stick to register right clicks with a scoreboard and execute a [onClick] Widget.

This module has to be executed every tick to work!

| constructor |  |
|--|--|
|name|used to identify different click Events|
|onClick| Widget that is executed if the COAS is clicked |
|selectedItem| just triggers the click if this Item is selected(optional) |
|path| path to create the click handler function(default = `events/`) |

**Example:**

```dart
ClickEvent(
	onClick: Log("Clicked"),
	name: "firstClick",
	selectedItem: Item(ItemType.carrot_on_a_stick),
	path: "events/"
)
```