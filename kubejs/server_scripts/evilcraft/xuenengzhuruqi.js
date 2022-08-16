//血能注入器模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "evilcraft:blood_infuser",
			"item": "kubejs:shuru",
			"fluid": {
			  "fluid": "evilcraft:blood",
			  "amount": 5000
			},
			"result": {
			  "item": "kubejs:shuchu"
			},
			"duration": 500,
			"xp": 1.5,
			"tier": 3
		  }
	)
})