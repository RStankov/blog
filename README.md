## My Blog

This is [ghost](https://ghost.org/) configuration for my personal [blog](http://blog.rstankov.com)


### Installation

```
yarn install
yarn run knex-migrator init
yarn run knex-migrator migrate
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
