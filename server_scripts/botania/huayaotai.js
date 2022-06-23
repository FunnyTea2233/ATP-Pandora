//花药台模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "botania:petal_apothecary",
			"output": {
			  "item": "kubejs:shuchu"
			},
			"ingredients": [
			  {
				"item": "kubejs:shuin"
			  },
			  {
				"item": "kubejs:shuin"
			  },
			  {
				"item": "kubejs:shuin"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  }
			]
		  }
	)
})