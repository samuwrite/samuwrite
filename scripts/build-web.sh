rm -rf apps/web/dist
rm -rf apps/web/.parcel-cache
rm -rf .parcel-cache

sh scripts/monaco.sh

npx parcel build apps/web/src/index.html --public-url "."
