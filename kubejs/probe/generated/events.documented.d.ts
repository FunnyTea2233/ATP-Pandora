/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
*/
declare function onEvent(name: "server.datapack.low_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.chunk_generator", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.height_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.material_condition", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired on an entity is spawned.
*/
declare function onEvent(name: "entity.spawned", handler: (event: Internal.EntitySpawnedEventJS) => void);
/**
* Fired by different tag everytime when a player:
* - ticks
* - logged in
* - logged out
*/
declare function onEvent(name: "player.tick", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.material_rule", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.activity", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.byg.villager_trades_item_listing", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.placed_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.template_pool", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when ticking on client side.
*/
declare function onEvent(name: "client.tick", handler: (event: Internal.ClientTickEventJS) => void);
/**
* Fired when you need to modify properties of an item.
*/
declare function onEvent(name: "item.modification", handler: (event: Internal.ItemModificationEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.chunk_status", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.noise", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.sensor_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.items", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.trunk_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.loot_condition_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.blocks", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the game:
* - is initializing
* - is post-initializing
*/
declare function onEvent(name: "init", handler: (event: Internal.StartupEventJS) => void);
/**
* Fired when you need to modify recipes.
*/
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.int_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "block.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag everytime when a player:
* - ticks
* - logged in
* - logged out
*/
declare function onEvent(name: "player.logged_in", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.entity_types", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.loot_pool_entry_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.memory_module_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.motive", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.feature_size_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the chest loot table is registering.
*/
declare function onEvent(name: "chest.loot_tables", handler: (event: Internal.ChestLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.position_source_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to remove worldgen.
*/
declare function onEvent(name: "worldgen.remove", handler: (event: Internal.WorldgenRemoveEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.repurposed_structures.json_conditions", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired to register special handlers for tooltips on items.
*/
declare function onEvent(name: "item.tooltip", handler: (event: Internal.ItemTooltipEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.botania.brews", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.block_entity_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.game_events", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.structure_pool_element", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.data_serializers", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.custom_stat", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.stat_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.block_state_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.loot_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.dimension_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.attribute", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to remove worldgen.
*/
declare function onEvent(name: "worldgen.add", handler: (event: Internal.WorldgenAddEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.byg.blending_function", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to modify properties of a block.
*/
declare function onEvent(name: "block.modification", handler: (event: Internal.BlockModificationEventJS) => void);
/**
* Fired when the gift loot table (cat, villager, etc.) is registering.
*/
declare function onEvent(name: "gift.loot_tables", handler: (event: Internal.GiftLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.particle_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.foliage_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.recipe_serializer", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the fishing loot table is registering.
*/
declare function onEvent(name: "fishing.loot_tables", handler: (event: Internal.FishingLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "fluid.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the level:
* - loads
* - ticks
* - unloads
*/
declare function onEvent(name: "level.tick", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.enchantment", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.mob_effect", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.loot_score_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.noise_settings", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.point_of_interest_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the server:
* - loads
* - ticks
* - unloads
*/
declare function onEvent(name: "server.tick", handler: (event: Internal.ServerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.structure_placement", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.biome_source", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.pos_rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the player:
* - opens the inventory
* - closes the inventory
*/
declare function onEvent(name: "player.inventory.opened", handler: (event: Internal.InventoryEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.loot_number_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.recipe_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.loot_nbt_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.configured_structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.block_predicate_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the game:
* - is initializing
* - is post-initializing
*/
declare function onEvent(name: "postinit", handler: (event: Internal.StartupEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.configured_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.forge.loot_modifier_serializers", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the generic loot table is registering.
* Note that this is unused.
*/
declare function onEvent(name: "generic.loot_tables", handler: (event: Internal.GenericLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.density_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the server:
* - loads
* - ticks
* - unloads
*/
declare function onEvent(name: "server.load", handler: (event: Internal.ServerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.float_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
*/
declare function onEvent(name: "server.datapack.high_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
*/
declare function onEvent(name: "server.datapack.last", handler: (event: Internal.DataPackEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.schedule", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the level:
* - loads
* - ticks
* - unloads
*/
declare function onEvent(name: "level.load", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.structure_piece", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.density_function", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.structure_processor", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.sound_event", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "item.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the entity loot table is registering.
*/
declare function onEvent(name: "entity.loot_tables", handler: (event: Internal.EntityLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the client is initalizing.
*/
declare function onEvent(name: "client.init", handler: (event: Internal.ClientEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.structure_set", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.tree_decorator_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.placement_modifier_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.villager_profession", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the player:
* - opens the inventory
* - closes the inventory
*/
declare function onEvent(name: "player.inventory.closed", handler: (event: Internal.InventoryEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.villager_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.forge.world_types", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.processor_list", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.fluids", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.configured_carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the block loot table is registering.
*/
declare function onEvent(name: "block.loot_tables", handler: (event: Internal.BlockLootEventJS) => void);
/**
* Fired by different tag when the client is:
* - logged in
* - logged out
*/
declare function onEvent(name: "client.logged_in", handler: (event: Internal.ClientLoggedInEventJS) => void);
/**
* Fired when player right clicks on an Block that is not fluid.
*
* Note that both main hand and off hand will be called if not cancelled.
*
* On cancellation, Result.SUCCESS is returned, thus making player swing his arm.
*/
declare function onEvent(name: "block.right_click", handler: (event: Internal.BlockRightClickEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.menu", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.potion", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
*/
declare function onEvent(name: "tags.worldgen.biome", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
*/
declare function onEvent(name: "server.datapack.first", handler: (event: Internal.DataPackEventJS) => void);