//灵神注入模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "malum:spirit_infusion",
			"input": {
			  "item": "kubejs:shuru",
			  "count": 8
			},
			"output": {
			  "item": "kubejs:shuchu",
			  "count": 1
			},
			"extra_items": [
			  {
				"item": "kubejs:shuin",
				"count": 3
			  },
			  {
				"item": "kubejs:shuin",
				"count": 1
			  }
			],
			"spirits": [
			  {
				"type": "arcane",
				"count": 64
			  },
			  {
				"type": "earthen",
				"count": 64
			  }
			]
		  }
	)
})