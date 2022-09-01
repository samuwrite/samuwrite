rm -rf ./dist
rm -rf ./.parcel-cache

sh scripts/monaco.sh

parcel build src/web/index.html --public-url "."
