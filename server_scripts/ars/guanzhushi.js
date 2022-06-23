//灌注室模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "ars_nouveau:imbuement",
			"input": {
			  "item": "kubejs:shuru"
			},
			"output": "kubejs:shuchu",
			"count": 4,
			"source": 2000,
			"pedestalItems": [
			  {
				"item": {
				  "item": "kubejs:shuin"
				}
			  },
			  {
				"item": {
				  "item": "kubejs:shuin"
				}
			  },
			  {
				"item": {
				  "item": "kubejs:shuin"
				}
			  }
			]
		  }
	)
})