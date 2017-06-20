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

exports.renderedLayout = '<div class=\"front\"><div class=\"group\" class=\"group-name--group group-items--2\"><article class=\"item teaser-type--a\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://smooth-storage.aptoma.no/users/aptoma/images/3816022.jpg?t[resize][width]=300&amp;t[resize][height]=200&amp;accessToken=18d766202e3ec775f6f6fd3b8c9299f3e3261a4fb193169897615d0b0a8fafe6\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"https://smooth-storage.aptoma.no/users/aptoma/images/3816022.jpg?t[resize][height]=800&amp;t[resize][flag]=^&amp;accessToken=9981e301c4825664f693528861dd8ee19cfb0a2e7b274b6fd0fe1e47fcdffd38 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 1</h2></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 2</h2><h3 class=\"summary\">Article summary</h3></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article></div>\n\t<div class=\"group\" class=\"group-name--group group-items--2\"><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 3</h2><h3 class=\"summary\">Article summary</h3></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 4</h2></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article></div>\n\t\n</div>\n';
