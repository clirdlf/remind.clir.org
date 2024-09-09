# Re:Mind Website

https://www.youtube.com/watch?v=9LPXVbfAHV4 - Pōkarekare Ana

```
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209945348&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/kiwileles" title="Kiwileles" target="_blank" style="color: #cccccc; text-decoration: none;">Kiwileles</a> · <a href="https://soundcloud.com/kiwileles/pokarekare-ana" title="Pōkarekare Ana" target="_blank" style="color: #cccccc; text-decoration: none;">Pōkarekare Ana</a></div>
```


There is an issue with the image sizes and should be able to write a shortcode to generate the correct image sizes. However, it's taking a bit to work through the source code, so a short term fix is to generate webp version:

```
cd src/assets/images
sips -s format jpeg -s formatOptions high -s dpiWidth 72 -s dpiHeight 72 -Z 1600 * --out "web"
for file in web/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done
```

## Resources

https://www.poetryoutloud.org/poem/mauis-mission/

https://www.greensabbathproject.net/all-posts/for-papatnuku-mother-earth-by-nadine-anne-hura-via-jacinda-ardern

How Great Thou Art
(Whakaaria Mai) ...
https://m.youtube.com › watch
Howard Morrison -
Whakaaria Mai (live 1982)

Bik Runga - a favourite kiwi singer
https://music.apple.com/mv/music-video/close-your-eyes/1164000963

Dave Dobbyn - Slice of HEaven
https://www.youtube.com/watch?v=s2Dpqz9eFj4
Footrot Flats was a famous kiwi cartoon - the dog is one of the main
characters - BUT seeing the video - might be a bit risque (please
watch and enjoy)

Maori Poi dance probably better for the website
https://www.youtube.com/watch?v=rNX__PseStg

### https://www.mch.govt.nz/about-us/our-climate-related-work
This is worth a good skim - lots of really practical aspects and its thoughtful
kaitiaki - maori work for guardians or stewards
(The actions noted refer to the ones that the National government
declined to keep supporting when they came into power). I juts pulled
a couple to focus on.
Action 5.8: Support kaitiaki communities to adapt and conserve
taonga/cultural assets
This action calls for a coordinated cross-government approach,
partnering with hapū, iwi and Māori. The goal is to  understand the
threats to cultural heritage and support initiatives so kaitiaki
communities can plan for a changing climate and adapt their cultural
assets to reduce the impact.

Future actions
Action 3.26: produce guidance for disaster risk management for cultural heritage
This action will improve disaster risk management for cultural
heritage through guidance on reducing risks before, during and after
disasters.
Action 3.27: develop a framework for assessing exposure and
vulnerability of cultural assets/taonga to climate change
Working with partners (including iwi), we will identify national and
local information on taonga/cultural assets, both tangible and
intangible. We will identify gaps in knowledge, information needs and
governance.
We will then develop a framework (working with partners and iwi) to
identify valued cultural heritage and the actual and potential
exposure and vulnerability of cultural heritage to climate change. The
framework will take a broad and inclusive approach, recognising the
ways in which different communities identify, access and participate
in what is culturally important to them.

https://www.nzherald.co.nz/nz/how-rising-seas-are-threatening-a-trove-of-aotearoas-culture-heritage/
more than 2000 sites in Aotearoa are at risk due to rising sealevels
A trove of Aotearoa’s cultural heritage is at risk from climate
change, with a sweeping new assessment identifying nearly 2000
archaeological sites threatened by erosion from sea level rise.
While recent studies have pointed to the potentially staggering cost
of climate-driven inundation – some $150b worth of public and private
assets currently lie in coastal floodplains – less understood is the
risk to our invaluable archaeological heritage.
The thousands of centuries-old sites dotted around our coastlines
remain immensely important to iwi and hapu and continue to provide
researchers direct evidence about past human activity here.
“Archaeological sites, regardless of type, offer opportunities to
investigate the past,” University of Auckland PhD researcher Ben Jones
said.
“Collectively, they reveal how people interacted, migrated, and lived
across Aotearoa, helping us understand past landscapes.”

https://nzarchaeology.org/membership/climate-change-and-cultural-heritage

https://www.nzlii.org/nz/journals/NZJlEnvLaw/2012/4.html
The Pacific region is commonly marketed as a tropical island play­
ground for a privileged percentage of society, advertised as a place
where one can escape reality. However, once the resort islands’ façade
is peeled back, a shocking scene is left, baring the remains of a
simple existence that, for the people of this region, is largely
inescapable. Already fraught with political instability and extreme
poverty, this region is also one of the most vulnerable areas in the
world, particularly susceptible to the devastating effects of climate
change. The Intergovernmental Panel on Climate Change (IPCC) has
estimated that sea levels will rise between 9 and 88 cm by the year
2100. This increase has the potential to cripple, if not destroy,
whole Pacific Island states due to their low-lying geographical
location.

https://gjia.georgetown.edu/2023/04/28/climate-change-and-pacific-islander-life/
The Pacific Ocean covers nearly a third of the Earth’s surface with
diverse islands scattered throughout, from active volcanoes to coral
atolls. Pacific island countries range from Papua New Guinea, which is
larger in area and population than New Zealand, to Tuvalu, with a mere
26 square kilometers of land and 11,000 to 12,000 people. Pacific
islander peoples speak hundreds of languages, have millennia-long
histories, and possess a deep understanding of their environments and
livelihoods.
As the environment changes, local knowledges and traditional
livelihoods are becoming outdated in certain areas. Significant
adjustments are needed to sustain water and food supplies without more
imports, especially to maintain fishing and agriculture-based
livelihoods.
Many Pacific island communities are sustained by residents migrating
(temporarily or permanently) and sending back remittances. If
islanders cannot adjust quickly enough to climate change’s short and
long-term impacts, more people might have to move.

Climate Change impacts in Aotearoa:
Aotearoa is in a unique geographic position as a continental landmass,
largely isolated from other geographic or population centres. This
comparative isolation shapes Aotearoa’s ecology, culture and economy.
For example, Aotearoa’s isolation over millions of years has produced
a distinct biological assemblage with many endemic species. Some
examples of this phenomenon are iconic, such as kiwi, (Bellingham et
al. 2010). This isolation also shapes the vibrant mixing of Māori,
Pākehā (European), Pasifika and other cultures.



## JavaScript Dependencies

* [Animate.css](https://animate.style/)
* [Animate on Scroll](https://michalsnik.github.io/aos/)
* [Bootstrap 5](https://getbootstrap.com/)
* [Bootstrap Icons](https://icons.getbootstrap.com/)
* [GLightbox](https://biati-digital.github.io/glightbox/)
* [pagefind](https://pagefind.app/)
* [rellax](https://dixonandmoe.com/rellax/)
* [Tiny Slider 2](https://github.com/ganlanyuan/tiny-slider)

# 11ty with Bootstrap Scaffold

This is scaffold for new projects using [11ty](https://www.11ty.dev/) with [Bootstrap](https://getbootstrap.com/docs/5.3/examples/) (building with [Vite](https://vitejs.dev/)) meant to deploy to [GitHub Pages](https://pages.github.com/). Also includes some basic [VSCode](https://code.visualstudio.com/) setup.

* [Bootstrap 5](https://getbootstrap.com/docs/5.3/customize/sass/)
* [Bootstrap Icons](https://icons.getbootstrap.com/)
* [Vite](https://vitejs.dev/)
* [Pagefind](https://pagefind.app/)

## Eleventy Plugins

* [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/)
* [@11ty/eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
* [@11ty/eleventy-plugin-rss](https://www.11ty.dev/docs/plugins/rss/)
* [@11ty/eleventy-plugin-syntaxhighlight](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
* [@11ty/eleventy-plugin-vite](https://www.11ty.dev/docs/server-vite/)

## Demo

<https://waynegraham.github.io/eleventy-plus-bootstrap-scaffold/>

# Usage

## Install

    npm install

## Start local development

    npm start

Preview runs at <http://localhost:8080>

## Build

    npm run build

# Credits

* Layout based on Bootstrap [Jumbotron Example](https://getbootstrap.com/docs/5.3/examples/jumbotron/)

