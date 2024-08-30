# Re:Mind Website

https://www.youtube.com/watch?v=9LPXVbfAHV4 - Pōkarekare Ana


There is an issue with the image sizes and should be able to write a shortcode to generate the correct image sizes. However, it's taking a bit to work through the source code, so a short term fix is to generate webp version:

```
cd src/assets/images
sips -s format jpeg -s formatOptions high -s dpiWidth 72 -s dpiHeight 72 -Z 1600 * --out "web"
for file in web/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done
```

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

