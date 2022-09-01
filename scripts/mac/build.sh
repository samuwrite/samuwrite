# Parcel uses "/" by default, which does not work for local context. Mac build
# require relative path for assets.
sh scripts/build.sh --public-url "."

ruby scripts/mac/copy.rb
