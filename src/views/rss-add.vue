<template>
  <div class="rss-add">
    <el-card :body-style="{'padding': 0}" shadow="never">
      <div class="header">
        <div class="title">
          找到最佳信息源
        </div>
        <div class="sub-title">
          您可以在这里查找网站摘要、B站用户、微博用户
        </div>
      </div>
      <el-menu
          :default-active="activeName"
          mode="horizontal"
          @select="(index) => activeName = index"
      >
        <el-menu-item index="rss">
          <el-icon>
            <svg t="1699092016746" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="6455" width="200" height="200">
              <path
                  d="M160.768 702.464q33.792 0 62.976 12.8t50.688 34.816 34.304 51.2 12.8 61.952q0 33.792-12.8 62.976t-34.304 50.688-50.688 34.304-62.976 12.8q-32.768 0-61.952-12.8t-51.2-34.304-34.816-50.688-12.8-62.976q0-32.768 12.8-61.952t34.816-51.2 51.2-34.816 61.952-12.8zM66.56 377.856q119.808 0 225.792 45.568t184.32 124.416 123.904 184.832 45.568 225.792l-89.088 0q-44.032 0-83.968-1.024 0-83.968-31.744-158.208t-87.04-129.536-129.536-87.04-158.208-31.744l0-173.056zM67.584 68.608q122.88 0 236.544 31.744t212.48 89.6 179.712 139.264 138.752 180.224 89.6 211.968 31.744 236.032l-59.392 0-36.864 0q-16.384 0-30.208-0.512t-32.256-0.512q0-100.352-26.112-194.048t-73.728-174.592-114.176-147.456-147.456-113.664-174.08-73.216-193.536-26.112l0-32.768q0-24.576-0.512-50.688t-0.512-47.616l0-27.648z"
                  p-id="6456"></path>
            </svg>
          </el-icon>
        </el-menu-item>
        <el-menu-item index="bilibli">
          <el-icon>
            <svg t="1699091897021" class="icon" viewBox="0 0 1074 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="3214" width="200" height="200">
              <path
                  d="M903.643237 150.431534H718.623684l83.319882-83.319881c0.109812-0.109812 0.233351-0.205898 0.329436-0.31571a39.120538 39.120538 0 0 0-55.317813-55.317813l-0.315709 0.329437-138.637695 138.637694h-129.537022l-138.637694-138.637694-0.315709-0.329437A39.120538 39.120538 0 0 0 284.138641 66.782217l0.329436 0.315709 83.319882 83.319882H170.387099A170.373372 170.373372 0 0 0 0 320.818633l1.37265 471.052451A170.400825 170.400825 0 0 0 171.759749 962.23073h44.954302a61.76927 61.76927 0 0 0 123.428728 0h409.118463a61.76927 61.76927 0 0 0 123.538539 0h30.884635a170.400825 170.400825 0 0 0 170.34592-170.359646V320.818633a170.387099 170.387099 0 0 0-170.387099-170.387099z m45.421003 629.634757a70.16989 70.16989 0 0 1-70.169891 70.183616H201.8757a70.183617 70.183617 0 0 1-70.183617-70.183616V330.180109a70.16989 70.16989 0 0 1 70.183617-70.16989h677.018649a70.156164 70.156164 0 0 1 70.169891 70.16989z"
                  fill="#020202" p-id="3215"></path>
              <path
                  d="M650.416684 502.049671l226.487322 38.434212 16.814968-91.267528-228.903187-45.475909-14.399103 98.309225zM420.195752 404.193421l-228.916913 45.475909 16.828694 91.267528 226.487322-38.434213-14.399103-98.309224zM608.537119 685.12006c-16.787515 2.662942-54.755026-30.102224-64.583203-50.719434a1.907984 1.907984 0 0 0-1.743266-1.125573h-0.219624a1.949164 1.949164 0 0 0-1.756993 1.125573c-9.828177 20.589757-47.781962 53.368649-64.583203 50.719434C456.859246 682.210041 441.073765 649.26643 441.073765 649.26643l-43.458112 28.139334s10.981204 20.081876 19.930884 32.490636c12.889188 17.954268 38.832281 30.761096 69.373753 30.074771 22.26439-0.494154 43.924814-17.693464 51.899913-24.844973a3.912054 3.912054 0 0 1 2.621763-0.988308h1.37265a3.870874 3.870874 0 0 1 2.55313 0.974582c8.235903 7.261321 29.800241 24.364545 51.886186 24.858699 30.541472 0.686325 56.470839-12.13423 69.373754-30.088497 8.908501-12.353854 19.930884-32.490636 19.930884-32.490636L643.114184 649.26643s-15.812933 32.943611-34.577065 35.85363z"
                  fill="#020202" p-id="3216"></path>
            </svg>
          </el-icon>
        </el-menu-item>
        <el-menu-item index="weibo">
          <el-icon>
            <svg t="1699091958789" class="icon" viewBox="0 0 1138 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4366" width="200" height="200">
              <path
                  d="M914.432 518.144q27.648 21.504 38.912 51.712t9.216 62.976-14.336 65.536-31.744 59.392q-34.816 48.128-78.848 81.92t-91.136 56.32-94.72 35.328-89.6 18.944-75.264 7.68-51.712 1.536-49.152-2.56-68.096-10.24-78.336-21.504-79.872-36.352-74.24-55.296-59.904-78.848q-16.384-29.696-22.016-63.488t-5.632-86.016q0-22.528 7.68-51.2t27.136-63.488 53.248-75.776 86.016-90.112q51.2-48.128 105.984-85.504t117.248-57.856q28.672-10.24 63.488-11.264t57.344 11.264q10.24 11.264 19.456 23.04t12.288 29.184q3.072 14.336 0.512 27.648t-5.632 26.624-5.12 25.6 2.048 22.528q17.408 2.048 33.792-1.536t31.744-9.216 31.232-11.776 33.28-9.216q27.648-5.12 54.784-4.608t49.152 7.68 36.352 22.016 17.408 38.4q2.048 14.336-2.048 26.624t-8.704 23.04-7.168 22.016 1.536 23.552q3.072 7.168 14.848 13.312t27.136 12.288 32.256 13.312 29.184 16.384zM656.384 836.608q26.624-16.384 53.76-45.056t44.032-64 18.944-75.776-20.48-81.408q-19.456-33.792-47.616-57.344t-62.976-37.376-74.24-19.968-80.384-6.144q-78.848 0-139.776 16.384t-105.472 43.008-72.192 60.416-38.912 68.608q-11.264 33.792-6.656 67.072t20.992 62.976 42.496 53.248 57.856 37.888q58.368 25.6 119.296 32.256t116.224 0.512 100.864-21.504 74.24-33.792zM522.24 513.024q20.48 8.192 38.912 18.432t32.768 27.648q10.24 12.288 17.92 30.72t10.752 39.424 1.536 42.496-9.728 38.912q-8.192 18.432-19.968 37.376t-28.672 35.328-40.448 29.184-57.344 18.944q-61.44 11.264-117.76-11.264t-88.064-74.752q-12.288-39.936-13.312-70.656t16.384-66.56q13.312-27.648 40.448-51.712t62.464-38.912 75.264-17.408 78.848 12.8zM359.424 764.928q37.888 3.072 57.856-18.432t21.504-48.128-15.36-47.616-52.736-16.896q-27.648 3.072-43.008 23.552t-17.408 43.52 9.728 42.496 39.424 21.504zM778.24 6.144q74.752 0 139.776 19.968t113.664 57.856 76.288 92.16 27.648 122.88q0 33.792-16.384 50.688t-35.328 17.408-35.328-14.336-16.384-45.568q0-40.96-22.528-77.824t-59.392-64.512-84.48-43.52-96.768-15.872q-31.744 0-47.104-15.36t-14.336-34.304 18.944-34.304 51.712-15.36zM778.24 169.984q95.232 0 144.384 48.64t49.152 146.944q0 30.72-10.24 43.52t-22.528 11.264-22.528-14.848-10.24-35.84q0-60.416-34.816-96.256t-93.184-35.84q-19.456 0-28.672-10.752t-9.216-23.04 9.728-23.04 28.16-10.752z"
                  p-id="4367"></path>
            </svg>
          </el-icon>
        </el-menu-item>
        <!--        <el-menu-item index="zhihu">知乎</el-menu-item>-->
      </el-menu>
    </el-card>
    <el-card style="margin-top: 10px;" :body-style="{'padding': 0}" shadow="never">
      <div class="header">
        <template v-if="activeName === 'rss'" >
          <div class="title">
            RSS订阅
          </div>
          <div class="sub-title">
            发现更多订阅源 rsshub rss-source
          </div>
          <el-input
              v-model="searchWord"
              class="w-50 m-2"
              size="large"
              placeholder="请输入RSS订阅地址"
          />
        </template>
        <template v-else-if="activeName === 'bilibli'" class="header">
          <div class="title">
            订阅哔哩哔哩用户
          </div>
          <div class="sub-title">
            提示：点击用户头像会访问http://space.bilibili.com/xxx?xvsfds 其中的xxx就是用户id
          </div>
          <el-input
              v-model="searchWord"
              class="w-50 m-2"
              size="large"
              placeholder="订阅您最喜爱的用户，请输入用户id"
          ></el-input>
        </template>
        <template v-else-if="activeName === 'weibo'" class="header">
          <div class="title">
            订阅微博
          </div>
          <div class="sub-title">
            提示：@加用户id是关注用户#加关键词 PS: @7735105675 #让中国市场成为世界的市场共享的市场大家的市场#
          </div>
          <el-input
              v-model="searchWord"
              class="w-50 m-2"
              size="large"
              placeholder="订阅您最喜爱的@用户或#关键词"
          ></el-input>
        </template>
        <!--        <template v-else-if="activeName === 'zhihu'" class="header">-->
        <!--          <div class="title">-->
        <!--            订阅知乎-->
        <!--          </div>-->
        <!--          <div class="sub-title">-->
        <!--            提示：@加用户id是关注用户#加话题id是关注话题-->
        <!--          </div>-->
        <!--          <el-input-->
        <!--              v-model="searchWord"-->
        <!--              class="w-50 m-2"-->
        <!--              size="large"-->
        <!--              placeholder="订阅您最喜爱的@用户或#话题"-->
        <!--          ></el-input>-->
        <!--        </template>-->
        <el-button style="width: 100%;margin: 20px 0;" type="primary" @click="search">检索
        </el-button>
      </div>
    </el-card>

<!--    <el-card style="margin-top: 10px;" :body-style="{'padding': 0}" shadow="never">-->
<!--      <div class="header">-->
<!--        <div class="title">-->
<!--          搜索结果-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="flex flex-align-items-center" style="grid-gap: 1em; padding: 0 20px;">-->
<!--          <div class="flex flex-align-items-center">-->
<!--            <img class="icon" src="https://static.zhihu.com/heifetz/favicon.ico"-->
<!--                 style="width: 40px;height: 40px;">-->
<!--          </div>-->
<!--          <div class="flex-1 " style="overflow: hidden;">-->
<!--            <el-link class="just-line" style="width: 100%;">-->
<!--              知乎每日精选【万字干货】如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的如何从0开始设计GTA样式的-->
<!--            </el-link>-->
<!--            <div class="just-line">-->
<!--              <small style="font-size: 80%;">-->
<!--                中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。经验和见解经验和见解经验和见解-->
<!--                中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。经验和见解经验和见解经验和见解-->
<!--                中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。经验和见解经验和见解经验和见解-->
<!--                中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。经验和见解经验和见解经验和见解-->
<!--                中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。经验和见解经验和见解经验和见解-->
<!--              </small>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="">-->
<!--            <el-button>订阅</el-button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <el-row style="margin: 10px; overflow: auto;flex-wrap: nowrap;">-->
<!--          <el-col v-for="i in 5" :span="6" :sm="8" :xs="12">-->
<!--            <el-card style="margin: 10px;" :body-style="{'padding': 5}" shadow="never">-->
<!--              <div style="display: flex; flex-direction: column; grid-gap: .5em;">-->
<!--                <div class="just-line">【万字干货】如何从0开始设计GTA样式的【万字干货】如何从0开始设计GTA样式的-->
<!--                </div>-->
<!--                <div class="just-line">-->
<!--                  <small-->
<!--                      style="font-size: 80%;">中文互联网最大的知识平台，帮助人们便捷地分享彼此的知识、经验和见解。经验和见解经验和见解</small>-->
<!--                </div>-->
<!--                <div class="flex flex-justify-content-between">-->
<!--                  <div>-->
<!--                    <el-tag>hhh</el-tag>-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <small style="font-size: 80%;">3天前</small>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </el-card>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--    </el-card>-->

  </div>
</template>

<script >
import {defineComponent} from "vue";
import Rss from "@/utils/Rss";
import RssSearch from "@/utils/RssSearch.js";
import RssParseUtil from "@/utils/RssParseUtil";
export default {
  name: 'rss-add',
  data() {
    return {
      activeName: 'rss',
      searchWord: null,
      searchSites: []
    };
  },
  computed: {},
  mounted() {

  },
  methods: {
    // async search(){
    //   let rsshubDomain = 'https://rsshub.app';
    //   RssSearch.searchRss(this.searchWorld).then(async (res) => {
    //     if (!res) return;
    //     console.log('search', res);
    //     let rssSites = [];
    //     let list = await Promise.all(res.map((item) => {
    //       let rssUrl = rsshubDomain + item.path;
    //       console.log('rssUrl', rssUrl);
    //       return RssParseUtil.parse(rssUrl).then((rss) => {
    //         rssSites.push(rss);
    //       })
    //     }))
    //     console.log('search', list);
    //   })
    // },
    async search(){
      if (!this.searchWord) {
        this.$message.error("请输入搜索内容");
        return;
      }
      let url = this.searchWord;
      if (this.activeName === 'bilibli'){
        url = `https://rsshub.app/bilibili/user/dynamic/` + this.searchWord;
      } else if (this.activeName === 'weibo') {
        let word = this.searchWord.trim();
        // 判断 this.searchWorld 是否是纯数字
        if (word.match(/^[0-9]*$/) || word.startsWith('@')) {
          if (word.startsWith('@')) {
            url = `https://rsshub.app/weibo/user/` + word.substring(1);
          } else {
            url = `https://rsshub.app/weibo/user/` + word;
          }
        } else {
          if (word.startsWith('#')) word = word.substring(1);
          if (word.startsWith('#')) word = word.substring(0, word.length - 1);
          url = `https://rsshub.app/weibo/keyword/` + word;
        }
      }

      this.subscribe(url);
    },
    async subscribe(url) {
      let loader = this.$loading({
        lock: true,
        text: '正在订阅中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let rss;
      try {
        rss = await Rss.subscribe(url);
      } catch (err) {
        loader.close();
        this.$message.error("订阅检测失败：" + err.message);
        console.error("订阅地址不正确",err)
        return;
      }
      loader.close();

      this.$message.success("订阅成功");

      this.$router.push({path: '/'});
    },
  },
};
</script>

<style lang="stylus">
.rss-add {
  .header{
    padding: 20px 20px 0 20px;
    .el-tabs__header{
      margin: 0;
    }
    .title{
      font-size: 1.25rem;
      font-weight: 500;
      hyphens: auto;
      letter-spacing: .0125em;
      min-width: 0;
      overflow-wrap: normal;
      overflow: hidden;
      padding: 0.5rem 0rem;
      text-overflow: ellipsis;
      text-transform: none;
      white-space: nowrap;
      word-break: normal;
      word-wrap: break-word;
    }
    .sub-title{
      font-size: .875rem;
      font-weight: 400;
      letter-spacing: .0178571429em;
      overflow: hidden;
      padding: 0.5rem 0rem;
      text-overflow: ellipsis;
      text-transform: none;
      white-space: nowrap;
    }
  }

  .just-line {
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;

    .el-link__inner {
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: none;
      white-space: nowrap;
    }
  }
}
</style>
