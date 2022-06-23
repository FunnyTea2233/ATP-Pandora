//祭祀台模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "naturesaura:offering",
			"input": {
				"item": "kubejs:shuru"
			},
			"start_item": {
				"item": "kubejs:shuin"
			},
			"output": {
				"item": "kubejs:shuchu",
				"count": 2
			}
		}
	)
})