# Parcel uses "/" by default, which does not work for local context. Mac build
# require relative path for assets.

npm install

sh scripts/build.sh

ruby scripts/mac/copy.rb
