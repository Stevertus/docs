(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{370:function(e,t,a){"use strict";a.r(t);var d=a(45),i=Object(d.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions"}},[e._v("#")]),e._v(" Versions")]),e._v(" "),a("h2",{attrs:{id:"_0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3"}},[e._v("#")]),e._v(" 0.3")]),e._v(" "),a("h3",{attrs:{id:"_0-3-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-6"}},[e._v("#")]),e._v(" 0.3.6")]),e._v(" "),a("ul",[a("li",[e._v("added Pose class and corresponding pose argument in ArmorStand")]),e._v(" "),a("li",[e._v("added Summon.select method to easily get an entity selector")]),e._v(" "),a("li",[e._v("added a getCommands method which generates the commands of a given Widget")]),e._v(" "),a("li",[e._v("added JsonFile Widget to easily generate json files")]),e._v(" "),a("li",[e._v("added further checks for encapsulating groups when using strait functionality")]),e._v(" "),a("li",[e._v("changed Location to be immutable and providing const constructors")]),e._v(" "),a("li",[e._v("changed Summon parameters to be class fields")]),e._v(" "),a("li",[e._v("changed ArmorStand and AreaEffectCloud to inherit Summon, you can now use all possibilites of Summon")]),e._v(" "),a("li",[e._v("changed Execute.storeScore to use Score instead of two seperate parameters")]),e._v(" "),a("li",[e._v("changed Bossbar.storeResult, Entity.storeResult and Location.storeResult to accept any Widget")]),e._v(" "),a("li",[e._v("changed Command generation behaviour from List to StringBuffer")]),e._v(" "),a("li",[e._v("updated blocks, items, particles and entities to include content from 21w07a")]),e._v(" "),a("li",[e._v("fixed TextHoverEvent.item using the id as value instead of whole nbt")]),e._v(" "),a("li",[e._v("fixed giving a negative "),a("code",[e._v("from")]),e._v(" value to RandomScore would only generate positive numbers")]),e._v(" "),a("li",[e._v("fixed Bossbar methods would override previous uses of the same object")]),e._v(" "),a("li",[e._v("fixed Item.getMap returning the id in "),a("code",[e._v("item")]),e._v(" instead of "),a("code",[e._v("id")]),e._v(", added optional parameter")])]),e._v(" "),a("p",[e._v("Thanks White Blizzard and Bonesdog for making suggestions for this version.")]),e._v(" "),a("h3",{attrs:{id:"_0-3-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-5"}},[e._v("#")]),e._v(" 0.3.5")]),e._v(" "),a("ul",[a("li",[e._v("added Annotation classes to be used with objd_gen, which drastically lowers code complexity")]),e._v(" "),a("li",[e._v("added ReplaceItem.copy, ReplaceItem.clear and ReplaceItem.modify implementing 1.17 item command")]),e._v(" "),a("li",[e._v("added a version parameter to context to allow widget to generate version specific code")]),e._v(" "),a("li",[e._v("added Particle.dust and Particle.copyWith alongside with major rework of the Particle command and simplification of code")]),e._v(" "),a("li",[e._v("added Recipe Widget with ability to generate Minecraft Recipe Files of any type")]),e._v(" "),a("li",[e._v("added the possibility to use a String as an Argument for Dimensions to support custom dimensions")]),e._v(" "),a("li",[e._v("added missing toPath property to Storage.modify")]),e._v(" "),a("li",[e._v("updated ReplaceItem to adapt automatically to the projects version")]),e._v(" "),a("li",[e._v("updated blocks, items, particles and entities to include content from 21w03a")]),e._v(" "),a("li",[e._v("fixed Effect nbt Generator not using the Byte Generator correctly")]),e._v(" "),a("li",[e._v("fixed issues with having two Packs at the top level of the tree")]),e._v(" "),a("li",[e._v("removed default scale value from Data.get")])]),e._v(" "),a("h3",{attrs:{id:"_0-3-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-4"}},[e._v("#")]),e._v(" 0.3.4")]),e._v(" "),a("ul",[a("li",[e._v("added the ability to change the minecraft version by adding Project.version(changes mcmeta pack_format)")]),e._v(" "),a("li",[e._v("added spawnegg check for CustomBlock")]),e._v(" "),a("li",[e._v("added CustomBlock onPlaced and onBreak")]),e._v(" "),a("li",[e._v("added a way to override TextComponents with null -> TextComponent(null)")]),e._v(" "),a("li",[e._v("fixed issues with copying dicts")]),e._v(" "),a("li",[e._v("fixed missing toString method for Item")]),e._v(" "),a("li",[e._v("fixed missing implementation for Item.copyWith with model, name, hideFlags, lore and nbt")]),e._v(" "),a("li",[e._v("fixed that fromJson and clone were not static")]),e._v(" "),a("li",[e._v("fixed Execute.center targeting the corner of the block")]),e._v(" "),a("li",[e._v("removed unnecessary collection package")])]),e._v(" "),a("h3",{attrs:{id:"_0-3-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-3"}},[e._v("#")]),e._v(" 0.3.3")]),e._v(" "),a("p",[a("strong",[e._v("BREAKING")])]),e._v(" "),a("ul",[a("li",[e._v("added Item.type replacing ItemType and made it unmutable")]),e._v(" "),a("li",[e._v("divided Blocks.all and Items.all in 1.15 items and newer [snapshot] items")]),e._v(" "),a("li",[e._v("removed named parameters for Range. If you want to set a upper or lower limit use Range.to or Range.from now on.")]),e._v(" "),a("li",[e._v("changed Comment.Seperate to Comment.Separate")]),e._v(" "),a("li",[e._v("changed Advancement cricterium to cricteria in Advancement.grant() parameters")])]),e._v(" "),a("p",[a("strong",[e._v("Widgets")])]),e._v(" "),a("ul",[a("li",[e._v("added PlayerJoin Widget")]),e._v(" "),a("li",[e._v("added Enchant Widget")]),e._v(" "),a("li",[e._v("added experimental CustomBlock Widget")]),e._v(" "),a("li",[e._v("added Spawnpoint Widget")]),e._v(" "),a("li",[e._v("added Attribute Widget")])]),e._v(" "),a("p",[a("strong",[e._v("Fixes")])]),e._v(" "),a("ul",[a("li",[e._v("added new 1.16 blocks, items, particles and entities")]),e._v(" "),a("li",[e._v("added Attribute Type and an Attribute List to support Minecraft attributes")]),e._v(" "),a("li",[e._v("added useTag argument in the If Widget to allow custom tags marking the else statement")]),e._v(" "),a("li",[e._v("added Item.copyWith() to clone Items more easily")]),e._v(" "),a("li",[e._v("added Color.fromInt and Color.fromRGB to support new color spaces")]),e._v(" "),a("li",[e._v("added an optional bool property to Slot.chest to support Enderchests")]),e._v(" "),a("li",[e._v("fixed Data.modify rejecting a List as value")]),e._v(" "),a("li",[e._v("fixed missing increment for Ifs objd_is_true tag")]),e._v(" "),a("li",[e._v("fixed if an else option is provided for If, encapsulate would not have an effect")]),e._v(" "),a("li",[e._v("fixed crash when leaving the generate parameter of Project empty")]),e._v(" "),a("li",[e._v("fixed bug with Trigger.enable")]),e._v(" "),a("li",[e._v("fixed Do Widget to also execept null as translate parameter")]),e._v(" "),a("li",[e._v("fixed errors when trying to use gson component in a give command")]),e._v(" "),a("li",[e._v("fixed that Entity.not used to reset all previous applied tags")]),e._v(" "),a("li",[e._v("removed all deprecated and unessary parts")])]),e._v(" "),a("p",[e._v("Thanks to kadmuffin for contributing and fixing typos!")]),e._v(" "),a("h3",{attrs:{id:"_0-3-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-2"}},[e._v("#")]),e._v(" 0.3.2")]),e._v(" "),a("ul",[a("li",[e._v("added setToCondition to the Score to allow values based on a condition")]),e._v(" "),a("li",[e._v("added an Item.SpawnEgg constructor to allow generating spawn eggs more quicker")]),e._v(" "),a("li",[e._v("added Predicates subpackage, that allows to create all major types of predicates right in objD")]),e._v(" "),a("li",[e._v("added Predicate Widget to register a new Predicate with content")]),e._v(" "),a("li",[e._v("added VersionCheck and ServerVersionCheck")]),e._v(" "),a("li",[e._v("added Storage.toData to convert to a Data Widget")]),e._v(" "),a("li",[e._v("added global Scoreboard.prefix and Tag.prefix that get applied to all created Scoreboards and Tags")]),e._v(" "),a("li",[e._v("added the [] operator to scoreboard to quickly retrieve its scores")]),e._v(" "),a("li",[e._v("added Comment.seperate to generate a comment line")]),e._v(" "),a("li",[e._v("added Comment.fileHeader to generate a file header with author, description, context and calledin")]),e._v(" "),a("li",[e._v("added header field to File to be able to add a header to a file directly")]),e._v(" "),a("li",[e._v("added Spectate and Gamemode Widgets")]),e._v(" "),a("li",[e._v("added a PassTrait widget, that uses the Context to provide Data across the successive widget tree")]),e._v(" "),a("li",[e._v("added support for Dart Web, enabling online generators powered by objD")]),e._v(" "),a("li",[e._v("added Zip Exporter that can be enabled with the --zip flag or by builing the project in production mode")]),e._v(" "),a("li",[e._v("added --no-zip flag to allow usual file generation")]),e._v(" "),a("li",[e._v("added an web example")]),e._v(" "),a("li",[e._v("added getArchive and saveAsZip methods to manually create and modify the Zip encoder")]),e._v(" "),a("li",[e._v("added HideFlags method that calculates the hideFlags for you")]),e._v(" "),a("li",[e._v("added getAllFiles and getJsonMap functions to allow 3rd party developers and the web to use objDs output")]),e._v(" "),a("li",[e._v("updated the gson library to also support Dart Web")]),e._v(" "),a("li",[e._v("updated Condition.predicate and If to allow for Predicates(and automatically register them)")]),e._v(" "),a("li",[e._v("updated Block class to allow public insight into nbt and states")]),e._v(" "),a("li",[a("strong",[e._v("changed If Then and Else to "),a("code",[e._v("then")]),e._v(" and "),a("code",[e._v("orElse")]),e._v(", old syntax is deprecated")])]),e._v(" "),a("li",[e._v("extended the ForEach widget to support translation location for each step")]),e._v(" "),a("li",[a("strong",[e._v("moved Block, ItemType, EntityType and ParticleTypes constants to seperate Blocks, Items, Entities and Particle classes")])]),e._v(" "),a("li",[e._v("moved the file generator to a new file seperating it from the system io")]),e._v(" "),a("li",[e._v("fixed the conversionFlags parameter for TextComponents, accepts TextComponents now")]),e._v(" "),a("li",[e._v("fixed crash when Scoreboard was used without any load File")]),e._v(" "),a("li",[e._v("fixed Tag toggle wrong negation")]),e._v(" "),a("li",[e._v("fixed text options with the conversionFlags in TextComponent.translate")]),e._v(" "),a("li",[e._v("refactoring code")])]),e._v(" "),a("p",[e._v("Credit goes to Andante(https://github.com/AndanteDevs) who initially built the VersionChecker and ServerVersionChecker")]),e._v(" "),a("h3",{attrs:{id:"_0-3-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-1"}},[e._v("#")]),e._v(" 0.3.1")]),e._v(" "),a("ul",[a("li",[e._v("added Schedule.append, Schedule.appendFile and ScheduleMode for the upcoming 1.15 release")]),e._v(" "),a("li",[e._v("added Support for Predicates in Entity")]),e._v(" "),a("li",[e._v("added Condition.predicate")]),e._v(" "),a("li",[e._v("added Storage Widget to handle global nbt storage")]),e._v(" "),a("li",[e._v("added Data target DataStorage to store nbt globally")]),e._v(" "),a("li",[e._v("added TextComponent.storageNbt to display nbt from Storage")]),e._v(" "),a("li",[e._v("added RawFile to allow generation of any kind of file in a pack(for upcoming Predicates, LootTables...)")]),e._v(" "),a("li",[e._v("added Operators & and >> to Tag to enable faster Conditions and Assignments")]),e._v(" "),a("li",[e._v("updated Kill to include just an optional target")]),e._v(" "),a("li",[e._v("code refactoring, issue fixing")])]),e._v(" "),a("h3",{attrs:{id:"_0-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-0"}},[e._v("#")]),e._v(" 0.3.0")]),e._v(" "),a("ul",[a("li",[e._v("added updated documentation site at https://objd.stevertus.com")]),e._v(" "),a("li",[e._v("added completly new gson parser capable of types, see more here: https://pub.dev/packages/gson")]),e._v(" "),a("li",[e._v("added operators to Score: +, -, *, /, %, <, >, <=, >=. >>, &")]),e._v(" "),a("li",[e._v("added Entity.Self Constructor as a shortcut")]),e._v(" "),a("li",[e._v("added Entity kill, raycast, teleport, give, replaceitem, particle, crash, tellraw, tp, execute, exec, execStrait, asat, as, at, joinTeam, leaveTeam and forEach Methods.")]),e._v(" "),a("li",[e._v("added Data Manipulation within Entity with dataMerge, dataGet, dataRemove and dataModify methods")]),e._v(" "),a("li",[e._v("added Selector")]),e._v(" "),a("li",[e._v("added Tp Widget")]),e._v(" "),a("li",[e._v("added RestAction, RestActionAble and StraitWidget to support underlying structure")]),e._v(" "),a("li",[e._v("added Area.rel")]),e._v(" "),a("li",[e._v("added Area.fromRanges")]),e._v(" "),a("li",[e._v("added exact parameter for Range to support single matches")]),e._v(" "),a("li",[e._v("added EntityType operator == to match same Types")]),e._v(" "),a("li",[e._v("added Builder & ItemBuilder Widgets")]),e._v(" "),a("li",[e._v("added IndexedFile to update the old complicated Group functionality.")]),e._v(" "),a("li",[e._v("added --out argument to change the output directory with the CLI")]),e._v(" "),a("li",[e._v("rewritten Execute with StraitWidget")]),e._v(" "),a("li",[e._v("rewritten Entity addTag, addTags, removeTag, removeTags")]),e._v(" "),a("li",[e._v("moved the cli commands and related files to a new package here: https://pub.dev/packages/objd_cli")]),e._v(" "),a("li",[e._v("removed gson parser in TextComponent, Bossbar, Title and Tellraw")]),e._v(" "),a("li",[e._v("changed Entity.self to Entity.Self")]),e._v(" "),a("li",[e._v("changed Range(exact:...) to Range.exact(...)")]),e._v(" "),a("li",[e._v("changed all args to fit the CLI")]),e._v(" "),a("li",[e._v("updated Group to IndexedFile. BREAKING: Removed fileId and generateIDs")]),e._v(" "),a("li",[e._v("fixed missing seperator when using multiple scores in Entity")]),e._v(" "),a("li",[e._v("fixed missing items and added documentation references")]),e._v(" "),a("li",[e._v("fixed that global Location does not cut of last double digit(1.0)")]),e._v(" "),a("li",[e._v("fixed unnessesary required value with Tag")]),e._v(" "),a("li",[e._v("fixed that Entity.copyWith just returned null´")]),e._v(" "),a("li",[e._v("fixed bug that Execute generated a List instead of just execute")]),e._v(" "),a("li",[e._v("refactored code")])]),e._v(" "),a("p",[e._v("A big thanks goes to Minimine who actually did most of the new additions, the new gson package and bug fixes. Thanks for contributing!\nCheck out his projects here: https://github.com/MinimineLP\nThanks as well for the critical bugs reports by Mastermori!")]),e._v(" "),a("h2",{attrs:{id:"_0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-2"}},[e._v("#")]),e._v(" 0.2")]),e._v(" "),a("h3",{attrs:{id:"_0-2-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-4"}},[e._v("#")]),e._v(" 0.2.4")]),e._v(" "),a("ul",[a("li",[e._v("added ClickEvent Module")]),e._v(" "),a("li",[e._v("added copyWith on Entities")]),e._v(" "),a("li",[e._v("added setValues on Entity to change selections afterwards")]),e._v(" "),a("li",[e._v("added Location.clone")]),e._v(" "),a("li",[e._v("added desc to Log")]),e._v(" "),a("li",[e._v("changed Color to const to allow defaults")]),e._v(" "),a("li",[e._v("changed Particle to use a double type for speed and no requirement for a location")]),e._v(" "),a("li",[e._v("fixed Particle.item to use ItemType instead of Item")]),e._v(" "),a("li",[e._v("fixed CommandList Type Error")]),e._v(" "),a("li",[e._v("fixed Raycast Error when not using stop in the ray property")]),e._v(" "),a("li",[e._v("fixed missing Invisible Nbt on ArmorStand")])]),e._v(" "),a("h3",{attrs:{id:"_0-2-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-3"}},[e._v("#")]),e._v(" 0.2.3")]),e._v(" "),a("ul",[a("li",[e._v("added new Module type to allow registering tick functions and files with a convenient api")]),e._v(" "),a("li",[e._v("added modules property to Pack to inject new modules")]),e._v(" "),a("li",[e._v("added ScoreTimerModule that implements a Timer using Scoreboards")]),e._v(" "),a("li",[e._v("changed Widget class to be abstract")]),e._v(" "),a("li",[e._v("tweaked Raycast to work properly")]),e._v(" "),a("li",[e._v("improved Entity.not")]),e._v(" "),a("li",[e._v("fixed TextComponent.space with negative numbers")])]),e._v(" "),a("h3",{attrs:{id:"_0-2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-2"}},[e._v("#")]),e._v(" 0.2.2")]),e._v(" "),a("ul",[a("li",[e._v("added Item.clone, Entity.clone and similar Methods with ItemType and Slot to enrich changeable inputs")]),e._v(" "),a("li",[e._v("added Entity.not to negate arguments")]),e._v(" "),a("li",[e._v("added Slot.craft")]),e._v(" "),a("li",[e._v("added Clear Wrapper")]),e._v(" "),a("li",[e._v("added Condition.Data")]),e._v(" "),a("li",[e._v("added Block.nbt to include Nbt-data and Blockstates")]),e._v(" "),a("li",[e._v("added Score.findSmallest and Score.findBiggest")]),e._v(" "),a("li",[e._v("updated Item.getGiveNotation to include Damage")]),e._v(" "),a("li",[e._v("changed Slot utilities to use seperate row and column arguments")]),e._v(" "),a("li",[e._v("fixed missing minecraft: on Item nbt")]),e._v(" "),a("li",[e._v("fixed wrong order of scale and datatype for Data.fromScore")])]),e._v(" "),a("h3",{attrs:{id:"_0-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-1"}},[e._v("#")]),e._v(" 0.2.1")]),e._v(" "),a("ul",[a("li",[e._v("added experimental hotreload to boost performance")]),e._v(" "),a("li",[e._v("added new -hotreload and -full build arguments")]),e._v(" "),a("li",[e._v("added new Slot class with helper functions")]),e._v(" "),a("li",[e._v("added Advancement Widget")]),e._v(" "),a("li",[e._v("added Data.fromScore")]),e._v(" "),a("li",[e._v("added Rotation utilities like Rotation.n and Rotation.north")]),e._v(" "),a("li",[e._v("added Rotation.getDirection")]),e._v(" "),a("li",[e._v("added isRotated value on entities to test for a Rotation object")]),e._v(" "),a("li",[e._v("reworked ReplaceItem for Blocks and using the new Slot")]),e._v(" "),a("li",[e._v("updated Item Slot requirements to match the Slot datatype")]),e._v(" "),a("li",[e._v("updated project generator without File path")]),e._v(" "),a("li",[e._v("updated Getting Started to fit new requirements and systems")]),e._v(" "),a("li",[e._v("fixed Location.storeResult")])]),e._v(" "),a("h3",{attrs:{id:"_0-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-0"}},[e._v("#")]),e._v(" 0.2.0")]),e._v(" "),a("ul",[a("li",[e._v("Completly reworked build algorithms that run the generate method just once.")]),e._v(" "),a("li",[e._v("improved performace")]),e._v(" "),a("li",[e._v("added new build arguments in createProject")]),e._v(" "),a("li",[e._v("new build arguments -min -prod and -debug")]),e._v(" "),a("li",[e._v("access to the prod property on context to change widget behaviour in productive build")]),e._v(" "),a("li",[e._v("comments and line breaks get automatically removed in productive build")]),e._v(" "),a("li",[e._v("added Raycast Widgets with many options to choose from")]),e._v(" "),a("li",[e._v("added ForEach Loop that iterates through each score")]),e._v(" "),a("li",[e._v("added Do.Until and Do.While Loops")]),e._v(" "),a("li",[e._v("added a Book Generator with Item.Book that allows to use BookPages and TextComponents to fill a book")]),e._v(" "),a("li",[e._v("added a TextComponent for the negative Spaces Font by AmberW. This automatically calculates the customs chars for a specified pixel value.")]),e._v(" "),a("li",[e._v("added a TextComponent for Custom Fonts")]),e._v(" "),a("li",[e._v("added a TextComponent for Linebreaks")]),e._v(" "),a("li",[e._v("added number and boolean arguments for Log")]),e._v(" "),a("li",[e._v("added new Block Condition which tests the current Position after the block")]),e._v(" "),a("li",[e._v("updated Say Wrapper to either use a String or Entity in one argument")]),e._v(" "),a("li",[e._v("fixed missing encapsulate property on If.not")]),e._v(" "),a("li",[e._v("fixed double and unmatching group ids with multiple packs and widgets")]),e._v(" "),a("li",[e._v("fixed multiple scoreboard related bugs. All declared Scoreboards from all packs should generate in the load functions now")]),e._v(" "),a("li",[e._v("fixed TextClickEvent.runCommand to include a slash (Thanks Dommi)")]),e._v(" "),a("li",[e._v("fixed data modify command generator (Thanks Vinicius Rangel for pull)")])]),e._v(" "),a("h2",{attrs:{id:"_0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1"}},[e._v("#")]),e._v(" 0.1")]),e._v(" "),a("h3",{attrs:{id:"_0-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-3"}},[e._v("#")]),e._v(" 0.1.3")]),e._v(" "),a("ul",[a("li",[e._v("added Bossbar")]),e._v(" "),a("li",[e._v("added nbt TextComponents")]),e._v(" "),a("li",[e._v("added encapsulate to If")]),e._v(" "),a("li",[e._v("added strNbt to Data and Entity to support unvalid json chars")]),e._v(" "),a("li",[e._v("reworked the global console commands and binaries")]),e._v(" "),a("li",[e._v("fixed data modify")]),e._v(" "),a("li",[e._v("fixed missing datatype and scale with entity.storeResult")])]),e._v(" "),a("h3",{attrs:{id:"_0-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-2"}},[e._v("#")]),e._v(" 0.1.2")]),e._v(" "),a("ul",[a("li",[e._v("added RandomScore")]),e._v(" "),a("li",[e._v("added a Team wrapper")]),e._v(" "),a("li",[e._v("added a team option for entities as well as joinTeam and leaveTeam methods")]),e._v(" "),a("li",[e._v("added Repeat to repeat code with delay")]),e._v(" "),a("li",[e._v("added Log Widget to quickly print Messages, Scores or Entities in the chat")]),e._v(" "),a("li",[e._v("added ArmorStand Widget to create an armorstand")]),e._v(" "),a("li",[e._v("added Hologram to display text")]),e._v(" "),a("li",[e._v("added AreaEffectCloud")]),e._v(" "),a("li",[e._v("added Tag.toggle")]),e._v(" "),a("li",[e._v("added a create option to File")]),e._v(" "),a("li",[e._v("added a nbt option for Setblock")]),e._v(" "),a("li",[e._v("added Score.fromSelected to avoid annoying Entity.Selected")]),e._v(" "),a("li",[e._v("changed summon arguments")]),e._v(" "),a("li",[e._v("changed effect to also support nbt effects")]),e._v(" "),a("li",[e._v("changed Location to optional arguments")]),e._v(" "),a("li",[e._v("fixed when there are two identical files that they would extend")])]),e._v(" "),a("h3",{attrs:{id:"_0-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-1"}},[e._v("#")]),e._v(" 0.1.1")]),e._v(" "),a("ul",[a("li",[e._v("added AroundLocation widget")]),e._v(" "),a("li",[e._v("added Trigger wrapper")]),e._v(" "),a("li",[e._v("added Effect wrapper")]),e._v(" "),a("li",[e._v("added Particle wrapper")]),e._v(" "),a("li",[e._v("added clone wrapper")]),e._v(" "),a("li",[e._v("added nbt option for entities")]),e._v(" "),a("li",[e._v("added score.con for constants")]),e._v(" "),a("li",[e._v("added display name and lore for items")]),e._v(" "),a("li",[e._v("changed global commands and boilerplate project")]),e._v(" "),a("li",[e._v("fixed execute align")]),e._v(" "),a("li",[e._v("fixed execute bug if targetPath was null")]),e._v(" "),a("li",[e._v("fixed timer not generating schedule")])]),e._v(" "),a("h3",{attrs:{id:"_0-1-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-4"}},[e._v("#")]),e._v(" 0.1")]),e._v(" "),a("p",[e._v("with the first proper release there are the first util classes:")]),e._v(" "),a("ul",[a("li",[e._v("added Timeout and Timer widgets for delays and clocks")]),e._v(" "),a("li",[e._v("added Tag widget")]),e._v(" "),a("li",[e._v("added Schedule widget")]),e._v(" "),a("li",[e._v("added scores and tags parameters in any entity constructor")]),e._v(" "),a("li",[e._v("added addTag, addTags and removeTag Methods on entity")]),e._v(" "),a("li",[e._v("added targetFilePath and targetFileName parameters for the execute and if constructors to force a folder or filename")]),e._v(" "),a("li",[e._v("added suffix option for groups")]),e._v(" "),a("li",[e._v("added tag condition")]),e._v(" "),a("li",[e._v("added compile time")]),e._v(" "),a("li",[e._v("added experimental global commands")]),e._v(" "),a("li",[e._v("changed if behaviour to use a Tag instead with or conditions, else statement or multiple then children")]),e._v(" "),a("li",[e._v("fixed: nested groups generated in the wrong order")]),e._v(" "),a("li",[e._v("fixed entity Range generating unvalid results for "),a("code",[e._v("-10..0")])]),e._v(" "),a("li",[e._v("fixed groups that generated a different file than execution name(still some issues)")])]),e._v(" "),a("h2",{attrs:{id:"beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beta"}},[e._v("#")]),e._v(" BETA")]),e._v(" "),a("h3",{attrs:{id:"_0-0-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-10"}},[e._v("#")]),e._v(" 0.0.10")]),e._v(" "),a("ul",[a("li",[e._v("added experimental if else statements(may be changed later on)")]),e._v(" "),a("li",[e._v("added an if option for execute as well")]),e._v(" "),a("li",[e._v("added the area class")]),e._v(" "),a("li",[e._v("fixed group")]),e._v(" "),a("li",[e._v("fixed requirement for slot and count for items")]),e._v(" "),a("li",[e._v("changed entity static functions to named constructors(for Entity.Selected...)")]),e._v(" "),a("li",[e._v("updated fill to use area instead")]),e._v(" "),a("li",[e._v("updated teleport to use rotation")]),e._v(" "),a("li",[e._v("updated to dart 2.1.1")]),e._v(" "),a("li",[e._v("added inline documentation for many widgets")]),e._v(" "),a("li",[e._v("split the build process into multiple files")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-9"}},[e._v("#")]),e._v(" 0.0.9")]),e._v(" "),a("ul",[a("li",[e._v("added subcommands for execute")]),e._v(" "),a("li",[e._v("added methods for execute")]),e._v(" "),a("li",[e._v("added storeResult to Location and Entity")]),e._v(" "),a("li",[e._v("added Rotation")]),e._v(" "),a("li",[e._v("fixed reference issue for groups(they prefixed everything 😮)")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-8"}},[e._v("#")]),e._v(" 0.0.8")]),e._v(" "),a("ul",[a("li",[e._v("added Entity.PlayerName()")]),e._v(" "),a("li",[e._v("fixed readme")]),e._v(" "),a("li",[e._v("modified score.setToResult")]),e._v(" "),a("li",[e._v("made Block, EntityType and ItemType constants to use them in defaults")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-7"}},[e._v("#")]),e._v(" 0.0.7")]),e._v(" "),a("ul",[a("li",[e._v("added score generation")]),e._v(" "),a("li",[e._v("added Scoreboard")]),e._v(" "),a("li",[e._v("added Score with calculation and condition methods")]),e._v(" "),a("li",[e._v("fixed that main and load functions were not executed")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-6"}},[e._v("#")]),e._v(" 0.0.6")]),e._v(" "),a("ul",[a("li",[e._v("added teleport")]),e._v(" "),a("li",[e._v("added fill")]),e._v(" "),a("li",[e._v("added data widget and DataModify to edit nbt data")]),e._v(" "),a("li",[e._v("updated entity with area parameter")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-5"}},[e._v("#")]),e._v(" 0.0.5")]),e._v(" "),a("ul",[a("li",[e._v("added Extend")]),e._v(" "),a("li",[e._v("added Item utils")]),e._v(" "),a("li",[e._v("added Give")]),e._v(" "),a("li",[e._v("added Replaceitem")]),e._v(" "),a("li",[e._v("added online documentation at https://stevertus.com/objD/documentation")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-4"}},[e._v("#")]),e._v(" 0.0.4")]),e._v(" "),a("ul",[a("li",[e._v("added Summon command wrapper")]),e._v(" "),a("li",[e._v("added TextComponents")]),e._v(" "),a("li",[e._v("added Title and Tellraw")]),e._v(" "),a("li",[e._v("added Color class")]),e._v(" "),a("li",[e._v("added TextClickEvent class")]),e._v(" "),a("li",[e._v("added TextHoverEvent class")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-3"}},[e._v("#")]),e._v(" 0.0.3")]),e._v(" "),a("ul",[a("li",[e._v("added Block")]),e._v(" "),a("li",[e._v("added Location")]),e._v(" "),a("li",[e._v("added Setblock")]),e._v(" "),a("li",[e._v("added Say")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-2"}},[e._v("#")]),e._v(" 0.0.2")]),e._v(" "),a("ul",[a("li",[e._v("Fixed ReadMe")])]),e._v(" "),a("h3",{attrs:{id:"_0-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-1"}},[e._v("#")]),e._v(" 0.0.1")]),e._v(" "),a("ul",[a("li",[e._v("Initial Project with Basics and Builder")])])])}),[],!1,null,null,null);t.default=i.exports}}]);