'use strict';

exports.layoutTemplate = `<div class="front">
	{%- for group in groups -%}
		{%- set groupClassName = 'group-name--' + group.name + ' group-items--' + group.items.length -%}
		<div class="group" class="{{ groupClassName }}">
			{%- asyncAll item in group.items -%}
				{%- set itemClassName = 'teaser-type--' + ('a' if item.data.priority else 'b') -%}
				<article class="item {{ itemClassName }}">
					<a href="{{ item.data.url }}">
						<div class="item-inner">
							{%- if item.data.image -%}
								<figure itemscope itemtype="http://schema.org/ImageObject">
									<picture>
										<img src="{{ item.data.image.url|resize(width=300, height=200) }}"
											itemprop="contentURL"
											srcset="{{ item.data.image.url|resize(height=800, flag='^') }} 1000w">
									</picture>
									<figcaption></figcaption>
								</figure>
							{%- endif -%}
							<header>
								<h2 itemprop="headline">{{ item.data.title }}</h2>
								{%- if item.data.summary -%}
									<h3 class="summary">{{ item.data.summary }}</h3>
								{%- endif -%}
							</header>
						</div>
					</a>
				</article>
			{%- endall -%}
		</div>
	{% endfor %}
</div>
`;

exports.renderedLayout = '<div class=\"front\"><div class=\"group\" class=\"group-name--group group-items--2\"><article class=\"item teaser-type--a\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://smooth-storage.aptoma.no/users/aptoma/images/3816022.jpg?t%5Bcrop%5D%5Bx%5D=4&t%5Bcrop%5D%5By%5D=0&t%5Bcrop%5D%5Bwidth%5D=3996&t%5Bcrop%5D%5Bheight%5D=2248&t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=5653e8d8b08a85b2b4d6a0b2630ab519b0a744f50c039621a26506aacf95e1e6\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"https://smooth-storage.aptoma.no/users/aptoma/images/3816022.jpg?t%5Bcrop%5D%5Bx%5D=4&t%5Bcrop%5D%5By%5D=0&t%5Bcrop%5D%5Bwidth%5D=3996&t%5Bcrop%5D%5Bheight%5D=2248&t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=6d6dbaf13f72be2f417b3cdc7e937f52fd96001015cb5666720cd33eb9d4684c 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 1</h2></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=8ebfffd4955f2bf78b59c15b4c562589fa49f64650e9634c940570cfc4556096\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg?t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=0eca57c699f8645ad0ce161e70d49314d560c95d5adef4edcec56708893e430c 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 2</h2><h3 class=\"summary\">Article summary</h3></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article></div>\n\t<div class=\"group\" class=\"group-name--group group-items--2\"><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=8ebfffd4955f2bf78b59c15b4c562589fa49f64650e9634c940570cfc4556096\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg?t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=0eca57c699f8645ad0ce161e70d49314d560c95d5adef4edcec56708893e430c 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 3</h2><h3 class=\"summary\">Article summary</h3></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=8ebfffd4955f2bf78b59c15b4c562589fa49f64650e9634c940570cfc4556096\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg?t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=0eca57c699f8645ad0ce161e70d49314d560c95d5adef4edcec56708893e430c 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 4</h2></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article></div>\n\t\n</div>\n';
