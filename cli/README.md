---
sidebar: auto
footer: MIT Licensed | Copyright © 2021 Stevertus
prev: /modules/
next: false
---

# CLI

The objD CLI is an additional package to handle execution, building and deploying of your project. To activate the global package(will be available anywhere on your system), run this command:

```
pub global activate objd_cli
```

This will add the commands to your console.
To run a command run:

```
objd [command] [args]
```

OR

```
pub global run objd_cli:objd [command] [args]
```

> If the objd command is not available, you have to add the pub cache to your system path. Follow this tutorial: [https://www.dartlang.org/tools/pub/cmd/pub-global#running-a-script-from-your-path](https://www.dartlang.org/tools/pub/cmd/pub-global#running-a-script-from-your-path)

## Commands

- **help** - opens a help menu with all commands
- **new** [project_name] - generates a new project from a boilerplate
- **run** [project_root] - builds one project
- **serve** [project_root] - watches the current directory to change and builds the project on change
- **server inject** [jar-file] - injects a server file(use bukkit with plugins to reload automatically) before starting the server(The file is not included in the package due to legal reasons)
- **server start** [world_dir] - copies the world into the server directory and starts the server

## Build Options

You can use certain arguments to pass options to the build methods.
This argument list can directly be edited in createProject:

```dart
createProject(
	Project(...),
	["arg1","arg2", ... ] // arguments as optional List
)
```

**OR** (what I recommend) you can just take the program arguments from main:

```dart
void main(List<String> args) {
  createProject(
    Project(...),
    args
  );
}
```

This allows you to use the arguments in the execution command, like:

- `dart index.dart arg1 --min`
- `objd run index.dart arg1 --min`
- `objd serve index.dart --min`

**All Available Arguments:**

- `--hotreload`: Saves the state of your project and compares just the latest changes.
- `--full`: Generates the full project(just for objd serve!).
- `--min`: This minifies the file amount by ignoring the mcmeta and tag files
- `--gen`: Using this flag runs darts build_runner before objd to apply all necessary code generators
- `--prod`: This creates a production build of your project and saves it into a zipped datapack.
  In Production Comments and line breaks are removed and every widget can access the prod value in Context to get notified.
- `--debug`: This creates a debug json file in your project root, that lists all properties and other generated files
- `--zip`: Creates an Zip archive instead of a folder with your datapack contents(default in production more)
- `--no-zip`: Forces the usual folder output instead of zip

## Hotreload

The hotreload option is an experimental feature, that just looks at the things you changed since the last build. This can improve performance significantly especially for big projects with many generated mcfunctions.

This feature is enabled by default for `objd serve`, if you include the args.
You can disable it with the `--full` option.

**How it works:**

objD saves a representation of your project in the objd.json file of your project.
For each new build or reload it checks which parts of the project you changed and just generates the new necessary files to implement your change in the datapack.

## objD 3rd-Party-Support

Since Version 0.3.2 objD allows you to customize it much more and integrate into other projects. You can manually get all the generated Files as json, download zip binary data or use objD with Dart Web to allow a cross platform experience.

Therefore a few methods are provided apart from createProject, that give you the output in alternate forms.

### getAllFiles

`getAllFiles` accepts, just like createProject, your Project and optionally arguments. It then generates the widget tree and builds the files, but instead of saving them to your machine, returns them as a Dart Map(filename-content).

**Example:**

```dart
  var files = getAllFiles(Project(...));
  print(files); // => {pack.mcmeta: '...', data/minecraft/tags/functions/tick.json: '...', ...}
```

### getJsonMap

This function gets a json representation(Map) of the tree structure before generating the files. This is the same that is used as the `objd.json` output in debug mode.

**Example:**

```dart
  var json = getJsonMap(Project(...));
  print(json); // => {name:'...',path: '...', packs: [...]}
```

### saveAsZip

Saves or downloads(depending on platform) the project as a zip archive. Accepts a file Map(filename-content), most likely from getAllFiles, and a path to save to(must include filename + `.zip` extension)

**Example:**

```dart
  saveAsZip(files,'../my_folder/output.zip');
```

### getArchive

When you want to save it as any other Archive or want to implement own generation, you can get the Archive instance with all files added by calling getArchive with the files Map.
Read the documentation of the archive package to see what you are able to do: https://pub.dev/documentation/archive

**Example:**

```dart
  var archive = getArchive(files);
```

## objd_gen

objd_gen is an optional [package](https://pub.dev/packages/objd_gen) that adds code generators to objD. With these annotations Widgets, Files, Packs and Projects can be written much more consisely.

### Installation

Include the package along with build_runner in your pubspec.yaml as a dev dependency:

```
dev_dependencies:
  build_runner:
  objd_gen: ^0.0.1
```

The generators put the new dart classes and functions in a new file alongside your annotated file. To make it available include it with the part statement:

```dart
import 'package:objd/core.dart';

part '[your_filename].g.dart';
```

After writing all your Widgets,this package generates the associated classes and functions with:

```
pub run build_runner build
```

Or if you want it to generate automatically after saving run:

```
pub run build_runner watch
```

### Widget

Writing a Widget becomes much simpler with the `@Wdg` annotation. You can just give it a function with needed parameters which returns a new Widget and the generators will figure out a Widget class to go along with it.

One simple case would be:

```dart
@Wdg
Widget helloWorld() => Log('Hello World!');
```

After running build_runner a new Widget **HelloWorld** is generated(inherited from the function name), so it is advisable to use lowercase functions.

Parameters also work like you exspect and you even get access to the widget context if you need to:

```dart
@Wdg
Widget helloName(String name, {String lastname = '', Context context}) => For.of([
  Comment('This was generated by HelloName on version ${context.version}'),
  Log('Hello $name $lastname!'),
]);
```

This would translate to a Widget in the following way, which you can use everywhere in your projects from now on:

```dart
class HelloName extends Widget {
  final String name;
  final String lastname;

  HelloName(
    this.name, {
    this.lastname = '',
  });

  @override
  Widget generate(Context context) => helloName(
        name,
        lastname: lastname,
        context: context,
      );
}
```

### File

Writing Minecrafts functions this style also becomes really easy. Just annotate a Widget variable that should be inside of your function with `@Func()`:

```dart
@Func()
final Widget load = HelloWorld();
```

This again would read the variable name `load` and generate a new variable called `LoadFile`, which includes the File Widget:

```dart
final File LoadFile = File(
  '/load',
  child: load,
);
```

Inside the parentheses of `@Func()` you can also provide various parameters to customize the file generation:

| @Func   |                                                                          |
| ------- | ------------------------------------------------------------------------ |
| name    | Provide a custom filename different from the variable name               |
| path    | Give a custom path for your function                                     |
| execute | whether to execute your File(when included somewhere in the widget tree) |
| create  | whether to actually create the file or not                               |

**Example:**

```dart
@Func(
  name: 'main',
  path: 'folder',
  execute: false,
  create: true,
)
final Widget main_widget = Comment('main file');
```

### Pack

The `@Pck()` annotation works similar to @Func. You annotate a File List variable and it generates a Widget for this Pack.

| @Pck |                           |
| ---- | ------------------------- |
| name | namespace of this pack    |
| main | path of the main function |
| load | path of the load function |

If you decide to not provide a namespace it again chooses your variable name.

**Example:**

```dart
@Pck(name: 'namespace', main: 'main', load: 'load')
final List<File> myPack = [
  LoadFile,
  MainFile,
];
```

This generates this widget:

```dart
class NamespacePack extends Widget {
  @override
  Widget generate(Context context) => Pack(
        name: 'namespace',
        files: myPack,
        load: File('load', create: false),
        main: File('main', create: false),
      );
}
```

### Project

And the last piece of creating a datapack is a `@Prj`. This can automatically generate a main function with all necessary pieces to actually generate all packs and files.

| @Prj        |                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------- |
| name        | Name of the datapack                                                                              |
| version     | targeted minecraft version(as integer)                                                            |
| target      | directory to generate the datapack in                                                             |
| description | a description for the pack.mcdata                                                                 |
| genMain     | set this to false if you dont want a main function generated(will be generate\_[varname] instead) |

Once again we must annotate a Widget variable, that is the root of our widget tree:

```dart
@Prj(
  name: 'My awesome Datapack',
  target: './datapacks/',
  version: 17,
  description: 'A simple dp for demonstrating annotations',
)
final myProject = NamespacePack();
```

This generates the following in the `g.dart`:

```dart
void main([List<String> args = const []]) => createProject(
      Project(
        name: 'My awesome Datapack',
        target: './datapacks/',
        version: 17,
        description: 'A simple dp for demonstrating annotations',
        generate: myProject,
      ),
      args,
    );
```

### Full example

And thats it, you can now make an entire datapack in one objD file just with some functions and variables. Of course you can extend this principle to as many dart files as you like and make your datapack as complex and modular as you like.

You can see the full example [here](https://pub.dev/packages/objd_gen/example).

I hope these code generators help with making datapacks using objD. In case you encounter any problems or have any idea or feedback, feel free to reach out via [Discord](https://discord.gg/WvtCkyg) or [Email](mailto://contact@stevertus.com).
