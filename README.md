# Gulpを使ってscssをコンパイルする

## インストール
```
npm i -D gulp gulp-sass node-sass@4.14 gulp-sourcemaps gulp-mode gulp-postcss autoprefixer@9.8.6 gulp-replace sha-1
```

## package.jsonのnpmスクリプトに追加
```js
//devに & gulp sass --dev
//prodに & gulp sass --prod
//watchに & gulp watch
```

## Sassにおける『ソースマップ』の役割や使い方【gulpでの設定も】 | TechnoBlog
https://yusukeurabe.com/gulp-sourcemaps/

## 【gulp.watch】Sassの更新を監視して自動でコンパイルする方法 | TechnoBlog
https://yusukeurabe.com/sass-watch/

## [gulp] 本番環境と開発環境を分岐するgulp-mode | バシャログ。
http://bashalog.c-brains.jp/18/09/27-122000.php

## gulpでPostCSSを使う方法 – Webrandum
https://webrandum.net/gulp-postcss/

## 【gulp エラー】Error: PostCSS plugin autoprefixer requires PostCSS 8. Update PostCSS or downgrade this plugin. - Qiita
https://qiita.com/oreo3@github/items/d49237a4a1d68dc00720
