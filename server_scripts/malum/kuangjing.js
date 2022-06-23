//方块嬗变模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "malum:block_transmutation",
			"input": "minecraft:glass",
			"output": "minecraft:tnt"
		  }
	)
})