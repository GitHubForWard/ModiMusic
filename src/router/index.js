import Vue from 'vue'
import Router from 'vue-router'
import My from '@/containers/My'
import MusicLibrary from '@/containers/MusicLibrary'
import Find from '@/containers/Find'
import Search from '@/containers/Search'
import LocalMusic from '@/containers/LocalMusic'
import DownloadManagement from '@/containers/DownloadManagement'
import HistoryRec from '@/containers/HistoryRec'
import MyCollection from '@/containers/MyCollection'
import MyRadio from '@/containers/MyRadio'
import PostNews from '@/containers/PostNews'
import MyList from '@/containers/MyList'
import Lookup from '@/components/Search/Lookup'
import Album from '@/containers/Album'
import SpecialSale from '@/containers/SpecialSale'
import Purchased from '@/containers/Purchased'
import Classification from '@/containers/Classification'
import BestsellerLlist from '@/containers/BestsellerLlist'
import Singer from '@/containers/Singer'
import Personal from '@/containers/Personal'
import Radiostation from '@/containers/Radiostation'
import Radioplay from '@/containers/Radioplay'
import RankingList from '@/containers/RankingList'
import SoaringList from '@/containers/SoaringList'
import MVPage from '@/containers/MVPage'
import SongList from '@/containers/SongList'
import SongListDetails from '@/containers/SongListDetails'
import Video from '@/containers/Video'
import LatestVideo from '@/containers/LatestVideo'
import HotVideo from '@/containers/HotVideo'
import ScreenList from '@/containers/ScreenList'
import LiveBroadcast from '@/containers/LiveBroadcast'
import Login from '@/containers/Login'



Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/musiclibrary',
      name: 'MusicLibrary',
      component: MusicLibrary
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/lookup',
      name: 'Lookup',
      component: Lookup
    },
    {
      path: '/localmusic',
      name: 'LocalMusic',
      component: LocalMusic
    },
    {
      path: '/downloadmanagement',
      name: 'DownloadManagement',
      component: DownloadManagement
    },
    {
      path: '/historyrec',
      name: 'HistoryRec',
      component: HistoryRec
    },
    {
      path: '/mycollection',
      name: 'MyCollection',
      component: MyCollection
    },
    {
      path: '/myradio',
      name: 'MyRadio',
      component: MyRadio
    },
    {
      path: '/postnews',
      name: 'PostNews',
      component: PostNews
    },
    {
      path: '/mylist',
      name: 'MyList',
      component: MyList
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/specialSale',
      name: 'SpecialSale',
      component: SpecialSale,
    },
    {
      path: '/purchased',
      name: 'Purchased',
      component: Purchased,
    },
    {
      path: '/classification',
      name: 'Classification',
      component: Classification,
    },
    {
      path: '/bestsellerLlist',
      name: 'BestsellerLlist',
      component: BestsellerLlist,
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/radiostation',
      name: 'Radiostation',
      component: Radiostation
    },
    {
      path: '/radioplay',
      name: 'Radioplay',
      component: Radioplay
    },
    {
      path: '/rankingList',
      name: 'RankingList',
      component: RankingList
    },
    {
      path: '/soaringList',
      name: 'SoaringList',
      component: SoaringList
    },
    {
      path: '/mvpage',
      name: 'MVPage',
      component: MVPage
    },
    {
      path: '/songlist',
      name: 'SongList',
      component: SongList
    },
    {
      path: '/songlistdetails',
      name: 'SongListDetails',
      component: SongListDetails
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/latestVideo',
      name: 'LatestVideo',
      component: LatestVideo
    },
    {
      path: '/hotVideo',
      name: 'HotVideo',
      component: HotVideo
    },
    {
      path: '/screenList',
      name: 'ScreenList',
      component: ScreenList
    },
    {
      path: '/liveBroadcast',
      name: 'LiveBroadcast',
      component: LiveBroadcast
    }
  ]
})


/*

            <router-link to="/vipcenter">会员中心</router-link>

            <router-link to="/newscenter">消息中心</router-link>

            <router-link to="/freeflow">在线听歌免流量</router-link>

            <router-link to="/qrcode">扫一扫</router-link>

            <router-link to="/skincenter">个性换肤</router-link>

            <router-link to="/distinguish">听歌识曲</router-link>

            <router-link to="/timingbroadcast">定时播放</router-link>

            <router-link to="/ringbell">魔笛铃声</router-link>

            <router-link to="">锁屏歌词</router-link>

            <router-link to="">桌面歌词</router-link>

            <router-link to="">流量提醒</router-link>

          <router-link to="/setup">

          <router-link to="/login">

*/