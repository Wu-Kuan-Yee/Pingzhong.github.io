var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "平中",
    sex: "男",
    age: "24",
    /*phone: "PPPPPP",*/
    email: "wu_gy@ustc.edu.cn",
    address: "现居安徽省合肥市",
    /*qq: "QQQQQQQ",*/
    log: "Sleepy guy",
    /*excpect_work: "学物理的",*/


    /*在这里配置首页的座右铭集合*/
    motto: [
        /*"明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"*/
        "欢迎欢迎！",
        "恭喜发财！",
        "身体健康！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "你好，我是平中，在合肥某技校读书。<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我是平中，性别男，在合肥某技校读书。</p>" +
        "<p>学物理的。</p>" +
        "<p>爱好睡觉。</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Quantum Mechanics", 97, "red"],
        ["General Relativity", 92, "blue"],
        ["Quantum Field Theory", 93, "#1abc9c"],
        ["Magnetic Confinement Fusion Physics", 95, "rgba(0,0,0)"],
        ["Plasma Diagnostics", 98, "yellow"],
        ["Statistical Mechanics", 94, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>熟悉睡眠养生技巧。</li>" +
        "     <li>熟悉物理学某些分支。</li>" +
        "     <li>熟悉冬日防静电措施。</li>" +
        "     <li>熟悉撸猫手法。</li>" +
        "     <li>熟悉抓鸡身法。</li>" +
        "     <li>熟悉枪械制作。</li>" +
        "     <li>熟悉炒某些南方菜。</li>" +
        "     <li>熟悉做逼格较高之幻灯片。</li>" +
        "     <li>熟悉各类泳姿。</li>" +
        "     <li>熟悉中短途骑行。</li>" +
        "     <li>熟悉干饭。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/bokezhuye.png", "https://wu-kuan-yee.github.io/homepage/", "个人博客", "这里记录了我的数学物理计算机学习笔记<br>持续更新"],
        ["./images/githubzhuye.png", "https://github.com/Wu-Kuan-Yee", "github主页", "欢迎访问<br>2021/7/23"],
        ["./images/ustcgitzhuye.png", "https://git.lug.ustc.edu.cn/WPZ", "学校git主页", "欢迎访问"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2018/9/1 — 2022/6/30", "<br>长沙某师专学生",
            "<p><strong>长沙某师专</strong></p>" +
            "<p>也是学物理的。</p>" +
            "<p>学习效果差强人意。</p>"
        ],

        ["2022/9/1 — 2027/6/30", "<br>合肥某技校学生",
            "<p><strong>合肥某技校</strong></p>" +
            "<p>还在学物理。</p>" +
            "<p>学习效果依旧差强人意。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2019-05-28", "创造连续睡眠时长11小时之个人纪录。","微睡。"],
        ["2020-01-24", "创造连续睡眠时长13小时之个人纪录。","小睡。"],
        ["2022-11-15", "创造连续睡眠时长18小时之个人纪录。","中睡。"],
        ["2023-7-12", "创造连续睡眠时长26小时之个人纪录。","大睡。"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        /*["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],*/
        ["./svg/github.svg", "https://github.com/Wu-Kuan-Yee", "我的GitHub主页"],
        ["./svg/博客.svg", "https://wu-kuan-yee.github.io/homepage/", "我的个人博客"],
        /*["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],*/
        ["./svg/知乎.svg", "https://www.zhihu.com/people/wei-wei-shi-da", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/Einstein.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
