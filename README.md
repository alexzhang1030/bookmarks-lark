# Bookmarks

This is a easy app render bookmarks that stored in `Feishu` bitable.

## How to deployment

- Create a bitable in Feishu like this

![bitable](./images/bitable.png)

- Create a Feishu app and get the `app_id` and `app_secret`

URL will be like `https://open.feishu.cn/app/<your-app-id>/baseinfo`

- Get `app token` and `table id` from bitable URL

```
https://<space-id>.feishu.cn/base/abcabcabcab?table=efefefefef&view=<view-id>
                                  ^^^^^^^^^^^       ^^^^^^^^^^
                                  Your app token    Your table id
```
