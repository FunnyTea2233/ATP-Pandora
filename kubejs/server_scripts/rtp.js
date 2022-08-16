// 最小及最大坐标
const minX = 1000;
const minZ = 1000;
const maxX = 10000;
const maxZ = 10000;
const minY = 100;
const maxY = 200;
// 是否随机取负值
const reverseNumber = true;

// 返回随机数
function getNumber(min,max){
    let randNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(Math.random() > 0.5 && reverseNumber){
        randNumber = -randNumber;
    }
    return randNumber;
}

onEvent('player.chat',function (event){
    let input = event.message.trim();
    if(input == "rtp"){
        event.player.setPosition(getNumber(minX,maxX), Math.abs(getNumber(minY,maxY)), getNumber(minZ,maxZ));// 设置坐标
        event.player.statusMessage = `已将你传送到 x: ${event.player.x} y: ${event.player.y} z: ${event.player.z}`;// 玩家状态栏显示文字
        event.cancel();
    }
    if(input == "cj"){
        event.player.setOnGround(false)
        // event.server.runCommandSilent(`scoreboard objectives add diedlist.x dummy`);
        // event.server.runCommandSilent(`scoreboard objectives add diedlist.y dummy`);
        // event.server.runCommandSilent(`scoreboard objectives add diedlist.z dummy`);
    }
})

onEvent('block.right_click',function (event){
    let trashcans=event.server.getLevel('minecraft:overworld').getBlock(getNumber(minX,maxX),0,getNumber(minX,maxX))
    if (event.block == 'minecraft:glass'){
        event.block.set('minecraft:air')
        var tarX = 0
        var tarY = 0
        var tarZ = 0
        for(var i = 319; i > -64; i--){
            if(trashcans.offset(0,i,0).getId() !== 'minecraft:air'){
                tarX = trashcans.getX()
                tarY = i
                tarZ = trashcans.getZ()
                break
            } 
        }
        event.server.runCommandSilent(`say ${tarX}，${tarY}，${tarZ}`);
        event.player.setPosition(tarX,tarY+1,tarZ);
    }
})

onEvent('item.right_click',function (event){
    if(event.player.mainHandItem.id == "minecraft:diamond"){
        // event.player.setPosition(getNumber(minX,maxX), Math.abs(getNumber(minY,maxY)), getNumber(minZ,maxZ));
        // event.player.statusMessage = `已将你传送到 x: ${event.player.x} y: ${event.player.y} z: ${event.player.z}`;
        // event.player.potionEffects.add('minecraft:slow_falling', 600, 10, false, false);
        // // 钻石数量减一
        // event.item.count--;
        // event.player.addItemCooldown('minecraft:diamond', 1);
        
    }
})