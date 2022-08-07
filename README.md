# 电商后台管理和移动端web电商平台项目
## 介绍
一个商城项目，分后台管理系统和移动端web
## 使用
1.     git clone 
2.     配置 yarn install / npm install
3.
        进入server文件夹中添加 .env文件，并在里面添加: 
        DB='MongoDB 数据库地址'
        ADMIN_PROT = '后台管理系统运行的端口'
        APP_PROT = '移动端web运行的端口'
        SECRET = '一个随便什么的字符串，依据这个来生成登录的token'
        OSS_REGION ='OSS的地域'
        OSS_ACCESSKEYID ='OSS的密钥Access Key ID'
        OSS_ACCESSKEYSECRET='OSS的密钥Access Key Secret'
        OSS_BUCKET='OSS的bucket名称'
4.
        运行项目
        进入admin/web
        cd admin / cd web
        yarn dev / nmp run dev
        进入server
        nest state admin / nest state server
## 
