//精灵门模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "botania:elven_trade",
			"ingredients": [
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuin"
			  }
			],
			"output": [
			  {
				"item": "kubejs:shuchu"
			  }
			]
		  }
	)
})

onEvent('recipes', event => {
	event.custom(
		{
			"type": "botania:elven_trade",
			"ingredients": [
			  {
				"item": "minecraft:bread"
			  }
			],
			"output": [
			  {
				"item": "kubejs:piyan"
			  }
			]
		  }
	)
})