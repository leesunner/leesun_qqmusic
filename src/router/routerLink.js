import lazyComponent from './async.js'

export default {
  Home: lazyComponent(import('@/pages/Home')),
  Mine: lazyComponent(import('@/pages/mine/Mine')),
  MusicHouse: lazyComponent(import('@/pages/musicHouse/index')),
  Find: lazyComponent(import('@/pages/find/index')),
  LocalMusic: lazyComponent(import('@/pages/localMusicList')),
}
