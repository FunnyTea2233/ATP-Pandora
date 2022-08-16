//环境存储器模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "evilcraft:environmental_accumulator",
			"item": "kubejs:shuru",
			"weather": "LIGHTNING",
			"result": {
			  "item": "kubejs:shuchu",
			  "weather": "RAIN"
			}
		  }
	)
})