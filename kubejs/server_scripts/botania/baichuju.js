//白雏菊模板
onEvent('recipes', event => {
	event.custom(
		  {
			"type": "botania:pure_daisy",
			"input": {
			  "type": "block",
			  "block": "kubejs:shuru"
			},
			"output": {
			  "name": "kubejs:shuchu"
			}
		  }
	)
})