onEvent('player.logged_in', event => {
    // 初始化Painter对象
    event.player.paint(
    //     {
    //     san_list1: {
    //         type: 'text',
    //         text: '永久扭曲：?',
    //         x: 10,
    //         y: 10,
    //         scale: 1,
    //         color: '#7427A6',
    //         draw: 'ingame'
    //     },
    //     san_list2: {
    //         type: 'text',
    //         text: '普通扭曲：?',
    //         x: 10,
    //         y: 20,
    //         scale: 1,
    //         color: '#7427A6',
    //         draw: 'ingame'
    //     },
    //     san_list3: {
    //         type: 'text',
    //         text: '临时扭曲：?',
    //         x: 10,
    //         y: 30,
    //         scale: 1,
    //         color: '#7427A6',
    //         draw: 'ingame'
    //     },
    // }
    )
})

onEvent('player.tick', event => {
    if(event.player.getHeldItem(MAIN_HAND) == 'kubejs:scanner'){
        event.player.paint({toujing1: {type: 'rectangle',x:-1,y:3,w:290,h:250,alignX:'center',alignY:'center',texture: 'kubejs:textures/gui/modaotoujing.png',draw: 'ingame'}})
        event.player.paint({toujing2: {type: 'rectangle',x:-1,y:1,w:200,h:205,alignX:'center',alignY:'center',texture: 'kubejs:textures/gui/scanscreen.png',draw: 'ingame'}})
    }else{
        event.player.paint({toujing1: {remove: true}});
        event.player.paint({toujing2: {remove: true}}); 
    }
})

onEvent('item.right_click', event => {
    event.server.runCommandSilent(`scoreboard objectives add san1 dummy`);
    event.server.runCommandSilent(`scoreboard objectives add san2 dummy`);
    event.server.runCommandSilent(`scoreboard objectives add san3 dummy`);
    if(event.item.id == 'kubejs:sanity_checker'){
        
    let list_san1 = event.server.runCommandSilent(`scoreboard players get ${event.entity.getName()} san1`);
    let list_san2 = event.server.runCommandSilent(`scoreboard players get ${event.entity.getName()} san2`);
    let list_san3 = event.server.runCommandSilent(`scoreboard players get ${event.entity.getName()} san3`);
        var san_all = list_san1 + list_san2 + list_san3
        event.player.statusMessage = `§d永久扭曲：${list_san1} 普通扭曲：${list_san2} 临时扭曲：${list_san3}`;
        if(list_san1>67){k
            list_san1 = 67
        }
        if(list_san2>67){
            list_san2 = 67
        }
        if(list_san3>67){
            list_san3 = 67
        }
        

        // event.player.paint({san_list1: {text: `永久扭曲：${list_san1}`,x:35,y:98-list_san1,scale: 0.5,draw: 'ingame',shadow:true}})
        // event.player.paint({san_list2: {text: `普通扭曲：${list_san2}`,x:35,y:98-list_san2,scale: 0.5,draw: 'ingame',shadow:true}})
        // event.player.paint({san_list3: {text: `临时扭曲：${list_san3}`,x:35,y:98-list_san3,scale: 0.5,draw: 'ingame',shadow:true}})
        
        event.player.paint({demo4: {type: 'rectangle',x:13,y:100-list_san3,w:36,h:list_san3,texture: 'kubejs:textures/gui/san3.png',draw: 'ingame'}})
        event.player.paint({demo3: {type: 'rectangle',x:0,y:100-list_san2,w:36,h:list_san2,texture: 'kubejs:textures/gui/san2.png',draw: 'ingame'}})
        event.player.paint({demo2: {type: 'rectangle',x:-11,y:100-list_san1,w:36,h:list_san1,texture: 'kubejs:textures/gui/san1.png',draw: 'ingame'}})

        event.player.paint({demo1: {type: 'rectangle',x:5,y:5,w:28,h:102,texture: 'kubejs:textures/gui/niuqu.png',draw: 'ingame'}})

        event.player.paint({zhizhen3: {type: 'rectangle',x:13,y:98-list_san3,w:12,h:3,texture: 'kubejs:textures/gui/zhizhen.png',draw: 'ingame'}})
        event.player.paint({zhizhen2: {type: 'rectangle',x:13,y:98-list_san2,w:12,h:3,texture: 'kubejs:textures/gui/zhizhen.png',draw: 'ingame'}})
        event.player.paint({zhizhen1: {type: 'rectangle',x:13,y:98-list_san1,w:12,h:3,texture: 'kubejs:textures/gui/zhizhen.png',draw: 'ingame'}})

        //event.player.paint({'*': {remove: false}});

        if(san_all>50){
            event.player.paint({nosan: {type: 'rectangle',x:'(sin((time() * 4.1)) * (($screenW - 312) / 64))',y:'(sin((time() * 3.1)) * (($screenW - 412) / 64))',w:20,h:12,moveX:10,moveY:9,texture: 'kubejs:textures/gui/nosan.png',draw: 'ingame'}})
        }else{
            event.player.paint({nosan: {remove: true}});
        }
    }
    
    if(event.item.id == 'kubejs:sanity_soap'){
        event.server.runCommandSilent(`scoreboard players set ${event.entity.getName()} san2 0`);
        event.server.runCommandSilent(`scoreboard players set ${event.entity.getName()} san3 0`);
        event.player.statusMessage = `123`;
    }
    if(event.item.id == 'kubejs:glass'){
        event.server.runCommandSilent(`scoreboard players add ${event.entity.getName()} san2 10`);
        event.server.runCommandSilent(`scoreboard players add ${event.entity.getName()} san3 20`);
        // event.player.paint({demo1: {remove: true}});
        // event.player.paint({demo2: {remove: true}});
        // event.player.paint({demo3: {remove: true}});
        // event.player.paint({demo4: {remove: true}});
        // event.player.paint({zhizhen3: {remove: true}});
        // event.player.paint({zhizhen2: {remove: true}});
        // event.player.paint({zhizhen1: {remove: true}});
        // event.player.paint({nosan: {remove: true}});
    }
})

onEvent("item.food_eaten", event =>{// 监听吃食物事件
    if(event.item.id == "kubejs:brain"){
        event.server.runCommandSilent(`scoreboard players add ${event.entity.getName()} san2 10`);
        event.server.runCommandSilent(`scoreboard players add ${event.entity.getName()} san3 20`);
    }
})

onEvent("block.right_click", event =>{
    if(event.player.getHeldItem(MAIN_HAND) == "kubejs:scanner"){
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x+1.01} ${event.block.y+1.01} ${event.block.z+1.01}`);
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x-0.01} ${event.block.y+1.01} ${event.block.z+1.01}`);
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x-0.01} ${event.block.y+1.01} ${event.block.z-0.01}`);
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x+1.01} ${event.block.y+1.01} ${event.block.z-0.01}`);

        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x+1.01} ${event.block.y+1.01} ${event.block.z}`);
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x} ${event.block.y+1.01} ${event.block.z-0.01}`);
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x-0.01} ${event.block.y+1.01} ${event.block.z}`);
        event.server.runCommandSilent(`particle minecraft:enchant ${event.block.x} ${event.block.y+1.01} ${event.block.z+1.01}`);
    }
})