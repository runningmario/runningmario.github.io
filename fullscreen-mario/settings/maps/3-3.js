FullScreenMario.FullScreenMario.settings.maps.library["3-3"] = {
    "name": "3-3",
    "time": 300,
    "locations": [
        { "entry": "Plain" }
    ],
    "areas": [
        {
            "setting": "Overworld Night",
            "blockBoundaries": true,
            "creation": [
                { "macro": "Pattern", "pattern": "BackCloud", "y": 4, "repeat": 7 },
                { "macro": "Floor", "width": 128 },
                { "macro": "CastleSmall" },
                { "macro": "Tree", "x": 144, "y": 24, "width": 40 },
                { "macro": "Tree", "x": 176, "y": 48, "width": 48 },
                { "thing": "Goomba", "x": 208, "y": 56 },
                { "thing": "Platform", "x": 240, "y": 72, "width": 24, "sliding": true, "begin": 228, "end": 260 },
                { "macro": "Tree", "x": 240, "width": 24 },
                { "macro": "Fill", "thing": "Coin", "x": 249, "y": 7, "xnum": 2, "xwidth": 8 },
                { "thing": "Platform", "x": 264, "y": 40, "width": 24, "sliding": true, "begin": 244, "end": 276 },
                { "macro": "Tree", "x": 288, "y": 8, "width": 56 },
                { "thing": "Coin", "x": 298, "y": 55 },
                { "macro": "Fill", "thing": "Coin", "x": 337, "y": 55, "xnum": 3, "xwidth": 8 },
                { "macro": "Tree", "x": 344, "y": 32, "width": 32 },
                { "macro": "Tree", "x": 368, "y": 16, "width": 80 },
                { "macro": "Tree", "x": 376, "y": 48, "width": 48 },
                { "thing": "Block", "x": 392, "y": 80, "contents": "Mushroom" },
                { "macro": "Fill", "thing": "Coin", "x": 417, "y": 31, "xnum": 3, "xwidth": 8 },
                { "thing": "Koopa", "x": 416, "y": 60, "smart": true },
                { "thing": "Koopa", "x": 432, "y": 28, "smart": true },
                { "macro": "Tree", "x": 440, "y": 80, "width": 32 },
                { "macro": "Fill", "thing": "Coin", "x": 449, "y": 87, "xnum": 2, "xwidth": 8 },
                { "thing": "Platform", "x": 482, "y": 56, "width": 24, "falling": true },
                { "macro": "Tree", "x": 520, "width": 128 },
                { "macro": "Tree", "x": 520, "y": 48, "width": 24 },
                { "macro": "Fill", "thing": "Coin", "x": 529, "y": 55, "xnum": 3, "xwidth": 32 },
                { "macro": "Tree", "x": 552, "y": 48, "width": 24 },
                { "thing": "Koopa", "x": 584, "y": 12, "smart": true },
                { "macro": "Tree", "x": 584, "y": 48, "width": 24 },
                { "macro": "Tree", "x": 616, "y": 72, "width": 24 },
                { "thing": "Coin", "x": 625, "y": 79 },
                { "macro": "Scale", "x": 660, "y": 86, "between": 56, "dropRight": 44 },
                { "macro": "Tree", "x": 672, "y": 16, "width": 32 },
                { "thing": "Platform", "x": 752, "y": 32, "width": 24, "falling": true },
                { "thing": "Platform", "x": 768, "y": 64, "width": 24, "falling": true },
                { "macro": "Tree", "x": 776, "y": 32, "width": 24 },
                { "thing": "Platform", "x": 824, "y": 16, "width": 24, "falling": true },
                { "macro": "Tree", "x": 832, "y": 64, "width": 32 },
                { "macro": "Fill", "thing": "Coin", "x": 841, "y": 71, "xnum": 2, "xwidth": 8 },
                { "macro": "Tree", "x": 856, "y": 16, "width": 40 },
                { "thing": "Coin", "x": 865, "y": 23 },
                { "macro": "Tree", "x": 864, "y": 48, "width": 24 },
                { "thing": "Coin", "x": 873, "y": 55 },
                { "thing": "Koopa", "x": 912, "y": 66, "smart": true, "jumping": true, "floating": true, "begin": 14, "end": 66 },
                { "macro": "Tree", "x": 928, "width": 24 },
                { "macro": "Tree", "x": 952, "y": 24, "width": 96, "solidTrunk": true },
                { "macro": "Fill", "thing": "Koopa", "x": 992, "y": 36, "xnum": 2, "xwidth": 14, "smart": true },
                { "thing": "Platform", "x": 1056, "y": 56, "width": 24 },
                { "macro": "Scale", "x": 1100, "y": 86, "between": 32, "dropRight": 48 },
                { "macro": "Floor", "x": 1152, "width": 256 },
                { "macro": "EndOutsideCastle", "x": 1208, "large": true, "walls": 15, "transport": { "map": "3-4" } }
            ]
        }
    ]
};