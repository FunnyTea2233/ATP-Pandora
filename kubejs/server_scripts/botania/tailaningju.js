//泰拉凝聚板模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "botania:terra_plate",
			"mana": 500000,
			"ingredients": [
			  {
				"item": "kubejs:shuin"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuin"
			  }
			],
			"result": {
			  "item": "kubejs:shuchu"
			}
		  }
	)
})