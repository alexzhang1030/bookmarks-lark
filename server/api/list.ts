import { env } from 'node:process'
import { AppType, Client, Domain } from '@larksuiteoapi/node-sdk'
import pLimit from 'p-limit'
import urlMeta from 'url-metadata'
// @ts-expect-error no types
import randomUA from 'random-useragent'

const lark = new Client({
  appId: env.APP_ID ?? 'unknown app id',
  appSecret: env.APP_SECRET ?? 'unknown app secret',
  appType: AppType.SelfBuild,
  domain: Domain.Feishu,
})

const UA = randomUA.getRandom()

const limit = pLimit(20)

interface Data {
  id: number
  title: string
  desc: string
  link: string
}

export default defineEventHandler(async () => {
  const res = await lark.bitable.appTableRecord.list({
    path: {
      app_token: env.APP_TOKEN ?? 'unknown app token',
      table_id: env.TABLE_ID ?? 'unknown table id',
    },
  })
  if (res.code !== 0) {
    console.error('failed to get table record', res)
    return []
  }
  const records = res.data?.items?.map(item => (item.fields.websites as { link: string }).link) ?? []
  const metas = await Promise.all(records.map(link => limit(() => urlMeta(link, {
    requestHeaders: {
      'User-Agent': UA,
    },
  }))))

  return metas.map<Data>((meta, index) => ({
    id: index,
    title: meta.title,
    desc: meta.description,
    link: meta.url,
  }))
})
