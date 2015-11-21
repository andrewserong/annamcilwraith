---
layout: page
title: Books
permalink: /books/
show_in_nav: true
---

{% for my_page in site.pages %}
    {% if my_page.title != null and my_page.show_in_books != null %}
[{{ my_page.title }}]({{ my_page.url | prepend: site.baseurl }})
    {% endif %}
{% endfor %}