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
onEvent('entity.hurt', event => {
    let source = event.source.actual;
    if (source == null||!event.source.player)
        return;
    let playertool = source.getHeldItem("main_hand")
    if (bantools.indexOf(playertool.id) != -1 && !source.creativeMode)
           {
            event.server.runCommandSilent(`execute as ${source.getName()} run tellraw @s {"text":"你的工具受到了侵蚀","color":"dark_red"}`);
            playertool.setNbt({Damage:114514})
           } 
    })
    
onEvent('block.break', event => {
    let playertool = event.player.getHeldItem("main_hand")
    if (bantools.indexOf(playertool.id) != -1 && !event.player.creativeMode)
            {
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"你的工具受到了损坏","color":"dark_red"}`);
            playertool.setNbt({Damage:114514})
            }
    })

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('ars_nouveau:novice_spell_book')
    }
    })

onEvent('item.right_click', event => {
    
    if (event.player.getHeldItem(MAIN_HAND) == 'minecraft:arrow')
            {
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"开始传送","color":"yellow"}`);
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run gamemode spectator`);
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run effect give ${event.entity.getName()} minecraft:speed 1 1 true`);
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run tp ${event.entity.getName()} ${event.entity.x} ${event.entity.y+20} ${event.entity.z} facing ${event.entity.x} ${event.entity.y+19} ${event.entity.z}`)
            event.server.schedule(1 * SECOND, event.server, function (callback) {
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run effect give ${event.entity.getName()} minecraft:speed 1 1 true`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run tp ${event.entity.getName()} ${event.entity.x} 233 ${event.entity.z} facing ${event.entity.x} 232 ${event.entity.z}`)
                event.server.schedule(1 * SECOND, event.server, function (callback) {
                    event.server.runCommandSilent(`execute as ${event.entity.getName()} run effect give ${event.entity.getName()} minecraft:speed 1 1 true`);
                    event.server.runCommandSilent(`execute as ${event.entity.getName()} run tp ${event.entity.getName()} 300 233 300 facing 300 232 300`)
                    event.server.schedule(1 * SECOND, event.server, function (callback) {
                        event.server.runCommandSilent(`execute as ${event.entity.getName()} run effect give ${event.entity.getName()} minecraft:speed 1 1 true`);
                        event.server.runCommandSilent(`execute as ${event.entity.getName()} run tp ${event.entity.getName()} 300 140 300 facing 300 139 300`)
                        event.server.schedule(1 * SECOND, event.server, function (callback) {
                            event.server.runCommandSilent(`execute as ${event.entity.getName()} run effect give ${event.entity.getName()} minecraft:speed 1 1 true`);
                            event.server.runCommandSilent(`execute as ${event.entity.getName()} run tp ${event.entity.getName()} 300 106 300 facing 300 106 299`)
                            event.server.runCommandSilent(`execute as ${event.entity.getName()} run gamemode survival`);
                            })
                        })
                    })
                })
            }  
    })

onEvent('block.right_click', event => {
    // const placedBlock = event.getBlock()
    // const BPos = placedBlock.world.getBlock(placedBlock.getX(), placedBlock.getY(), placedBlock.getZ())
    // event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"${placedBlock}","color":"dark_red"}`);
    const BPos = event.block.getY()
    if (event.player.getHeldItem(MAIN_HAND) == 'minecraft:coal')
    {
        
        // event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"1","color":"dark_red"}`);
        // event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"${event.block}","color":"dark_red"}`);
        if (event.block == 'minecraft:glass'){
            event.block.set('minecraft:air')
            
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"${event.player.fallDistance}","color":"dark_red"}`);
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"${event.block.offset(0,1,0).getId()}","color":"dark_red"}`);
            
        }
        var count = 0
        for(var i = 319; i > -64; i--){
            //event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"${i}","color":"dark_red"}`);
            if(event.block.offset(0,i,0).getId() !== 'minecraft:air'||event.block.offset(0,i,0).getId() !== 'minecraft:void_air'){
                count = event.block.getY()
                break
            }
        }
        
        event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"${count}","color":"dark_red"}`);
        
    }
    })

onEvent('player.death', event => {
    event.server.runCommandSilent(`say 123`);
    })

onEvent('entity.spawned', event => {
    if(event.entity.getName() == '加速火把' || event.entity.getName() == 'Torcherino'){
        let explosion = event.server.getLevel("overworld").createExplosion(event.entity.x,event.entity.y,event.entity.z)
        explosion.strength(2.0);
        explosion.explode();
        event.entity.setPosition(0,-100,0);
    }
    })