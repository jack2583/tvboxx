var rule = {
    title:'兔小贝',
    host:'https://www.tuxiaobei.com',
    homeUrl:'',
    url:'/list/mip-data?typeId=fyclass&page=fypage&callback=',
    detailUrl:'/play/fyid',
    searchUrl:'/search/index?key=**',
    searchable:2,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_url:'0&2&3&4&5&6&7&8&9&10&11&24&25&26&28&29&31',
    class_name:'兔小贝&儿歌&故事&国学&古诗&三字经&弟子规&千字文&十万个为什么&英语&数学&折纸&启蒙&公益广告&安全教育&动物奇缘&神奇大自然',
    //0全部&2儿歌&3故事&4国学&5古诗&6三字经&7弟子规&8千字文&9十万个为什么&10英语&11数学24折纸&25启蒙&26、27公益广告&28安全教育&29动物奇缘&31神奇大自然&33杂
    //class_name:'#page-viewport&&ul&&li;.text&&Text;a&&href;/(.*)',
    cate_exclude:'应用',
    推荐:'.pic-list.list-box;.items;.text&&Text;mip-img&&src;.all&&Text;a&&href',
    double:true,
    limit:19,
    play_parse:true,
    lazy:'js:fetch_params.headers["user-agent"] = IOS_UA;let html=fetch(input,fetch_params);let src = jsp.pdfh(html,"body&&#videoWrap&&video-src");input=src;',
    // 一级:'json:data.items;name;image;collect_num;category_id+video_id',
    一级:'json:data.items;name;image;duration_string;video_id',
    二级:'*',
    搜索:'.list-con&&.items;.text&&Text;mip-img&&src;.time&&Text;a&&href',
}