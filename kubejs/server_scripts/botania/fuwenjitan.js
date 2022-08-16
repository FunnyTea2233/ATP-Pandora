//符文祭坛模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "botania:runic_altar",
			"output": {
			  "item": "kubejs:shuchu"
			},
			"mana": 10000,
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