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
				{ "name": "Menu Icon", "hex": "#646464" },
				{ "name": "Hr", "hex": "#eeeeee" },
				{ "name": "Bottom", "hex": "#f5f5f5" },
				{ "name": "Bottom hover", "hex": "#ececec" }
			]
		},

		{
			"name": "CARD",
			"color" : [
				{ "name": "Base", "hex": "#ececec" },
				{ "name": "Layer 1", "hex": "#f4f4f4" },
				{ "name": "Layer 2", "hex": "#f8f8f8" },
				{ "name": "Top Layer", "hex": "#ffffff" }
			]
		},

		{
			"name": "TEXT",
			"color" : [
				{ "name": "Default", "hex": "#575757" },
				{ "name": "Secondary", "hex": "#9d9d9d" },
				{ "name": "Main Color", "hex": "#01579b" },
				{ "name": "Link", "hex": "#4fa5e9" },
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
		},

		{
			"name": "11 PICKS 5",
			"color" : [
				{ "name": "Num 1", "hex": "#ffeb3b" },
				{ "name": "Num 2", "hex": "#0091ea" },
				{ "name": "Num 3", "hex": "#424242" },
				{ "name": "Num 4", "hex": "#fb8c00" },
				{ "name": "Num 5", "hex": "#26c6da" },
				{ "name": "Num 6", "hex": "#3f51b5" },
				{ "name": "Num 7", "hex": "#bdbdbd" },
				{ "name": "Num 8", "hex": "#e51c23" },
				{ "name": "Num 9", "hex": "#4e342e" },
				{ "name": "Num 10", "hex": "#2baf2b" }
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
			"color": "Link",
			"fontSize": "90%",
			"fontWeight": "Normal"
		},

		{
			"name": "Link:hover",
			"color": "Main Color",
			"fontSize": "90%",
			"fontWeight": "Normal"
		}
	]


	// -------------------------------------
	//   initializing
	// -------------------------------------

	$('body')
		.append('<p class="typography-demoText-tw"></p>')
		.find('.typography-demoText-tw')
		.append('<span class="typography_Header1 lipsum(1,7)"><!-- Header 1 --></span><span class="typography_Header2 lipsum(1,10)"><!-- Header 2 --></span><span class="typography_Paragraph lipsum(1,10-20)"><!-- Paragraph --></span><span class="typography_Header3 lipsum(1,5-12)"></span><span class="typography_Paragraph lipsum(1,60-100)"><!-- Paragraph --></span><span class="typography_Link lipsum(1,10-15)"></span><span class="typography_Paragraph lipsum(1,60-100)"><!-- Paragraph --></span><span class="typography_Header3 lipsum(1,5-12)"></span><span class="typography_Paragraph lipsum(1,100-150)"><!-- Paragraph --></span>');

	var $colorPalette_list = $('.colorPalette-list'),
			$typography_fontSize = $('.typography-fontSize'),
			$typography_fontFamily = $('.typography-fontFamily'),
			$typography_sample = $('.typography-sample'),
			$typography_demoLang_a = $('.typography-demoLang a'),
			$typography_demoText = $('.typography-demoText'),
			$typography_demoText_tw = $('.typography-demoText-tw');

	(function initializing() {
		displayColorPalette(ColorPaletteData);
		displayTypography(TypographyData, ColorPaletteData);
		$typography_fontSize.html(TypographySetting.size);
		$typography_fontFamily.html(TypographySetting.family);
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

		$typography_demoLang_a.click(function(){
			if ($(this).hasClass('zh-tw')) {
				$typography_demoText.html($typography_demoText_tw.html());
			} else if ($(this).hasClass('zh-cn')) {
				$typography_demoText.html('<span class="typography_Header1">其知可及也，子曰？</span><span class="typography_Header2">予有乱臣十人。</span><span class="typography_Paragraph">殊绝于人，学而时习之。受命以来，然涉险被创，曰，不贰过。</span><span class="typography_Header3">尔爱其羊。</span><span class="typography_Paragraph">宫中府中。出曰。文胜质则史，天府之土，吾未见刚者，子谓仲弓曰。在秦张良锥。可知也，罔之生也幸而免，不如丘之好学也，不慕荣利。为稽侍中血。则民不服，好之者不如乐之者。</span><span class="typography_Link">何为其然也！</span><span class="typography_Paragraph">不敬，子贡曰，况臣弩下。无违。千室之邑？颜渊？子曰。凡事如是。非臣之明所能逆睹也。子闻之，子张问，贤贤易色。非尔所及也。</span><span class="typography_Header3">足则吾能征之矣，子夏问孝。</span><span class="typography_Paragraph">山节藻梲。信而好古。忠志之士，不亦说乎，斯可矣。斯害也已，不可陷也，参乎，诔曰，子曰！惟坐而待亡，子曰，颠沛必于是。子曰，不踰矩，临大节而不可夺也。令尹子文三仕为令尹，不如林放乎，见义不为。</span>')
			} else {
				$typography_demoText.html('<span class="typography_Header1">Lorem Ipsum</span><span class="typography_Header2">Muskehounds are always ready.</span><span class="typography_Paragraph"> One for all and all for one, helping everybody.</span><span class="typography_Header3">One for all and all for one</span><span class="typography_Paragraph">Sharing everything with fun, that is the way to be. One for all and all for one, Muskehounds are always ready. One for all and all for one, helping everybody. One for all and all for one, can sound pretty corny. If you have got a problem chum, think how it could be.</span><span class="typography_Link">There is a voice that keeps on calling me.</span><span class="typography_Paragraph">Down the road, that is where I will always be. Every stop I make, I make a new friend.</span><span class="typography_Header3">I will just keep moving on.</span><span class="typography_Paragraph">Thunder, thunder, thundercats, Ho! Thundercats are on the move, Thundercats are loose. Feel the magic, hear the roar, Thundercats are loose. Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats!</span>')
			}

			if( ! $(this).hasClass('is-active')) {
				$(this).addClass('is-active').siblings('a').removeClass('is-active');
			}

			RenderDemoText();
		})

		function RenderDemoText() {
			$typography_demoText.find('.typography_Header1').css({
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
					'cursor': 'pointer',
					'color': getColor(5),
					'font-size': data[5].fontSize,
					'font-weight': data[5].fontWeight
				}).mouseenter(function(event){
					$(this).css({
						'color': getColor(6),
						'font-size': data[6].fontSize,
						'font-weight': data[6].fontWeight
					})
				}).mouseleave(function(event) {
					$(this).css({
						'color': getColor(5),
						'font-size': data[5].fontSize,
						'font-weight': data[5].fontWeight
					})
				});
		}

		function getColor(val) {
			for (var k in colorData) {
				if (colorData[k][0] == data[val].color) {
					return colorData[k][1]
				}
			}
		}

		// ----- init ----- //
		$typography_demoText.html($typography_demoText_tw.html());
		RenderDemoText();

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