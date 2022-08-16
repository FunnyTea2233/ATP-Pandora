//维度矿井模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "occultism:miner",
			"ingredient": {
			  "item": "kubejs:shuru"
			},
			"result": {
			  "item": "kubejs:shuchu"
			},
			"weight": 300
		  }
	)
})