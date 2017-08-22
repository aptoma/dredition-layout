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

exports.renderedLayout = '<div class=\"front\"><div class=\"group\" class=\"group-name--group group-items--2\"><article class=\"item teaser-type--a\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://smooth-storage.aptoma.no/users/aptoma/images/3816022.jpg?t%5Bcrop%5D%5Bx%5D=4&t%5Bcrop%5D%5By%5D=0&t%5Bcrop%5D%5Bwidth%5D=3996&t%5Bcrop%5D%5Bheight%5D=2248&t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=955a0bb9acc290839b438a5994d2bf33156cf5bbd145b13ceb6a281e6ef48b9c\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"https://smooth-storage.aptoma.no/users/aptoma/images/3816022.jpg?t%5Bcrop%5D%5Bx%5D=4&t%5Bcrop%5D%5By%5D=0&t%5Bcrop%5D%5Bwidth%5D=3996&t%5Bcrop%5D%5Bheight%5D=2248&t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=406ae52686ec4b93e690893ec78079ea937a1e9222344a32baff725f85e4aa51 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 1</h2></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=244ddc0b246b11699c4a212d34d917d9a106a8fe050af2a451d46c38790665f3\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg?t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=93ac447aa0a5535f83f4a650adf6ecdb459ebe120776101c2ac4c0cabacf581e 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 2</h2><h3 class=\"summary\">Article summary</h3></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article></div>\n\t<div class=\"group\" class=\"group-name--group group-items--2\"><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=244ddc0b246b11699c4a212d34d917d9a106a8fe050af2a451d46c38790665f3\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg?t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=93ac447aa0a5535f83f4a650adf6ecdb459ebe120776101c2ac4c0cabacf581e 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 3</h2><h3 class=\"summary\">Article summary</h3></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article><article class=\"item teaser-type--b\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<div class=\"item-inner\"><figure itemscope itemtype=\"http://schema.org/ImageObject\">\n\t\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://example.com/image.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&accessToken=244ddc0b246b11699c4a212d34d917d9a106a8fe050af2a451d46c38790665f3\"\n\t\t\t\t\t\t\t\t\t\t\titemprop=\"contentURL\"\n\t\t\t\t\t\t\t\t\t\t\tsrcset=\"http://example.com/image.jpg?t%5Bresize%5D%5Bheight%5D=800&t%5Bresize%5D%5Bflag%5D=%5E&accessToken=93ac447aa0a5535f83f4a650adf6ecdb459ebe120776101c2ac4c0cabacf581e 1000w\">\n\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t<figcaption></figcaption>\n\t\t\t\t\t\t\t\t</figure><header>\n\t\t\t\t\t\t\t\t<h2 itemprop=\"headline\">Article 4</h2></header>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</article></div>\n\t\n</div>\n';
