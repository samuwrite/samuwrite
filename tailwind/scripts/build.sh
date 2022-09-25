# Prepare
mkdir ./tmp

# Generate styles with Tailwind
npx tailwindcss -i ./src/index.css -o ./tmp/tw-out.css

# Scoped with Sass
cat ./src/tw-pre.txt >>./tmp/ss-in.scss
cat ./tmp/tw-out.css >>./tmp/ss-in.scss
cat ./src/tw-suf.txt >>./tmp/ss-in.scss
sass \
  --style=compressed \
  --no-source-map \
  ./tmp/ss-in.scss ./dist/index.css

# Clean up
rm -rf ./tmp
