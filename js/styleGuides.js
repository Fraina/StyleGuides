"use strict";

$(function(){

	// -------------------------------------
	//   Data
	// -------------------------------------

	var ColorPaletteData = [
		{
			"name": "CONTENT BLOCK",
			"color" : [
				{ "name": "Header", "hex": "#212121" },
				{ "name": "Clock", "hex": "#0d0d0d" },
				{ "name": "Menu Icon", "hex": "#646464" },
				{ "name": "Hr", "hex": "#eeeeee" }
			]
		},

		{
			"name": "CARD",
			"color" : [
				{ "name": "Base", "hex": "#ececec" },
				{ "name": "Layer 1", "hex": "#f4f4f4" },
				{ "name": "Top Layer", "hex": "#ffffff" }
			]
		},

		{
			"name": "TEXT",
			"color" : [
				{ "name": "Default", "hex": "#575757" },
				{ "name": "Main Color", "hex": "#01579b" },
				{ "name": "Secondary", "hex": "#9d9d9d" },
				{ "name": "Counter", "hex": "#e90707" }
			]
		},

		{
			"name": "STATUS",
			"color" : [
				{ "name": "Playing", "hex": "#00a308" },
				{ "name": "Stop", "hex": "#ff0606" },
				{ "name": "Pause", "hex": "#f4511e" },
				{ "name": "Disable", "hex": "#c7c7c7" }
			]
		}
	]

	var TypographySetting = {
		"size": "16px / 100%",
		"family": '"Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans","wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif'
	}

	var TypographyData = [
		{
			"name": "Header1",
			"color": "Default",
			"fontSize": "210%",
			"fontWeight": "Bold"
		},

		{
			"name": "Header2",
			"color": "Default",
			"fontSize": "170%",
			"fontWeight": "Bold"
		},

		{
			"name": "Header3",
			"color": "Default",
			"fontSize": "130%",
			"fontWeight": "Bold"
		},

		{
			"name": "Counter",
			"color": "Counter",
			"fontSize": "130%",
			"fontWeight": "Bold"
		},

		{
			"name": "Paragraph",
			"color": "Default",
			"fontSize": "90%",
			"fontWeight": "Normal"
		},

		{
			"name": "Link",
			"color": "Main Color",
			"fontSize": "90%",
			"fontWeight": "Normal"
		}
	]


	// -------------------------------------
	//   initializing
	// -------------------------------------

	var $colorPalette_list = $('.colorPalette-list'),
			$typography_fontSize = $('.typography-fontSize'),
			$typography_fontFamily = $('.typography-fontFamily'),
			$typography_sample =  $('.typography-sample'),
			$typography_demo = $('.typography-demo');

	(function initializing() {
		$typography_fontSize.html(TypographySetting.size);
		$typography_fontFamily.html(TypographySetting.family);
		displayColorPalette(ColorPaletteData);
		displayTypography(TypographyData, ColorPaletteData);
	})();

	// -------------------------------------
	//   Private Method
	// -------------------------------------

	function displayColorPalette(data) {
		var dataLength = data.length;
		for (var i = 0; i < dataLength; i++) {
			$colorPalette_list.append('<dt class="colorPalette-title">' + data[i].name + '</dt>');
			var colorLength = data[i].color.length;
			while (colorLength--) {
				$('dt').eq(i).after('<dd class="colorPalette-color" style="background-color: ' + data[i].color[colorLength].hex + '"><div class="colorPalette-detail"><p><span>' + data[i].color[colorLength].name + '</span> <br> ' + data[i].color[colorLength].hex + '</p></div></dd>');
			}
		}
	}

	function displayTypography(data, color) {
		var dataLength = data.length,
				colorData = [];

		for (var k in color) {
			if (color[k].name == 'TEXT'){
				var colorLength = color[k].color.length
				for (var i = 0; i < colorLength; i++) {
					colorData.push([color[k].color[i].name, color[k].color[i].hex])
				}
			}
		}

		for (var i = 0; i < dataLength; i++) {
			$typography_sample.append('<li class="typography-' + data[i].name + '">' + data[i].name + ' <span>' + data[i].fontSize + ' / ' + data[i].color + ' / ' + data[i].fontWeight + '</span></li>')
				.find('li').eq(i).css({
					'color': getColor(i),
					'font-size': data[i].fontSize,
					'font-weight': data[i].fontWeight
				});
		}

		$typography_demo.append('<span class="typography_Header1 lipsum(1,7)"><!-- Header 1 --></span><span class="typography_Header2 lipsum(1,10)"><!-- Header 2 --></span><span class="typography_Paragraph lipsum(1,10-20)"><!-- Paragraph --></span><span class="typography_Header3 lipsum(1,5-12)"></span><span class="typography_Paragraph lipsum(1,60-100)"><!-- Paragraph --></span><span class="typography_Link lipsum(1,10-15)"></span><span class="typography_Paragraph lipsum(1,60-100)"><!-- Paragraph --></span><span class="typography_Header3 lipsum(1,5-12)"></span><span class="typography_Paragraph lipsum(1,100-150)"><!-- Paragraph --></span>')
			/* Header 1 */
			.find('.typography_Header1').css({
				'color': getColor(0),
				'font-size': data[0].fontSize,
				'font-weight': data[0].fontWeight,
				'line-height': 2
			})

			/* Header 2 */
			.parent().find('.typography_Header2').css({
				'color': getColor(1),
				'font-size': data[1].fontSize,
				'font-weight': data[1].fontWeight,
				'line-height': 1.8
			})

			/* Header 3 */
			.parent().find('.typography_Header3').css({
				'color': getColor(2),
				'font-size': data[2].fontSize,
				'font-weight': data[2].fontWeight,
				'margin-top': '.8em'
			})

			/* Paragraph */
			.parent().find('.typography_Paragraph').css({
				'color': getColor(4),
				'font-size': data[4].fontSize,
				'font-weight': data[4].fontWeight
			})

			/* Link */
			.parent().find('.typography_Link').css({
				'display': 'inline-block',
				'color': getColor(5),
				'font-size': data[5].fontSize,
				'font-weight': data[5].fontWeight
			})

		function getColor(val) {
			for (var k in colorData) {
				if (colorData[k][0] == data[val].color) {
					return colorData[k][1]
				}
			}
		}
	}

})


// -------------------------------------
//   Outdated Browser
// -------------------------------------

outdatedBrowser({
	bgColor: '#f25648',
	color: '#ffffff',
	lowerThan: 'transform',
	languagePath: 'js/lang/en.html'
})