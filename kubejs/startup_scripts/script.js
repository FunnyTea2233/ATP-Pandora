// priority: 0
let bantools = [
    'minecraft:wooden_sword','minecraft:stone_sword','minecraft:iron_sword','minecraft:golden_sword','minecraft:diamond_sword','minecraft:netherite_sword',
    'minecraft:trident','minecraft:wooden_axe','minecraft:stone_axe','minecraft:golden_axe','minecraft:iron_axe','minecraft:diamond_axe','minecraft:netherite_axe',
    'minecraft:wooden_pickaxe','minecraft:stone_pickaxe','minecraft:golden_pickaxe','minecraft:iron_pickaxe','minecraft:diamond_pickaxe','minecraft:netherite_pickaxe',
    'naturesaura:infused_iron_sword','naturesaura:infused_iron_pickaxe','naturesaura:infused_iron_axe','naturesaura:sky_sword','naturesaura:sky_pickaxe','naturesaura:sky_axe',
    'mythicbotany:alfsteel_sword','mythicbotany:alfsteel_pick','mythicbotany:alfsteel_axe','sons_of_sins:bloody_bone_axe','sons_of_sins:bloody_bone_pickaxe','aiotbotania:livingwood_sword',
    'aiotbotania:livingwood_axe','aiotbotania:livingwood_pickaxe','aiotbotania:livingrock_sword','aiotbotania:livingrock_axe','aiotbotania:livingrock_pickaxe','byg:pendorite_sword',
    'byg:pendorite_pickaxe','byg:pendorite_battleaxe','byg:pendorite_axe','gobber2:gobber2_sword','gobber2:gobber2_pickaxe','gobber2:gobber2_axe','gobber2:gobber2_pickaxe_nether',
    'gobber2:gobber2_axe_nether','gobber2:gobber2_sword_end','gobber2:gobber2_sword_traveler','gobber2:gobber2_sword_sniper','gobber2:gobber2_pickaxe_end','gobber2:gobber2_axe_end',
    'gobber2:gobber2_tree_axe','gobber2:gobber2_paxel','gobber2:gobber2_tree_axe_nether','gobber2:gobber2_paxel_nether','gobber2:gobber2_tree_axe_end','gobber2:gobber2_paxel_end','gobber2:gobber2_paxel_stars',
    'enigmaticlegacy:etherium_sword','enigmaticlegacy:etherium_axe','enigmaticlegacy:etherium_pickaxe','orcz:orcteeth_tool_sword','orcz:orcteeth_tool_pickaxe','orcz:orcteethpaxel','orcz:orcteeth_tool_axe',
    'aquaculture:neptunium_sword','aquaculture:neptunium_pickaxe','aquaculture:neptunium_axe','cataclysm:final_fractal','cataclysm:zweiender','forbidden_arcanus:slimec_pickaxe',
    'forbidden_arcanus:draco_arcanus_sword','forbidden_arcanus:draco_arcanus_pickaxe','forbidden_arcanus:draco_arcanus_axe','forbidden_arcanus:arcane_golden_sword',
    'forbidden_arcanus:arcane_golden_axe','forbidden_arcanus:arcane_golden_pickaxe','forbidden_arcanus:reinforced_arcane_golden_sword','forbidden_arcanus:reinforced_arcane_golden_pickaxe',
    'forbidden_arcanus:reinforced_arcane_golden_axe','botania:manasteel_pick','botania:manasteel_axe','botania:manasteel_sword','botania:elementium_pickaxe','botania:elementium_sword',
    'botania:elementium_axe','botania:terra_pick','botania:terra_axe','botania:terra_sword','botania:star_sword','botania:thunder_sword','botania:ender_dagger','undergarden:cloggrum_battleaxe',
    'undergarden:cloggrum_sword','undergarden:cloggrum_pickaxe','undergarden:cloggrum_axe','undergarden:froststeel_sword','undergarden:froststeel_pickaxe','undergarden:froststeel_axe',
    'undergarden:utherium_sword','undergarden:utherium_pickaxe','undergarden:utherium_axe','undergarden:forgotten_battleaxe','undergarden:forgotten_sword','undergarden:forgotten_pickaxe','undergarden:forgotten_axe',
    'cyclic:mattock','cyclic:mattock_nether','cyclic:mattock_stone','cyclic:amethyst_pickaxe','cyclic:copper_pickaxe','cyclic:emerald_pickaxe','cyclic:crystal_pickaxe','cyclic:sandstone_pickaxe',
    'cyclic:netherbrick_pickaxe','cyclic:amethyst_axe','cyclic:copper_axe','cyclic:emerald_axe','cyclic:crystal_axe','cyclic:sandstone_axe','cyclic:sandstone_axe',
    'cyclic:amethyst_sword','cyclic:copper_sword','cyclic:emerald_sword','cyclic:crystal_sword','cyclic:sandstone_sword','cyclic:netherbrick_sword','meetyourfight:cocktail_cutlass','meetyourfight:cocktail_cutlass',
    'malum:soul_stained_steel_sword','malum:soul_stained_steel_pickaxe','malum:soul_stained_steel_axe','malum:tyrving','blue_skies:bluebright_pickaxe','blue_skies:bluebright_axe',
    'blue_skies:lunar_pickaxe','blue_skies:lunar_axe','blue_skies:starlit_pickaxe','blue_skies:starlit_axe','blue_skies:dusk_pickaxe','blue_skies:dusk_axe',
    'blue_skies:frostbright_pickaxe','blue_skies:frostbright_axe','blue_skies:maple_pickaxe','blue_skies:maple_axe','blue_skies:cherry_pickaxe','blue_skies:cherry_axe','blue_skies:turquoise_stone_pickaxe','blue_skies:turquoise_stone_axe',
    'blue_skies:lunar_stone_pickaxe','blue_skies:lunar_stone_axe','blue_skies:pyrope_pickaxe','blue_skies:pyrope_axe','blue_skies:aquite_pickaxe','blue_skies:aquite_axe','blue_skies:diopside_pickaxe','blue_skies:diopside_axe',
    'blue_skies:charoite_pickaxe','blue_skies:charoite_axe','blue_skies:horizonite_pickaxe','blue_skies:horizonite_axe','blue_skies:crushing_hammer','blue_skies:different_sword',
    'blue_skies:bluebright_sword','blue_skies:lunar_sword','blue_skies:starlit_sword','blue_skies:dusk_sword','blue_skies:frostbright_sword','blue_skies:maple_sword',
    'blue_skies:cherry_sword','blue_skies:turquoise_stone_sword','blue_skies:lunar_stone_sword','blue_skies:pyrope_sword','blue_skies:aquite_sword','blue_skies:diopside_sword',
    'blue_skies:charoite_sword','blue_skies:horizonite_sword','evilcraft:vengeance_pickaxe','evilcraft:vein_sword'
]
console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('item.tooltip', tooltip => {
	tooltip.add(bantools, '§d这个物品似乎受到了诅咒')
  })

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})