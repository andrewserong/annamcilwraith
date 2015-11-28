---
layout: page
title: Books
permalink: /books/
show_in_nav: true
hero_twitter: book_cotb_01_tjk_twitter.jpg
hero_full_res: book_cotb_01_tjk_full.jpg
---

{% for my_page in site.pages %}
    {% if my_page.title != null and my_page.show_in_books != null %}
[{{ my_page.title }}]({{ my_page.url | prepend: site.baseurl }})
    {% endif %}
{% endfor %}