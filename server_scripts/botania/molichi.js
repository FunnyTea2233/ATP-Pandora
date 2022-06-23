//魔力池模板
//mana
//魔力池标准容量上限：1000000
//1/4mana:250000
//2/4mana:500000
//3/4mana:750000
//魔力玻璃：150
//魔力钢:3000
//魔力珍珠：6000
//魔力钻石:10000
onEvent('recipes', event => {
	event.custom(
		{
			"type": "botania:mana_infusion",
			"input": {
			  "item": "kubejs:shuru"
			},
			"output": {
			  "item": "kubejs:shuchu"
			},
			"mana": 1000000,
			"catalyst": {
			  "type": "block",
			  "block": "minecraft:tnt"
			}
		  }
	)
})