//碎矿者模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "occultism:crushing",
			"ingredient": {
			  "item": "kubejs:shuru"
			},
			"result": {
			  "item": "kubejs:shuchu",
			  "count": 3
			},
			"crushing_time": 200
		  }
	)
})