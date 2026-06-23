export const resultOrder = [
  "silent",
  "shield",
  "salary",
  "meeting",
  "fish",
  "stable",
  "boundary",
  "resign"
];

export const results = {
  silent: {
    name: "职场静音人",
    desc: "你不是没看到消息，只是在给灵魂争取一点加载时间。你擅长把“马上回”修炼成一种低风险生存艺术。",
    tags: ["已读缓冲", "低电量在线", "先活着"],
    color: "#7aa9c6",
    accent: "#ffd66b"
  },
  shield: {
    name: "背锅预警员",
    desc: "你的职场雷达比闹钟还灵。别人还在热血推进，你已经在截图、留痕、同步范围，主打一个锅来盾挡。",
    tags: ["截图护身", "锅来盾挡", "证据感"],
    color: "#f5a7a1",
    accent: "#fff0a8"
  },
  salary: {
    name: "工位续命师",
    desc: "你对工作没有失去热情，只是清楚热情要按工资发放。今天能坐在工位上，已经是对薪资体系的尊重。",
    tags: ["工资冷静器", "拒绝上头", "续命上班"],
    color: "#92b77b",
    accent: "#ffd66b"
  },
  meeting: {
    name: "会议出窍者",
    desc: "人在会议，魂在远方。你能精准捕捉“会后同步”和“再对一下”，并在废话文学里保持表面点头。",
    tags: ["人在会中", "魂已离席", "点头大师"],
    color: "#b8a7d9",
    accent: "#fff0a8"
  },
  fish: {
    name: "摸鱼战略家",
    desc: "你的摸鱼不是偷懒，是能量管理。你知道什么时候该冲，什么时候该静音，什么时候该假装认真看表格。",
    tags: ["合理省电", "带薪呼吸", "节奏大师"],
    color: "#c7b299",
    accent: "#92b77b"
  },
  stable: {
    name: "情绪打工皇帝",
    desc: "你看起来稳定得像公司承重墙，其实内心弹幕已经刷到看不清。好消息是，你还能微笑着说收到。",
    tags: ["表面稳定", "内心弹幕", "收到文学"],
    color: "#88c9b7",
    accent: "#ffd66b"
  },
  boundary: {
    name: "边界感保安",
    desc: "你不是难沟通，你只是终于学会保护自己。你的原则是：需求可以提，范围要讲，锅别乱放。",
    tags: ["边界清醒", "范围管理", "拒绝越界"],
    color: "#e7b25c",
    accent: "#b8d8f0"
  },
  resign: {
    name: "离职预备役",
    desc: "嘴上说收到，心里在更新简历。你还没走，只是精神上已经提前下班，并给未来留了个窗口。",
    tags: ["精神离职", "简历预热", "再忍一下"],
    color: "#8da0a8",
    accent: "#ffd66b"
  }
};

export const questionBank = [
  {
    title: "领导在群里突然 @ 你：“这个进度怎么样了？”你第一反应是？",
    options: [
      { text: "先别急，我脑子还在开机", type: "silent" },
      { text: "先翻聊天记录，确认锅从哪里来", type: "shield" },
      { text: "这点工资支撑不了这么突然的惊吓", type: "salary" },
      { text: "表面回复收到，内心已经打开招聘软件", type: "resign" }
    ]
  },
  {
    title: "有人说“这个你简单弄一下”，你自动翻译成？",
    options: [
      { text: "简单等于没有边界，危险", type: "boundary" },
      { text: "简单等于今天下班前要", type: "shield" },
      { text: "简单等于不加钱但加活", type: "salary" },
      { text: "简单等于我先接杯水冷静一下", type: "fish" }
    ]
  },
  {
    title: "周一早会开始前 3 分钟，你的状态是？",
    options: [
      { text: "人在椅子上，魂还在被窝里", type: "meeting" },
      { text: "把摄像头关掉，给表情留条活路", type: "silent" },
      { text: "准备点头，但不准备参与", type: "stable" },
      { text: "开始计算本周还剩多久结束", type: "resign" }
    ]
  },
  {
    title: "同事说“帮我看一下”，你最怕？",
    options: [
      { text: "看着看着变成我负责", type: "shield" },
      { text: "他把“帮忙”理解成“接盘”", type: "boundary" },
      { text: "我刚摸到鱼，就被抓回岸上", type: "fish" },
      { text: "我脑子还没加载完，别递新任务", type: "silent" }
    ]
  },
  {
    title: "下班前 10 分钟来了新需求，你会？",
    options: [
      { text: "先确认需求范围，不然明天全是坑", type: "boundary" },
      { text: "截图保存，明天再议", type: "shield" },
      { text: "灵魂已经打卡离场", type: "resign" },
      { text: "打开工资单，尝试自我安慰", type: "salary" }
    ]
  },
  {
    title: "会议里有人说“我们拉齐一下认知”，你通常？",
    options: [
      { text: "听到第 3 分钟开始灵魂漂移", type: "meeting" },
      { text: "记录谁说了什么，防止会后变形", type: "shield" },
      { text: "点头，微笑，保持职场表情包", type: "stable" },
      { text: "思考这段时间算不算工伤", type: "salary" }
    ]
  },
  {
    title: "你最受不了哪种工作消息？",
    options: [
      { text: "“在吗”后面跟着一整座山", type: "silent" },
      { text: "“不急”但今天必须要", type: "stable" },
      { text: "“你顺手”但顺手顺到天黑", type: "boundary" },
      { text: "“之前不是你负责的吗”", type: "shield" }
    ]
  },
  {
    title: "绩效自评要写“本季度亮点”，你会？",
    options: [
      { text: "把活着写成组织韧性", type: "stable" },
      { text: "把救火写成风险响应", type: "shield" },
      { text: "把没崩溃写成稳定交付", type: "salary" },
      { text: "写完更想离职了", type: "resign" }
    ]
  },
  {
    title: "老板说“年轻人要多承担”，你脑内弹幕是？",
    options: [
      { text: "工资能不能也年轻一点，涨得快点", type: "salary" },
      { text: "承担可以，边界也要承担清楚", type: "boundary" },
      { text: "我先静音 5 秒，防止说真话", type: "silent" },
      { text: "收到，已加入离职理由合集", type: "resign" }
    ]
  },
  {
    title: "群里突然安静 10 分钟，你觉得？",
    options: [
      { text: "太好了，世界终于正常了", type: "silent" },
      { text: "适合战略性处理低优先级摸鱼", type: "fish" },
      { text: "不对劲，可能有锅正在形成", type: "shield" },
      { text: "我珍惜每一秒没有通知的空气", type: "stable" }
    ]
  },
  {
    title: "你对“会后同步一下”的真实理解是？",
    options: [
      { text: "会议没有结束，只是换了形态", type: "meeting" },
      { text: "责任还没分清，先别散", type: "shield" },
      { text: "下班时间又少了一块", type: "salary" },
      { text: "我的精神已经不同步了", type: "resign" }
    ]
  },
  {
    title: "突然被拉进一个新群，你第一件事是？",
    options: [
      { text: "先看群名判断危险等级", type: "shield" },
      { text: "默默免打扰，保护自己", type: "silent" },
      { text: "观察有没有我的职责边界", type: "boundary" },
      { text: "假装没看见，给人生留白", type: "fish" }
    ]
  },
  {
    title: "别人问你“这个需求能不能今天出？”你会？",
    options: [
      { text: "先问今天指的是几点的今天", type: "boundary" },
      { text: "能不能先确认优先级", type: "shield" },
      { text: "能，但我的灵魂会收费", type: "salary" },
      { text: "先沉默，避免本能答应", type: "silent" }
    ]
  },
  {
    title: "下午 3 点，你的工位续命来源是？",
    options: [
      { text: "咖啡和工资到账幻想", type: "salary" },
      { text: "假装认真看文档的安静时间", type: "fish" },
      { text: "下班倒计时", type: "resign" },
      { text: "把情绪压缩成一个“好的”", type: "stable" }
    ]
  },
  {
    title: "同事甩来一句“这个之前不是你弄的吗？”你会？",
    options: [
      { text: "立刻翻记录，证据先行", type: "shield" },
      { text: "先定义“之前”和“弄”的范围", type: "boundary" },
      { text: "表面平静，内心开庭", type: "stable" },
      { text: "这句话让我又靠近离职一点", type: "resign" }
    ]
  },
  {
    title: "你最理想的工作沟通方式是？",
    options: [
      { text: "把背景、目标、截止时间一次说清", type: "boundary" },
      { text: "能发文档就别开会", type: "meeting" },
      { text: "不要“在吗”，直接说事", type: "silent" },
      { text: "重要的都留痕，不靠回忆", type: "shield" }
    ]
  },
  {
    title: "午休刚闭眼，消息提示音响了，你会？",
    options: [
      { text: "身体没动，心已经骂完了", type: "stable" },
      { text: "看一眼，如果不急就晚点活", type: "fish" },
      { text: "装作没醒，保护午休主权", type: "boundary" },
      { text: "想起这份工作没有午睡补贴", type: "salary" }
    ]
  },
  {
    title: "你看到“明天给个方案”时，最先想到？",
    options: [
      { text: "今晚又要和方案谈恋爱了", type: "salary" },
      { text: "方案范围、目标、参考有没有", type: "boundary" },
      { text: "先找之前的版本救命", type: "fish" },
      { text: "这个时间点很适合更新简历", type: "resign" }
    ]
  },
  {
    title: "你在会议里的高频动作是？",
    options: [
      { text: "点头，但没完全在线", type: "meeting" },
      { text: "记关键词，防止会后甩锅", type: "shield" },
      { text: "看起来稳定，其实在内耗", type: "stable" },
      { text: "计算这场会的人力成本", type: "salary" }
    ]
  },
  {
    title: "你对周报的态度是？",
    options: [
      { text: "把普通工作写出史诗感", type: "stable" },
      { text: "能证明我干了，但别证明我太能干", type: "fish" },
      { text: "写清楚谁提的、谁定的、谁改的", type: "shield" },
      { text: "每写一次都更想自由职业", type: "resign" }
    ]
  },
  {
    title: "老板说“这个方向不错，再发散一下”，你会？",
    options: [
      { text: "发散可以，截止时间也发散吗", type: "salary" },
      { text: "先问发散到什么程度算结束", type: "boundary" },
      { text: "表面兴奋，内心沉默", type: "silent" },
      { text: "会议出窍，灵感下线", type: "meeting" }
    ]
  },
  {
    title: "你最怕哪种临时任务？",
    options: [
      { text: "没有负责人但最后大家看我", type: "shield" },
      { text: "没有边界但要求很高", type: "boundary" },
      { text: "没有加班费但很着急", type: "salary" },
      { text: "没有意义但要开会", type: "meeting" }
    ]
  },
  {
    title: "收到“辛苦一下”时，你真实感受是？",
    options: [
      { text: "辛苦可以，补偿在哪", type: "salary" },
      { text: "辛苦之前，先说清楚范围", type: "boundary" },
      { text: "我微笑，但我不是真的没事", type: "stable" },
      { text: "这四个字很适合写进离职日记", type: "resign" }
    ]
  },
  {
    title: "你的摸鱼哲学更接近？",
    options: [
      { text: "休息是为了可持续打工", type: "fish" },
      { text: "消息少回一秒，寿命多一秒", type: "silent" },
      { text: "把精力留给真正重要的锅", type: "shield" },
      { text: "只要不崩溃，就是高绩效", type: "stable" }
    ]
  },
  {
    title: "看到“今晚辛苦大家看一下”，你会？",
    options: [
      { text: "大家是谁？我在里面吗？", type: "boundary" },
      { text: "我先截个图，确认这是今晚", type: "shield" },
      { text: "这不是看一下，这是吞掉夜晚", type: "salary" },
      { text: "心里默默离职 1 次", type: "resign" }
    ]
  },
  {
    title: "你最想给公司群加一个什么功能？",
    options: [
      { text: "消息按危险等级自动排序", type: "shield" },
      { text: "超过下班时间自动变灰", type: "boundary" },
      { text: "废话自动折叠", type: "meeting" },
      { text: "已读不回免罪声明", type: "silent" }
    ]
  },
  {
    title: "面对“你再优化一下”，你第一反应是？",
    options: [
      { text: "优化目标是什么，别让我猜", type: "boundary" },
      { text: "第几版了，我需要版本树", type: "shield" },
      { text: "优化的是作品，消耗的是我", type: "salary" },
      { text: "我先战略性沉默 3 秒", type: "silent" }
    ]
  },
  {
    title: "你如何评价自己的职场情绪管理？",
    options: [
      { text: "表面像湖，内心像弹幕", type: "stable" },
      { text: "能不回就不回，能晚回就晚回", type: "silent" },
      { text: "靠工资、咖啡和周末续命", type: "salary" },
      { text: "已经学会把期待降到合理范围", type: "resign" }
    ]
  },
  {
    title: "如果需求方说“我感觉不太对”，你会？",
    options: [
      { text: "感觉不能验收，标准拿来", type: "boundary" },
      { text: "先记录这句，为后续留证", type: "shield" },
      { text: "开始怀疑人生与工资的关系", type: "salary" },
      { text: "微笑，深呼吸，重新做人", type: "stable" }
    ]
  },
  {
    title: "你最像哪种工位生物？",
    options: [
      { text: "低电量但还亮着的台灯", type: "silent" },
      { text: "随时准备截图的打印机", type: "shield" },
      { text: "靠咖啡续航的移动电源", type: "salary" },
      { text: "假装忙碌的浏览器标签页", type: "fish" }
    ]
  },
  {
    title: "你对“开放式办公”的最大感受是？",
    options: [
      { text: "开放的是空间，关闭的是灵魂", type: "silent" },
      { text: "摸鱼难度提升，需要策略", type: "fish" },
      { text: "任何讨论都可能变成我的活", type: "shield" },
      { text: "边界感在空气里蒸发", type: "boundary" }
    ]
  },
  {
    title: "遇到跨部门协作，你最先做什么？",
    options: [
      { text: "确认谁拍板，谁负责，谁验收", type: "shield" },
      { text: "先把边界写在纸面上", type: "boundary" },
      { text: "准备好会议出窍但保持礼貌", type: "meeting" },
      { text: "默默给自己的耐心充电", type: "stable" }
    ]
  },
  {
    title: "如果今天可以跳过一件事，你会跳过？",
    options: [
      { text: "没有结论的会", type: "meeting" },
      { text: "临时加塞的活", type: "boundary" },
      { text: "没有上下文的消息", type: "silent" },
      { text: "所有和工资不匹配的努力", type: "salary" }
    ]
  },
  {
    title: "你最常用的职场保护色是？",
    options: [
      { text: "“收到，我确认一下”", type: "shield" },
      { text: "“这个范围我们先对齐”", type: "boundary" },
      { text: "“好的”后面省略一万字", type: "stable" },
      { text: "“我看下”然后先喘口气", type: "fish" }
    ]
  },
  {
    title: "如果工作群有天气预报，你今天大概率是？",
    options: [
      { text: "局部锅雨，请携带截图", type: "shield" },
      { text: "会议大雾，能见度极低", type: "meeting" },
      { text: "情绪高压，表面晴朗", type: "stable" },
      { text: "离职指数缓慢升温", type: "resign" }
    ]
  },
  {
    title: "你最想对职场新人说什么？",
    options: [
      { text: "别急着证明自己很能扛", type: "boundary" },
      { text: "重要事情一定留痕", type: "shield" },
      { text: "工资是情绪稳定的重要来源", type: "salary" },
      { text: "学会休息，不然会被工作吃掉", type: "fish" }
    ]
  }
];
