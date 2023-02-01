import { isJSON } from './index'

export interface StoreData {
  expire?: number
  [key: string]: any
}

const store = {
  set(key: string, data: StoreData): void {
    // 设置过期时间;
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 100
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  get(key: string): StoreData | null {
    const item = localStorage.getItem(key)

    if (item === 'undefined' || !item) return null
    
    const data = isJSON(item) ? JSON.parse(item) : item
    // 判断是否过期
    if (data.expire && data.expire < new Date().getTime()) {
      localStorage.removeItem(key)
      return null
    }
    return data
  }
}

export default store
