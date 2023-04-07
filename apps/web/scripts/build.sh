rm -rf ./dist
rm -rf ./.parcel-cache

sh scripts/monaco.sh

npx parcel build src/index.html --public-url "."
