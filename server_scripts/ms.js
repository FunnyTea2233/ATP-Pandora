onEvent("block.right_click", event =>{
    if(event.player.getHeldItem(MAIN_HAND) == "kubejs:scanner"){
        if(event.block == 'kubejs:mstouzi'){
            let suijishu0 = Math.ceil(Math.random()*6)
            let maxms = suijishu0 + 1
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"命运的骰子停在了${suijishu0}上","color":"yellow"}`);
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run setblock ${event.block.x} ${event.block.y+1} ${event.block.z} minecraft:structure_block{name:"pack:ms${suijishu0}",mode:"LOAD",posX:-7,posY:-1,posZ:-7,integrity:0.3f}`)
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run setblock ${event.block.x} ${event.block.y+2} ${event.block.z} minecraft:redstone_block`)
            event.block.up.up.set('minecraft:air')
            event.block.up.set('minecraft:air')
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-maxms} ${event.block.y} ${event.block.z-maxms} ${event.block.x+maxms} ${event.block.y} ${event.block.z+maxms} kubejs:pdams0 replace minecraft:air`);
            event.block.set('kubejs:pdams0')
        }
        if(event.block == 'kubejs:pdams0'){
            var boomnum = 0
            const boomb = 'kubejs:pdamso'
            let msb1 = event.block.north.id
            let msb2 = event.block.south.id
            let msb3 = event.block.east.id
            let msb4 = event.block.west.id
            let msb5 = event.block.north.east.id
            let msb6 = event.block.north.west.id
            let msb7 = event.block.south.east.id
            let msb8 = event.block.south.west.id
            if(msb1 == boomb){
                boomnum += 1
            }
            if(msb2 == boomb){
                boomnum += 1
            }
            if(msb3 == boomb){
                boomnum += 1
            }
            if(msb4 == boomb){
                boomnum += 1
            }
            if(msb5 == boomb){
                boomnum += 1
            }
            if(msb6 == boomb){
                boomnum += 1
            }
            if(msb7 == boomb){
                boomnum += 1
            }
            if(msb8 == boomb){
                boomnum += 1
            }
            const s1 = "kubejs:pdams" , s2 = boomnum;
            const s3 = s1 + s2
            event.block.set(s3)
            if(boomnum == 0){
                event.block.set('kubejs:pdamswu')
            }
            const placedBlock = event.getBlock()
            const BPos = placedBlock.world.getBlock(placedBlock.getX(), placedBlock.getY(), placedBlock.getZ())
            var win = 0
            for(var j = 13; j > -13; j--){
                for(var k = 13; k > -13; k--){
                    if (BPos.offset(j, 0, k).getId() == 'kubejs:pdams0') {
                        win += 1
                    }
                }
            }
            if(win == 0){
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"win!","color":"yellow"}`);
            }
        }
        
    }
})

onEvent("block.right_click", event =>{
    if(event.player.getHeldItem(MAIN_HAND) == "kubejs:scanner"){
        if(event.block == 'kubejs:pdamso'){
            event.block.set('kubejs:pdamsboom')
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} kubejs:pdamsboom replace kubejs:pdamso`);
            event.server.schedule(1.5 * SECOND, event.server, function (callback) {
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdamsboom`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams0`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams1`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams2`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams3`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams4`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams5`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams6`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams7`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdams8`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdamswu`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-13} ${event.block.y} ${event.block.z-13} ${event.block.x+13} ${event.block.y} ${event.block.z+13} minecraft:air replace kubejs:pdamsfan`);
                event.server.runCommandSilent(`execute as ${event.entity.getName()} run tellraw @s {"text":"寄","color":"yellow"}`);
            })
        }
    }
})

onEvent("block.right_click", event =>{
    if(event.player.getHeldItem(MAIN_HAND) == "kubejs:echo"){
        if(event.block == 'kubejs:pdamso'||event.block == 'kubejs:pdams0' || event.block == 'kubejs:pdamso'){
            event.server.runCommandSilent(`execute as ${event.entity.getName()} run fill ${event.block.x-1} ${event.block.y} ${event.block.z-1} ${event.block.x+1} ${event.block.y} ${event.block.z+1} kubejs:pdamsfan replace kubejs:pdamso`);
        }
    }
})