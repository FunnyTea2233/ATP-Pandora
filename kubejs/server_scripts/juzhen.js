onEvent('block.right_click', event => {
    if (event.block.id == 'incorporeal:ender_soul_core')
    {
        event.block.set('incorporeal:potion_soul_core')
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x} ${event.block.y+1} ${event.block.z} 2 2 2 2 600`);
        event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y+1} ${event.block.z} mahoutsukai:mahoujin_projector{CIRCLE_A:200,CIRCLE_B:99,CIRCLE_G:255,CIRCLE_ORBIT:0.0f,CIRCLE_R:255,CIRCLE_ROTATION:247.0f,CIRCLE_SHOW_C:1b,CIRCLE_SHOW_R:1b,CIRCLE_SIZE:8.0f,CIRCLE_SPEED:2.0f,CIRCLE_Y:-3.5f,RING_HEIGHT:0.125f}`);    
        event.server.schedule(3 * SECOND, event.server, function (callback) {
            event.block.up.set('minecraft:air')
            event.server.runCommandSilent(`data remove block ${event.block.x} ${event.block.y-2} ${event.block.z} inventory`); 
            event.server.runCommandSilent(`data remove block ${event.block.x+3} ${event.block.y-2} ${event.block.z} inventory`); 
            event.server.runCommandSilent(`data remove block ${event.block.x-3} ${event.block.y-2} ${event.block.z} inventory`);
            event.server.runCommandSilent(`data remove block ${event.block.x} ${event.block.y-2} ${event.block.z+3} inventory`); 
            event.server.runCommandSilent(`data remove block ${event.block.x} ${event.block.y-2} ${event.block.z-3} inventory`); 

            event.server.runCommandSilent(`data remove block ${event.block.x+2} ${event.block.y-2} ${event.block.z+2} spirit`); 
            event.server.runCommandSilent(`data remove block ${event.block.x-2} ${event.block.y-2} ${event.block.z-2} spirit`);
            event.server.runCommandSilent(`data remove block ${event.block.x+2} ${event.block.y-2} ${event.block.z-2} spirit`); 
            event.server.runCommandSilent(`data remove block ${event.block.x-2} ${event.block.y-2} ${event.block.z+2} spirit`); 

            event.server.runCommandSilent(`summon minecraft:item ${event.block.x} ${event.block.y-1} ${event.block.z} {Glowing:1b,PersistenceRequired:1b,NoGravity:1b,Item:{id:"botania:creative_pool",Count:1b}}`)
            event.block.down.spawnLightning(true)
        })
    }            
})