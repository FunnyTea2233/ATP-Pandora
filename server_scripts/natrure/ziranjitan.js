//自然祭坛模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "naturesaura:altar",
			"input": {
				"item": "kubejs:shuru"
			},
			"output": {
				"item": "kubejs:shuchu"
			},
			//地狱世界类型naturesaura:overworld
			"aura_type": "naturesaura:nether",
			"catalyst": {
				//催化器
				"item": "naturesaura:crushing_catalyst"
			},
			"aura": 3000,
			"time": 40
		}
	)
})