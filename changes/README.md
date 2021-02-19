# Versions

## 0.3

### 0.3.6

- added Pose class and corresponding pose argument in ArmorStand
- added Summon.select method to easily get an entity selector
- added a getCommands method which generates the commands of a given Widget
- added JsonFile Widget to easily generate json files
- added further checks for encapsulating groups when using strait functionality
- changed Location to be immutable and providing const constructors
- changed Summon parameters to be class fields
- changed ArmorStand and AreaEffectCloud to inherit Summon, you can now use all possibilites of Summon
- changed Execute.storeScore to use Score instead of two seperate parameters
- changed Bossbar.storeResult, Entity.storeResult and Location.storeResult to accept any Widget
- changed Command generation behaviour from List to StringBuffer
- updated blocks, items, particles and entities to include content from 21w07a
- fixed TextHoverEvent.item using the id as value instead of whole nbt
- fixed giving a negative `from` value to RandomScore would only generate positive numbers
- fixed Bossbar methods would override previous uses of the same object
- fixed Item.getMap returning the id in `item` instead of `id`, added optional parameter

Thanks White Blizzard and Bonesdog for making suggestions for this version.

### 0.3.5

- added Annotation classes to be used with objd_gen, which drastically lowers code complexity
- added ReplaceItem.copy, ReplaceItem.clear and ReplaceItem.modify implementing 1.17 item command
- added a version parameter to context to allow widget to generate version specific code
- added Particle.dust and Particle.copyWith alongside with major rework of the Particle command and simplification of code
- added Recipe Widget with ability to generate Minecraft Recipe Files of any type
- added the possibility to use a String as an Argument for Dimensions to support custom dimensions
- added missing toPath property to Storage.modify
- updated ReplaceItem to adapt automatically to the projects version
- updated blocks, items, particles and entities to include content from 21w03a
- fixed Effect nbt Generator not using the Byte Generator correctly
- fixed issues with having two Packs at the top level of the tree
- removed default scale value from Data.get

### 0.3.4

- added the ability to change the minecraft version by adding Project.version(changes mcmeta pack_format)
- added spawnegg check for CustomBlock
- added CustomBlock onPlaced and onBreak
- added a way to override TextComponents with null -> TextComponent(null)
- fixed issues with copying dicts
- fixed missing toString method for Item
- fixed missing implementation for Item.copyWith with model, name, hideFlags, lore and nbt
- fixed that fromJson and clone were not static
- fixed Execute.center targeting the corner of the block
- removed unnecessary collection package

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

### 0.3.2

- added setToCondition to the Score to allow values based on a condition
- added an Item.SpawnEgg constructor to allow generating spawn eggs more quicker
- added Predicates subpackage, that allows to create all major types of predicates right in objD
- added Predicate Widget to register a new Predicate with content
- added VersionCheck and ServerVersionCheck
- added Storage.toData to convert to a Data Widget
- added global Scoreboard.prefix and Tag.prefix that get applied to all created Scoreboards and Tags
- added the [] operator to scoreboard to quickly retrieve its scores
- added Comment.seperate to generate a comment line
- added Comment.fileHeader to generate a file header with author, description, context and calledin
- added header field to File to be able to add a header to a file directly
- added Spectate and Gamemode Widgets
- added a PassTrait widget, that uses the Context to provide Data across the successive widget tree
- added support for Dart Web, enabling online generators powered by objD
- added Zip Exporter that can be enabled with the --zip flag or by builing the project in production mode
- added --no-zip flag to allow usual file generation
- added an web example
- added getArchive and saveAsZip methods to manually create and modify the Zip encoder
- added HideFlags method that calculates the hideFlags for you
- added getAllFiles and getJsonMap functions to allow 3rd party developers and the web to use objDs output
- updated the gson library to also support Dart Web
- updated Condition.predicate and If to allow for Predicates(and automatically register them)
- updated Block class to allow public insight into nbt and states
- **changed If Then and Else to `then` and `orElse`, old syntax is deprecated**
- extended the ForEach widget to support translation location for each step
- **moved Block, ItemType, EntityType and ParticleTypes constants to seperate Blocks, Items, Entities and Particle classes**
- moved the file generator to a new file seperating it from the system io
- fixed the conversionFlags parameter for TextComponents, accepts TextComponents now
- fixed crash when Scoreboard was used without any load File
- fixed Tag toggle wrong negation
- fixed text options with the conversionFlags in TextComponent.translate
- refactoring code

Credit goes to Andante(https://github.com/AndanteDevs) who initially built the VersionChecker and ServerVersionChecker

### 0.3.1

- added Schedule.append, Schedule.appendFile and ScheduleMode for the upcoming 1.15 release
- added Support for Predicates in Entity
- added Condition.predicate
- added Storage Widget to handle global nbt storage
- added Data target DataStorage to store nbt globally
- added TextComponent.storageNbt to display nbt from Storage
- added RawFile to allow generation of any kind of file in a pack(for upcoming Predicates, LootTables...)
- added Operators & and >> to Tag to enable faster Conditions and Assignments
- updated Kill to include just an optional target
- code refactoring, issue fixing

### 0.3.0

- added updated documentation site at https://objd.stevertus.com
- added completly new gson parser capable of types, see more here: https://pub.dev/packages/gson
- added operators to Score: +, -, \*, /, %, <, >, <=, >=. >>, &
- added Entity.Self Constructor as a shortcut
- added Entity kill, raycast, teleport, give, replaceitem, particle, crash, tellraw, tp, execute, exec, execStrait, asat, as, at, joinTeam, leaveTeam and forEach Methods.
- added Data Manipulation within Entity with dataMerge, dataGet, dataRemove and dataModify methods
- added Selector
- added Tp Widget
- added RestAction, RestActionAble and StraitWidget to support underlying structure
- added Area.rel
- added Area.fromRanges
- added exact parameter for Range to support single matches
- added EntityType operator == to match same Types
- added Builder & ItemBuilder Widgets
- added IndexedFile to update the old complicated Group functionality.
- added --out argument to change the output directory with the CLI
- rewritten Execute with StraitWidget
- rewritten Entity addTag, addTags, removeTag, removeTags
- moved the cli commands and related files to a new package here: https://pub.dev/packages/objd_cli
- removed gson parser in TextComponent, Bossbar, Title and Tellraw
- changed Entity.self to Entity.Self
- changed Range(exact:...) to Range.exact(...)
- changed all args to fit the CLI
- updated Group to IndexedFile. BREAKING: Removed fileId and generateIDs
- fixed missing seperator when using multiple scores in Entity
- fixed missing items and added documentation references
- fixed that global Location does not cut of last double digit(1.0)
- fixed unnessesary required value with Tag
- fixed that Entity.copyWith just returned null´
- fixed bug that Execute generated a List instead of just execute
- refactored code

A big thanks goes to Minimine who actually did most of the new additions, the new gson package and bug fixes. Thanks for contributing!
Check out his projects here: https://github.com/MinimineLP
Thanks as well for the critical bugs reports by Mastermori!

## 0.2

### 0.2.4

- added ClickEvent Module
- added copyWith on Entities
- added setValues on Entity to change selections afterwards
- added Location.clone
- added desc to Log
- changed Color to const to allow defaults
- changed Particle to use a double type for speed and no requirement for a location
- fixed Particle.item to use ItemType instead of Item
- fixed CommandList Type Error
- fixed Raycast Error when not using stop in the ray property
- fixed missing Invisible Nbt on ArmorStand

### 0.2.3

- added new Module type to allow registering tick functions and files with a convenient api
- added modules property to Pack to inject new modules
- added ScoreTimerModule that implements a Timer using Scoreboards
- changed Widget class to be abstract
- tweaked Raycast to work properly
- improved Entity.not
- fixed TextComponent.space with negative numbers

### 0.2.2

- added Item.clone, Entity.clone and similar Methods with ItemType and Slot to enrich changeable inputs
- added Entity.not to negate arguments
- added Slot.craft
- added Clear Wrapper
- added Condition.Data
- added Block.nbt to include Nbt-data and Blockstates
- added Score.findSmallest and Score.findBiggest
- updated Item.getGiveNotation to include Damage
- changed Slot utilities to use seperate row and column arguments
- fixed missing minecraft: on Item nbt
- fixed wrong order of scale and datatype for Data.fromScore

### 0.2.1

- added experimental hotreload to boost performance
- added new -hotreload and -full build arguments
- added new Slot class with helper functions
- added Advancement Widget
- added Data.fromScore
- added Rotation utilities like Rotation.n and Rotation.north
- added Rotation.getDirection
- added isRotated value on entities to test for a Rotation object
- reworked ReplaceItem for Blocks and using the new Slot
- updated Item Slot requirements to match the Slot datatype
- updated project generator without File path
- updated Getting Started to fit new requirements and systems
- fixed Location.storeResult

### 0.2.0

- Completly reworked build algorithms that run the generate method just once.
- improved performace
- added new build arguments in createProject
- new build arguments -min -prod and -debug
- access to the prod property on context to change widget behaviour in productive build
- comments and line breaks get automatically removed in productive build
- added Raycast Widgets with many options to choose from
- added ForEach Loop that iterates through each score
- added Do.Until and Do.While Loops
- added a Book Generator with Item.Book that allows to use BookPages and TextComponents to fill a book
- added a TextComponent for the negative Spaces Font by AmberW. This automatically calculates the customs chars for a specified pixel value.
- added a TextComponent for Custom Fonts
- added a TextComponent for Linebreaks
- added number and boolean arguments for Log
- added new Block Condition which tests the current Position after the block
- updated Say Wrapper to either use a String or Entity in one argument
- fixed missing encapsulate property on If.not
- fixed double and unmatching group ids with multiple packs and widgets
- fixed multiple scoreboard related bugs. All declared Scoreboards from all packs should generate in the load functions now
- fixed TextClickEvent.runCommand to include a slash (Thanks Dommi)
- fixed data modify command generator (Thanks Vinicius Rangel for pull)

## 0.1

### 0.1.3

- added Bossbar
- added nbt TextComponents
- added encapsulate to If
- added strNbt to Data and Entity to support unvalid json chars
- reworked the global console commands and binaries
- fixed data modify
- fixed missing datatype and scale with entity.storeResult

### 0.1.2

- added RandomScore
- added a Team wrapper
- added a team option for entities as well as joinTeam and leaveTeam methods
- added Repeat to repeat code with delay
- added Log Widget to quickly print Messages, Scores or Entities in the chat
- added ArmorStand Widget to create an armorstand
- added Hologram to display text
- added AreaEffectCloud
- added Tag.toggle
- added a create option to File
- added a nbt option for Setblock
- added Score.fromSelected to avoid annoying Entity.Selected
- changed summon arguments
- changed effect to also support nbt effects
- changed Location to optional arguments
- fixed when there are two identical files that they would extend

### 0.1.1

- added AroundLocation widget
- added Trigger wrapper
- added Effect wrapper
- added Particle wrapper
- added clone wrapper
- added nbt option for entities
- added score.con for constants
- added display name and lore for items
- changed global commands and boilerplate project
- fixed execute align
- fixed execute bug if targetPath was null
- fixed timer not generating schedule

### 0.1

with the first proper release there are the first util classes:

- added Timeout and Timer widgets for delays and clocks
- added Tag widget
- added Schedule widget
- added scores and tags parameters in any entity constructor
- added addTag, addTags and removeTag Methods on entity
- added targetFilePath and targetFileName parameters for the execute and if constructors to force a folder or filename
- added suffix option for groups
- added tag condition
- added compile time
- added experimental global commands
- changed if behaviour to use a Tag instead with or conditions, else statement or multiple then children
- fixed: nested groups generated in the wrong order
- fixed entity Range generating unvalid results for `-10..0`
- fixed groups that generated a different file than execution name(still some issues)

## BETA

### 0.0.10

- added experimental if else statements(may be changed later on)
- added an if option for execute as well
- added the area class
- fixed group
- fixed requirement for slot and count for items
- changed entity static functions to named constructors(for Entity.Selected...)
- updated fill to use area instead
- updated teleport to use rotation
- updated to dart 2.1.1
- added inline documentation for many widgets
- split the build process into multiple files

### 0.0.9

- added subcommands for execute
- added methods for execute
- added storeResult to Location and Entity
- added Rotation
- fixed reference issue for groups(they prefixed everything :o)

### 0.0.8

- added Entity.PlayerName()
- fixed readme
- modified score.setToResult
- made Block, EntityType and ItemType constants to use them in defaults

### 0.0.7

- added score generation
- added Scoreboard
- added Score with calculation and condition methods
- fixed that main and load functions were not executed

### 0.0.6

- added teleport
- added fill
- added data widget and DataModify to edit nbt data
- updated entity with area parameter

### 0.0.5

- added Extend
- added Item utils
- added Give
- added Replaceitem
- added online documentation at https://stevertus.com/objD/documentation

### 0.0.4

- added Summon command wrapper
- added TextComponents
- added Title and Tellraw
- added Color class
- added TextClickEvent class
- added TextHoverEvent class

### 0.0.3

- added Block
- added Location
- added Setblock
- added Say

### 0.0.2

- Fixed ReadMe

### 0.0.1

- Initial Project with Basics and Builder
