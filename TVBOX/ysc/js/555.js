{
    "规则名": "555电影",
    "规则作者": "香雅情",
    "请求头参数": "MOBILE_UA",
    "网页编码格式": "UTF-8",
    "图片是否需要代理": "否",
    "是否开启获取首页数据": "否",
    "首页推荐链接": "https://www.555yy2.com",
    "首页列表数组规则": "body&&.module-items:has(.module-item-pic)",
    "首页片单列表数组规则": ".module-item",
    "首页片单是否Jsoup写法": "1",
    "分类起始页码": "1",
    "分类链接": "https://www.555yy2.com/vodshow/{cateId}-{catePg}.html",
    "分类名称": "电影&电视剧&综艺&福利&动漫",
    "分类名称替换词": "1&2&3&124&4",
    //"筛选数据": {},
    "筛选数据": "ext",
    //{cateId}
    "筛选子分类名称": "空||热门连续剧&港台剧&日韩剧&欧美剧",
    "筛选子分类替换词": "空||13&15&44&45",
    //{class}
    "筛选类型名称": "Netflix&仙侠&剧情&科幻&动作&喜剧&爱情&冒险&儿童&歌舞&音乐&奇幻&动画&恐怖&惊悚&丧尸&战争&传记&纪录&犯罪&悬疑&西部&灾难&古装&武侠&家庭&短片&校园&文艺&运动&青春&同性&励志&人性&美食&女性&治愈&历史&真人秀&脱口秀||Netflix&剧情&丧尸&仙侠&穿越&惊悚&恐怖&言情&科幻&动作&喜剧&爱情&偶像&都市&军旅&谍战&罪案&宫廷&冒险&儿童&歌舞&音乐&奇幻&动画&战争&传记&记录&犯罪&悬疑&西部&灾难&古装&武侠&家庭&短片&校园&文艺&运动&青春&同性&励志&人性&美食&女性&治愈&历史&真人秀&脱口秀||YouTube&脱口秀&真人秀&选秀&八卦&访谈&情感&生活&晚会&搞笑&音乐&时尚&游戏&少儿&体育&纪实&科教&曲艺&歌舞&财经&汽车&播报&其他||Netflix&热血&科幻&美少女&魔幻&经典&励志&少儿&冒险&搞笑&推理&恋爱&治愈&幻想&校园&动物&机战&亲子&儿歌&运动&悬疑&怪物&战争&益智&青春&童话&竞技&动作&社会&友情&真人版&电影版&OVA版&TV版&新番动画&完结动画",
    "筛选类型替换词": "*",
    //{area}
    "筛选地区名称": "大陆&香港&台湾&美国&日本&韩国&英国&法国&德国&印度&泰国&丹麦&瑞典&巴西&加拿大&俄罗斯&意大利&比利时&爱尔兰&西班牙&澳大利亚||大陆&香港&韩国&美国&日本&法国&英国&德国&台湾&泰国&印度&其他||大陆&韩国&香港&台湾&美国&其它||大陆&日本&欧美&其他",
    "筛选地区替换词": "*",
    //{year}
    //"筛选年份名称": "2022&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&更早",
    //"筛选年份替换词": "*",
    //{lang}
    "筛选语言名称": "英语&法语&国语&粤语&日语&韩语&泰语&德语&俄语&闽南语&丹麦语&波兰语&瑞典语&印地语&挪威语&意大利语&西班牙语||空||国语&英语&粤语&闽南语&韩语&日语&其它||国语&英语&粤语&闽南语&韩语&日语&其它",
    "筛选语言替换词": "*",
    //{by}
    //"筛选排序名称": "时间&人气&评分",
    //"筛选排序替换词": "time&hits&score",
    "分类截取模式": "1",
    "分类列表数组规则": ".module-items&&.module-item",
    "分类片单是否Jsoup写法": "是",
    "分类片单标题": ".module-poster-item-title&&Text",
    "分类片单链接": "a&&href",
    "分类片单图片": ".lazyload&&data-original",
    "分类片单副标题": ".module-item-note&&Text",
    "分类片单链接加前缀": "https://www.555yy2.com",
    "分类片单链接加后缀": "",
    "搜索请求头参数": "User-Agent$MOBILE_UA#Cookie$searchneed=ok",
    "搜索链接": "https://www.555yy2.com/vodsearch/{wd}----------1---.html",
    "POST请求数据": "",
    "搜索截取模式": "1",
    "搜索列表数组规则": ".module-items&&.module-item",
    "搜索片单是否Jsoup写法": "是",
    "搜索片单图片": ".lazyload&&data-original",
    "搜索片单标题": ".module-card-item-title&&Text",
    "搜索片单链接": "a&&href",
    "搜索片单副标题": ".module-item-note&&Text",
    "搜索片单链接加前缀": "https://www.555yy2.com",
    "搜索片单链接加后缀": "",
    "链接是否直接播放": "否",
    "直接播放链接加前缀": "",
    "直接播放链接加后缀": "",
    "直接播放直链视频请求头": "",
    "详情是否Jsoup写法": "是",
    "类型详情": "",
    "年代详情": ".module-info-tag-link&&Text",
    "地区详情": ".module-info-tag-link,1&&Text",
    "演员详情": "body&&.module-info-item:contains(主演：)&&Text!主演：",
    "简介详情": ".show-desc&&Text",
    "线路列表数组规则": ".module-tab-items-box&&.module-tab-item",
    "线路标题": "Text",
    "播放列表数组规则": "body&&.module-play-list-content",
    "选集列表数组规则": "a",
    "选集标题链接是否Jsoup写法": "是",
    "选集标题": "a&&Text",
    "选集链接": "a&&href",
    "是否反转选集序列": "否",
    "选集链接加前缀": "https://www.555yy2.com",
    "选集链接加后缀": "",
    "分析MacPlayer": "2",
    "是否开启手动嗅探": "0",
    "手动嗅探视频链接关键词": ".mp4#.m3u8#.flv#video/tos",
    "手动嗅探视频链接过滤词": ".html#=http"
}