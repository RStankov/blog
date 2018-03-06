## My Blog

This is [ghost](https://ghost.org/) configuration for my personal [blog](http://blog.rstankov.com)


### Installation

```
yarn install

./node_modules/.bin/knex-migrator init
```

### Running

```
node index.js
```


### When updating

```
rm -rf content/themes/casper
cp ./node_modules/ghost/content/themes/casper content/themes
```
