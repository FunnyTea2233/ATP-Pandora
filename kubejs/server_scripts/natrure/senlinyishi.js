//森林仪式模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "naturesaura:tree_ritual",
			"ingredients": [
				{
					"item": "kubejs:shuru"
				},
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
			"sapling": {
				"item": "malum:runewood_sapling"
			},
			"output": {
				"item": "kubejs:shuchu"
			},
			"time": 250
		}
	)
})