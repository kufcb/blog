---
title: 👉node已有版本升级👈
isTimeLine: true
date: 2025-05-23
category:
  - 其他
tag:
  - Other
---

# node已有版本升级

在使用node的过程中经常遇到要升级版本的问题，那么怎么在已经安装node的情况下升级它呢

## 1、先查看本机node.js版本：

``` shell
node js

```
## 2、安装 n 工具，它是用来管理node.js版本的
``` shell
sudo npm install -g n

```
## 3、安装最新版本的node.js
``` shell
sudo n latest

```
## 4、更新npm到最新版
``` shell
sudo npm install npm@latest -g

```
## 5、验证
``` shell
node -v
npm -v

```



