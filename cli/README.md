---
sidebar: auto
footer: MIT Licensed | Copyright © 2020 Stevertus
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
