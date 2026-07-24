const app = document.querySelector("#app");

const img = {
  logo: "./assets/brand-logo.png",
  avatar: "./assets/avatar.jpg",
  goose: "./assets/device-goose-fixed.png",
  camera: "./assets/device-camera-fixed.png",
  blue: "./assets/device-blue-fixed.png",
};

const assetConfigs = {
  hardware: {
    route: "/hardware",
    pageTitle: "硬件列表",
    categoryTitle: "硬件类目",
    categoryPlaceholder: "请输入类目",
    categoryCode: "type1",
    itemTitle: "硬件",
    itemListTitle: "硬件列表",
    columns: ["硬件名称", "硬件图片", "类型", "生产厂商", "硬件型号", "状态", "机型引用次数", "操作"],
    categories: ["类目1", "测试类目", "指示灯", "USB Type-C 接口", "外壳", "测试硬件类目", "TF卡", "天线", "电源板", "按键", "太阳能板", "线材", "镜头", "灯板", "电池", "显示屏", "电机", "PIR", "水平电机", "报警灯", "垂直电机", "白光灯", "光敏", "蓝牙", "红外灯", "麦克风", "IR cut", "喇叭"],
    rows: [
      { id: "h1", name: "测试机器", type: "TEST", maker: "TEST", model: "TEST", status: "启用", refs: 0, image: img.camera },
      { id: "h2", name: "硬件2", type: "TEST", maker: "TEST", model: "TEST", status: "启用", refs: 0, image: img.blue },
      { id: "h3", name: "硬件1", type: "TEST", maker: "TEST", model: "TEST", status: "启用", refs: 0, image: img.goose },
    ],
  },
  pcba: {
    route: "/pcba",
    pageTitle: "pcba列表",
    categoryTitle: "PCBA类目",
    categoryPlaceholder: "请输入pcba",
    categoryCode: "PCBA_BABY",
    itemTitle: "PCBA",
    itemListTitle: "PCBA型号列表",
    columns: ["PCBA名称", "图片", "类型", "生产厂商", "型号", "状态", "机型引用次数", "操作"],
    categories: ["PCBA_婴儿看护", "PCBA_宠物", "电源板", "测试PCBA类目", "灯板/PCBA", "AI玩具类", "镜头板/PCBA", "背夹类", "行车类", "PCBA/主板", "定制", "MINI", "常电Wi-Fi", "常电4G", "低功耗Wi-Fi", "低功耗4G"],
    rows: [
      { id: "p1", name: "BM-410主板", type: "婴儿看护", maker: "威视达康", model: "BM-410", status: "启用", refs: 6, image: img.blue },
      { id: "p2", name: "BM-420副板", type: "婴儿看护", maker: "威视达康", model: "BM-420", status: "启用", refs: 2, image: img.goose },
    ],
  },
  electronic: {
    route: "/electronic",
    pageTitle: "元件列表",
    categoryTitle: "元件类目",
    categoryPlaceholder: "请输入元件",
    categoryCode: "SECURITY_IC",
    itemTitle: "元件",
    itemListTitle: "元件列表",
    columns: ["元件名称", "元件图片", "类型", "生产厂商", "元件型号", "状态", "机型引用次数", "操作"],
    categories: ["加密芯片", "网口变压器", "测试元件类目1", "electronic components", "咪头", "电感", "芯片IC", "电阻", "卡座", "插座", "电容", "二极管", "电池", "pir", "复位按键", "蓝色指示灯", "红外灯", "TF卡", "音频芯片", "贴片元件", "DDR", "Flash", "芯片（主控）", "传感器", "PCB", "4G模块", "图像传感器--Sensor", "4G芯片", "蓝牙芯片", "网络模组-WiFi"],
    rows: [
      { id: "e1", name: "测试", type: "ALPU_C_20E 12C接口", maker: "威视达康", model: "DS2401P+T&R", status: "启用", refs: 0, image: img.blue },
      { id: "e2", name: "DS2401P+T&R", type: "ALPU_C_20E 12C接口", maker: "威视达康", model: "DS2401P+T&R", status: "启用", refs: 4, image: img.goose },
    ],
  },
};

const machines = [
  ["m1", "23.110.200", "仅4G", "常电", "23.110.200", img.goose, "开发中"],
  ["m2", "23.230.111", "wifi + 4G", "常电", "23.230.111", img.goose, "开发中"],
  ["m3", "23.210.111.306", "wifi + 4G", "常电", "-", img.goose, "开发中"],
  ["m4", "测试机型8", "仅wifi", "常电", "99.789.24", img.camera, "开发中"],
  ["m5", "测试机型5(1)", "网线 + wifi", "低功耗", "-", img.blue, "开发中"],
  ["m6", "testtest333344444(2)", "-", "-", "-", img.camera, "开发中"],
  ["m7", "testtest333344444(1)", "-", "-", "-", img.camera, "开发中"],
  ["m8", "新流程", "wifi + 4G", "常电", "23.210.211", img.goose, "开发中"],
  ["m9", "测试机型7", "网线 + 4G", "常电", "99.789.23", img.camera, "开发中"],
  ["m10", "0.1.2", "-", "-", "-", img.blue, "开发中"],
  ["m11", "0.0.1", "-", "-", "0.0.1", img.blue, "开发中"],
  ["m12", "1.1.10", "wifi + 4G", "常电", "25.219.203", img.blue, "开发中"],
  ["m13", "23.220.221", "-", "-", "23.220.221", img.blue, "已发布"],
  ["m14", "10.12.70", "-", "-", "10.12.70", img.blue, "开发中"],
  ["m15", "23.442.209", "-", "-", "23.442.209", img.blue, "已发布"],
  ["m16", "17.4.1", "-", "-", "17.4.1", img.blue, "已停产"],
  ["m17", "120.8.53", "-", "-", "120.8.53", img.blue, "开发中"],
  ["m18", "13.1.1", "-", "-", "13.1.1", img.blue, "已发布"],
  ["m19", "5.0.1", "-", "-", "5.0.1", img.blue, "开发中"],
  ["m20", "23.102.209", "-", "-", "23.102.209", img.blue, "开发中"],
].map(([id, name, network, power, firmware, image, status]) => ({ id, name, network, power, firmware, image, status, line: "IPC", arch: "新架构", description: "-" }));

function mockFirmwareRelation(id, machineId, firmwareIdentifier, firmwareVersion, linkedAt, coveredDeviceCount = null) {
  return { id, machineId, firmwareIdentifier, firmwareVersion, linkedAt, coveredDeviceCount, source: "固件发布系统" };
}

const initialFirmwareRelations = {
  "f1-v2": [
    mockFirmwareRelation("rel-f1-v2-01", "m8", "23.210.211", "2.6.18", "2026-07-15 15:18:20", 12840),
    mockFirmwareRelation("rel-f1-v2-02", "m8", "23.210.211", "2.6.17", "2026-07-14 17:42:06", 10563),
    mockFirmwareRelation("rel-f1-v2-03", "m3", "23.210.111.306", "3.0.6", "2026-07-13 11:25:32", 4860),
    mockFirmwareRelation("rel-f1-v2-04", "m1", "23.110.200", "5.12.1", "2026-07-12 09:36:18", 7221),
    mockFirmwareRelation("rel-f1-v2-05", "m2", "23.230.111", "2.3.1", "2026-07-11 16:08:45", 3196),
  ],
  "f1-v1": [
    mockFirmwareRelation("rel-f1-v1-01", "m1", "23.110.200", "5.8.6", "2026-05-17 14:20:16", 2187),
  ],
  "f2-v1": [
    mockFirmwareRelation("rel-f2-v1-01", "m4", "99.789.24", "2.6.18", "2026-07-22 16:42:18", 16320),
    mockFirmwareRelation("rel-f2-v1-02", "m4", "99.789.24", "2.6.17", "2026-07-22 14:26:03", 14872),
    mockFirmwareRelation("rel-f2-v1-03", "m4", "99.789.24", "2.6.15", "2026-07-21 18:05:47", 9841),
    mockFirmwareRelation("rel-f2-v1-04", "m8", "23.210.211", "1.4.2", "2026-07-21 15:32:26", 8520),
    mockFirmwareRelation("rel-f2-v1-05", "m8", "23.210.211", "1.4.1", "2026-07-21 11:18:52", 7315),
    mockFirmwareRelation("rel-f2-v1-06", "m8", "23.210.211", "1.3.9", "2026-07-20 17:46:10", 5168),
    mockFirmwareRelation("rel-f2-v1-07", "m3", "23.210.111.306", "3.0.6", "2026-07-20 13:22:45", 4680),
    mockFirmwareRelation("rel-f2-v1-08", "m3", "23.210.111.306", "3.0.5", "2026-07-20 10:08:19", 3912),
    mockFirmwareRelation("rel-f2-v1-09", "m3", "23.210.111.306", "3.0.3", "2026-07-19 16:36:08", 2764),
    mockFirmwareRelation("rel-f2-v1-10", "m1", "23.110.200", "5.12.1", "2026-07-19 14:12:37", 6248),
    mockFirmwareRelation("rel-f2-v1-11", "m1", "23.110.200", "5.11.8", "2026-07-19 10:24:51", 4736),
    mockFirmwareRelation("rel-f2-v1-12", "m2", "23.230.111", "2.3.1", "2026-07-18 17:08:29", 3385),
    mockFirmwareRelation("rel-f2-v1-13", "m2", "23.230.111", "2.3.0", "2026-07-18 15:42:14", 2940),
    mockFirmwareRelation("rel-f2-v1-14", "m9", "99.789.23", "1.8.4", "2026-07-18 11:26:53", 1856),
  ],
  "f3-v2": [
    mockFirmwareRelation("rel-f3-v2-01", "m2", "23.230.111", "2.3.1", "2026-06-25 14:18:09", 3385),
    mockFirmwareRelation("rel-f3-v2-02", "m2", "23.230.111", "2.3.0", "2026-06-24 16:42:35", 2940),
  ],
  "f5-v1": [mockFirmwareRelation("rel-f5-v1-01", "m13", "10.80.120", "3.8.12", "2026-05-31 16:20:45", 1260)],
  "f7-v1": [mockFirmwareRelation("rel-f7-v1-01", "m18", "5.60.210", "1.2.0", "2026-07-01 14:08:32", 784)],
};

function normalizedCoveredDeviceCount(relation, versionId, relationIndex) {
  const seededRelation = (initialFirmwareRelations[versionId] || []).find((item) => item.id === relation.id);
  const count = Number(relation.coveredDeviceCount ?? seededRelation?.coveredDeviceCount);
  return Number.isFinite(count) ? Math.max(0, Math.floor(count)) : (relationIndex + 1) * 1280;
}

const productLines = ["IPC", "NVR", "车载", "BK", "AI玩具", "婴儿看护"];
const GLOBAL_PRODUCT_LINE = "全部产品线";
const functionCategories = ["图像设置", "智能分析", "音频设置", "存储管理", "时间同步", "视频设置", "设备信息", "设备控制", "P2P"];
const functionRelationCategories = functionCategories;
const MODEL_DATA_TYPES = ["枚举型(Enum)", "整数型(Int)", "布尔型(Bool)", "字符型(String)", "浮点型(float)", "数组型(array)", "时间型(timestamp)", "结构体(struct)"];
const MODEL_ARRAY_ELEMENT_TYPES = ["整数型(Int)", "布尔型(Bool)", "字符型(String)", "浮点型(float)", "时间型(timestamp)"];
const MODEL_STRUCT_FIELD_TYPES = ["枚举型(Enum)", "整数型(Int)", "布尔型(Bool)", "字符型(String)", "浮点型(float)", "时间型(timestamp)"];
const MODEL_TIMESTAMP_UNITS = ["毫秒(ms)", "秒(s)"];
const testColumns = ["测试项", "中文名", "要求值", "等待时间（ms）", "是否需要人工检测", "是否需要写入", "获取测试结果的JSON提取路径", "请求URL", "请求类型", "请求头参数", "请求体", "备注", "操作"];

function functionVersion(id, number, status, refs, options = {}) {
  return {
    id: `${id}-v${number}`,
    label: `V${number}`,
    number,
    status,
    refs,
    createdAt: options.createdAt || "2026-07-18 10:20:05",
    publishedAt: options.publishedAt || "",
    changelog: options.changelog || "",
    baseVersionId: options.baseVersionId || "",
    copiedFrom: options.copiedFrom || null,
    firmwareVersions: options.firmwareVersions || [],
    firmwareRelations: options.firmwareRelations || null,
    firmwareRelationHistory: options.firmwareRelationHistory || [],
    publishedSnapshot: options.publishedSnapshot || null,
  };
}

function definedFunctionMock(id, name, identifier, category, remark, image, createdAt) {
  return {
    id,
    name,
    identifier,
    productLine: "IPC",
    category,
    image,
    remark,
    createdAt,
    versions: [functionVersion(id, 1, "草稿", 0, {
      createdAt,
      changelog: `${name}首版能力定义`,
    })],
  };
}

const definedFunctionMocks = [
  definedFunctionMock("defined-remote-photo", "远程拍照功能", "remote_photo", "图像设置", "支持小龙虾远程拍照功能，第一版仅支持国内单目设备", img.camera, "2026-07-01 10:18:20"),
  definedFunctionMock("defined-ota-upgrade", "OTA升级功能", "ota_upgrade", "设备控制", "通过无线通信网络远程为设备更新软件、固件或系统版本的功能。", img.blue, "2026-07-02 11:26:35"),
  definedFunctionMock("defined-network-type", "网络类型", "networkType", "设备信息", "网络类型 1:仅wifi 2:仅4G 3:wifi+4G 4:网线+4G 5:网线+WIFI 6:仅网线", img.goose, "2026-07-03 14:08:12"),
  definedFunctionMock("defined-base-cloud", "基础云存子码流支持", "supportBaseCloud", "存储管理", "是否支持基础云存子码流 0:不支持 1:支持", img.camera, "2026-07-04 09:42:18"),
  definedFunctionMock("defined-split-screen", "枪机分屏支持", "splitScreen", "视频设置", "是否支持枪机分屏 0:不支持 1:支持", img.blue, "2026-07-05 16:30:42"),
  definedFunctionMock("defined-camera-lenses", "镜头数量", "cameraLenses", "设备信息", "镜头数量 0:无摄像头 1:一目 2:双目 3:三目 依次类推", img.goose, "2026-07-06 10:12:09"),
  definedFunctionMock("defined-low-power", "低功耗唤醒支持", "supportsLowPower", "设备控制", "是否支持低功耗唤醒 0:不支持 1:支持", img.camera, "2026-07-07 13:48:26"),
  definedFunctionMock("defined-sensor-num", "四摄远近焦标识", "devSensorNum", "设备信息", "四摄支持远近焦 -1:无该字段 2:有两个枪球需分割镜头", img.blue, "2026-07-08 15:22:14"),
  definedFunctionMock("defined-add-code", "新添加方式", "add_code", "设备信息", "添加方式 1:长电WIFI 2:长电4G 3:低功耗 4:宠物", img.goose, "2026-07-09 11:05:38"),
  definedFunctionMock("defined-have-motor", "电机信息", "haveMotor", "设备信息", "电机信息 0:无电机 1:水平+垂直电机 2:仅垂直电机 3:仅水平电机", img.camera, "2026-07-10 17:16:50"),
  definedFunctionMock("defined-connect-type", "连接类型", "connectType", "设备信息", "连接类型 1:IPC MQTT 2:车载TCP 3:BK TCP 4:NVR MQTT 5:宠物MQTT 6:新TCP 7:老TCP", img.blue, "2026-07-11 09:36:44"),
  definedFunctionMock("defined-4g-reporting", "4G基站上报支持", "supports4GCellReporting", "设备信息", "是否支持4G基站上报 0:不支持 1:支持", img.goose, "2026-07-12 14:27:31"),
  definedFunctionMock("defined-self-p2p", "自研P2P功能", "supportsSelfDevelopedP2P", "P2P", "是否支持自研P2P 0:不支持 1:支持", img.camera, "2026-07-13 10:48:06"),
  definedFunctionMock("defined-nexus-log", "实时日志功能", "nexusLog", "设备信息", "是否支持实时日志 0:不支持 1:支持", img.blue, "2026-07-14 16:02:57"),
  definedFunctionMock("defined-framework-type", "架构类型", "frameworkType", "设备信息", "架构类型 0:原架构 1:新架构", img.goose, "2026-07-15 11:40:22"),
];

const functions = [
  {
    id: "f1", name: "移动侦测", identifier: "motion_detection", productLine: "IPC", category: "智能分析", image: img.camera,
    remark: "检测画面变化并上报移动事件", createdAt: "2026-05-12 10:20:05",
    versions: [
      functionVersion("f1", 2, "已发布", 12, { publishedAt: "2026-07-15 16:40:20", changelog: "提升弱光环境识别稳定性", firmwareVersions: ["23.210.211", "23.210.212"] }),
      functionVersion("f1", 1, "已停用", 4, { publishedAt: "2026-05-18 11:32:10", changelog: "首个正式版本", firmwareVersions: ["23.110.200"] }),
    ],
  },
  {
    id: "f2", name: "夜视模式", identifier: "night_vision", productLine: "IPC", category: "图像设置", image: img.goose,
    remark: "自动或手动切换日夜成像模式", createdAt: "2026-06-03 09:32:18",
    versions: [functionVersion("f2", 1, "已发布", 0, { publishedAt: "2026-07-18 10:20:05", changelog: "验证红外切换与画面恢复", firmwareVersions: ["99.789.24", "23.210.211"] })],
  },
  {
    id: "f3", name: "云台控制", identifier: "ptz_control", productLine: "IPC", category: "设备控制", image: img.blue,
    remark: "控制水平与垂直电机运动", createdAt: "2026-04-22 14:06:36",
    versions: [
      functionVersion("f3", 3, "草稿", 0, { changelog: "增加预置位控制" }),
      functionVersion("f3", 2, "已发布", 8, { publishedAt: "2026-06-26 10:42:00", changelog: "增加转动速度参数", firmwareVersions: ["23.230.111"] }),
    ],
  },
  {
    id: "f4", name: "设备重启", identifier: "device_restart", productLine: "IPC", category: "设备控制", image: img.camera,
    remark: "支持云端下发设备重启服务", createdAt: "2026-03-08 11:26:50",
    versions: [functionVersion("f4", 1, "测试中", 0, { changelog: "支持云端安全重启与状态回执" })],
  },
  {
    id: "f5", name: "录像回放", identifier: "record_playback", productLine: "NVR", category: "存储管理", image: img.blue,
    remark: "按通道和时间范围查询录像", createdAt: "2026-05-20 15:44:10",
    versions: [functionVersion("f5", 1, "已发布", 6, { publishedAt: "2026-06-01 10:22:18", changelog: "首个正式版本", firmwareVersions: ["3.8.12"] })],
  },
  {
    id: "f6", name: "碰撞告警", identifier: "collision_alarm", productLine: "车载", category: "智能分析", image: img.camera,
    remark: "车辆碰撞后上报告警与定位信息", createdAt: "2026-06-12 13:20:42",
    versions: [functionVersion("f6", 1, "草稿", 0)],
  },
  {
    id: "f7", name: "语音唤醒", identifier: "voice_wakeup", productLine: "AI玩具", category: "音频设置", image: img.goose,
    remark: "监听唤醒词并启动语音会话", createdAt: "2026-06-16 16:28:00",
    versions: [functionVersion("f7", 1, "已发布", 3, { publishedAt: "2026-07-02 10:18:00", changelog: "首个正式版本", firmwareVersions: ["1.2.0"] })],
  },
  {
    id: "f8", name: "哭声检测", identifier: "cry_detection", productLine: "婴儿看护", category: "智能分析", image: img.blue,
    remark: "识别婴儿哭声并向家长端推送提醒", createdAt: "2026-06-28 09:10:20",
    versions: [functionVersion("f8", 1, "测试中", 0, { changelog: "增加不同环境噪声下的哭声识别" })],
  },
  ...definedFunctionMocks,
];

function mockModelParameter(name, identifier, dataType, defaultValue = "", dataDefinition = "") {
  return { name, identifier, dataType, dataDefinition, defaultValue, required: defaultValue === "" };
}

function createMockModelSpec(functionId, index = 0) {
  const suffix = String(index + 1).padStart(2, "0");
  const relatedHardware = assetConfigs.hardware.rows[index % assetConfigs.hardware.rows.length];
  return {
    properties: [
      { id: `${functionId}-property-switch`, name: "设备开关", identifier: "device_switch", dataType: "布尔型(Bool)", dataDefinition: "0：关闭，1：开启", defaultValue: "0", access: "读写", description: "控制设备功能启停" },
      { id: `${functionId}-property-mode`, name: "工作模式", identifier: "work_mode", dataType: "枚举型(Enum)", dataDefinition: "0：自动，1：白天，2：夜间", defaultValue: "0", access: "读写", description: "设备当前工作模式" },
      { id: `${functionId}-property-signal`, name: "信号强度", identifier: "signal_strength", dataType: "整数型(Int)", dataDefinition: "范围：0~100，步长：1", defaultValue: "", access: "只读", description: "当前网络信号质量" },
      { id: `${functionId}-property-version`, name: "固件版本", identifier: "firmware_version", dataType: "字符型(String)", dataDefinition: "长度：0~64", defaultValue: "", access: "只读", description: `Mock 固件版本 ${suffix}` },
    ],
    services: [
      { id: `${functionId}-service-capture`, name: "抓拍图片", identifier: "capture_image", callType: "同步", inputParams: [mockModelParameter("图片质量", "quality", "整数型(Int)", "80", "范围：0~100，步长：1")], outputParams: [mockModelParameter("图片地址", "image_url", "字符型(String)", "", "长度：0~512"), mockModelParameter("抓拍时间", "timestamp", "时间型(timestamp)", "", "Unix 毫秒时间戳")], description: "触发设备抓拍并返回图片地址" },
      { id: `${functionId}-service-restart`, name: "重启设备", identifier: "restart_device", callType: "异步", inputParams: [mockModelParameter("延迟时间", "delay_seconds", "整数型(Int)", "0", "范围：0~300，步长：1")], outputParams: [mockModelParameter("任务标识", "task_id", "字符型(String)", "", "长度：1~64")], description: "按指定延时重启设备" },
    ],
    events: [
      { id: `${functionId}-event-motion`, name: "移动侦测", identifier: "motion_detected", outputParams: [mockModelParameter("发生时间", "timestamp", "时间型(timestamp)", "", "Unix 毫秒时间戳"), mockModelParameter("图片地址", "image_url", "字符型(String)", "", "长度：0~512"), mockModelParameter("置信度", "confidence", "浮点型(float)", "", "范围：0~1，步长：0.01")], description: "检测到画面移动时上报" },
      { id: `${functionId}-event-fault`, name: "设备故障", identifier: "device_fault", outputParams: [mockModelParameter("错误码", "error_code", "整数型(Int)", "", "范围：0~9999，步长：1"), mockModelParameter("错误信息", "error_message", "字符型(String)", "", "长度：0~256")], description: "设备异常时上报故障信息" },
    ],
    hardware: relatedHardware ? [relatedHardware.id] : [],
    savedAt: "",
  };
}

const initialModelSpecs = Object.fromEntries(functions.flatMap((item, index) => item.versions.map((version) => [`${item.id}:${version.id}`, createMockModelSpec(`${item.id}-${version.id}`, index)])));

const STORAGE_KEY = "viot-prototype-state-v10";
const STORAGE_VERSION = 9;

function defaultTemplateRows() {
  return [{ key: "test_1", label: "测试硬件参数", type: "布尔型（Boolean）", attribute: "true", remark: "123" }];
}

function defaultTemplateTests() {
  return [
    { key: "test1", label: "硬件测试项1", expected: "200", wait: 10000, manual: "人工检测", write: "是", jsonPath: "$code", url: "/test", requestType: "POST", headers: "{}", body: "{}", remark: "" },
    { key: "test2", label: "硬件测试项2", expected: "200", wait: 10000, manual: "否", write: "否", jsonPath: "$code", url: "/test", requestType: "GET", headers: "{}", body: "{}", remark: "" },
  ];
}

function createMachineConfig() {
  return {
    hardware: [{ category: "PCBA", model: "" }],
    functions: [],
    parameters: [],
    tests: [],
    savedAt: "",
    hardwareFilter: "不限",
    hardwareSearch: "",
  };
}

function createInitialCategoryMeta() {
  const meta = {};
  for (const type of ["hardware", "pcba", "electronic"]) {
    const cfg = assetConfigs[type];
    meta[type] = cfg.categories.map((name, index) => ({
      code: type === "electronic" ? "" : index === 0 ? cfg.categoryCode : `TYPE_${index + 1}`,
      description: index === 0 ? "" : `${name}相关配置`,
      image: [img.blue, img.goose, img.camera][index % 3],
      createdAt: index === 0 ? (type === "hardware" ? "2026-01-16 10:53:37" : "2026-04-09 11:30:51") : "2025-11-08 09:26:18",
      parameters: index === 0 ? defaultTemplateRows() : [],
      tests: index === 0 ? defaultTemplateTests() : [],
    }));
  }
  meta.function = [];
  return meta;
}

const state = {
  sidebarCollapsed: window.innerWidth <= 820,
  openGroups: new Set(["machine", "hardware"]),
  modal: null,
  toasts: [],
  machineFilter: { status: "全部", network: "全部", power: "全部", search: "", line: "IPC", page: 1, pageSize: 24 },
  categorySearch: { hardware: "", pcba: "", electronic: "", function: "" },
  selectedCategory: { hardware: 0, pcba: 0, electronic: 0, function: 0 },
  configTab: "hardware",
  machineConfigs: { m1: createMachineConfig() },
  categoryMeta: createInitialCategoryMeta(),
  assetDraft: null,
  categoryDraft: null,
  functionSearch: "",
  selectedProductLine: "IPC",
  functionCategory: "全部",
  functionStatus: "全部",
  functionViewMode: "list",
  functionPage: 1,
  functionPageSize: 24,
  functionVersionSelection: {},
  functionDraftImage: "",
  machineDraftImage: "",
  modelTab: "model",
  functionReferenceSearch: "",
  functionReferencePage: 1,
  modelSpecs: initialModelSpecs,
};

function activeMachineId() {
  return route().startsWith("/machine/config/") ? route().split("/")[3] : machines[0]?.id;
}

function activeMachineConfig(machineId = activeMachineId()) {
  const id = machineId || machines[0]?.id || "m1";
  if (!state.machineConfigs[id]) state.machineConfigs[id] = createMachineConfig();
  const config = state.machineConfigs[id];
  if (!Array.isArray(config.hardware)) config.hardware = [];
  if (!Array.isArray(config.functions)) config.functions = [];
  config.functions = config.functions.map((binding) => {
    if (typeof binding !== "string") return binding;
    const item = functions.find((entry) => entry.id === binding);
    return { functionId: binding, versionId: latestPublishedVersion(item)?.id || item?.versions?.[0]?.id || "" };
  });
  if (!Array.isArray(config.parameters)) config.parameters = [];
  if (!Array.isArray(config.tests)) config.tests = [];
  if (typeof config.savedAt !== "string") config.savedAt = "";
  if (typeof config.hardwareFilter !== "string") config.hardwareFilter = "不限";
  if (typeof config.hardwareSearch !== "string") config.hardwareSearch = "";
  return config;
}

function activeAssetType() {
  if (state.modal?.assetType && assetConfigs[state.modal.assetType]) return state.modal.assetType;
  const current = route().split("/").filter(Boolean);
  const candidate = current[0] === "category" || current[0] === "form" || current[0] === "detail" ? current[1] : current[0];
  return assetConfigs[candidate] ? candidate : "hardware";
}

function categoryMetaFor(type, index = state.selectedCategory[type]) {
  if (!state.categoryMeta[type]) state.categoryMeta[type] = [];
  if (!state.categoryMeta[type][index]) {
    const cfg = assetConfigs[type];
    state.categoryMeta[type][index] = {
      code: type === "electronic" ? "" : `TYPE_${index + 1}`,
      description: "",
      image: [img.blue, img.goose, img.camera][index % 3],
      createdAt: new Date().toLocaleString("zh-CN", { hour12: false }),
      parameters: [],
      tests: [],
      remark: cfg?.categories[index] || "",
    };
  }
  const meta = state.categoryMeta[type][index];
  if (type !== "function") {
    if (!Array.isArray(meta.parameters)) meta.parameters = [];
    if (!Array.isArray(meta.tests)) meta.tests = [];
  }
  return meta;
}

Object.defineProperties(state, {
  configHardware: { get: () => activeMachineConfig().hardware, set: (value) => { activeMachineConfig().hardware = value; } },
  configFunctions: { get: () => activeMachineConfig().functions, set: (value) => { activeMachineConfig().functions = value; } },
  configParameters: { get: () => activeMachineConfig().parameters, set: (value) => { activeMachineConfig().parameters = value; } },
  configTests: { get: () => activeMachineConfig().tests, set: (value) => { activeMachineConfig().tests = value; } },
  configSavedAt: { get: () => activeMachineConfig().savedAt, set: (value) => { activeMachineConfig().savedAt = value; } },
  configHardwareFilter: { get: () => activeMachineConfig().hardwareFilter, set: (value) => { activeMachineConfig().hardwareFilter = value; } },
  configHardwareSearch: { get: () => activeMachineConfig().hardwareSearch, set: (value) => { activeMachineConfig().hardwareSearch = value; } },
  templateRows: { get: () => categoryMetaFor(activeAssetType()).parameters, set: (value) => { categoryMetaFor(activeAssetType()).parameters = value; } },
  templateTests: { get: () => categoryMetaFor(activeAssetType()).tests, set: (value) => { categoryMetaFor(activeAssetType()).tests = value; } },
});

let categorySearchTimer;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function route() {
  return location.hash.replace(/^#/, "") || "/machine";
}

function navigate(path) {
  state.modal = null;
  if (route() === path) render();
  else location.hash = path;
}

function routeGroup(current = route()) {
  if (current.startsWith("/machine")) return "machine";
  if (current.startsWith("/hardware") || current.startsWith("/pcba") || current.startsWith("/electronic") || current.startsWith("/form/") || current.startsWith("/category/") || current.startsWith("/detail/")) return "hardware";
  if (current.startsWith("/function")) return "function";
  return "machine";
}

function navTemplate() {
  const current = route();
  const group = routeGroup(current);
  const groups = [
    { id: "machine", icon: "▰", label: "机型管理", children: [["/machine", "机型列表"]] },
    { id: "hardware", icon: "▣", label: "硬件管理", children: [["/hardware", "硬件列表"], ["/pcba", "pcba列表"], ["/electronic", "电子元件列表"]] },
    { id: "function", icon: "✣", label: "功能管理", children: [["/function", "功能列表"]] },
  ];

  return groups.map((item) => {
    const opened = state.openGroups.has(item.id) || group === item.id;
    return `<div class="nav-group">
      <button class="nav-parent ${group === item.id ? "active-group" : ""}" data-action="toggle-group" data-group="${item.id}" title="${item.label}">
        <span class="nav-icon">${item.icon}</span><span class="nav-label">${item.label}</span><span class="chevron">${opened ? "⌃" : "⌄"}</span>
      </button>
      ${opened ? `<div class="nav-children">${item.children.map(([path, label]) => `<button class="nav-child ${current === path || (path === "/machine" && current.startsWith("/machine/config")) || (path === "/function" && current.startsWith("/function/")) || (current.startsWith(`/form/${path.slice(1)}`)) || (current.startsWith(`/category/${path.slice(1)}`)) || (current.startsWith(`/detail/${path.slice(1)}`)) ? "active" : ""}" data-action="navigate" data-route="${path}">${label}</button>`).join("")}</div>` : ""}
    </div>`;
  }).join("");
}

function getHeading(current) {
  if (current.startsWith("/machine/config")) {
    const machine = machines.find((item) => item.id === current.split("/")[3]) || machines[0];
    return { title: "编辑机型", back: "/machine", actions: `<button class="btn btn-primary" data-action="publish-machine">↗ ${machine?.status === "已发布" ? "重新发布" : "立即发布"}</button>` };
  }
  if (current.startsWith("/form/")) {
    const [, , type, mode] = current.split("/");
    const cfg = assetConfigs[type] || assetConfigs.hardware;
    return { title: `${mode === "edit" ? "编辑" : "新增"}${cfg.itemTitle}`, back: cfg.route };
  }
  if (current.startsWith("/category/")) {
    const [, , type, mode] = current.split("/");
    const cfg = assetConfigs[type] || assetConfigs.hardware;
    return { title: `${mode === "edit" ? "编辑" : "新增"}${cfg.categoryTitle}`, back: cfg.route };
  }
  if (current.startsWith("/detail/")) {
    const [, , type] = current.split("/");
    const cfg = assetConfigs[type] || assetConfigs.hardware;
    return { title: `${cfg.itemTitle}详情`, back: cfg.route };
  }
  if (current.startsWith("/function/detail/") || current.startsWith("/function/model/")) {
    return { title: "功能详情", back: "/function" };
  }
  if (current === "/hardware") return { title: "硬件列表" };
  if (current === "/pcba") return { title: "pcba列表" };
  if (current === "/electronic") return { title: "元件列表" };
  if (current === "/function") return { title: "功能管理" };
  return { title: "机型列表", actions: `<select class="field" data-role="machine-line">${productLines.map((line) => `<option ${state.machineFilter.line === line ? "selected" : ""}>${line}</option>`).join("")}</select>` };
}

function renderFunctionSearch() {
  return `<div class="function-toolbar"><input data-role="function-search" value="${escapeHtml(state.functionSearch)}" placeholder="请输入功能名称/功能项名称"><button class="btn btn-primary" data-action="function-search">查 询</button></div>`;
}

function appShell(pageHtml) {
  const heading = getHeading(route());
  return `<div class="app-shell">
    <header class="topbar">
      <button class="menu-toggle" data-action="toggle-sidebar" title="展开或收起菜单">☰</button>
      <div class="brand"><img src="${img.logo}" alt=""><span>运维系统</span></div>
      <div class="topbar-spacer"></div>
      <div class="topbar-system">▱ 系统管理</div>
      <div class="profile"><img src="${img.avatar}" alt=""><span>汤彦珊</span></div>
    </header>
    <div class="body-grid ${state.sidebarCollapsed ? "sidebar-collapsed" : ""}">
      <aside class="sidebar"><div class="sidebar-title">VIOT管理平台</div>${navTemplate()}</aside>
      <main class="content-shell">
        <div class="page-heading">
          <div class="page-heading-title">${heading.back ? `<button class="back-btn" data-action="navigate" data-route="${heading.back}" title="返回">‹</button>` : "▤"}<span>${heading.title}</span></div>
          <div class="page-heading-actions">${heading.actions || ""}</div>
        </div>
        <div class="page-body">${pageHtml}</div>
      </main>
    </div>
    ${renderModal()}
    <div class="toast-stack">${state.toasts.map((toast) => `<div class="toast ${toast.type || ""}">${escapeHtml(toast.message)}</div>`).join("")}</div>
  </div>`;
}

function machinePage() {
  const filter = state.machineFilter;
  const statuses = ["全部", "开发中", "已发布", "已停产"];
  const networks = ["全部", "仅wifi", "仅4G", "wifi+4G", "网线+4G", "网线+WIFI", "仅网线"];
  const powers = ["全部", "常电", "低功耗"];
  const visible = filteredMachines();
  const pageCount = Math.max(1, Math.ceil(visible.length / filter.pageSize));
  if (filter.page > pageCount) filter.page = pageCount;
  const pageStart = (filter.page - 1) * filter.pageSize;
  const pageRows = visible.slice(pageStart, pageStart + filter.pageSize);

  return `<section class="surface machine-layout">
    <aside class="filter-panel">
      ${filterSection("机型状态", "status", statuses, filter.status, "◫")}
      ${filterSection("网络类型", "network", networks, filter.network, "⌁")}
      ${filterSection("电量类型", "power", powers, filter.power, "♧")}
    </aside>
    <div class="machine-main">
      <div class="toolbar">
        <div class="searchbox"><input data-role="machine-search" value="${escapeHtml(filter.search)}" placeholder="请输入机型名称/固件前三位，按enter搜索"></div>
        <button class="btn btn-primary" data-action="machine-add">＋ 新增机型</button>
      </div>
      <div class="machine-grid">
        ${pageRows.length ? pageRows.map(machineCard).join("") : `<div class="empty-state">暂无符合条件的机型</div>`}
      </div>
      ${pagination(visible.length, filter.page, filter.pageSize, "machine")}
    </div>
  </section>`;
}

function filteredMachines() {
  const filter = state.machineFilter;
  const normalizeNetwork = (value) => String(value).toLowerCase().replaceAll(" ", "");
  return machines.filter((machine) => machine.line === filter.line
    && (filter.status === "全部" || machine.status === filter.status)
    && (filter.network === "全部" || normalizeNetwork(machine.network) === normalizeNetwork(filter.network))
    && (filter.power === "全部" || machine.power === filter.power)
    && (!filter.search || `${machine.name}${machine.firmware}`.toLowerCase().includes(filter.search.toLowerCase())));
}

function filterSection(title, key, values, active, icon) {
  return `<div class="filter-section"><div class="filter-title"><span>${icon}</span><span>${title}</span></div><div class="filter-options">${values.map((value) => `<button class="filter-chip ${value === active ? "active" : ""}" data-action="machine-filter" data-key="${key}" data-value="${value}">${value}</button>`).join("")}</div></div>`;
}

function machineCard(machine) {
  return `<article class="machine-card" tabindex="0">
    <span class="status-ribbon">${machine.status}</span>
    <div class="machine-card-head"><img class="device-thumb" src="${machine.image}" alt=""><div><h3>${escapeHtml(machine.name)}</h3><span class="product-tag">${machine.line}</span></div></div>
    <div class="machine-card-meta"><span>网络类型：　${machine.network}</span><span>电量类型：　${machine.power}</span><span>固件标识：　${machine.firmware}</span></div>
    <div class="machine-actions">
      <button class="btn" data-action="machine-edit" data-id="${machine.id}">✎ 编辑</button>
      <button class="btn" data-action="machine-config" data-id="${machine.id}">◉ 去配置</button>
      <button class="btn" data-action="machine-delete" data-id="${machine.id}">♲ 删除</button>
    </div>
  </article>`;
}

function pagination(total, page = 1, pageSize = 24, context = "machine") {
  const disabled = total === 0;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const windowStart = Math.max(1, Math.min(page - 2, pageCount - 5));
  const visiblePages = Array.from({ length: Math.min(pageCount, 6) }, (_, index) => windowStart + index);
  const pageButton = (value) => `<button class="${page === value ? "active" : ""}" data-action="pagination-page" data-context="${context}" data-page="${value}" ${disabled ? "disabled" : ""}>${value}</button>`;
  const leading = windowStart > 1 ? `${pageButton(1)}${windowStart > 2 ? `<span>···</span>` : ""}` : "";
  const windowEnd = visiblePages[visiblePages.length - 1];
  const trailing = windowEnd < pageCount ? `${windowEnd < pageCount - 1 ? `<span>···</span>` : ""}${pageButton(pageCount)}` : "";
  return `<div class="pagination"><span>共 ${total} 条</span><select data-role="pagination-size" data-context="${context}"><option value="24" ${pageSize === 24 ? "selected" : ""}>24条/页</option><option value="48" ${pageSize === 48 ? "selected" : ""}>48条/页</option></select><button data-action="pagination-prev" data-context="${context}" ${page === 1 || disabled ? "disabled" : ""}>‹</button>${leading}${visiblePages.map(pageButton).join("")}${trailing}<button data-action="pagination-next" data-context="${context}" ${page === pageCount || disabled ? "disabled" : ""}>›</button><span>前往</span><input data-role="pagination-jump" data-context="${context}" type="number" min="1" max="${pageCount}" value="${page}"><span>页</span></div>`;
}

function assetPage(type) {
  const cfg = assetConfigs[type];
  const selectedIndex = Math.min(state.selectedCategory[type], cfg.categories.length - 1);
  const selected = cfg.categories[selectedIndex];
  const query = state.categorySearch[type].toLowerCase();
  const categories = cfg.categories.map((name, index) => ({ name, index })).filter((x) => x.name.toLowerCase().includes(query));
  const rows = getAssetRows(type, selectedIndex);
  return `<section class="surface asset-layout">
    <aside class="category-panel">
      <div class="category-panel-head"><span>${cfg.categoryTitle}</span><button class="category-add" data-action="category-add" data-type="${type}" title="新增类目">⊕</button></div>
      <input class="category-search" data-role="category-search" data-type="${type}" value="${escapeHtml(state.categorySearch[type])}" placeholder="${cfg.categoryPlaceholder}">
      <ul class="category-list">${categories.map(({ name, index }) => `<li><button class="${index === selectedIndex ? "active" : ""}" data-action="category-select" data-type="${type}" data-index="${index}">${escapeHtml(name)}</button></li>`).join("")}</ul>
    </aside>
    <div class="asset-main">
      ${assetBanner(type, selected, selectedIndex)}
      <div class="section-title-row"><div class="section-title">${cfg.itemListTitle}</div><button class="btn btn-primary" data-action="asset-add" data-type="${type}">＋ 新增${cfg.itemTitle}</button></div>
      <div class="data-table-wrap"><table class="data-table">
        <thead><tr>${cfg.columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => assetRow(type, row)).join("")}</tbody>
      </table></div>
    </div>
  </section>`;
}

function assetBanner(type, selected, index) {
  const meta = categoryMetaFor(type, index);
  return `<div class="detail-banner"><img class="banner-icon" src="${meta.image || img.blue}" alt=""><div class="banner-copy"><h2>${escapeHtml(selected)}</h2><div class="banner-meta">${type !== "electronic" ? `<span>编码类目： <strong>${escapeHtml(meta.code || "-")}</strong></span>` : ""}<span>创建时间： <strong>${escapeHtml(meta.createdAt || "-")}</strong></span><span>说明： <strong>${escapeHtml(meta.description || "-")}</strong></span></div></div><div class="banner-actions"><button class="btn" data-action="category-edit" data-type="${type}">✎ 编辑</button>${type !== "pcba" ? `<button class="btn" data-action="template-open" data-type="${type}">▣ 参数模板</button>` : ""}</div></div>`;
}

function getAssetRows(type, selectedIndex) {
  const cfg = assetConfigs[type];
  if (selectedIndex === 0) return cfg.rows.filter((row) => row.categoryIndex === undefined || row.categoryIndex === 0);
  const category = cfg.categories[selectedIndex];
  let row = cfg.rows.find((item) => item.categoryIndex === selectedIndex);
  if (!row) {
    row = { id: `${type}-${selectedIndex}`, categoryIndex: selectedIndex, name: `${category}示例`, type: category, maker: selectedIndex % 2 ? "威视达康" : "TEST", model: `MODEL-${String(selectedIndex + 1).padStart(2, "0")}`, status: "启用", refs: selectedIndex % 5, image: [img.goose, img.camera, img.blue][selectedIndex % 3] };
    cfg.rows.push(row);
  }
  return [row];
}

function assetRow(type, row) {
  return `<tr><td>${escapeHtml(row.name)}</td><td><img class="asset-thumb" src="${row.image}" alt=""></td><td>${escapeHtml(row.type)}</td><td>${escapeHtml(row.maker)}</td><td>${escapeHtml(row.model)}</td><td><span class="status-tag">${row.status}</span></td><td><button class="btn btn-text" data-action="asset-refs" data-type="${type}" data-id="${row.id}">${row.refs}</button></td><td><button class="btn btn-text" data-action="asset-detail" data-type="${type}" data-id="${row.id}">详情</button><button class="btn btn-text" data-action="asset-edit" data-type="${type}" data-id="${row.id}">编辑</button></td></tr>`;
}

function functionCapabilityId(item) {
  return item?.capabilityId || `capability:${item?.identifier || item?.id || "unknown"}`;
}

function functionMatchesFilters(item) {
  if (state.functionCategory !== "全部" && item.category !== state.functionCategory) return false;
  if (state.functionStatus !== "全部" && functionDisplayStatus(item) !== state.functionStatus) return false;
  if (!state.functionSearch) return true;
  const versionNotes = item.versions.map((version) => version.changelog || "").join(" ");
  const query = state.functionSearch.toLowerCase();
  return `${item.name} ${item.identifier} ${item.remark} ${versionNotes}`.toLowerCase().includes(query);
}

function functionFamilies(items = functions) {
  const groups = new Map();
  items.forEach((item) => {
    const capabilityId = functionCapabilityId(item);
    if (!groups.has(capabilityId)) groups.set(capabilityId, { capabilityId, items: [] });
    groups.get(capabilityId).items.push(item);
  });
  return [...groups.values()].map((group) => ({
    ...group,
    items: group.items.sort((a, b) => productLines.indexOf(a.productLine) - productLines.indexOf(b.productLine)),
  })).sort((a, b) => a.items[0].name.localeCompare(b.items[0].name, "zh-CN"));
}

function functionFamilySource(group) {
  return group.items
    .filter((item) => latestPublishedVersion(item))
    .sort((a, b) => (latestPublishedVersion(b)?.publishedAt || "").localeCompare(latestPublishedVersion(a)?.publishedAt || ""))[0] || group.items[0];
}

function functionFamilyLineChips(group) {
  return group.items.map((item) => {
    const published = latestPublishedVersion(item);
    const working = workingFunctionVersion(item);
    const version = working || published || item.versions[0];
    return `<button class="global-line-chip" data-action="function-detail" data-id="${item.id}" title="查看 ${escapeHtml(item.productLine)} 配置"><strong>${escapeHtml(item.productLine)}</strong><span>${escapeHtml(version?.label || "-")}</span>${functionStatusTag(version?.status || "草稿")}</button>`;
  }).join("");
}

function availableTargetLines(source) {
  const capabilityId = functionCapabilityId(source);
  const occupied = new Set(functions.filter((item) => functionCapabilityId(item) === capabilityId || item.identifier === source.identifier).map((item) => item.productLine));
  return productLines.filter((line) => !occupied.has(line));
}

function functionPage() {
  const line = state.selectedProductLine;
  const isGlobal = line === GLOBAL_PRODUCT_LINE;
  const allFamilies = functionFamilies();
  let collection;
  if (isGlobal) collection = allFamilies.filter((group) => group.items.some(functionMatchesFilters));
  else collection = functions.filter((item) => item.productLine === line && functionMatchesFilters(item));
  const total = collection.length;
  const pageCount = Math.max(1, Math.ceil(total / state.functionPageSize));
  if (state.functionPage > pageCount) state.functionPage = pageCount;
  const pageStart = (state.functionPage - 1) * state.functionPageSize;
  const pageRows = collection.slice(pageStart, pageStart + state.functionPageSize);
  const lineFunctions = isGlobal ? functions : functions.filter((item) => item.productLine === line);
  const publishedCount = lineFunctions.filter((item) => item.versions.some((version) => version.status === "已发布")).length;
  const testingCount = lineFunctions.filter((item) => functionDisplayStatus(item) === "测试中").length;
  const globalNavCount = allFamilies.length;
  const navLines = [GLOBAL_PRODUCT_LINE, ...productLines];
  const overview = isGlobal
    ? `<div><span class="overview-label">全局功能视图</span><h2>全部产品线</h2><p>跨产品线检索已有能力，查看覆盖情况并复用到目标产品线。</p></div><dl><div><dt>功能族</dt><dd>${allFamilies.length}</dd></div><div><dt>产线实例</dt><dd>${functions.length}</dd></div><div><dt>已发布</dt><dd>${publishedCount}</dd></div></dl>`
    : `<div><span class="overview-label">当前产品线</span><h2>${escapeHtml(line)}</h2><p>功能按版本完成配置、测试和发布；发布后可由固件发布配置选择。</p></div><dl><div><dt>功能项</dt><dd>${lineFunctions.length}</dd></div><div><dt>已发布</dt><dd>${publishedCount}</dd></div><div><dt>待推进</dt><dd>${testingCount}</dd></div></dl>`;
  return `<section class="surface function-layout">
    <aside class="product-line-panel"><div class="category-panel-head"><span>产品线</span></div><ul class="product-line-list">${navLines.map((name) => { const count = name === GLOBAL_PRODUCT_LINE ? globalNavCount : functions.filter((item) => item.productLine === name).length; return `<li><button class="${name === line ? "active" : ""}" data-action="function-line-select" data-line="${name}"><span>${name}</span><strong>${count}</strong></button></li>`; }).join("")}</ul></aside>
    <div class="function-main">
      <div class="function-overview">${overview}</div>
      <div class="function-list-toolbar"><div class="function-filter-fields"><div class="searchbox"><input data-role="function-search" value="${escapeHtml(state.functionSearch)}" placeholder="${isGlobal ? "搜索全局功能、标识或版本说明" : "搜索功能名称、标识或版本说明"}"></div><select data-role="function-category-filter"><option>全部</option>${functionCategories.map((category) => `<option ${category === state.functionCategory ? "selected" : ""}>${category}</option>`).join("")}</select><select data-role="function-status-filter">${["全部", "草稿", "测试中", "已发布", "已停用"].map((status) => `<option ${status === state.functionStatus ? "selected" : ""}>${status}</option>`).join("")}</select></div><div class="function-toolbar-actions"><div class="function-view-switch" role="group" aria-label="功能展示方式"><button class="${state.functionViewMode === "list" ? "active" : ""}" data-action="function-view-mode" data-mode="list" aria-pressed="${state.functionViewMode === "list"}" title="列表视图"><span aria-hidden="true">▤</span>列表</button><button class="${state.functionViewMode === "card" ? "active" : ""}" data-action="function-view-mode" data-mode="card" aria-pressed="${state.functionViewMode === "card"}" title="卡片视图"><span aria-hidden="true">▦</span>卡片</button></div><button class="btn btn-primary" data-action="function-add">＋ 新增功能</button></div></div>
      ${isGlobal ? globalFunctionCollectionView(pageRows) : functionCollectionView(pageRows)}
      ${pagination(total, state.functionPage, state.functionPageSize, "function")}
    </div>
  </section>`;
}

function globalFunctionCollectionView(groups) {
  if (!groups.length) return `<div class="function-view-empty"><div class="empty-state">暂无符合条件的全局功能</div></div>`;
  if (state.functionViewMode === "card") return `<div class="function-card-grid">${groups.map(globalFunctionCard).join("")}</div>`;
  return `<div class="data-table-wrap"><table class="data-table global-function-table"><thead><tr><th>全局功能</th><th>功能分类</th><th>已覆盖产品线</th><th>覆盖情况</th><th>关联固件</th><th>操作</th></tr></thead><tbody>${groups.map(globalFunctionRow).join("")}</tbody></table></div>`;
}

function globalFunctionRow(group) {
  const primary = functionFamilySource(group);
  const firmwareCount = group.items.reduce((sum, item) => sum + item.versions.reduce((versionSum, version) => versionSum + functionFirmwareRelations(version).length, 0), 0);
  const source = group.items.find((item) => latestPublishedVersion(item) && availableTargetLines(item).length) || null;
  return `<tr><td><button class="function-name-cell" data-action="function-global-detail" data-capability="${escapeHtml(group.capabilityId)}"><img src="${primary.image}" alt=""><span><strong>${escapeHtml(primary.name)}</strong><code>${escapeHtml(primary.identifier)}</code></span></button></td><td>${escapeHtml(primary.category)}</td><td><div class="global-line-chips">${functionFamilyLineChips(group)}</div></td><td><strong>${group.items.length}/${productLines.length}</strong></td><td>${firmwareCount}</td><td><button class="btn btn-text" data-action="function-global-detail" data-capability="${escapeHtml(group.capabilityId)}">查看</button>${source ? `<button class="btn btn-text" data-action="function-copy-crossline" data-id="${source.id}" data-version="${latestPublishedVersion(source).id}">跨线复制</button>` : ""}</td></tr>`;
}

function globalFunctionCard(group) {
  const primary = functionFamilySource(group);
  const source = group.items.find((item) => latestPublishedVersion(item) && availableTargetLines(item).length) || null;
  return `<article class="function-management-card global-function-card">
    <div class="function-management-card-head"><button class="function-card-open" data-action="function-global-detail" data-capability="${escapeHtml(group.capabilityId)}"><img src="${primary.image}" alt=""><span><strong>${escapeHtml(primary.name)}</strong><code>${escapeHtml(primary.identifier)}</code></span></button><span class="coverage-count">${group.items.length}/${productLines.length}</span></div>
    <p>${escapeHtml(primary.remark || "-")}</p><span class="function-category-chip">${escapeHtml(primary.category)}</span>
    <div class="global-line-chips global-line-chips-card">${functionFamilyLineChips(group)}</div>
    <div class="function-management-card-foot"><span>已覆盖 ${group.items.length} 条产品线</span><div><button class="btn btn-text" data-action="function-global-detail" data-capability="${escapeHtml(group.capabilityId)}">查看</button>${source ? `<button class="btn btn-text" data-action="function-copy-crossline" data-id="${source.id}" data-version="${latestPublishedVersion(source).id}">跨线复制</button>` : ""}</div></div>
  </article>`;
}

function functionCollectionView(rows) {
  if (!rows.length) return `<div class="function-view-empty"><div class="empty-state">暂无符合条件的功能项</div></div>`;
  if (state.functionViewMode === "card") return `<div class="function-card-grid">${rows.map(functionManagementCard).join("")}</div>`;
  return `<div class="data-table-wrap"><table class="data-table function-table"><thead><tr><th>功能项</th><th>功能分类</th><th>最新发布</th><th>当前工作版本</th><th>状态</th><th>关联固件</th><th>更新时间</th><th>操作</th></tr></thead><tbody>${rows.map(functionRow).join("")}</tbody></table></div>`;
}

function functionManagementCard(item) {
  const published = latestPublishedVersion(item);
  const working = item.versions.find((version) => ["草稿", "测试中"].includes(version.status));
  const primary = working || published || item.versions[0];
  const firmwareCount = item.versions.reduce((sum, version) => sum + functionFirmwareRelations(version).length, 0);
  const updatedAt = primary.publishedAt || primary.createdAt || item.createdAt;
  return `<article class="function-management-card">
    <div class="function-management-card-head"><button class="function-card-open" data-action="function-detail" data-id="${item.id}"><img src="${item.image}" alt=""><span><strong>${escapeHtml(item.name)}</strong><code>${escapeHtml(item.identifier)}</code></span></button>${functionStatusTag(primary.status)}</div>
    <p>${escapeHtml(item.remark || "-")}</p>
    <span class="function-category-chip">${escapeHtml(item.category)}</span>
    <dl class="function-card-metrics"><div><dt>最新发布</dt><dd>${published?.label || "-"}</dd></div><div><dt>工作版本</dt><dd>${working?.label || "-"}</dd></div><div><dt>关联固件</dt><dd>${firmwareCount}</dd></div></dl>
    <div class="function-management-card-foot"><span>更新于 ${escapeHtml(updatedAt)}</span><div><button class="btn btn-text" data-action="function-detail" data-id="${item.id}">详情</button>${!working && published ? `<button class="btn btn-text" data-action="function-create-version" data-id="${item.id}">新版本</button>` : ""}</div></div>
  </article>`;
}

function functionRow(item) {
  const published = latestPublishedVersion(item);
  const working = item.versions.find((version) => ["草稿", "测试中"].includes(version.status));
  const primary = working || published || item.versions[0];
  const firmwareCount = item.versions.reduce((sum, version) => sum + functionFirmwareRelations(version).length, 0);
  return `<tr><td><button class="function-name-cell" data-action="function-detail" data-id="${item.id}"><img src="${item.image}" alt=""><span><strong>${escapeHtml(item.name)}</strong><code>${escapeHtml(item.identifier)}</code></span></button></td><td>${escapeHtml(item.category)}</td><td>${published?.label || "-"}</td><td>${working?.label || "-"}</td><td>${functionStatusTag(primary.status)}</td><td>${firmwareCount}</td><td>${escapeHtml(primary.publishedAt || primary.createdAt || item.createdAt)}</td><td><button class="btn btn-text" data-action="function-detail" data-id="${item.id}">详情</button>${!working && published ? `<button class="btn btn-text" data-action="function-create-version" data-id="${item.id}">新版本</button>` : ""}</td></tr>`;
}

function latestPublishedVersion(item) {
  return item?.versions?.find((version) => version.status === "已发布") || null;
}

function selectedFunctionVersion(item) {
  const selectedId = state.functionVersionSelection[item.id];
  return item.versions.find((version) => version.id === selectedId) || item.versions[0];
}

function workingFunctionVersion(item) {
  return item?.versions?.find((version) => ["草稿", "测试中"].includes(version.status)) || null;
}

function workspaceFunctionVersion(item) {
  return workingFunctionVersion(item) || latestPublishedVersion(item) || item?.versions?.[0] || null;
}

function functionVersionRole(item, version) {
  if (workingFunctionVersion(item)?.id === version?.id) return "当前工作版本";
  if (latestPublishedVersion(item)?.id === version?.id) return "最新发布版本";
  if (!workingFunctionVersion(item) && !latestPublishedVersion(item) && item?.versions?.[0]?.id === version?.id) return "最近版本";
  return "历史版本";
}

function functionVersionRoleClass(role) {
  return { "当前工作版本": "working", "最新发布版本": "latest", "最近版本": "recent" }[role] || "";
}

function functionVersionSourceLabel(item, version) {
  if (version?.copiedFrom) {
    const source = version.copiedFrom;
    return `复制自 ${source.productLine || "其他产品线"} · ${source.functionName || item.name} ${source.versionLabel || ""}`.trim();
  }
  if (version?.baseVersionId) {
    const base = item.versions.find((entry) => entry.id === version.baseVersionId);
    if (base) return `继承自 ${base.label}`;
  }
  return version?.number === 1 ? "首个版本" : "独立版本";
}

function canEditVersionDescription(version) {
  return version?.status === "草稿";
}

function canEditFunctionMetadata(item) {
  const working = workingFunctionVersion(item);
  const hasReleaseHistory = item?.versions?.some((version) => ["已发布", "已停用"].includes(version.status));
  return Boolean(working?.status === "草稿" && !hasReleaseHistory);
}

function functionFirmwareRelations(version) {
  return Array.isArray(version?.firmwareRelations) ? version.firmwareRelations : [];
}

function functionFirmwareRelationStats(version) {
  const relations = functionFirmwareRelations(version);
  return {
    relations,
    machineCount: new Set(relations.map((relation) => relation.machineId).filter(Boolean)).size,
    identifierCount: new Set(relations.map((relation) => relation.firmwareIdentifier).filter(Boolean)).size,
  };
}

function relationMachine(relation, fallbackLine = "IPC") {
  const machine = machines.find((entry) => entry.id === relation?.machineId);
  return machine || {
    id: relation?.machineId || "-",
    name: relation?.machineName || "未知机型",
    line: relation?.productLine || fallbackLine,
    network: "-",
    status: "-",
  };
}

function functionFirmwareRelationHistory(version) {
  return Array.isArray(version?.firmwareRelationHistory) ? version.firmwareRelationHistory : [];
}

function activeFunctionContext() {
  const functionId = route().split("/")[3];
  const item = functions.find((entry) => entry.id === functionId);
  const version = item ? selectedFunctionVersion(item) : null;
  return { functionId, item, version };
}

function requireDraftFunctionVersion() {
  const context = activeFunctionContext();
  if (!context.version || context.version.status !== "草稿") {
    showToast("只有草稿版本可以修改配置", "error");
    return null;
  }
  return context;
}

function functionDisplayStatus(item) {
  const working = item?.versions?.find((version) => ["草稿", "测试中"].includes(version.status));
  return working?.status || latestPublishedVersion(item)?.status || item?.versions?.[0]?.status || "草稿";
}

function functionStatusTag(status) {
  const statusClass = { "草稿": "draft", "测试中": "testing", "已发布": "published", "已停用": "disabled" }[status] || "draft";
  return `<span class="function-status ${statusClass}">${escapeHtml(status)}</span>`;
}

function functionHeadingActions(item) {
  const version = workspaceFunctionVersion(item);
  if (!version) return "";
  if (version.status === "草稿") return `<button class="btn btn-primary" data-action="function-submit-test" data-id="${item.id}">提交测试</button>`;
  if (version.status === "测试中") {
    const withdrawAction = `<button class="btn" data-action="function-withdraw-test" data-id="${item.id}" title="撤回后版本将恢复为可编辑草稿">撤回草稿</button>`;
    return `${withdrawAction}<button class="btn btn-primary" data-action="function-publish-version" data-id="${item.id}">发布 ${version.label}</button>`;
  }
  if (version.status === "已发布") {
    const working = item.versions.find((entry) => ["草稿", "测试中"].includes(entry.status));
    return `<button class="btn" data-action="function-disable-version" data-id="${item.id}">停用版本</button>${working ? `<button class="btn btn-primary" data-action="function-version-view" data-id="${item.id}" data-version="${working.id}">查看 ${working.label} ${working.status}</button>` : `<button class="btn btn-primary" data-action="function-create-version" data-id="${item.id}">＋ 创建新版本</button>`}`;
  }
  return `<button class="btn btn-primary" data-action="function-restore-version" data-id="${item.id}">恢复版本</button>`;
}

function functionSelectedVersionActions(item, version) {
  const current = workspaceFunctionVersion(item);
  if (current?.id === version.id) return functionHeadingActions(item);

  const statusAction = version.status === "已发布"
    ? `<button class="btn" data-action="function-disable-version" data-id="${item.id}" data-version="${version.id}">停用版本</button>`
    : version.status === "已停用"
      ? `<button class="btn" data-action="function-restore-version" data-id="${item.id}" data-version="${version.id}">恢复版本</button>`
      : "";
  const working = workingFunctionVersion(item);
  const primaryAction = !working && version.status === "已发布"
    ? `<button class="btn btn-primary" data-action="function-create-version" data-id="${item.id}" data-version="${version.id}">基于此版本创建</button>`
    : current ? `<button class="btn btn-primary" data-action="function-version-view" data-id="${item.id}" data-version="${current.id}">返回 ${current.label}</button>` : "";
  return `${statusAction}${primaryAction}`;
}

function functionVersionRail(item, selected) {
  const working = workingFunctionVersion(item);
  const published = latestPublishedVersion(item);
  const createAction = !working && published
    ? `<button class="version-add-button" data-action="function-create-version" data-id="${item.id}" data-version="${published.id}" title="创建新版本" aria-label="创建新版本">＋</button>`
    : "";
  return `<aside class="version-rail" aria-label="版本列表">
    <div class="version-rail-head"><div><span>版本</span><strong>${item.versions.length}</strong></div>${createAction}</div>
    <div class="version-rail-list" role="tablist" aria-label="功能版本">${item.versions.map((version) => {
      const role = functionVersionRole(item, version);
      const time = version.publishedAt || version.createdAt || "-";
      return `<button class="version-rail-item ${version.id === selected.id ? "active" : ""}" data-action="function-version-select" data-id="${item.id}" data-version="${version.id}" role="tab" aria-selected="${version.id === selected.id}"><span class="version-marker" aria-hidden="true"></span><span class="version-rail-copy"><span class="version-rail-title"><strong>${escapeHtml(version.label)}</strong>${functionStatusTag(version.status)}</span><span class="version-role ${functionVersionRoleClass(role)}">${role}</span><small>${escapeHtml(time)}</small></span></button>`;
    }).join("")}</div>
  </aside>`;
}

function defaultValueForModelType(dataType) {
  return "";
}

function defaultModelDataSpec(dataType) {
  if (dataType === "枚举型(Enum)") return { enumItems: [{ value: "", label: "" }] };
  if (["整数型(Int)", "浮点型(float)"].includes(dataType)) return { min: "", max: "", step: "", unit: "" };
  if (dataType === "布尔型(Bool)") return { falseLabel: "关闭", trueLabel: "开启" };
  if (dataType === "字符型(String)") return { maxLength: "" };
  if (dataType === "数组型(array)") return { elementType: "字符型(String)", maxItems: "" };
  if (dataType === "时间型(timestamp)") return { timestampUnit: "毫秒(ms)" };
  if (dataType === "结构体(struct)") return { fields: [] };
  return {};
}

function normalizeModelStructFields(value) {
  return (Array.isArray(value) ? value : []).map((entry) => {
    const source = entry && typeof entry === "object" ? entry : {};
    const requestedType = normalizedModelDataType(source.dataType, "字符型(String)");
    const dataType = MODEL_STRUCT_FIELD_TYPES.includes(requestedType) ? requestedType : "字符型(String)";
    const dataSpec = parseModelDataSpec(dataType, source.dataDefinition, source.dataSpec);
    const identifier = String(source.identifier || source.key || "").trim();
    return {
      name: String(source.name || source.label || identifier).trim(),
      identifier,
      dataType,
      dataSpec,
      dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
    };
  });
}

function legacyStructFields(schemaValue) {
  let schema = schemaValue;
  if (typeof schema === "string") {
    try { schema = JSON.parse(schema); } catch { return []; }
  }
  if (!schema || Array.isArray(schema) || typeof schema !== "object") return [];
  return Object.entries(schema).map(([identifier, dataType]) => ({ name: identifier, identifier, dataType }));
}

function normalizedModelDataType(value, fallback = "") {
  const aliases = {
    Enum: "枚举型(Enum)", Int: "整数型(Int)", Bool: "布尔型(Bool)", String: "字符型(String)",
    float: "浮点型(float)", array: "数组型(array)", timestamp: "时间型(timestamp)", struct: "结构体(struct)",
  };
  return MODEL_DATA_TYPES.includes(value) ? value : aliases[String(value || "").trim()] || fallback;
}

function modelDataTypeShortLabel(dataType) {
  const match = String(dataType || "").match(/\(([^)]+)\)/);
  return match?.[1] || dataType || "";
}

function parseModelDataSpec(dataType, definition = "", provided = null) {
  const base = defaultModelDataSpec(dataType);
  if (provided && typeof provided === "object" && !Array.isArray(provided)) {
    const merged = { ...base, ...deepClone(provided) };
    if (dataType === "枚举型(Enum)") {
      merged.enumItems = Array.isArray(provided.enumItems)
        ? provided.enumItems.map((item) => ({ value: String(item?.value ?? ""), label: String(item?.label ?? "") }))
        : base.enumItems;
    }
    if (dataType === "结构体(struct)") {
      const fields = Array.isArray(provided.fields) ? provided.fields : legacyStructFields(provided.structSchema);
      return { fields: normalizeModelStructFields(fields) };
    }
    return merged;
  }
  const text = String(definition || "").trim();
  if (!text) return base;
  if (dataType === "枚举型(Enum)") {
    const enumItems = text.split(/[,，\n;]/).map((part) => {
      const separatorIndex = part.search(/[:：]/);
      return separatorIndex > 0 ? { value: part.slice(0, separatorIndex).trim(), label: part.slice(separatorIndex + 1).trim() } : null;
    }).filter(Boolean);
    return { enumItems: enumItems.length ? enumItems : base.enumItems };
  }
  if (["整数型(Int)", "浮点型(float)"].includes(dataType)) {
    const range = text.match(/(-?\d+(?:\.\d+)?)\s*[~～]\s*(-?\d+(?:\.\d+)?)/);
    const step = text.match(/步长\s*[:：]\s*(-?\d+(?:\.\d+)?)/);
    const unit = text.match(/单位\s*[:：]\s*([^,，]+)/);
    return { min: range?.[1] || "", max: range?.[2] || "", step: step?.[1] || "", unit: unit?.[1]?.trim() || "" };
  }
  if (dataType === "布尔型(Bool)") {
    const items = parseModelDataSpec("枚举型(Enum)", text).enumItems;
    return {
      falseLabel: items.find((item) => item.value === "0")?.label || base.falseLabel,
      trueLabel: items.find((item) => item.value === "1")?.label || base.trueLabel,
    };
  }
  if (dataType === "字符型(String)") {
    const range = text.match(/\d+\s*[~～]\s*(\d+)/);
    const single = text.match(/(?:最大长度|长度)\s*[:：]\s*(\d+)/);
    return { maxLength: range?.[1] || single?.[1] || "" };
  }
  if (dataType === "数组型(array)") {
    const element = text.match(/元素类型\s*[:：]\s*([^,，]+)/);
    const maxItems = text.match(/(?:最大长度|最大元素数量)\s*[:：]\s*(\d+)/);
    return { elementType: normalizedModelDataType(element?.[1], base.elementType), maxItems: maxItems?.[1] || "" };
  }
  if (dataType === "时间型(timestamp)") return { timestampUnit: text.includes("毫秒") ? "毫秒(ms)" : text.includes("秒") ? "秒(s)" : base.timestampUnit };
  if (dataType === "结构体(struct)") {
    const schema = text.replace(/^字段定义\s*[:：]\s*/, "").trim();
    return { fields: normalizeModelStructFields(legacyStructFields(schema)) };
  }
  return base;
}

function modelDataSpecToDefinition(dataType, dataSpec) {
  const spec = parseModelDataSpec(dataType, "", dataSpec);
  if (dataType === "枚举型(Enum)") return spec.enumItems.filter((item) => item.value || item.label).map((item) => `${item.value}：${item.label}`).join("，");
  if (["整数型(Int)", "浮点型(float)"].includes(dataType)) return `范围：${spec.min}~${spec.max}，步长：${spec.step}${spec.unit ? `，单位：${spec.unit}` : ""}`;
  if (dataType === "布尔型(Bool)") return `0：${spec.falseLabel}，1：${spec.trueLabel}`;
  if (dataType === "字符型(String)") return `长度：0~${spec.maxLength}`;
  if (dataType === "数组型(array)") return `元素类型：${modelDataTypeShortLabel(spec.elementType)}，最大元素数量：${spec.maxItems}`;
  if (dataType === "时间型(timestamp)") return `Unix ${spec.timestampUnit === "秒(s)" ? "秒" : "毫秒"}时间戳`;
  if (dataType === "结构体(struct)") return spec.fields.length
    ? `字段：${spec.fields.map((field) => `${field.identifier}(${modelDataTypeShortLabel(field.dataType)})`).join("，")}`
    : "字段：未配置";
  return "";
}

function modelDefinitionMeta(dataType) {
  const definitions = {
    "枚举型(Enum)": ["枚举值", "示例：0:关闭, 1:开启"],
    "整数型(Int)": ["范围与步长", "示例：范围：0~100，步长：1"],
    "布尔型(Bool)": ["布尔值定义", "示例：0:关闭, 1:开启"],
    "字符型(String)": ["长度约束", "示例：长度：0~64"],
    "浮点型(float)": ["范围与步长", "示例：范围：0~1，步长：0.01"],
    "数组型(array)": ["元素定义", "示例：元素类型：String，最大长度：10"],
    "时间型(timestamp)": ["时间格式", "示例：Unix 毫秒时间戳"],
    "结构体(struct)": ["结构定义", "示例：JSON Schema 或字段说明"],
  };
  return definitions[dataType] || ["数据定义", "请输入数据定义"];
}

function normalizeModelParameterList(value, allowDefaultValue = false) {
  const entries = Array.isArray(value)
    ? value
    : String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
  return entries.map((entry) => {
    const source = typeof entry === "string" ? { identifier: entry, name: entry } : entry;
    const identifier = String(source.identifier || source.key || "").trim();
    const dataType = normalizedModelDataType(source.dataType, "字符型(String)");
    const dataSpec = parseModelDataSpec(dataType, source.dataDefinition, source.dataSpec);
    const sourceDefaultValue = source.defaultValue === undefined || source.defaultValue === null ? "" : String(source.defaultValue);
    const required = allowDefaultValue ? (source.required === undefined ? sourceDefaultValue === "" : Boolean(source.required)) : true;
    return {
      name: String(source.name || source.label || identifier).trim(),
      identifier,
      dataType,
      dataSpec,
      dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
      defaultValue: allowDefaultValue && !required ? sourceDefaultValue : "",
      required,
    };
  });
}

function normalizeModelSpecData(spec) {
  if (!Array.isArray(spec.properties)) spec.properties = [];
  if (!Array.isArray(spec.services)) spec.services = [];
  if (!Array.isArray(spec.events)) spec.events = [];
  spec.properties = spec.properties.map((row) => {
    const dataType = normalizedModelDataType(row.dataType, "枚举型(Enum)");
    const dataSpec = parseModelDataSpec(dataType, row.dataDefinition, row.dataSpec);
    const access = ["只读", "读写", "只写"].includes(row.access) ? row.access : "只读";
    return {
      ...row,
      dataType,
      dataSpec,
      dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
      defaultValue: access === "只读" || row.defaultValue === undefined || row.defaultValue === null ? "" : String(row.defaultValue),
      access,
    };
  });
  spec.services = spec.services.map((row) => ({
    ...row,
    callType: row.callType || "同步",
    inputParams: normalizeModelParameterList(row.inputParams, true),
    outputParams: normalizeModelParameterList(row.outputParams),
  }));
  spec.events = spec.events.map((row) => ({ ...row, outputParams: normalizeModelParameterList(row.outputParams) }));
  return spec;
}

function enumDefinitionKeys(definition) {
  return String(definition || "").split(/[,，]/).map((part) => {
    const separatorIndex = part.search(/[:：]/);
    return separatorIndex > 0 ? part.slice(0, separatorIndex).trim() : "";
  }).filter(Boolean);
}

function modelDataSpecValidationError(dataType, dataSpec) {
  const spec = parseModelDataSpec(dataType, "", dataSpec);
  if (dataType === "枚举型(Enum)") {
    const items = spec.enumItems.filter((item) => item.value || item.label);
    if (!items.length || items.some((item) => !item.value || !item.label)) return "请完善枚举值和枚举名称";
    if (new Set(items.map((item) => item.value)).size !== items.length) return "枚举值不能重复";
  } else if (["整数型(Int)", "浮点型(float)"].includes(dataType)) {
    const min = Number(spec.min);
    const max = Number(spec.max);
    const step = Number(spec.step);
    if (![min, max, step].every(Number.isFinite)) return "请填写有效的最小值、最大值和步长";
    if (min > max) return "最小值不能大于最大值";
    if (step <= 0) return "步长必须大于 0";
    if (dataType === "整数型(Int)" && ![min, max, step].every(Number.isInteger)) return "整数型的范围和步长必须是整数";
  } else if (dataType === "布尔型(Bool)" && (!spec.falseLabel.trim() || !spec.trueLabel.trim())) {
    return "请填写 0 和 1 对应的名称";
  } else if (dataType === "字符型(String)" && (!/^\d+$/.test(spec.maxLength) || Number(spec.maxLength) <= 0)) {
    return "最大长度必须是大于 0 的整数";
  } else if (dataType === "字符型(String)" && Number(spec.maxLength) > 10240) {
    return "最大长度不能超过 10240";
  } else if (dataType === "数组型(array)") {
    if (!MODEL_ARRAY_ELEMENT_TYPES.includes(spec.elementType)) return "请选择有效的数组元素类型";
    if (!/^\d+$/.test(spec.maxItems) || Number(spec.maxItems) <= 0) return "最大元素数量必须是大于 0 的整数";
    if (Number(spec.maxItems) > 512) return "最大元素数量不能超过 512";
  } else if (dataType === "时间型(timestamp)" && !MODEL_TIMESTAMP_UNITS.includes(spec.timestampUnit)) {
    return "请选择时间戳单位";
  } else if (dataType === "结构体(struct)") {
    if (!spec.fields.length) return "结构体至少需要定义一个字段";
    const fieldError = modelParameterValidationError(spec.fields, false);
    if (fieldError) return `结构体字段：${fieldError}`;
  }
  return "";
}

function modelSimpleValueMatches(value, dataType, timestampUnit = "毫秒(ms)") {
  if (dataType === "整数型(Int)") return Number.isInteger(value);
  if (dataType === "浮点型(float)") return typeof value === "number" && Number.isFinite(value);
  if (dataType === "布尔型(Bool)") return value === 0 || value === 1 || value === false || value === true;
  if (dataType === "字符型(String)") return typeof value === "string";
  if (dataType === "时间型(timestamp)") return typeof value === "number" && new RegExp(`^\\d{${timestampUnit === "秒(s)" ? 10 : 13}}$`).test(String(value));
  if (dataType === "结构体(struct)") return Boolean(value) && !Array.isArray(value) && typeof value === "object";
  return false;
}

function modelDefaultValueError(dataType, defaultValue, definition = "", dataSpecValue = null) {
  const value = String(defaultValue ?? "").trim();
  if (!value) return "";
  const dataSpec = parseModelDataSpec(dataType, definition, dataSpecValue);
  if (dataType === "枚举型(Enum)") {
    const keys = dataSpec.enumItems.map((item) => item.value).filter(Boolean);
    if (keys.length && !keys.includes(value)) return "默认值必须是已定义的枚举值";
  } else if (dataType === "布尔型(Bool)" && !["0", "1"].includes(value)) {
    return "布尔型默认值仅支持 0 或 1";
  } else if (dataType === "整数型(Int)" && !/^-?\d+$/.test(value)) {
    return "整数型默认值必须是整数";
  } else if (dataType === "浮点型(float)" && !Number.isFinite(Number(value))) {
    return "浮点型默认值必须是数字";
  } else if (dataType === "时间型(timestamp)" && !new RegExp(`^\\d{${dataSpec.timestampUnit === "秒(s)" ? 10 : 13}}$`).test(value)) {
    return `时间型默认值应为${dataSpec.timestampUnit === "秒(s)" ? "10 位秒级" : "13 位毫秒级"}时间戳`;
  } else if (["数组型(array)", "结构体(struct)"].includes(dataType)) {
    try {
      const parsed = JSON.parse(value);
      if (dataType === "数组型(array)") {
        if (!Array.isArray(parsed)) return "数组型默认值必须是 JSON 数组";
        if (parsed.length > Number(dataSpec.maxItems)) return `数组默认值最多包含 ${dataSpec.maxItems} 个元素`;
        if (parsed.some((item) => !modelSimpleValueMatches(item, dataSpec.elementType))) return `数组元素必须符合${dataSpec.elementType}`;
      } else {
        if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") return "结构体默认值必须是 JSON 对象";
        const fields = new Map(dataSpec.fields.map((field) => [field.identifier, field]));
        for (const [key, fieldValue] of Object.entries(parsed)) {
          const field = fields.get(key);
          if (!field) return `结构体默认值包含未定义字段“${key}”`;
          const fieldText = ["数组型(array)", "结构体(struct)"].includes(field.dataType)
            ? JSON.stringify(fieldValue)
            : field.dataType === "布尔型(Bool)" && typeof fieldValue === "boolean"
              ? fieldValue ? "1" : "0"
              : String(fieldValue);
          const fieldError = modelDefaultValueError(field.dataType, fieldText, field.dataDefinition, field.dataSpec);
          if (fieldError) return `结构体字段“${key}”：${fieldError}`;
        }
      }
    } catch {
      return dataType === "数组型(array)" ? "数组型默认值必须是有效 JSON 数组" : "结构体默认值必须是有效 JSON 对象";
    }
  }
  if (["整数型(Int)", "浮点型(float)"].includes(dataType)) {
    const number = Number(value);
    const min = Number(dataSpec.min);
    const max = Number(dataSpec.max);
    const step = Number(dataSpec.step);
    if (number < min || number > max) return `默认值应处于 ${dataSpec.min}~${dataSpec.max} 范围内`;
    const stepPosition = (number - min) / step;
    if (Math.abs(stepPosition - Math.round(stepPosition)) > 1e-9) return `默认值必须符合步长 ${dataSpec.step}`;
  }
  if (dataType === "字符型(String)" && value.length > Number(dataSpec.maxLength)) {
    return `默认值长度不能超过 ${dataSpec.maxLength}`;
  }
  return "";
}

function modelParameterValidationError(parameters, allowDefaultValue) {
  const identifiers = new Set();
  for (const parameter of parameters) {
    if (!parameter.name || !parameter.identifier) return "请完善参数名称和标识符";
    if (parameter.name.length > 50 || parameter.identifier.length > 50) return "参数名称和标识符不能超过 50 个字符";
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(parameter.identifier)) return `参数标识符“${parameter.identifier}”格式不正确`;
    if (identifiers.has(parameter.identifier)) return `参数标识符“${parameter.identifier}”重复`;
    identifiers.add(parameter.identifier);
    const specError = modelDataSpecValidationError(parameter.dataType, parameter.dataSpec);
    if (specError) return `参数“${parameter.name}”：${specError}`;
    if (allowDefaultValue && !parameter.required) {
      const defaultError = modelDefaultValueError(parameter.dataType, parameter.defaultValue, parameter.dataDefinition, parameter.dataSpec);
      if (defaultError) return `参数“${parameter.name}”：${defaultError}`;
    }
  }
  return "";
}

function modelRowValidationError(row, kind) {
  if (!row.name || !row.identifier) return "请填写名称和标识符";
  if (row.name.length > 50 || row.identifier.length > 50) return "名称和标识符不能超过 50 个字符";
  if (String(row.description || "").length > 200) return "备注不能超过 200 个字符";
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(row.identifier)) return "标识符需以字母开头，仅包含字母、数字和下划线";
  if (kind === "property") {
    const specError = modelDataSpecValidationError(row.dataType, row.dataSpec);
    if (specError) return specError;
    if (row.access === "只读" && row.defaultValue) return "只读属性不能配置默认值";
    return modelDefaultValueError(row.dataType, row.defaultValue, row.dataDefinition, row.dataSpec);
  }
  if (kind === "service") {
    return modelParameterValidationError([...(row.inputParams || []), ...(row.outputParams || [])], false)
      || modelParameterValidationError(row.inputParams || [], true);
  }
  return modelParameterValidationError(row.outputParams || [], false);
}

function modelSpecValidationError(spec) {
  const identifiers = new Set();
  for (const row of flattenModelRows(spec)) {
    const error = modelRowValidationError(row, row.kind);
    if (error) return `${modelKindLabel(row.kind)}“${row.name || "未命名"}”：${error}`;
    if (identifiers.has(row.identifier)) return `物模型标识符“${row.identifier}”重复`;
    identifiers.add(row.identifier);
  }
  return "";
}

function modelImportShapeError(parsed) {
  const collections = { properties: "property", services: "service", events: "event" };
  for (const [key, kind] of Object.entries(collections)) {
    if (!Object.hasOwn(parsed, key)) return "JSON 必须同时包含 properties、services 和 events";
    if (!Array.isArray(parsed[key])) return `${key} 必须是数组`;
    for (const [index, row] of parsed[key].entries()) {
      if (!row || Array.isArray(row) || typeof row !== "object") return `${key}[${index}] 必须是对象`;
      if (kind === "property") {
        if (!MODEL_DATA_TYPES.includes(row.dataType)) return `属性“${row.name || index + 1}”的数据类型不支持`;
        if (row.access !== undefined && !["只读", "读写", "只写"].includes(row.access)) return `属性“${row.name || index + 1}”的访问权限不支持`;
      }
      if (kind === "service" && row.callType !== undefined && !["同步", "异步"].includes(row.callType)) return `服务“${row.name || index + 1}”的调用方式不支持`;
      const parameterGroups = kind === "service" ? [["inputParams", row.inputParams], ["outputParams", row.outputParams]] : kind === "event" ? [["outputParams", row.outputParams]] : [];
      for (const [groupName, parameters] of parameterGroups) {
        if (!Array.isArray(parameters)) return `${kind === "service" ? "服务" : "事件"}“${row.name || index + 1}”的 ${groupName} 必须是数组`;
        for (const [parameterIndex, parameter] of parameters.entries()) {
          if (!parameter || Array.isArray(parameter) || typeof parameter !== "object") return `${groupName}[${parameterIndex}] 必须是对象`;
          if (!MODEL_DATA_TYPES.includes(parameter.dataType)) return `参数“${parameter.name || parameterIndex + 1}”的数据类型不支持`;
          if (groupName === "inputParams" && parameter.required !== undefined && typeof parameter.required !== "boolean") return `参数“${parameter.name || parameterIndex + 1}”的 required 必须是布尔值`;
        }
      }
    }
  }
  return "";
}

function migrateLegacyParameterList(current, seeded, allowDefaultValue) {
  const seedList = Array.isArray(seeded) ? seeded : [];
  const entries = Array.isArray(current) ? current : String(current || "").split(",").map((item) => item.trim()).filter(Boolean);
  return entries.map((entry) => {
    const source = typeof entry === "string" ? { identifier: entry, name: entry } : entry;
    const identifier = source.identifier || source.key;
    const seed = seedList.find((item) => item.identifier === identifier);
    const isLegacyPlaceholder = typeof entry === "string"
      || (seed
        && normalizedModelDataType(source.dataType, "字符型(String)") === "字符型(String)"
        && (!source.dataSpec?.maxLength)
        && (!source.dataDefinition || source.dataDefinition === "长度：0~"));
    if (!seed || (!isLegacyPlaceholder && (source.dataDefinition || source.dataSpec))) return source;
    const seedDefaultValue = allowDefaultValue ? String(seed.defaultValue ?? "") : "";
    return {
      ...seed,
      ...source,
      name: isLegacyPlaceholder && source.name === identifier ? seed.name : source.name,
      dataType: seed.dataType,
      dataDefinition: seed.dataDefinition,
      dataSpec: seed.dataSpec,
      defaultValue: isLegacyPlaceholder ? seedDefaultValue : allowDefaultValue ? String(source.defaultValue ?? seedDefaultValue) : "",
      required: allowDefaultValue
        ? isLegacyPlaceholder ? Boolean(seed.required ?? !seedDefaultValue) : Boolean(source.required ?? seed.required ?? !seedDefaultValue)
        : true,
    };
  });
}

function migrateLegacyModelSpecData(spec, seededSpec) {
  if (!seededSpec) return spec;
  const migrated = deepClone(spec);
  migrated.properties = (migrated.properties || []).map((row) => {
    const seed = seededSpec.properties?.find((item) => item.identifier === row.identifier);
    return seed ? { ...seed, ...row, defaultValue: row.defaultValue ?? seed.defaultValue ?? "" } : row;
  });
  migrated.services = (migrated.services || []).map((row) => {
    const seed = seededSpec.services?.find((item) => item.identifier === row.identifier);
    return {
      ...row,
      inputParams: migrateLegacyParameterList(row.inputParams, seed?.inputParams, true),
      outputParams: migrateLegacyParameterList(row.outputParams, seed?.outputParams, false),
    };
  });
  migrated.events = (migrated.events || []).map((row) => {
    const seed = seededSpec.events?.find((item) => item.identifier === row.identifier);
    return { ...row, outputParams: migrateLegacyParameterList(row.outputParams, seed?.outputParams, false) };
  });
  return normalizeModelSpecData(migrated);
}

function getModelSpec(functionId, versionId = "") {
  const item = functions.find((entry) => entry.id === functionId);
  const activeVersionId = versionId || selectedFunctionVersion(item)?.id || `${functionId}-v1`;
  const key = `${functionId}:${activeVersionId}`;
  if (!state.modelSpecs[key]) {
    const functionIndex = Math.max(0, functions.findIndex((item) => item.id === functionId));
    state.modelSpecs[key] = createMockModelSpec(`${functionId}-${activeVersionId}`, functionIndex);
  }
  if (!state.modelSpecs[key].hardware) state.modelSpecs[key].hardware = [];
  return normalizeModelSpecData(state.modelSpecs[key]);
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function functionConfigPayload(spec) {
  return {
    properties: deepClone(spec?.properties || []),
    services: deepClone(spec?.services || []),
    events: deepClone(spec?.events || []),
    hardware: [...(spec?.hardware || [])],
  };
}

function createFunctionConfigSnapshot(item, version, spec, prefix = "PUB", options = {}) {
  const createdAt = options.createdAt || new Date().toLocaleString("zh-CN", { hour12: false });
  const config = functionConfigPayload(spec);
  return {
    id: options.id || `${prefix}-${item.id}-${version.label}-${Date.now()}`,
    createdAt,
    sourceSnapshotId: options.sourceSnapshotId || "",
    signature: JSON.stringify(config),
    config,
  };
}

function activeVersionSnapshot(version) {
  return ["已发布", "已停用"].includes(version?.status) ? version.publishedSnapshot || null : null;
}

function modelCollection(spec, kind) {
  return kind === "property" ? spec.properties : kind === "service" ? spec.services : spec.events;
}

function flattenModelRows(spec) {
  return [
    ...spec.properties.map((row, index) => ({ ...row, kind: "property", index })),
    ...spec.services.map((row, index) => ({ ...row, kind: "service", index })),
    ...spec.events.map((row, index) => ({ ...row, kind: "event", index })),
  ];
}

function modelKindLabel(kind) {
  return kind === "property" ? "属性" : kind === "service" ? "服务" : "事件";
}

function modelDefinition(row) {
  const summary = (parameters) => parameters?.length
    ? parameters.map((parameter) => `${parameter.identifier}（${parameter.dataType}）`).join("、")
    : "-";
  if (row.kind === "service") return `输入：${summary(row.inputParams)}；输出：${summary(row.outputParams)}`;
  if (row.kind === "event") return `输出：${summary(row.outputParams)}`;
  return row.dataDefinition || "-";
}

function modelDefaultSummary(row) {
  if (row.kind === "property") return row.access === "只读" ? "不适用" : row.defaultValue === "" ? "未设置" : row.defaultValue;
  if (row.kind === "service") {
    const defaults = (row.inputParams || []).filter((parameter) => parameter.defaultValue !== "").map((parameter) => `${parameter.identifier}=${parameter.defaultValue}`);
    return defaults.length ? defaults.join("、") : "未设置";
  }
  return "不适用";
}

function modelSpecPage(functionId) {
  const item = functions.find((entry) => entry.id === functionId);
  if (!item) return `<section class="surface model-page"><div class="empty-state">功能项不存在或已被删除</div></section>`;
  const version = selectedFunctionVersion(item) || workspaceFunctionVersion(item);
  state.functionVersionSelection[item.id] = version.id;
  const spec = getModelSpec(item.id, version.id);
  if (!["model", "hardware", "firmware"].includes(state.modelTab)) state.modelTab = "model";
  const modelRows = flattenModelRows(spec);
  const editable = version.status === "草稿";
  const role = functionVersionRole(item, version);
  const contextHint = editable ? "配置可编辑" : "只读版本";
  const sourceLabel = functionVersionSourceLabel(item, version);
  const published = latestPublishedVersion(item);
  const copyAction = published && availableTargetLines(item).length
    ? `<button class="btn" data-action="function-copy-crossline" data-id="${item.id}" data-version="${published.id}">复制到其他产品线</button>`
    : "";
  const metadataEditable = canEditFunctionMetadata(item);
  return `<section class="surface model-page">
    <div class="detail-banner model-banner function-detail-banner"><img class="banner-icon" src="${item.image}" alt=""><div class="banner-copy"><h2>${escapeHtml(item.name)}</h2><div class="banner-meta"><span>产品线： <strong>${escapeHtml(item.productLine)}</strong></span><span>功能分类： <strong>${escapeHtml(item.category)}</strong></span><span>功能标识： <strong><code>${escapeHtml(item.identifier)}</code></strong></span><span>说明： <strong>${escapeHtml(item.remark || "-")}</strong></span></div></div><div class="banner-actions"><button class="btn" data-action="function-edit" data-id="${item.id}" ${metadataEditable ? "" : "disabled"} title="${metadataEditable ? "编辑功能资料" : "功能首次发布后基础资料锁定"}">编辑功能资料</button>${copyAction}</div></div>
    <div class="function-version-layout">
      ${functionVersionRail(item, version)}
      <div class="version-detail-panel" role="tabpanel" aria-label="${escapeHtml(version.label)} 版本配置">
        <div class="version-detail-head"><div class="version-detail-title"><span class="version-role ${functionVersionRoleClass(role)}">${role}</span><div><h3>${escapeHtml(version.label)}</h3>${functionStatusTag(version.status)}<small>${escapeHtml(sourceLabel)} · ${contextHint}</small></div><div class="version-description"><div><span>版本说明</span>${canEditVersionDescription(version) ? `<button class="version-description-edit" data-action="function-edit-version" data-id="${item.id}" data-version="${version.id}" title="编辑版本说明" aria-label="编辑版本说明">✎</button>` : ""}</div><p>${escapeHtml(version.changelog || "暂无版本说明")}</p></div></div><div class="version-detail-actions">${functionSelectedVersionActions(item, version)}</div></div>
        <div class="version-detail-meta"><span>创建时间 <strong>${escapeHtml(version.createdAt || "-")}</strong></span><span>发布时间 <strong>${escapeHtml(version.publishedAt || "-")}</strong></span></div>
        ${functionLifecycleSummary(item, version)}
        <div class="function-detail-tabs">${[["model", "物模型"], ["hardware", "关联硬件"], ["firmware", "固件关联"]].map(([id, label]) => `<button class="${state.modelTab === id ? "active" : ""}" data-action="model-tab" data-tab="${id}">${label}</button>`).join("")}</div><div class="model-content">${functionDetailTabContent(item, version, spec, modelRows, editable)}</div>
      </div>
    </div>
  </section>`;
}

function functionDetailTabContent(item, version, spec, rows, editable) {
  if (state.modelTab === "hardware") return relatedHardwareContent(item, version, spec, editable);
  if (state.modelTab === "firmware") return functionFirmwareRelationsContent(item, version);
  return modelInfoContent(rows, editable);
}

function functionLifecycleSummary(item, version) {
  const stepIndex = { "草稿": 0, "测试中": 1, "已发布": 2, "已停用": 2 }[version.status] || 0;
  const steps = ["草稿", "测试中", version.status === "已停用" ? "已停用" : "已发布"];
  const relationStats = functionFirmwareRelationStats(version);
  const messages = {
    "草稿": ["配置准备中", "版本可编辑，物模型和关联硬件均为可选；提交测试后将锁定。"],
    "测试中": ["功能版本测试中", "版本配置已锁定；确认完成后可发布，不在此阶段建立固件关联。"],
    "已发布": ["版本已正式发布", "可由同产品线的固件发布配置选择并建立关联。"],
    "已停用": ["版本已停用", "既有固件关联保留，新固件发布配置不可再选择。"],
  };
  const [title, description] = messages[version.status] || messages["草稿"];
  const associationHint = relationStats.relations.length
    ? `涉及 ${relationStats.machineCount} 个机型 · 查看明细 ›`
    : ["已发布", "已停用"].includes(version.status)
      ? "暂未关联固件版本 · 查看详情 ›"
      : "功能发布后可建立关联 · 查看详情 ›";
  const firmwareContent = `<button class="firmware-relation-overview ${relationStats.relations.length ? "" : "unlinked"}" data-action="function-open-references" data-id="${item.id}" title="查看固件关联明细"><span>关联固件版本</span><strong><b>${relationStats.relations.length}</b> 个</strong><small>${associationHint}</small></button>`;
  return `<div class="version-flow-panel"><div class="lifecycle-steps">${steps.map((label, index) => `<div class="lifecycle-step ${index < stepIndex ? "done" : index === stepIndex ? "active" : ""}"><span>${index < stepIndex ? "✓" : index + 1}</span><strong>${label}</strong></div>`).join("")}</div><div class="version-flow-summary"><div><span>当前阶段</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(description)}</p></div>${firmwareContent}</div></div>`;
}

function modelInfoContent(rows, editable) {
  const counts = { property: rows.filter((row) => row.kind === "property").length, service: rows.filter((row) => row.kind === "service").length, event: rows.filter((row) => row.kind === "event").length };
  return `<div class="model-summary"><span>属性 <strong>${counts.property}</strong></span><span>服务 <strong>${counts.service}</strong></span><span>事件 <strong>${counts.event}</strong></span><span>${editable ? "配置项保存后自动记录，无需页面级保存" : "当前版本已锁定"}</span></div><div class="model-section-head"><div><h3>物模型定义 <small class="optional-label">可选</small></h3><p>物模型可以为空；添加后必须满足对应数据类型规则，才能提交测试与发布。</p></div><div><button class="btn" data-action="model-preview">查看 JSON</button>${editable ? `<button class="btn" data-action="model-import">文本导入</button><button class="btn btn-primary" data-action="model-add">＋ 添加物模型</button>` : ""}</div></div><div class="data-table-wrap"><table class="mini-table model-table"><thead><tr><th>物模型名称</th><th>标识符</th><th>类型</th><th>数据类型</th><th>数据定义</th><th>默认值</th><th>权限</th><th>备注</th><th>操作</th></tr></thead><tbody>${rows.length ? rows.map((row) => `<tr><td>${escapeHtml(row.name)}</td><td><code>${escapeHtml(row.identifier)}</code></td><td>${modelKindLabel(row.kind)}</td><td>${escapeHtml(row.dataType || row.callType || "-")}</td><td>${escapeHtml(modelDefinition(row))}</td><td><code class="model-default-value">${escapeHtml(modelDefaultSummary(row))}</code></td><td>${escapeHtml(row.access || "-")}</td><td>${escapeHtml(row.description || "-")}</td><td>${editable ? `<button class="btn btn-text" data-action="model-edit" data-kind="${row.kind}" data-index="${row.index}">编辑</button><button class="btn btn-text danger-text" data-action="model-delete" data-kind="${row.kind}" data-index="${row.index}">删除</button>` : `<span class="read-only-label">只读</span>`}</td></tr>`).join("") : `<tr><td colspan="9"><div class="empty-state">暂未配置物模型，不影响测试与发布</div></td></tr>`}</tbody></table></div>`;
}

function relatedHardwareContent(item, version, spec, editable) {
  const baseVersion = version.baseVersionId ? item.versions.find((entry) => entry.id === version.baseVersionId) : null;
  const helper = baseVersion
    ? `已从 ${baseVersion.label} 继承 ${spec.hardware.length} 项关联硬件，可按需调整；未关联不影响测试与发布。`
    : "功能需要硬件支持时可按需关联；未关联不影响测试与发布。";
  return `<div class="model-section-head"><div><h3>关联硬件 <small class="optional-label">可选</small></h3><p>${escapeHtml(helper)}</p></div>${editable ? `<button class="btn btn-primary" data-action="model-hardware-add">＋ 关联硬件</button>` : ""}</div><div class="data-table-wrap"><table class="mini-table model-table related-hardware-table"><thead><tr><th>硬件名称</th><th>图片</th><th>类型</th><th>生产厂商</th><th>状态</th><th>操作</th></tr></thead><tbody>${spec.hardware.length ? spec.hardware.map((id, index) => { const row = assetConfigs.hardware.rows.find((item) => item.id === id); return row ? `<tr><td>${escapeHtml(row.name)}</td><td><img class="asset-thumb" src="${row.image}" alt=""></td><td>${escapeHtml(row.type)}</td><td>${escapeHtml(row.maker)}</td><td><span class="status-tag">${row.status}</span></td><td>${editable ? `<button class="btn btn-text danger-text" data-action="model-hardware-remove" data-index="${index}">移除</button>` : `<span class="read-only-label">只读</span>`}</td></tr>` : ""; }).join("") : `<tr><td colspan="6"><div class="empty-state">暂未关联硬件，不影响测试与发布</div></td></tr>`}</tbody></table></div>`;
}

function functionFirmwareRelationsContent(item, version) {
  const relations = functionFirmwareRelations(version);
  const stats = functionFirmwareRelationStats(version);
  const query = state.functionReferenceSearch.toLowerCase();
  const filteredRelations = relations.filter((relation) => {
    const machine = relationMachine(relation, item.productLine);
    const productLine = relation.productLine || machine.line || item.productLine;
    return !query || `${relation.firmwareVersion} ${relation.firmwareIdentifier} ${productLine} ${machine.name} ${machine.id}`.toLowerCase().includes(query);
  });
  const relationPageSize = 8;
  const relationPageCount = Math.max(1, Math.ceil(filteredRelations.length / relationPageSize));
  state.functionReferencePage = Math.min(relationPageCount, Math.max(1, state.functionReferencePage));
  const relationPageRows = filteredRelations.slice((state.functionReferencePage - 1) * relationPageSize, state.functionReferencePage * relationPageSize);
  const firmwareContent = `<div class="relation-toolbar"><div class="relation-search"><input data-role="function-relation-search" value="${escapeHtml(state.functionReferenceSearch)}" placeholder="搜索版本号、标识、产线或机型"><button class="btn" data-action="function-relation-search">搜索</button></div>${state.functionReferenceSearch ? `<button class="btn btn-text" data-action="function-relation-reset">清除搜索</button>` : ""}</div>
    <div class="data-table-wrap"><table class="mini-table firmware-relation-table"><thead><tr><th>固件版本号</th><th>固件标识</th><th>所属产品线</th><th>所属机型</th><th title="当前固件版本覆盖、可使用此功能的设备数量">覆盖设备数</th><th>关联时间</th></tr></thead><tbody>${relationPageRows.length ? relationPageRows.map((relation) => { const machine = relationMachine(relation, item.productLine); return `<tr><td><strong>${escapeHtml(relation.firmwareVersion)}</strong></td><td><code>${escapeHtml(relation.firmwareIdentifier)}</code></td><td>${escapeHtml(relation.productLine || machine.line || item.productLine)}</td><td><span class="relation-machine-cell"><strong>${escapeHtml(machine.name)}</strong><small>${escapeHtml(machine.id)}</small></span></td><td><strong class="coverage-device-count">${relation.coveredDeviceCount.toLocaleString("zh-CN")}</strong> 台</td><td>${escapeHtml(relation.linkedAt || "-")}</td></tr>`; }).join("") : `<tr><td colspan="6"><div class="empty-state compact-empty">${relations.length ? "暂无符合搜索条件的关联记录" : "当前版本暂未关联固件版本"}</div></td></tr>`}</tbody></table></div>
    <div class="relation-pagination"><span>共 ${filteredRelations.length} 条 · 第 ${state.functionReferencePage}/${relationPageCount} 页</span><div><button data-action="function-relation-page" data-page="${state.functionReferencePage - 1}" title="上一页" aria-label="上一页" ${state.functionReferencePage === 1 ? "disabled" : ""}>‹</button><button data-action="function-relation-page" data-page="${state.functionReferencePage + 1}" title="下一页" aria-label="下一页" ${state.functionReferencePage === relationPageCount ? "disabled" : ""}>›</button></div></div>`;
  return `<div class="reference-workspace"><div class="model-section-head reference-section-head"><div><h3>固件关联</h3><p>查看当前 ${version.label} 被固件发布配置关联的记录；涉及机型由固件信息汇总得出。</p></div><div class="reference-statline"><span>涉及机型 <strong>${stats.machineCount}</strong></span><span>固件标识 <strong>${stats.identifierCount}</strong></span><span>固件版本 <strong>${relations.length}</strong></span></div></div>${firmwareContent}</div>`;
}

function functionVersionsContent(item) {
  const selected = workspaceFunctionVersion(item);
  const working = workingFunctionVersion(item);
  const published = latestPublishedVersion(item);
  const versionAction = working
    ? `<div class="working-version-notice"><span>当前正在推进 <strong>${working.label}</strong> · ${functionStatusTag(working.status)}</span></div>`
    : published ? `<button class="btn btn-primary" data-action="function-create-version" data-id="${item.id}" data-version="${published.id}">＋ 创建新版本</button>` : "";
  return `<div class="model-section-head version-history-head"><div><h3>版本历史</h3><p>历史版本以只读快照查看，不会改变当前工作区上下文。</p></div>${versionAction}</div><div class="data-table-wrap"><table class="mini-table version-history-table"><thead><tr><th>版本</th><th>版本角色</th><th>状态</th><th>变更说明</th><th>创建时间</th><th>发布时间</th><th>关联固件</th><th>操作</th></tr></thead><tbody>${item.versions.map((version) => { const role = functionVersionRole(item, version); return `<tr class="${version.id === selected.id ? "active-version-row" : ""}"><td><strong>${version.label}</strong></td><td><span class="version-role ${functionVersionRoleClass(role)}">${role}</span></td><td>${functionStatusTag(version.status)}</td><td>${escapeHtml(version.changelog || "-")}</td><td>${escapeHtml(version.createdAt || "-")}</td><td>${escapeHtml(version.publishedAt || "-")}</td><td>${functionFirmwareRelations(version).length}</td><td><button class="btn btn-text" data-action="function-version-snapshot" data-id="${item.id}" data-version="${version.id}">查看快照</button></td></tr>`; }).join("")}</tbody></table></div>`;
}

function functionVersionSnapshotBody(item, version) {
  const snapshot = activeVersionSnapshot(version);
  const spec = snapshot?.config || getModelSpec(item.id, version.id);
  const role = functionVersionRole(item, version);
  const hardwareNames = spec.hardware.map((id) => assetConfigs.hardware.rows.find((row) => row.id === id)?.name || id);
  const configGroups = [
    ["属性定义", spec.properties.map((entry) => entry.identifier)],
    ["服务定义", spec.services.map((entry) => entry.identifier)],
    ["事件定义", spec.events.map((entry) => entry.identifier)],
    ["关联硬件", hardwareNames],
  ];
  return `<div class="version-snapshot-hero"><div><span>${escapeHtml(item.name)}</span><h3>${version.label} ${functionStatusTag(version.status)}</h3></div><span class="version-role ${functionVersionRoleClass(role)}">${role}</span></div>
    <div class="version-snapshot-meta"><div><span>创建时间</span><strong>${escapeHtml(version.createdAt || "-")}</strong></div><div><span>发布时间</span><strong>${escapeHtml(version.publishedAt || "-")}</strong></div><div><span>关联固件</span><strong>${functionFirmwareRelations(version).length}</strong></div><div><span>配置快照</span><strong>${escapeHtml(snapshot?.id || "实时配置")}</strong></div></div>
    <section class="version-snapshot-section"><h3>版本说明</h3><p>${escapeHtml(version.changelog || "暂无版本说明")}</p></section>
    <section class="version-snapshot-section"><h3>配置快照</h3><div class="version-snapshot-counts"><div><span>属性</span><strong>${spec.properties.length}</strong></div><div><span>服务</span><strong>${spec.services.length}</strong></div><div><span>事件</span><strong>${spec.events.length}</strong></div><div><span>关联硬件</span><strong>${spec.hardware.length}</strong></div></div><div class="snapshot-config-grid">${configGroups.map(([label, entries]) => `<div class="snapshot-config-group"><div><strong>${label}</strong><span>${entries.length} 项</span></div><div class="snapshot-token-list">${entries.length ? entries.map((entry) => `<code>${escapeHtml(entry)}</code>`).join("") : `<span class="snapshot-empty">暂无配置</span>`}</div></div>`).join("")}</div></section>`;
}

function createAssetDraft(type, mode, id) {
  const cfg = assetConfigs[type];
  const existing = cfg.rows.find((row) => row.id === id) || cfg.rows[0];
  const template = categoryMetaFor(type);
  return {
    type,
    mode,
    id,
    name: mode === "edit" || mode === "detail" ? existing.name : "",
    itemType: mode === "edit" || mode === "detail" ? existing.type : "",
    maker: mode === "edit" || mode === "detail" ? existing.maker : "",
    model: mode === "edit" || mode === "detail" ? existing.model : "",
    status: mode === "edit" || mode === "detail" ? existing.status : "启用",
    phone: mode === "edit" || mode === "detail" ? existing.phone || "" : "",
    image: mode === "edit" || mode === "detail" ? existing.image : "",
    parameters: (mode === "new" ? template.parameters || [] : existing.parameters || []).map((row) => ({ ...row })),
    tests: (mode === "new" ? template.tests || [] : existing.tests || []).map((row) => ({ ...row })),
  };
}

function activeEditableDraft() {
  return route().startsWith("/category/") ? state.categoryDraft : state.assetDraft;
}

function assetFormPage(type, mode, id, readOnly = false) {
  const cfg = assetConfigs[type];
  if (!state.assetDraft || state.assetDraft.type !== type || state.assetDraft.mode !== mode || state.assetDraft.id !== id) state.assetDraft = createAssetDraft(type, mode, id);
  const draft = state.assetDraft;
  const disabled = readOnly ? "disabled" : "";
  return `<section class="surface form-page">
    <h2 class="form-section-title">基本信息</h2>
    <div class="form-grid">
      ${formField(`${cfg.itemTitle}名称`, "asset-name", draft.name, "请输入名称", true, disabled)}
      ${selectField("类型", "asset-type", cfg.categories, draft.itemType, true, disabled)}
      ${selectField("生产厂商", "asset-maker", ["威视达康", "TEST", "海思", "瑞芯微"], draft.maker, true, disabled)}
      ${formField(`${cfg.itemTitle}型号`, "asset-model", draft.model, `请输入${cfg.itemTitle}型号`, true, disabled)}
      ${formField("电话号码", "asset-phone", draft.phone, "请输入电话号码", false, disabled)}
      <div class="form-row required"><label>图片</label><div><label class="upload-box">${draft.image ? `<img class="upload-preview" src="${draft.image}" alt="预览">` : `<span><span class="upload-plus">＋</span>点击上传</span>`}<input type="file" accept="image/png,image/jpeg" data-role="asset-upload" ${readOnly ? "disabled" : ""}></label><div class="upload-hint">建议上传110*110px大小的图片<br>支持格式：.jpg .png .jpeg，单个文件不能超过5MB</div></div></div>
    </div>
    ${editableSection("配置参数", "parameter", draft.parameters, readOnly)}
    ${editableSection("配置测试项", "test", draft.tests, readOnly)}
    <div class="form-footer"><button class="btn" data-action="navigate" data-route="${cfg.route}">${readOnly ? "返回" : "取消"}</button>${readOnly ? "" : `<button class="btn btn-primary" data-action="asset-save">完成</button>`}</div>
  </section>`;
}

function createCategoryDraft(type, mode) {
  const cfg = assetConfigs[type];
  const selectedIndex = state.selectedCategory[type];
  const meta = categoryMetaFor(type, selectedIndex);
  return {
    type,
    mode,
    name: mode === "edit" ? cfg.categories[selectedIndex] : "",
    code: mode === "edit" ? meta.code || "" : "",
    description: mode === "edit" ? meta.description || "" : "",
    image: mode === "edit" ? meta.image || "" : "",
    parameters: mode === "edit" ? (meta.parameters || []).map((row) => ({ ...row })) : [],
    tests: mode === "edit" ? (meta.tests || []).map((row) => ({ ...row })) : [],
  };
}

function categoryFormPage(type, mode) {
  const cfg = assetConfigs[type];
  if (!state.categoryDraft || state.categoryDraft.type !== type || state.categoryDraft.mode !== mode) state.categoryDraft = createCategoryDraft(type, mode);
  const draft = state.categoryDraft;
  return `<section class="surface form-page"><h2 class="form-section-title">基本信息</h2><div class="form-grid">${formField("类目名称", "category-name", draft.name, "请输入名称", true)}<div class="form-row required"><label>图片</label><div><label class="upload-box">${draft.image ? `<img class="upload-preview" src="${draft.image}" alt="预览">` : `<span><span class="upload-plus">＋</span>点击上传</span>`}<input type="file" accept="image/png,image/jpeg" data-role="category-upload"></label><div class="upload-hint">建议上传110*110px大小的图片<br>支持格式：.jpg .png .jpeg，单个文件不能超过5MB</div></div></div>${type === "electronic" ? "" : formField("类目编码", "category-code", draft.code, "请输入类目编码(仅支持输入字母和_)", true)}<div class="form-row"><label>说明</label><textarea data-role="category-description" placeholder="请输入类目说明">${escapeHtml(draft.description)}</textarea></div></div>${editableSection("配置参数", "parameter", draft.parameters, false)}${editableSection("配置测试项", "test", draft.tests, false)}<div class="form-footer"><button class="btn" data-action="navigate" data-route="${cfg.route}">取消</button><button class="btn btn-primary" data-action="category-save">完成</button></div></section>`;
}

function formField(label, roleName, value, placeholder, required, disabled = "") {
  return `<div class="form-row ${required ? "required" : ""}"><label>${label}</label><input data-role="${roleName}" value="${escapeHtml(value)}" placeholder="${placeholder}" ${disabled}></div>`;
}

function selectField(label, roleName, options, value, required, disabled = "") {
  return `<div class="form-row ${required ? "required" : ""}"><label>${label}</label><select data-role="${roleName}" ${disabled}><option value="">请选择${label}</option>${options.map((item) => `<option ${item === value ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></div>`;
}

function functionBasicFormFields(item = null, productLine = state.selectedProductLine, includeInitialVersion = false) {
  const line = productLines.includes(productLine) ? productLine : productLines[0];
  return `<section class="modal-form-section"><h3>功能资料</h3><div class="modal-form">${selectField("所属产品线", "modal-function-line", productLines, item?.productLine || line, true, item ? "disabled" : "")}${formField("功能项名称", "modal-function-name", item?.name || "", "请输入功能项名称", true)}${formField("功能标识", "modal-function-identifier", item?.identifier || "", "英文开头，仅支持字母、数字和下划线", true, item ? "disabled" : "")}${selectField("功能分类", "modal-function-category", functionCategories, item?.category || functionCategories[0], true)}<div class="form-row required"><label>功能说明</label><textarea data-role="modal-function-desc" placeholder="简要描述功能用途和使用场景">${escapeHtml(item?.remark || "")}</textarea></div><div class="form-row required"><label>示例图</label><div><label class="upload-box">${state.functionDraftImage || item?.image ? `<img class="upload-preview" src="${state.functionDraftImage || item.image}" alt="预览">` : `<span><span class="upload-plus">＋</span>点击上传</span>`}<input type="file" accept="image/png,image/jpeg" data-role="function-upload"></label><div class="upload-hint">支持 .jpg、.png、.jpeg，建议使用 1:1 图片</div></div></div></div></section>${includeInitialVersion ? `<section class="modal-form-section"><h3>首版信息</h3><div class="modal-form"><div class="form-row"><label>版本号</label><div class="form-static-value"><strong>V1</strong><span>系统自动生成</span></div></div><div class="form-row required"><label>版本说明</label><textarea data-role="modal-initial-version-changelog" placeholder="说明首版提供的能力和适用场景"></textarea></div></div></section>` : ""}`;
}

function globalFunctionDetailBody(capabilityId) {
  const group = functionFamilies().find((entry) => entry.capabilityId === capabilityId);
  if (!group) return `<div class="empty-state">该全局功能已不存在</div>`;
  const primary = functionFamilySource(group);
  return `<div class="global-detail-head"><img src="${primary.image}" alt=""><div><h3>${escapeHtml(primary.name)}</h3><code>${escapeHtml(primary.identifier)}</code><p>${escapeHtml(primary.remark || "-")}</p></div><span class="coverage-count">${group.items.length}/${productLines.length}</span></div><div class="data-table-wrap"><table class="mini-table global-detail-table"><thead><tr><th>产品线</th><th>最新发布</th><th>工作版本</th><th>当前状态</th><th>关联固件</th><th>操作</th></tr></thead><tbody>${group.items.map((item) => { const published = latestPublishedVersion(item); const working = workingFunctionVersion(item); const primaryVersion = working || published || item.versions[0]; const firmwareCount = item.versions.reduce((sum, version) => sum + functionFirmwareRelations(version).length, 0); return `<tr><td><strong>${escapeHtml(item.productLine)}</strong></td><td>${published?.label || "-"}</td><td>${working?.label || "-"}</td><td>${functionStatusTag(primaryVersion?.status || "草稿")}</td><td>${firmwareCount}</td><td><button class="btn btn-text" data-action="function-detail" data-id="${item.id}">进入详情</button></td></tr>`; }).join("")}</tbody></table></div>`;
}

function editableSection(title, kind, rows, readOnly) {
  const isTest = kind === "test";
  const addAction = isTest ? "asset-test-add" : "draft-row-add";
  return `<div class="editable-section"><div class="editable-section-head"><h2 class="form-section-title">${title}</h2>${readOnly ? "" : `<button class="btn btn-primary" data-action="${addAction}" data-kind="${kind}">＋ 添加${isTest ? "测试项" : "参数"}</button>`}</div><div class="data-table-wrap"><table class="mini-table ${isTest ? "test-table" : ""}"><thead><tr>${(isTest ? testColumns : ["参数名", "中文名", "参数类型", "备注", "操作"]).map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.length ? rows.map((row, index) => isTest ? testDraftRow(row, index, readOnly) : parameterDraftRow(row, index, readOnly)).join("") : `<tr><td colspan="${isTest ? testColumns.length : 5}"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div></div>`;
}

function parameterDraftRow(row, index, readOnly) {
  const disabled = readOnly ? "disabled" : "";
  return `<tr><td><input data-role="draft-cell" data-kind="parameter" data-index="${index}" data-field="key" value="${escapeHtml(row.key || "")}" ${disabled}></td><td><input data-role="draft-cell" data-kind="parameter" data-index="${index}" data-field="label" value="${escapeHtml(row.label || "")}" ${disabled}></td><td><select data-role="draft-cell" data-kind="parameter" data-index="${index}" data-field="type" ${disabled}>${["字符型（String）", "整数型（Int）", "布尔型（Boolean）", "浮点型（Float）"].map((type) => `<option ${row.type === type ? "selected" : ""}>${type}</option>`).join("")}</select></td><td><input data-role="draft-cell" data-kind="parameter" data-index="${index}" data-field="remark" value="${escapeHtml(row.remark || "")}" ${disabled}></td><td>${readOnly ? "-" : `<button class="btn btn-text" data-action="draft-row-remove" data-kind="parameter" data-index="${index}">删除</button>`}</td></tr>`;
}

function testDraftRow(row, index, readOnly) {
  return `<tr><td>${escapeHtml(row.key || "-")}</td><td>${escapeHtml(row.label || "-")}</td><td>${escapeHtml(row.expected || "-")}</td><td>${row.wait || 1000}</td><td>${escapeHtml(row.manual || "否")}</td><td>${escapeHtml(row.write || "否")}</td><td>${escapeHtml(row.jsonPath || "-")}</td><td>${escapeHtml(row.url || "-")}</td><td>${escapeHtml(row.requestType || "-")}</td><td>${escapeHtml(row.headers || "-")}</td><td>${escapeHtml(row.body || "-")}</td><td>${escapeHtml(row.remark || "-")}</td>${readOnly ? "" : `<td><button class="btn btn-text" data-action="asset-test-edit" data-index="${index}">编辑</button><button class="btn btn-text danger-text" data-action="draft-row-remove" data-kind="test" data-index="${index}">删除</button></td>`}</tr>`;
}

function configTestRow(row, index) {
  return `<tr><td>${escapeHtml(row.key || "-")}</td><td>${escapeHtml(row.label || "-")}</td><td>${escapeHtml(row.expected || "-")}</td><td>${row.wait || 1000}</td><td>${escapeHtml(row.manual || "否")}</td><td>${escapeHtml(row.write || "否")}</td><td>${escapeHtml(row.jsonPath || "-")}</td><td>${escapeHtml(row.url || "-")}</td><td>${escapeHtml(row.requestType || "-")}</td><td>${escapeHtml(row.headers || "-")}</td><td>${escapeHtml(row.body || "-")}</td><td>${escapeHtml(row.remark || "-")}</td><td><button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="test" data-index="${index}">删除</button></td></tr>`;
}

function machineConfigPage() {
  const machineId = route().split("/")[3] || machines[0]?.id;
  const machine = machines.find((item) => item.id === machineId) || machines[0];
  const tab = state.configTab;
  return `<section class="surface config-page">
    <div class="detail-banner config-banner"><img class="banner-icon" src="${machine.image}" alt=""><div class="banner-copy"><h2>${machine.name}　<span class="status-tag">${machine.status}</span></h2><div class="banner-meta"><span>PID： <strong>2075094162087653377</strong></span><span>创建时间： <strong>2026-07-09 13:46:16</strong></span><span>网络类型： <strong>${machine.network}</strong></span><span>电量类型： <strong>${machine.power}</strong></span><span>所属架构： <strong>${escapeHtml(machine.arch || "新架构")}</strong></span><span>所属产线： <strong>${machine.line}</strong></span><span>机型密钥： <strong>-</strong></span><span>说明： <strong>${escapeHtml(machine.description || "-")}</strong></span></div></div><div class="banner-actions"><button class="btn" data-action="logs-open">▣ 操作日志</button><button class="btn" data-action="more-open" data-id="${machine.id}">⋯ 更多</button></div></div>
    <div class="config-tabs">${[["hardware", "硬件配置"], ["function", "功能配置"], ["parameter", "参数配置"], ["test", "测试项配置"]].map(([id, label]) => `<button class="${tab === id ? "active" : ""}" data-action="config-tab" data-tab="${id}">${label}</button>`).join("")}</div>
    <div class="config-content">${configTabContent(tab, machine)}</div>
    <div class="config-footer"><button class="btn btn-primary" data-action="config-save">保存</button><button class="btn" data-action="config-preview">预览配置</button></div>
  </section>`;
}

function configHardwareCandidates(category) {
  if (category === "PCBA") {
    return [
      { name: "BABY_PCBA", type: "低功耗Wi-Fi", maker: "维拍物联", main: true },
      { name: "BKW8-C灯板", type: "灯板", maker: "维拍物联", main: false },
      { name: "KH_主控板V1.0", type: "低功耗Wi-Fi", maker: "维拍物联", main: true },
      { name: "PCBA测试测试项", type: "低功耗Wi-Fi", maker: "威视达康", main: true },
    ];
  }
  return assetConfigs.hardware.rows.map((row) => ({ name: row.name, type: row.type, maker: row.maker, main: false }));
}

function configHardwareCards(item, index) {
  const query = state.configHardwareSearch.toLowerCase();
  const candidates = configHardwareCandidates(item.category).filter((candidate) => {
    const filterMatches = state.configHardwareFilter === "不限"
      || (state.configHardwareFilter === "主板" ? candidate.main : candidate.type === state.configHardwareFilter);
    const searchMatches = !query || `${candidate.name}${candidate.type}${candidate.maker}`.toLowerCase().includes(query);
    return filterMatches && searchMatches;
  });
  return candidates.length
    ? `<div class="hardware-choice-grid">${candidates.map((candidate) => `<button class="hardware-choice-card ${item.model === candidate.name ? "selected" : ""}" data-action="config-hardware-pick" data-index="${index}" data-model="${escapeHtml(candidate.name)}"><span class="choice-check">${item.model === candidate.name ? "✓" : ""}</span><strong>${escapeHtml(candidate.name)}</strong>${candidate.main ? `<span class="main-board-tag">主板</span>` : ""}<span>类型：${escapeHtml(candidate.type)}</span><span>生产厂商：${escapeHtml(candidate.maker)}</span></button>`).join("")}</div>`
    : `<div class="empty-state">暂无符合筛选条件的硬件型号</div>`;
}

function configTabContent(tab) {
  if (tab === "hardware") {
    const configured = state.configHardware.filter((item) => item.model).length;
    return `<div class="info-strip">ⓘ 首先根据当前的机型型号信息进行选择添加硬件类目，再选择硬件类目对应的硬件列表去配置，组成完整的机型硬件BOM物料清单；</div><div class="config-controls"><button class="btn btn-primary" data-action="config-category-add">＋ 添加类目</button><span>已配置 ${configured} 项</span><button class="btn btn-text" data-action="config-clear">全部清除</button></div>${state.configHardware.length ? state.configHardware.map((item, index) => `<div class="category-config-row"><strong>${escapeHtml(item.category)} <span style="color:#ed5b5b">*</span></strong><button class="choose-card ${item.model ? "selected" : ""}" data-action="config-choose" data-index="${index}">${item.model ? escapeHtml(item.model) : "请点击选择"} <span>›</span></button><div class="config-filter-panel"><h3>请选择　${escapeHtml(item.category)}<span style="color:#ed5b5b">*</span></h3><div class="searchbox"><input data-role="config-hardware-search" data-index="${index}" value="${escapeHtml(state.configHardwareSearch)}" placeholder="请输入型号名称，按enter搜索"></div><div class="inline-filter"><span>${escapeHtml(item.category)}类型：</span>${["不限", "CCD", "镜头板", "低功耗Wi-Fi", "常电WIFI", "灯板", "MINI", "AI_4G", "功能板", "低功耗4G", "主板"].map((value) => `<button class="btn btn-text ${state.configHardwareFilter === value ? "active-filter" : ""}" data-action="config-filter" data-filter="${value}">${value}</button>`).join("")}</div><div class="config-rule">ⓘ ${escapeHtml(item.category)}仅支持配置1个主板${escapeHtml(item.category)}</div>${configHardwareCards(item, index)}</div><button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="hardware" data-index="${index}">移除类目</button></div>`).join("") : `<div class="empty-state">暂未添加硬件类目</div>`}`;
  }
  if (tab === "function") {
    const rows = state.configFunctions.map((binding, index) => {
      const normalized = typeof binding === "string" ? { functionId: binding, versionId: "" } : binding;
      const item = functions.find((entry) => entry.id === normalized.functionId);
      const version = item?.versions.find((entry) => entry.id === normalized.versionId) || latestPublishedVersion(item);
      return { item, version, index };
    }).filter((row) => row.item && row.version);
    return `<div class="info-strip">ⓘ 机型绑定明确的已发布功能版本，新版本发布后不会自动替换当前配置。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-function-add">＋ 添加功能</button><span>已配置 ${rows.length} 项</span></div><div class="data-table-wrap"><table class="mini-table"><thead><tr><th>功能名称</th><th>产品线</th><th>功能分类</th><th>绑定版本</th><th>版本状态</th><th>操作</th></tr></thead><tbody>${rows.length ? rows.map(({ item, version, index }) => `<tr><td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.productLine)}</td><td>${escapeHtml(item.category)}</td><td><strong>${version.label}</strong></td><td>${functionStatusTag(version.status)}</td><td><button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="function" data-index="${index}">删除</button></td></tr>`).join("") : `<tr><td colspan="6"><div class="empty-state">暂未配置功能</div></td></tr>`}</tbody></table></div>`;
  }
  if (tab === "parameter") return `<div class="info-strip">ⓘ 参数配置会随机型发布并用于设备能力描述。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-param-add">＋ 添加参数</button><span>已配置 ${state.configParameters.length} 项</span></div><div class="data-table-wrap"><table class="mini-table"><thead><tr><th>参数名</th><th>中文名</th><th>参数类型</th><th>默认值</th><th>操作</th></tr></thead><tbody>${state.configParameters.length ? state.configParameters.map((item, index) => `<tr><td>${escapeHtml(item.key)}</td><td>${escapeHtml(item.label)}</td><td>${item.type}</td><td>${escapeHtml(item.defaultValue)}</td><td><button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="parameter" data-index="${index}">删除</button></td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
  return `<div class="info-strip">ⓘ 配置生产测试项、等待时间和检测方式，用于出厂检测。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-test-add">＋ 添加测试项</button><span>已配置 ${state.configTests.length} 项</span></div><div class="data-table-wrap"><table class="mini-table test-table"><thead><tr>${testColumns.map((title) => `<th>${title}</th>`).join("")}</tr></thead><tbody>${state.configTests.length ? state.configTests.map(configTestRow).join("") : `<tr><td colspan="${testColumns.length}"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
}

function createModelDraft(kind = "property", row = null) {
  const dataType = row?.dataType || "枚举型(Enum)";
  const dataSpec = parseModelDataSpec(dataType, row?.dataDefinition, row?.dataSpec);
  return {
    kind,
    name: row?.name || "",
    identifier: row?.identifier || "",
    dataType,
    dataSpec,
    dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
    defaultValue: row?.defaultValue === undefined || row?.defaultValue === null ? "" : String(row.defaultValue),
    access: row?.access || "只读",
    callType: row?.callType || "同步",
    inputParams: normalizeModelParameterList(row?.inputParams, true),
    outputParams: normalizeModelParameterList(row?.outputParams),
    description: row?.description || "",
  };
}

function modelDataSpecEditor(dataType, dataSpecValue, context = {}) {
  const dataSpec = parseModelDataSpec(dataType, "", dataSpecValue);
  let fieldRole = "modal-model-spec";
  let enumRole = "modal-model-enum";
  let shared = "";
  let actionContext = ` data-scope="property"`;
  if (context.scope === "parameter-dialog") {
    fieldRole = "model-param-dialog-spec";
    enumRole = "model-param-dialog-enum";
    actionContext = ` data-scope="parameter-dialog"`;
  } else if (context.scope === "struct-field") {
    fieldRole = "model-struct-spec";
    enumRole = "model-struct-enum";
    shared = ` data-owner="${context.ownerScope}" data-struct-index="${context.structIndex}"`;
    actionContext = ` data-scope="struct-field" data-owner="${context.ownerScope}" data-struct-index="${context.structIndex}"`;
  }
  const field = (label, key, value, placeholder = "", type = "text", limits = "") => `<label><span>${label}</span><input type="${type}" data-role="${fieldRole}"${shared} data-field="${key}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" ${limits}></label>`;

  if (dataType === "枚举型(Enum)") {
    return `<div class="model-data-spec-editor model-enum-editor"><div class="model-spec-caption"><strong>枚举值</strong><span>值和名称均必填，枚举值不可重复</span></div><div class="model-enum-list">${dataSpec.enumItems.map((item, enumIndex) => `<div class="model-enum-row"><input data-role="${enumRole}"${shared} data-enum-index="${enumIndex}" data-field="value" value="${escapeHtml(item.value)}" placeholder="枚举值，如 0"><input data-role="${enumRole}"${shared} data-enum-index="${enumIndex}" data-field="label" value="${escapeHtml(item.label)}" placeholder="参数描述，如关闭"><button type="button" class="model-param-delete" data-action="model-enum-remove"${actionContext} data-enum-index="${enumIndex}" title="删除枚举值" aria-label="删除枚举值">×</button></div>`).join("")}</div><button type="button" class="btn btn-text model-spec-add" data-action="model-enum-add"${actionContext}>＋ 添加参数</button></div>`;
  }
  if (["整数型(Int)", "浮点型(float)"].includes(dataType)) {
    const stepExample = dataType === "整数型(Int)" ? "例如 1" : "例如 0.1";
    return `<div class="model-data-spec-editor"><div class="model-spec-caption"><strong>数值范围</strong><span>最小值、最大值和步长均必填</span></div><div class="model-spec-grid">${field("最小值", "min", dataSpec.min, "例如 0", "number")}${field("最大值", "max", dataSpec.max, "例如 100", "number")}${field("步长", "step", dataSpec.step, stepExample, "number", 'min="0"')}${field("单位（可选）", "unit", dataSpec.unit, "例如 %、℃")}</div></div>`;
  }
  if (dataType === "布尔型(Bool)") {
    return `<div class="model-data-spec-editor"><div class="model-spec-caption"><strong>布尔值定义</strong><span>固定使用 0 和 1</span></div><div class="model-spec-grid">${field("布尔值 0", "falseLabel", dataSpec.falseLabel, "例如关闭")}${field("布尔值 1", "trueLabel", dataSpec.trueLabel, "例如开启")}</div></div>`;
  }
  if (dataType === "字符型(String)") {
    return `<div class="model-data-spec-editor"><div class="model-spec-caption"><strong>字符串约束</strong><span>长度限制 1~10240</span></div><div class="model-spec-grid single">${field("最大长度", "maxLength", dataSpec.maxLength, "例如 64", "number", 'min="1" max="10240"')}</div></div>`;
  }
  if (dataType === "数组型(array)") {
    return `<div class="model-data-spec-editor"><div class="model-spec-caption"><strong>数组约束</strong><span>元素数量限制 1~512，暂不支持嵌套结构</span></div><div class="model-spec-grid"><label><span>元素类型</span><select data-role="${fieldRole}"${shared} data-field="elementType">${MODEL_ARRAY_ELEMENT_TYPES.map((type) => `<option value="${type}" ${type === dataSpec.elementType ? "selected" : ""}>${type}</option>`).join("")}</select></label>${field("元素个数上限", "maxItems", dataSpec.maxItems, "例如 10", "number", 'min="1" max="512"')}</div></div>`;
  }
  if (dataType === "时间型(timestamp)") {
    return `<div class="model-data-spec-editor"><div class="model-spec-caption"><strong>时间格式</strong><span>使用 Unix UTC 时间戳</span></div><div class="model-spec-grid single"><label><span>时间戳单位</span><select data-role="${fieldRole}"${shared} data-field="timestampUnit">${MODEL_TIMESTAMP_UNITS.map((unit) => `<option value="${unit}" ${unit === dataSpec.timestampUnit ? "selected" : ""}>${unit}</option>`).join("")}</select></label></div></div>`;
  }
  const ownerScope = context.scope === "parameter-dialog" ? "parameter-dialog" : "property";
  return `<div class="model-data-spec-editor model-struct-editor"><div class="model-spec-caption"><strong>结构体字段</strong><span>暂不支持结构体或数组嵌套</span></div><div class="model-struct-list">${dataSpec.fields.length ? dataSpec.fields.map((item, index) => `<div class="model-struct-row"><div class="model-struct-fields"><label><span>字段名称</span><input data-role="model-struct-field" data-owner="${ownerScope}" data-struct-index="${index}" data-field="name" maxlength="50" value="${escapeHtml(item.name)}" placeholder="请输入字段名称"></label><label><span>标识符</span><input data-role="model-struct-field" data-owner="${ownerScope}" data-struct-index="${index}" data-field="identifier" maxlength="50" value="${escapeHtml(item.identifier)}" placeholder="field_id"></label><label><span>数据类型</span><select data-role="model-struct-field" data-owner="${ownerScope}" data-struct-index="${index}" data-field="dataType">${MODEL_STRUCT_FIELD_TYPES.map((type) => `<option ${type === item.dataType ? "selected" : ""}>${type}</option>`).join("")}</select></label></div><button type="button" class="model-param-delete" data-action="model-struct-remove" data-owner="${ownerScope}" data-struct-index="${index}" title="删除字段" aria-label="删除字段">×</button>${modelDataSpecEditor(item.dataType, item.dataSpec, { scope: "struct-field", ownerScope, structIndex: index })}</div>`).join("") : `<div class="model-param-empty">暂未添加结构体字段</div>`}</div><button type="button" class="btn btn-text model-spec-add" data-action="model-struct-add" data-owner="${ownerScope}">＋ 添加字段</button></div>`;
}

function createModelParameterDraft(row = null, allowDefaultValue = false) {
  const normalized = normalizeModelParameterList(row ? [row] : [{ name: "", identifier: "", dataType: "字符型(String)" }], allowDefaultValue)[0];
  return { ...normalized, required: allowDefaultValue ? normalized.required : true, defaultValue: allowDefaultValue ? normalized.defaultValue : "" };
}

function modelParameterSummary(value, allowDefaultValue) {
  if (!allowDefaultValue) return "无默认值";
  if (value.required) return "必填";
  return value.defaultValue === "" ? "可选 · 未设置默认值" : `可选 · 默认值 ${value.defaultValue}`;
}

function modelParameterEditor(label, direction, values, allowDefaultValue = false) {
  return `<section class="model-param-group"><div class="model-param-head"><div><strong>${label}</strong><span>${values.length} 项</span></div><button type="button" class="btn btn-text" data-action="model-param-add" data-param="${direction}" data-allow-default="${allowDefaultValue}">＋ 添加参数</button></div>${values.length ? `<div class="model-param-summary-list">${values.map((value, index) => `<div class="model-param-summary-row"><div class="model-param-identity"><strong>${escapeHtml(value.name || "未命名参数")}</strong><code>${escapeHtml(value.identifier || "未填写标识符")}</code></div><div class="model-param-type"><span>${escapeHtml(value.dataType)}</span><small>${escapeHtml(value.dataDefinition || "待完善数据定义")}</small></div><span class="model-param-rule">${escapeHtml(modelParameterSummary(value, allowDefaultValue))}</span><div class="model-param-actions"><button type="button" class="btn btn-text" data-action="model-param-edit" data-param="${direction}" data-index="${index}" data-allow-default="${allowDefaultValue}">编辑</button><button type="button" class="btn btn-text danger-text" data-action="model-param-remove" data-param="${direction}" data-index="${index}">删除</button></div></div>`).join("")}</div>` : `<div class="model-param-empty">暂无参数</div>`}</section>`;
}

function modelCountedField(label, roleName, value, placeholder, required = true, maxLength = 50) {
  return `<div class="form-row model-counted-field ${required ? "required" : ""}"><label>${label}</label><div><input data-role="${roleName}" maxlength="${maxLength}" value="${escapeHtml(value)}" placeholder="${placeholder}"><small class="field-counter">${String(value || "").length} / ${maxLength}</small></div></div>`;
}

function modelDefaultValueField(roleName, value, dataType, placeholder) {
  const maxLength = 10240;
  const text = String(value || "");
  const input = ["数组型(array)", "结构体(struct)"].includes(dataType)
    ? `<textarea data-role="${roleName}" maxlength="${maxLength}" placeholder="${placeholder}">${escapeHtml(text)}</textarea>`
    : `<input data-role="${roleName}" maxlength="${maxLength}" value="${escapeHtml(text)}" placeholder="${placeholder}">`;
  return `<div class="form-row model-counted-field"><label>默认值（可选）</label><div>${input}<small class="field-counter">${text.length} / ${maxLength}</small></div></div>`;
}

function modelChoiceField(label, action, value, options) {
  return `<div class="form-row required"><label>${label}</label><div class="model-type-switch model-choice-switch">${options.map((option) => `<button type="button" class="${value === option ? "active" : ""}" data-action="${action}" data-value="${option}">${option}</button>`).join("")}</div></div>`;
}

function modelParameterDialog(modal) {
  const editor = modal.paramEditor;
  if (!editor) return "";
  const draft = editor.draft;
  const defaultField = editor.allowDefaultValue
    ? draft.required
      ? `<div class="model-inline-note">必填参数由调用方传值，不配置默认值。</div>`
      : modelDefaultValueField("model-param-dialog-default", draft.defaultValue, draft.dataType, "未传入参数时使用")
    : "";
  return `<div class="model-param-dialog-backdrop" data-action="model-param-dialog-close"><section class="model-param-dialog" role="dialog" aria-modal="true" aria-label="${Number.isInteger(editor.index) ? "编辑参数" : "添加参数"}"><div class="modal-header"><div><h2>${Number.isInteger(editor.index) ? "编辑参数" : "添加参数"}</h2><span>${editor.direction === "inputParams" ? "输入参数" : "输出参数"}</span></div><button class="modal-close" data-action="model-param-dialog-close" title="关闭">×</button></div><div class="modal-body">${editor.typeResetNotice ? `<div class="warning-strip model-reset-warning">数据类型已切换，原数据定义和默认值已重置。</div>` : ""}<div class="modal-form model-param-dialog-form">${modelCountedField("参数名称", "model-param-dialog-name", draft.name, "请输入参数名称", true, 50)}${modelCountedField("标识符", "model-param-dialog-identifier", draft.identifier, "请输入英文标识符", true, 50)}${selectField("数据类型", "model-param-dialog-data-type", MODEL_DATA_TYPES, draft.dataType, true)}${modelDataSpecEditor(draft.dataType, draft.dataSpec, { scope: "parameter-dialog" })}${editor.allowDefaultValue ? modelChoiceField("是否必填", "model-param-required", draft.required ? "必填" : "可选", ["必填", "可选"]) : ""}${defaultField}</div></div><div class="modal-footer"><button class="btn" data-action="model-param-dialog-close">取消</button><button class="btn btn-primary" data-action="model-param-save">完成</button></div></section></div>`;
}

function modelFormBody(modal) {
  const draft = modal.draft;
  const common = `${modal.typeResetNotice ? `<div class="warning-strip model-reset-warning">数据类型已切换，原数据定义和默认值已重置；取消本次编辑可放弃该变更。</div>` : ""}${modelCountedField("物模型名称", "modal-model-name", draft.name, "请输入物模型名称", true, 50)}${modelCountedField("标识符", "modal-model-identifier", draft.identifier, "请输入物模型英文标识符", true, 50)}<div class="form-row required"><label>物模型类型</label><div class="model-type-switch">${[["property", "属性"], ["service", "服务"], ["event", "事件"]].map(([kind, label]) => `<button type="button" class="${draft.kind === kind ? "active" : ""}" data-action="model-kind" data-kind="${kind}">${label}</button>`).join("")}</div></div>`;
  let specific = "";
  if (draft.kind === "property") {
    const defaultField = draft.access === "只读"
      ? `<div class="model-inline-note property-default-note">只读属性由设备上报，不配置默认值。</div>`
      : modelDefaultValueField("modal-model-default", draft.defaultValue, draft.dataType, "请输入符合数据定义的默认值");
    specific = `${selectField("数据类型", "modal-model-data-type", MODEL_DATA_TYPES, draft.dataType, true)}${modelDataSpecEditor(draft.dataType, draft.dataSpec, { scope: "property" })}${modelChoiceField("访问权限", "model-access", draft.access, ["只读", "读写", "只写"])}${defaultField}`;
  } else if (draft.kind === "service") {
    specific = `${modelParameterEditor("输入参数", "inputParams", draft.inputParams, true)}${modelParameterEditor("输出参数", "outputParams", draft.outputParams)}${modelChoiceField("调用方式", "model-call-type", draft.callType, ["同步", "异步"])}`;
  } else {
    specific = modelParameterEditor("输出参数", "outputParams", draft.outputParams);
  }
  return `<div class="modal-form model-drawer-form">${common}${specific}<div class="form-row model-counted-field"><label>备注</label><div><textarea data-role="modal-model-description" maxlength="200" placeholder="请输入备注说明">${escapeHtml(draft.description)}</textarea><small class="field-counter">${String(draft.description || "").length} / 200</small></div></div></div>${modelParameterDialog(modal)}`;
}

function testRowsTable(rows, readOnly = true) {
  return `<div class="data-table-wrap"><table class="mini-table test-table"><thead><tr>${testColumns.slice(0, readOnly ? -1 : undefined).map((title) => `<th>${title}</th>`).join("")}</tr></thead><tbody>${rows.length ? rows.map((row, index) => testDraftRow(row, index, readOnly)).join("") : `<tr><td colspan="${readOnly ? testColumns.length - 1 : testColumns.length}"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
}

function assetDetailBody(type, row) {
  const cfg = assetConfigs[type];
  const parameters = row.parameters || [];
  const tests = row.tests || [];
  return `<div class="asset-detail-head"><img class="banner-icon" src="${row.image}" alt=""><div><h2>${escapeHtml(row.name)}　<span class="status-tag">${row.status}</span></h2><div class="asset-detail-actions"><button class="btn" data-action="asset-detail-edit" data-type="${type}" data-id="${row.id}">编辑</button><button class="btn" data-action="asset-status-toggle" data-type="${type}" data-id="${row.id}">${row.status === "启用" ? "停用" : "启用"}</button></div></div></div><div class="banner-meta asset-detail-meta"><span>类型：<strong>${escapeHtml(row.type)}</strong></span><span>生产厂商：<strong>${escapeHtml(row.maker)}</strong></span><span>型号：<strong>${escapeHtml(row.model)}</strong></span><span>机型引用次数：<strong>${row.refs}</strong></span><span>创建时间：<strong>2026-05-14 17:46:00</strong></span><span>电话号码：<strong>${escapeHtml(row.phone || "-")}</strong></span></div><div class="asset-detail-section"><h3>配置参数</h3><div class="data-table-wrap"><table class="mini-table"><thead><tr><th>参数名</th><th>中文名</th><th>参数类型</th><th>参数属性</th><th>备注</th></tr></thead><tbody>${parameters.length ? parameters.map((entry) => `<tr><td>${escapeHtml(entry.key)}</td><td>${escapeHtml(entry.label)}</td><td>${escapeHtml(entry.type)}</td><td>${escapeHtml(entry.attribute || "-")}</td><td>${escapeHtml(entry.remark || "-")}</td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div></div><div class="asset-detail-section"><h3>测试项</h3>${testRowsTable(tests, true)}</div>`;
}

function testFormBody(row = {}, scope = "asset") {
  const role = (field) => `modal-${scope}-test-${field}`;
  return `<div class="modal-form">${formField("测试项", role("key"), row.key || "", "请输入测试项", true)}${formField("中文名", role("label"), row.label || "", "请输入中文名", true)}${formField("要求值", role("expected"), row.expected || "", "请输入要求值", true)}${formField("等待时间（ms）", role("wait"), row.wait || "1000", "请输入等待时间", true)}${selectField("是否需要人工检测", role("manual"), ["否", "人工检测"], row.manual || "否", true)}${selectField("是否需要写入", role("write"), ["否", "是"], row.write || "否", true)}${formField("JSON提取路径", role("json-path"), row.jsonPath || "", "请输入获取测试结果的JSON提取路径", true)}${formField("请求URL", role("url"), row.url || "", "请输入请求URL", true)}${selectField("请求类型", role("request-type"), ["GET", "POST", "PUT", "DELETE"], row.requestType || "GET", true)}${formField("请求头参数", role("headers"), row.headers || "{}", "请输入请求头参数", true)}${formField("请求体", role("body"), row.body || "{}", "请输入请求体", true)}${formField("备注", role("remark"), row.remark || "", "请输入备注", false)}</div>`;
}

function renderModal() {
  const modal = state.modal;
  if (!modal) return "";
  let title = "";
  let body = "";
  let footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">确认</button>`;
  let wide = false;
  let drawer = false;
  let modelDrawer = false;

  if (modal.type === "machine-form") {
    const machine = modal.id ? machines.find((m) => m.id === modal.id) : null;
    title = modal.id ? "编辑机型" : "新增机型";
    body = `<div class="modal-form">${formField("机型名称", "modal-machine-name", machine?.name || "", "产品线-设备类型-版本-型号，示例：IPC-低功耗4G-V1-B001", true)}<div class="form-row required"><label>机型图片</label><div><label class="upload-box">${state.machineDraftImage || machine?.image ? `<img class="upload-preview" src="${state.machineDraftImage || machine.image}" alt="">` : `<span><span class="upload-plus">＋</span>点击上传</span>`}<input type="file" accept="image/png,image/jpeg" data-role="machine-upload"></label><div class="upload-hint">建议上传110*110px大小的图片<br>支持格式：.jpg .png .jpeg，单个文件不能超过5MB</div></div></div>${selectField("所属产线", "modal-machine-line", productLines, machine?.line || "IPC", true)}${selectField("网络类型", "modal-machine-network", ["仅wifi", "仅4G", "wifi + 4G", "网线 + 4G", "网线 + wifi", "仅网线"], machine?.network || "仅wifi", true)}<div class="form-row required"><label>电量类型</label><div class="radio-row"><label><input type="radio" name="modal-power" value="常电" ${machine?.power !== "低功耗" ? "checked" : ""}> 常电</label><label><input type="radio" name="modal-power" value="低功耗" ${machine?.power === "低功耗" ? "checked" : ""}> 低功耗</label></div></div>${selectField("所属架构", "modal-machine-arch", ["原架构", "新架构"], machine?.arch || "原架构", true)}<div class="form-row"><label>机型说明</label><textarea data-role="modal-machine-desc" placeholder="请输入机型说明">${escapeHtml(machine?.description === "-" ? "" : machine?.description || "")}</textarea></div></div>`;
  } else if (modal.type === "confirm-delete") {
    title = "删除机型";
    body = `<div class="confirm-copy">确定删除机型“${escapeHtml(modal.name)}”吗？删除后将无法恢复。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-danger" data-action="modal-confirm">删除</button>`;
  } else if (modal.type === "category-form") {
    const cfg = modal.assetType === "function" ? { categoryTitle: "产品类" } : assetConfigs[modal.assetType];
    title = modal.assetType === "function" ? `${modal.edit ? "编辑" : "新增"}类目` : `${modal.edit ? "编辑" : "新增"}${cfg.categoryTitle}`;
    const selectedName = modal.assetType === "function" ? functionCategories[state.selectedCategory.function] : assetConfigs[modal.assetType].categories[state.selectedCategory[modal.assetType]];
    const selectedMeta = categoryMetaFor(modal.assetType, state.selectedCategory[modal.assetType]);
    body = `<div class="modal-form">${formField("类目名称", "modal-category-name", modal.edit ? selectedName : "", modal.assetType === "function" ? "请输入功能类的名称" : "请输入类目名称", true)}${modal.assetType === "electronic" || modal.assetType === "function" ? "" : formField("编码类目", "modal-category-code", modal.edit ? selectedMeta.code || "" : "", "请输入编码类目", true)}<div class="form-row ${modal.assetType === "function" ? "required" : ""}"><label>${modal.assetType === "function" ? "备注" : "说明"}</label><textarea data-role="modal-category-desc" placeholder="${modal.assetType === "function" ? "请输入该功能类型的备注说明，例如AI服务类的功能" : "请输入说明"}">${modal.edit ? escapeHtml(modal.assetType === "function" ? selectedMeta.remark || "" : selectedMeta.description || "") : ""}</textarea></div></div>`;
  } else if (modal.type === "template") {
    title = "参数模版";
    wide = true;
    drawer = true;
    body = `<div class="asset-detail-section"><h3>配置参数</h3><div class="data-table-wrap"><table class="mini-table"><thead><tr><th>参数名</th><th>中文名</th><th>参数类型</th><th>参数属性</th><th>备注</th></tr></thead><tbody>${state.templateRows.length ? state.templateRows.map((row) => `<tr><td>${escapeHtml(row.key)}</td><td>${escapeHtml(row.label)}</td><td>${escapeHtml(row.type)}</td><td>${escapeHtml(row.attribute || "-")}</td><td>${escapeHtml(row.remark || "-")}</td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div></div><div class="asset-detail-section"><h3>测试项配置</h3>${testRowsTable(state.templateTests, true)}</div>`;
    footer = "";
  } else if (modal.type === "refs") {
    title = "机型引用详情";
    wide = true;
    body = modal.refs ? `<table class="mini-table"><thead><tr><th>机型名称</th><th>产品线</th><th>状态</th><th>引用时间</th></tr></thead><tbody>${machines.slice(0, Math.min(modal.refs, 4)).map((m) => `<tr><td>${m.name}</td><td>IPC</td><td>${m.status}</td><td>2026-07-09 13:46:16</td></tr>`).join("")}</tbody></table>` : `<div class="empty-state">暂无机型引用</div>`;
    footer = `<button class="btn btn-primary" data-action="modal-close">知道了</button>`;
  } else if (modal.type === "asset-detail") {
    const cfg = assetConfigs[modal.assetType];
    const row = cfg.rows.find((item) => item.id === modal.id);
    title = "详情";
    wide = true;
    drawer = true;
    body = row ? assetDetailBody(modal.assetType, row) : `<div class="empty-state">该${cfg.itemTitle}已不存在</div>`;
    footer = "";
  } else if (modal.type === "asset-test-form") {
    const row = Number.isInteger(modal.index) ? activeEditableDraft()?.tests[modal.index] : null;
    title = row ? "编辑测试项" : "添加测试项";
    drawer = true;
    body = testFormBody(row || {});
  } else if (modal.type === "asset-status-confirm") {
    const cfg = assetConfigs[modal.assetType];
    const row = cfg.rows.find((item) => item.id === modal.id);
    title = row?.status === "启用" ? `停用${cfg.itemTitle}` : `启用${cfg.itemTitle}`;
    body = `<div class="confirm-copy">确认将“${escapeHtml(row?.name || "") }”状态变更为“${row?.status === "启用" ? "停用" : "启用"}”吗？</div>`;
  } else if (modal.type === "function-create-entry") {
    title = "新增功能";
    wide = true;
    body = functionBasicFormFields(null, modal.targetLine, true);
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">创建 V1 并进入配置</button>`;
  } else if (modal.type === "function-global-detail") {
    title = "全局功能详情";
    wide = true;
    drawer = true;
    body = globalFunctionDetailBody(modal.capabilityId);
    const group = functionFamilies().find((entry) => entry.capabilityId === modal.capabilityId);
    const source = group?.items.find((item) => latestPublishedVersion(item) && availableTargetLines(item).length);
    footer = `<button class="btn" data-action="modal-close">关闭</button>${source ? `<button class="btn btn-primary" data-action="function-copy-crossline" data-id="${source.id}" data-version="${latestPublishedVersion(source).id}">复制到其他产品线</button>` : ""}`;
  } else if (modal.type === "function-cross-line-copy") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item?.versions.find((entry) => entry.id === modal.versionId) || latestPublishedVersion(item);
    const targets = item ? availableTargetLines(item) : [];
    const targetLine = targets.includes(modal.targetLine) ? modal.targetLine : targets[0];
    const spec = item && version ? getModelSpec(item.id, version.id) : { properties: [], services: [], events: [] };
    title = "复制到其他产品线";
    body = item && version && targetLine ? `<div class="copy-source-summary"><span>复制来源</span><strong>${escapeHtml(item.productLine)} · ${escapeHtml(item.name)} ${version.label}</strong><small>仅使用已发布版本作为跨产线复制来源</small></div><div class="modal-form">${selectField("目标产品线", "modal-copy-target-line", targets, targetLine, true)}<div class="form-row"><label>目标版本</label><div class="form-static-value"><strong>V1 · 草稿</strong><span>目标产品线独立管理版本</span></div></div><div class="form-row"><label>复制内容</label><div class="copy-content-list"><span>功能资料</span><span>物模型 ${spec.properties.length + spec.services.length + spec.events.length} 项</span><span class="muted">不复制关联硬件和固件关联</span></div></div><div class="form-row required"><label>版本说明</label><textarea data-role="modal-copy-version-changelog" placeholder="说明面向 ${escapeHtml(targetLine)} 的适配目标">${escapeHtml(modal.changelog || `基于 ${item.productLine} ${version.label} 适配 ${targetLine}`)}</textarea></div></div>` : `<div class="empty-state compact-empty">暂无可复制的目标产品线</div>`;
    footer = item && version && targetLine ? `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">复制并创建 V1</button>` : `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "function-form") {
    const item = modal.id ? functions.find((entry) => entry.id === modal.id) : null;
    title = "编辑功能资料";
    body = item ? functionBasicFormFields(item, item.productLine, false) : `<div class="empty-state">该功能已不存在</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">完成</button>`;
  } else if (modal.type === "function-version-info") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item?.versions.find((entry) => entry.id === modal.versionId);
    title = `编辑版本说明 · ${version?.label || ""}`;
    body = item && version ? `<div class="modal-form"><div class="form-row"><label>版本号</label><div class="form-static-value"><strong>${version.label}</strong><span>${escapeHtml(functionVersionSourceLabel(item, version))}</span></div></div><div class="form-row required"><label>版本说明</label><textarea data-role="modal-version-description" placeholder="说明本版本新增、调整或修复的内容">${escapeHtml(version.changelog || "")}</textarea></div></div>` : `<div class="empty-state">该版本已不存在</div>`;
    footer = item && version ? `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">保存</button>` : `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "function-submit-test") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item ? selectedFunctionVersion(item) : null;
    const spec = item && version ? getModelSpec(item.id, version.id) : { properties: [], services: [], events: [], hardware: [] };
    const modelError = modelSpecValidationError(spec);
    title = `提交测试 · ${version?.label || ""}`;
    body = `<div class="submit-test-summary"><div><span>版本</span><strong>${escapeHtml(version?.label || "-")}</strong></div><div><span>版本说明</span><strong>${escapeHtml(version?.changelog || "未填写")}</strong></div><div><span>物模型</span><strong>${spec.properties.length + spec.services.length + spec.events.length} 项（可选）</strong></div><div><span>关联硬件</span><strong>${spec.hardware.length} 项（可选）</strong></div></div>${modelError ? `<div class="warning-strip model-preflight-error"><strong>物模型配置未完成</strong><span>${escapeHtml(modelError)}</span></div>` : `<div class="success-strip"><strong>配置校验通过</strong><span>${spec.properties.length + spec.services.length + spec.events.length ? "已配置的物模型符合规则" : "未配置物模型，可继续提交"}</span></div>`}<div class="info-strip">提交后版本将锁定并进入测试中；测试完成并发布后，才可由固件发布配置选择。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm" ${version?.changelog && !modelError ? "" : "disabled"}>确认提交测试</button>`;
  } else if (modal.type === "function-publish-version") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item ? selectedFunctionVersion(item) : null;
    const spec = item && version ? getModelSpec(item.id, version.id) : { properties: [], services: [], events: [], hardware: [] };
    const modelError = modelSpecValidationError(spec);
    title = `发布功能版本 · ${version?.label || ""}`;
    body = `<div class="release-checklist"><div><span>物模型（可选）</span><strong>${spec.properties.length + spec.services.length + spec.events.length} 项</strong></div><div><span>关联硬件（可选）</span><strong>${spec.hardware.length} 项</strong></div></div><div class="form-static-value release-version-description"><span>版本说明</span><strong>${escapeHtml(version?.changelog || "-")}</strong></div>${modelError ? `<div class="warning-strip model-preflight-error"><strong>物模型配置未完成</strong><span>${escapeHtml(modelError)}；请撤回草稿后修正。</span></div>` : `<div class="success-strip"><strong>配置校验通过</strong><span>当前版本可以发布</span></div>`}<div class="info-strip">发布后当前版本将成为正式版本，可由同产品线的固件发布配置选择并建立关联。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm" ${modelError ? "disabled" : ""}>确认发布</button>`;
  } else if (modal.type === "function-version-snapshot") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item?.versions.find((entry) => entry.id === modal.versionId);
    const working = item ? workingFunctionVersion(item) : null;
    title = `版本快照 · ${version?.label || ""}`;
    wide = true;
    drawer = true;
    body = item && version ? functionVersionSnapshotBody(item, version) : `<div class="empty-state">该版本已不存在</div>`;
    const statusAction = version?.status === "已发布"
      ? `<button class="btn" data-action="function-disable-version" data-id="${item.id}" data-version="${version.id}">停用版本</button>`
      : version?.status === "已停用" ? `<button class="btn" data-action="function-restore-version" data-id="${item.id}" data-version="${version.id}">恢复版本</button>` : "";
    const primaryAction = working
      ? `<button class="btn btn-primary" data-action="function-open-workspace" data-id="${item?.id || ""}" data-version="${working.id}">进入 ${working.label} 工作区</button>`
      : version?.status === "已发布" ? `<button class="btn btn-primary" data-action="function-create-version" data-id="${item.id}" data-version="${version.id}">基于此版本创建新版本</button>` : "";
    footer = `<button class="btn" data-action="modal-close">关闭</button>${statusAction}${primaryAction}`;
  } else if (modal.type === "function-create-version") {
    const item = functions.find((entry) => entry.id === modal.id);
    const selected = item ? item.versions.find((entry) => entry.id === modal.versionId) || selectedFunctionVersion(item) : null;
    const source = selected?.status === "已发布" ? selected : latestPublishedVersion(item);
    const spec = item && source ? getModelSpec(item.id, source.id) : { properties: [], services: [], events: [], hardware: [] };
    const nextNumber = item ? Math.max(...item.versions.map((version) => version.number || 0)) + 1 : 1;
    title = "创建新版本";
    body = item && source ? `<div class="copy-source-summary"><span>复制来源</span><strong>${escapeHtml(item.name)} ${source.label} · ${escapeHtml(source.status)}</strong><small>原版本及其固件关联不会改变</small></div><div class="modal-form"><div class="form-row"><label>新版本</label><div class="form-static-value"><strong>V${nextNumber} · 草稿</strong><span>创建后独立配置和测试</span></div></div><div class="form-row"><label>继承内容</label><div class="copy-content-list"><span>物模型 ${spec.properties.length + spec.services.length + spec.events.length} 项</span><span>关联硬件 ${spec.hardware.length} 项</span></div></div><div class="form-row required"><label>版本说明</label><textarea data-role="modal-new-version-changelog" placeholder="说明本版本新增、调整或修复的内容"></textarea></div></div>` : `<div class="empty-state compact-empty">请先发布一个版本，再创建新版本</div>`;
    footer = item && source ? `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">创建并进入配置</button>` : `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "function-version-status") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item ? item.versions.find((entry) => entry.id === modal.versionId) || selectedFunctionVersion(item) : null;
    title = modal.nextStatus === "已停用" ? "停用功能版本" : modal.nextStatus === "已发布" ? "恢复功能版本" : "撤回测试版本";
    const statusHint = modal.nextStatus === "已停用"
      ? "既有固件关联保留，但新的固件发布配置将无法选择该版本。"
      : modal.nextStatus === "草稿"
        ? "版本将解除锁定并回到草稿；修改完成后需要重新提交测试。"
        : "恢复后可再次被固件发布配置选择，既有关联不受影响。";
    body = `<div class="confirm-copy">确认将“${escapeHtml(item?.name || "该功能")} ${version?.label || ""}”变更为“${modal.nextStatus}”吗？${statusHint}</div>`;
  } else if (modal.type === "function-delete-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    title = "删除功能";
    body = `<div class="confirm-copy">确定删除功能“${escapeHtml(item?.name || "") }”吗？该操作会删除功能资料及全部版本配置，且无法恢复。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-danger" data-action="modal-confirm">删除</button>`;
  } else if (modal.type === "model-form") {
    title = Number.isInteger(modal.index) ? "编辑物模型" : "添加物模型";
    body = modelFormBody(modal);
    drawer = true;
    modelDrawer = true;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">完成</button>`;
  } else if (modal.type === "model-discard-confirm") {
    title = "放弃未保存修改";
    body = `<div class="confirm-copy">当前物模型存在未保存的修改，关闭后本次编辑内容将丢失。</div>`;
    footer = `<button class="btn" data-action="model-discard-return">继续编辑</button><button class="btn btn-danger" data-action="model-discard-confirm">放弃修改</button>`;
  } else if (modal.type === "model-delete-confirm") {
    const functionId = route().split("/")[3];
    const rows = modelCollection(getModelSpec(functionId), modal.kind);
    const row = rows[modal.index];
    const kindName = modal.kind === "property" ? "属性" : modal.kind === "service" ? "服务" : "事件";
    title = `删除${kindName}`;
    body = `<div class="confirm-copy">确定删除${kindName}“${escapeHtml(row?.name || "") }”吗？删除后将立即更新当前草稿配置。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-danger" data-action="modal-confirm">删除</button>`;
  } else if (modal.type === "model-preview") {
    const functionId = route().split("/")[3];
    const item = functions.find((entry) => entry.id === functionId);
    const version = item ? selectedFunctionVersion(item) : null;
    const spec = getModelSpec(functionId);
    title = "物模型 JSON";
    wide = true;
    body = `<div class="info-strip">${escapeHtml(item?.name || "功能项")} · ${version?.label || ""} · ${version?.status || "草稿"}</div><textarea class="model-json model-json-textarea" readonly>${escapeHtml(JSON.stringify({ functionId, versionId: version?.id, properties: spec.properties, services: spec.services, events: spec.events }, null, 2))}</textarea>`;
    footer = "";
  } else if (modal.type === "model-import") {
    title = "导入JSON";
    wide = true;
    body = `<div class="warning-strip model-import-warning">导入数据将使用与手工创建相同的严格规则校验；未知数据类型不会自动转换。</div><textarea class="model-import-textarea" data-role="modal-model-import" placeholder="请输入JSON数据">${escapeHtml(modal.raw || "")}</textarea>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">校验并预览</button>`;
  } else if (modal.type === "model-import-confirm") {
    const current = modal.current || { properties: [], services: [], events: [] };
    const candidate = modal.candidate || { properties: [], services: [], events: [] };
    title = "确认替换物模型";
    body = `<div class="warning-strip model-import-warning"><strong>该操作会整体替换当前草稿定义</strong><span>关联硬件不受影响。</span></div><div class="model-import-compare"><div><span>属性</span><strong>${current.properties.length} → ${candidate.properties.length}</strong></div><div><span>服务</span><strong>${current.services.length} → ${candidate.services.length}</strong></div><div><span>事件</span><strong>${current.events.length} → ${candidate.events.length}</strong></div></div><div class="success-strip"><strong>JSON 校验通过</strong><span>确认后立即写入当前草稿</span></div>`;
    footer = `<button class="btn" data-action="model-import-back">返回修改</button><button class="btn btn-danger" data-action="modal-confirm">确认替换</button>`;
  } else if (modal.type === "model-hardware-form") {
    const spec = getModelSpec(route().split("/")[3]);
    const available = assetConfigs.hardware.rows.filter((row) => !spec.hardware.includes(row.id));
    title = "关联硬件";
    body = available.length ? `<div class="modal-form"><div class="form-row required"><label>硬件</label><select data-role="modal-model-hardware"><option value="">请选择关联硬件</option>${available.map((row) => `<option value="${row.id}">${escapeHtml(row.name)}（${escapeHtml(row.type)}）</option>`).join("")}</select></div></div>` : `<div class="empty-state">暂无可关联硬件</div>`;
    footer = available.length ? footer : `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "config-preview") {
    const machineId = route().split("/")[3] || machines[0]?.id;
    const machine = machines.find((entry) => entry.id === machineId) || machines[0];
    const counts = [state.configHardware.filter((item) => item.model).length, state.configFunctions.length, state.configParameters.length, state.configTests.length];
    title = "配置预览";
    wide = true;
    body = `<div class="info-strip">${escapeHtml(machine.name)} · ${machine.line} · ${machine.status}${state.configSavedAt ? ` · 保存于 ${state.configSavedAt}` : " · 尚未保存"}</div><table class="mini-table"><thead><tr><th>配置模块</th><th>已配置数量</th><th>状态</th></tr></thead><tbody>${["硬件配置", "功能配置", "参数配置", "测试项配置"].map((label, index) => `<tr><td>${label}</td><td>${counts[index]}</td><td>${counts[index] ? "已配置" : "待配置"}</td></tr>`).join("")}</tbody></table>`;
    footer = `<button class="btn btn-primary" data-action="modal-close">关闭预览</button>`;
  } else if (modal.type === "publish") {
    const machine = machines.find((entry) => entry.id === modal.id) || machines[0];
    title = "发布机型";
    body = `<div class="confirm-copy">发布后“${escapeHtml(machine.name)}”的配置将进入正式状态。${state.configHardware.some((item) => item.model) ? "当前硬件配置已就绪。" : "当前仍有未配置的硬件项。"}确认继续发布吗？</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">确认发布</button>`;
  } else if (modal.type === "config-category") {
    const availableCategories = ["PCBA", "镜头", "灯板", "电源板", "电池", "天线", "麦克风"].filter((category) => !state.configHardware.some((item) => item.category === category));
    title = "添加硬件类目";
    body = availableCategories.length ? `<div class="modal-form">${selectField("硬件类目", "modal-config-category", availableCategories, availableCategories[0], true)}</div>` : `<div class="empty-state">所有硬件类目均已添加</div>`;
    footer = availableCategories.length ? footer : `<button class="btn btn-primary" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "config-hardware-select") {
    const row = state.configHardware[modal.index];
    const availableModels = row ? configHardwareCandidates(row.category).map((candidate) => candidate.name) : [];
    title = `选择${row?.category || "硬件"}`;
    body = `<div class="modal-form">${selectField("硬件型号", "modal-config-hardware", availableModels, row?.model || "", true)}</div>`;
  } else if (modal.type === "config-function") {
    title = "添加功能";
    const machine = machines.find((entry) => entry.id === activeMachineId()) || machines[0];
    const existingIds = state.configFunctions.map((binding) => typeof binding === "string" ? binding : binding.functionId);
    const available = functions.filter((item) => item.productLine === machine.line && !existingIds.includes(item.id)).flatMap((item) => item.versions.filter((version) => version.status === "已发布").map((version) => ({ item, version })));
    body = available.length ? `<div class="info-strip">仅显示 ${escapeHtml(machine.line)} 产品线下已发布的功能版本。</div><div class="modal-form"><div class="form-row required"><label>功能版本</label><select data-role="modal-config-function"><option value="">请选择功能版本</option>${available.map(({ item, version }) => `<option value="${item.id}|${version.id}">${escapeHtml(item.name)} · ${version.label}（${escapeHtml(item.category)}）</option>`).join("")}</select></div></div>` : `<div class="empty-state">当前产品线暂无可添加的已发布功能版本</div>`;
    footer = available.length ? footer : `<button class="btn btn-primary" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "config-parameter") {
    title = "添加参数";
    body = `<div class="modal-form">${formField("参数名", "modal-config-param-key", "", "请输入英文参数名", true)}${formField("中文名", "modal-config-param-label", "", "请输入中文名", true)}${selectField("参数类型", "modal-config-param-type", ["字符串", "数字", "布尔值"], "字符串", true)}${formField("默认值", "modal-config-param-default", "", "请输入默认值", false)}</div>`;
  } else if (modal.type === "config-test") {
    title = "添加测试项";
    body = testFormBody({}, "config");
    drawer = true;
  } else if (modal.type === "config-clear-confirm") {
    const scopeLabels = { hardware: "硬件", function: "功能", parameter: "参数", test: "测试项" };
    const scopeLabel = scopeLabels[modal.scope] || "当前页签";
    title = `清除${scopeLabel}配置`;
    body = `<div class="confirm-copy">确认清除当前机型的全部${scopeLabel}配置吗？其他页签的配置不会受到影响。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-danger" data-action="modal-confirm">确认清除</button>`;
  } else if (modal.type === "more") {
    const machine = machines.find((entry) => entry.id === modal.id) || machines[0];
    title = "更多操作";
    body = `<div class="more-actions"><button class="btn" data-action="more-edit" data-id="${machine.id}">✎ 编辑机型信息</button><button class="btn" data-action="more-copy" data-id="${machine.id}">▣ 复制机型</button><button class="btn ${machine.status === "已停产" ? "" : "btn-danger"}" data-action="more-stop" data-id="${machine.id}">${machine.status === "已停产" ? "恢复开发" : "停产机型"}</button></div>`;
    footer = `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "logs") {
    title = "操作日志";
    wide = true;
    body = `<table class="mini-table"><thead><tr><th>操作人</th><th>操作内容</th><th>时间</th></tr></thead><tbody><tr><td>汤彦珊</td><td>创建机型</td><td>2026-07-09 13:46:16</td></tr><tr><td>汤彦珊</td><td>更新硬件配置</td><td>2026-07-16 15:22:08</td></tr></tbody></table>`;
    footer = `<button class="btn btn-primary" data-action="modal-close">关闭</button>`;
  }

  return `<div class="modal-backdrop ${drawer ? "drawer-backdrop" : ""}" data-action="modal-backdrop"><section class="modal ${wide ? "modal-wide" : ""} ${drawer ? "modal-drawer" : ""} ${modelDrawer ? "model-form-drawer" : ""}" role="dialog" aria-modal="true" aria-label="${title}"><div class="modal-header"><h2>${title}</h2><button class="modal-close" data-action="modal-close" title="关闭">×</button></div><div class="modal-body">${body}</div>${footer ? `<div class="modal-footer">${footer}</div>` : ""}</section></div>`;
}

function pageForRoute(current) {
  if (current === "/machine") return machinePage();
  if (current.startsWith("/machine/config")) return machineConfigPage();
  if (current === "/hardware") return assetPage("hardware");
  if (current === "/pcba") return assetPage("pcba");
  if (current === "/electronic") return assetPage("electronic");
  if (current.startsWith("/function/detail/") || current.startsWith("/function/model/")) return modelSpecPage(current.split("/")[3]);
  if (current === "/function") return functionPage();
  if (current.startsWith("/category/")) {
    const [, , type, mode] = current.split("/");
    return categoryFormPage(type, mode);
  }
  if (current.startsWith("/form/")) {
    const [, , type, mode, id = ""] = current.split("/");
    return assetFormPage(type, mode, id, false);
  }
  if (current.startsWith("/detail/")) {
    const [, , type, id = ""] = current.split("/");
    return assetFormPage(type, "detail", id, true);
  }
  return machinePage();
}

function render() {
  app.innerHTML = appShell(pageForRoute(route()));
}

function renderToasts() {
  const stack = document.querySelector(".toast-stack");
  if (stack) stack.innerHTML = state.toasts.map((toast) => `<div class="toast ${toast.type || ""}">${escapeHtml(toast.message)}</div>`).join("");
}

function showToast(message, type = "", shouldRender = true) {
  const toast = { id: Date.now(), message, type };
  state.toasts.push(toast);
  persistState();
  if (shouldRender) render();
  else renderToasts();
  window.setTimeout(() => {
    state.toasts = state.toasts.filter((item) => item.id !== toast.id);
    renderToasts();
  }, 2400);
}

function persistState() {
  try {
    const assets = {};
    for (const type of ["hardware", "pcba", "electronic"]) {
      assets[type] = { categories: assetConfigs[type].categories, rows: assetConfigs[type].rows };
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: STORAGE_VERSION,
      machines,
      assets,
      functionCategories,
      functions,
      functionViewMode: state.functionViewMode,
      modelSpecs: state.modelSpecs,
      machineConfigs: state.machineConfigs,
      categoryMeta: state.categoryMeta,
    }));
  } catch {
    // The prototype remains usable if browser storage is unavailable or full.
  }
}

function restorePersistentState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || !Number.isInteger(saved.version) || saved.version < 1 || saved.version > STORAGE_VERSION) return;
    const shouldMigrateDefinedFunctionsToDraft = saved.version < 4;
    const shouldMigrateModelSpecs = saved.version < STORAGE_VERSION;
    if (Array.isArray(saved.machines)) machines.splice(0, machines.length, ...saved.machines);
    for (const type of ["hardware", "pcba", "electronic"]) {
      const asset = saved.assets?.[type];
      if (Array.isArray(asset?.categories)) assetConfigs[type].categories.splice(0, assetConfigs[type].categories.length, ...asset.categories);
      if (Array.isArray(asset?.rows)) assetConfigs[type].rows.splice(0, assetConfigs[type].rows.length, ...asset.rows);
    }
    if (Array.isArray(saved.functionCategories)) functionCategories.splice(0, functionCategories.length, ...saved.functionCategories);
    if (Array.isArray(saved.functions)) {
      functions.splice(0, functions.length, ...saved.functions);
      definedFunctionMocks.forEach((seed) => {
        const existing = functions.find((item) => item.productLine === seed.productLine && item.identifier === seed.identifier);
        if (!existing) {
          functions.push(JSON.parse(JSON.stringify(seed)));
          return;
        }
        if (!shouldMigrateDefinedFunctionsToDraft) return;
        const hasWorkingVersion = existing.versions?.some((version) => ["草稿", "测试中"].includes(version.status));
        const seededVersion = existing.versions?.find((version) => version.id === seed.versions[0].id);
        if (!hasWorkingVersion && seededVersion?.status === "已发布") {
          seededVersion.status = "草稿";
          seededVersion.publishedAt = "";
          seededVersion.publishedSnapshot = null;
          seededVersion.firmwareRelations = [];
        }
      });
    }
    if (["list", "card"].includes(saved.functionViewMode)) state.functionViewMode = saved.functionViewMode;
    if (saved.modelSpecs && typeof saved.modelSpecs === "object") state.modelSpecs = saved.modelSpecs;
    if (saved.machineConfigs && typeof saved.machineConfigs === "object") state.machineConfigs = saved.machineConfigs;
    if (saved.categoryMeta && typeof saved.categoryMeta === "object") state.categoryMeta = saved.categoryMeta;
    for (const machine of machines) activeMachineConfig(machine.id);
    for (const type of ["hardware", "pcba", "electronic", "function"]) {
      const categories = type === "function" ? functionCategories : assetConfigs[type].categories;
      categories.forEach((_, index) => categoryMetaFor(type, index));
    }
    functions.forEach((item, index) => item.versions.forEach((version) => {
      const key = `${item.id}:${version.id}`;
      if (!state.modelSpecs[key]) state.modelSpecs[key] = createMockModelSpec(`${item.id}-${version.id}`, index);
      else if (shouldMigrateModelSpecs) {
        const inheritedSeed = version.baseVersionId ? initialModelSpecs[`${item.id}:${version.baseVersionId}`] : null;
        const sameFunctionSeed = Object.entries(initialModelSpecs).find(([seedKey]) => seedKey.startsWith(`${item.id}:`))?.[1];
        state.modelSpecs[key] = migrateLegacyModelSpecData(state.modelSpecs[key], initialModelSpecs[key] || inheritedSeed || sameFunctionSeed);
      }
    }));
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function normalizeFunctionData() {
  functions.forEach((item) => {
    if (!item.capabilityId) item.capabilityId = `capability:${item.identifier || item.id}`;
    item.versions.forEach((version) => {
      if (!version.changelog) version.changelog = version.number === 1 ? `${item.name}首版能力配置` : `${item.name} ${version.label} 版本调整`;
      if (version.copiedFrom === undefined) version.copiedFrom = null;
      if (version.baseVersionId === undefined) version.baseVersionId = "";
      if (version.number > 1 && !version.baseVersionId && !version.copiedFrom) {
        const previous = item.versions.filter((entry) => entry.number < version.number).sort((a, b) => b.number - a.number)[0];
        if (previous) version.baseVersionId = previous.id;
      }
      const spec = getModelSpec(item.id, version.id);
      if (version.status === "待发布") version.status = "测试中";
      if (!Array.isArray(version.firmwareRelationHistory)) version.firmwareRelationHistory = [];
      const legacyIdentifiers = Array.isArray(version.firmwareVersions) ? version.firmwareVersions.map((value) => String(value).trim()).filter(Boolean) : [];
      if (!Array.isArray(version.firmwareRelations)) {
        const seeded = initialFirmwareRelations[version.id] || [];
        const lineMachines = machines.filter((machine) => machine.line === item.productLine);
        version.firmwareRelations = version.firmwareRelationHistory.length || (!legacyIdentifiers.length && !seeded.length)
          ? []
          : seeded.length
            ? seeded.map((relation) => ({ ...relation }))
            : legacyIdentifiers.map((identifier, relationIndex) => {
              const machine = lineMachines[relationIndex % Math.max(1, lineMachines.length)] || machines[relationIndex % machines.length];
              return mockFirmwareRelation(`rel-${version.id}-${relationIndex + 1}`, machine?.id || "", identifier, `1.${relationIndex + 1}.0`, version.createdAt);
            });
      }
      version.firmwareRelations = version.firmwareRelations.map((relation, relationIndex) => ({
        id: relation.id || `rel-${version.id}-${relationIndex + 1}`,
        machineId: relation.machineId || "",
        machineName: relation.machineName || "",
        productLine: relation.productLine || item.productLine,
        firmwareIdentifier: String(relation.firmwareIdentifier || "").trim(),
        firmwareVersion: String(relation.firmwareVersion || "").trim(),
        coveredDeviceCount: normalizedCoveredDeviceCount(relation, version.id, relationIndex),
        linkedAt: relation.linkedAt || version.createdAt,
        source: relation.source || "固件发布系统",
      })).filter((relation) => relation.firmwareIdentifier && relation.firmwareVersion);
      if (!["已发布", "已停用"].includes(version.status) && version.firmwareRelations.length) {
        version.firmwareRelationHistory.unshift({
          action: "lifecycle-rule-unlink",
          firmwareRelations: version.firmwareRelations.map((relation) => ({ ...relation })),
          createdAt: new Date().toLocaleString("zh-CN", { hour12: false }),
        });
        version.firmwareRelations = [];
      }
      delete version.firmwareVersions;
      if (["已发布", "已停用"].includes(version.status) && !version.publishedSnapshot) {
        version.publishedSnapshot = createFunctionConfigSnapshot(item, version, spec, "PUB", {
          id: `PUB-${item.id}-${version.label}-legacy`,
          createdAt: version.publishedAt || version.createdAt,
        });
      }
      delete version.test;
      delete version.testRuns;
      delete version.testSnapshot;
      delete version.validation;
    });
  });
}

function inputValue(roleName) {
  return document.querySelector(`[data-role="${roleName}"]`)?.value?.trim() || "";
}

function modelStructOwner(ownerScope) {
  if (ownerScope === "parameter-dialog") return state.modal?.paramEditor?.draft || null;
  return state.modal?.draft || null;
}

function modelEditorOwner(target) {
  if (target.dataset.scope === "parameter-dialog") return state.modal?.paramEditor?.draft || null;
  if (target.dataset.scope === "struct-field") {
    return modelStructOwner(target.dataset.owner)?.dataSpec?.fields?.[Number(target.dataset.structIndex)] || null;
  }
  if (target.dataset.scope === "parameter") return state.modal?.draft?.[target.dataset.param]?.[Number(target.dataset.index)] || null;
  return state.modal?.draft || null;
}

function syncModelDraftInput(target) {
  if (state.modal?.type !== "model-form") return false;
  const markDirty = () => { state.modal.dirty = true; };
  const syncDefinition = (owner) => { owner.dataDefinition = modelDataSpecToDefinition(owner.dataType, owner.dataSpec); };
  const counter = target.closest?.(".model-counted-field")?.querySelector(".field-counter");
  if (counter && target.maxLength > 0) counter.textContent = `${target.value.length} / ${target.maxLength}`;
  if (target.matches('[data-role^="model-param-dialog-"]:not([data-role="model-param-dialog-spec"]):not([data-role="model-param-dialog-enum"])')) {
    const editor = state.modal.paramEditor;
    if (!editor) return false;
    const fieldMap = {
      "model-param-dialog-name": "name",
      "model-param-dialog-identifier": "identifier",
      "model-param-dialog-data-type": "dataType",
      "model-param-dialog-default": "defaultValue",
    };
    const field = fieldMap[target.dataset.role];
    if (!field) return false;
    if (field === "dataType" && editor.draft.dataType !== target.value) {
      editor.draft.dataType = target.value;
      editor.draft.dataSpec = defaultModelDataSpec(target.value);
      editor.draft.defaultValue = "";
      syncDefinition(editor.draft);
      editor.typeResetNotice = true;
    } else {
      editor.draft[field] = target.value;
    }
    return true;
  }
  if (target.matches('[data-role="model-param-dialog-spec"]')) {
    const parameter = state.modal.paramEditor?.draft;
    if (!parameter || !target.dataset.field) return false;
    parameter.dataSpec[target.dataset.field] = target.value;
    syncDefinition(parameter);
    return true;
  }
  if (target.matches('[data-role="model-param-dialog-enum"]')) {
    const parameter = state.modal.paramEditor?.draft;
    const enumItem = parameter?.dataSpec?.enumItems?.[Number(target.dataset.enumIndex)];
    if (!enumItem || !target.dataset.field) return false;
    enumItem[target.dataset.field] = target.value;
    syncDefinition(parameter);
    return true;
  }
  if (target.matches('[data-role="model-struct-field"]')) {
    const owner = modelStructOwner(target.dataset.owner);
    const field = owner?.dataSpec?.fields?.[Number(target.dataset.structIndex)];
    if (!field || !target.dataset.field) return false;
    if (target.dataset.field === "dataType" && field.dataType !== target.value) {
      field.dataType = target.value;
      field.dataSpec = defaultModelDataSpec(target.value);
      syncDefinition(field);
    } else {
      field[target.dataset.field] = target.value;
    }
    syncDefinition(owner);
    if (target.dataset.owner === "property") markDirty();
    return true;
  }
  if (target.matches('[data-role="model-struct-spec"]')) {
    const owner = modelStructOwner(target.dataset.owner);
    const field = owner?.dataSpec?.fields?.[Number(target.dataset.structIndex)];
    if (!field || !target.dataset.field) return false;
    field.dataSpec[target.dataset.field] = target.value;
    syncDefinition(field);
    syncDefinition(owner);
    if (target.dataset.owner === "property") markDirty();
    return true;
  }
  if (target.matches('[data-role="model-struct-enum"]')) {
    const owner = modelStructOwner(target.dataset.owner);
    const field = owner?.dataSpec?.fields?.[Number(target.dataset.structIndex)];
    const enumItem = field?.dataSpec?.enumItems?.[Number(target.dataset.enumIndex)];
    if (!enumItem || !target.dataset.field) return false;
    enumItem[target.dataset.field] = target.value;
    syncDefinition(field);
    syncDefinition(owner);
    if (target.dataset.owner === "property") markDirty();
    return true;
  }
  if (target.matches('[data-role="model-param"]')) {
    const parameter = state.modal.draft[target.dataset.param]?.[Number(target.dataset.index)];
    const field = target.dataset.field;
    if (!parameter || !field) return false;
    if (field === "dataType" && parameter.dataType !== target.value) {
      parameter.dataType = target.value;
      parameter.dataSpec = defaultModelDataSpec(target.value);
      syncDefinition(parameter);
      parameter.defaultValue = defaultValueForModelType(target.value);
      state.modal.typeResetNotice = true;
    } else if (field === "required") {
      parameter.required = target.value === "true";
      if (parameter.required) parameter.defaultValue = "";
    } else {
      parameter[field] = target.value;
    }
    markDirty();
    return true;
  }
  if (target.matches('[data-role="model-param-spec"]')) {
    const parameter = state.modal.draft[target.dataset.param]?.[Number(target.dataset.index)];
    if (!parameter || !target.dataset.field) return false;
    parameter.dataSpec[target.dataset.field] = target.value;
    syncDefinition(parameter);
    markDirty();
    return true;
  }
  if (target.matches('[data-role="model-param-enum"]')) {
    const parameter = state.modal.draft[target.dataset.param]?.[Number(target.dataset.index)];
    const enumItem = parameter?.dataSpec?.enumItems?.[Number(target.dataset.enumIndex)];
    if (!enumItem || !target.dataset.field) return false;
    enumItem[target.dataset.field] = target.value;
    syncDefinition(parameter);
    markDirty();
    return true;
  }
  if (target.matches('[data-role="modal-model-spec"]')) {
    state.modal.draft.dataSpec[target.dataset.field] = target.value;
    syncDefinition(state.modal.draft);
    markDirty();
    return true;
  }
  if (target.matches('[data-role="modal-model-enum"]')) {
    const enumItem = state.modal.draft.dataSpec?.enumItems?.[Number(target.dataset.enumIndex)];
    if (!enumItem || !target.dataset.field) return false;
    enumItem[target.dataset.field] = target.value;
    syncDefinition(state.modal.draft);
    markDirty();
    return true;
  }
  const fieldMap = {
    "modal-model-name": "name",
    "modal-model-identifier": "identifier",
    "modal-model-data-type": "dataType",
    "modal-model-default": "defaultValue",
    "modal-model-access": "access",
    "modal-model-call-type": "callType",
    "modal-model-description": "description",
  };
  const field = fieldMap[target.dataset.role];
  if (!field) return false;
  if (field === "dataType" && state.modal.draft.dataType !== target.value) {
    state.modal.draft.dataType = target.value;
    state.modal.draft.dataSpec = defaultModelDataSpec(target.value);
    syncDefinition(state.modal.draft);
    state.modal.draft.defaultValue = defaultValueForModelType(target.value);
    state.modal.typeResetNotice = true;
  } else if (field === "access") {
    state.modal.draft.access = target.value;
    if (target.value === "只读") state.modal.draft.defaultValue = "";
  } else {
    state.modal.draft[field] = target.value;
  }
  markDirty();
  return true;
}

function pageState(context) {
  if (context === "function") {
    const total = state.selectedProductLine === GLOBAL_PRODUCT_LINE
      ? functionFamilies().filter((group) => group.items.some(functionMatchesFilters)).length
      : functions.filter((item) => item.productLine === state.selectedProductLine && functionMatchesFilters(item)).length;
    return { pageKey: "functionPage", sizeKey: "functionPageSize", total };
  }
  return { pageKey: null, sizeKey: null, total: filteredMachines().length };
}

function setPage(context, requestedPage) {
  const pageInfo = pageState(context);
  const pageSize = context === "function" ? state.functionPageSize : state.machineFilter.pageSize;
  const maxPage = Math.max(1, Math.ceil(pageInfo.total / pageSize));
  const nextPage = Math.min(maxPage, Math.max(1, Number(requestedPage) || 1));
  if (context === "function") state.functionPage = nextPage;
  else state.machineFilter.page = nextPage;
}

function changePage(context, delta) {
  const currentPage = context === "function" ? state.functionPage : state.machineFilter.page;
  setPage(context, currentPage + delta);
}

function handleModalConfirm() {
  const modal = state.modal;
  if (!modal) return;
  if (modal.type === "machine-form") {
    const name = inputValue("modal-machine-name");
    if (!name) return showToast("请填写机型名称", "error", false);
    const network = inputValue("modal-machine-network") || "仅wifi";
    const line = inputValue("modal-machine-line") || "IPC";
    const power = document.querySelector('input[name="modal-power"]:checked')?.value || "常电";
    const arch = inputValue("modal-machine-arch") || "原架构";
    const description = inputValue("modal-machine-desc") || "-";
    if (!modal.id && !state.machineDraftImage) return showToast("请上传机型图片", "error", false);
    if (modal.id) {
      const machine = machines.find((m) => m.id === modal.id);
      const incompatibleBindings = activeMachineConfig(modal.id).functions.filter((binding) => {
        const functionId = typeof binding === "string" ? binding : binding.functionId;
        return functions.find((entry) => entry.id === functionId)?.productLine !== line;
      });
      if (machine?.line !== line && incompatibleBindings.length) return showToast(`该机型仍有 ${incompatibleBindings.length} 个原产品线功能，请先移除后再变更产品线`, "error", false);
      Object.assign(machine, { name, network, power, line, arch, description, image: state.machineDraftImage || machine.image });
    } else {
      const id = `m${Date.now()}`;
      machines.unshift({ id, name, network, power, firmware: "-", image: state.machineDraftImage, status: "开发中", line, arch, description });
      state.machineConfigs[id] = createMachineConfig();
    }
    state.machineDraftImage = "";
    state.modal = null;
    return showToast(modal.id ? "机型信息已更新" : "机型创建成功");
  }
  if (modal.type === "confirm-delete") {
    const index = machines.findIndex((m) => m.id === modal.id);
    if (index >= 0) machines.splice(index, 1);
    delete state.machineConfigs[modal.id];
    state.modal = null;
    return showToast("机型已删除");
  }
  if (modal.type === "category-form") {
    const name = inputValue("modal-category-name");
    if (!name) return showToast("请填写类目名称", "error", false);
    const description = inputValue("modal-category-desc");
    if (modal.assetType === "function" && !description) return showToast("请填写备注", "error", false);
    const list = modal.assetType === "function" ? functionCategories : assetConfigs[modal.assetType].categories;
    const index = state.selectedCategory[modal.assetType];
    if (list.some((item, itemIndex) => item === name && (!modal.edit || itemIndex !== index))) return showToast("类目名称已存在", "error", false);
    if (modal.edit) {
      const previousName = list[index];
      list[index] = name;
      if (modal.assetType === "function") functions.filter((item) => item.category === previousName).forEach((item) => { item.category = name; });
      const meta = categoryMetaFor(modal.assetType, index);
      if (modal.assetType === "function") meta.remark = description;
      else {
        meta.description = description;
        meta.code = inputValue("modal-category-code") || meta.code;
      }
    } else {
      list.push(name);
      state.selectedCategory[modal.assetType] = list.length - 1;
      state.categoryMeta[modal.assetType].push(modal.assetType === "function"
        ? { remark: description, createdAt: new Date().toLocaleString("zh-CN", { hour12: false }) }
        : { code: inputValue("modal-category-code"), description, image: img.blue, createdAt: new Date().toLocaleString("zh-CN", { hour12: false }), parameters: [], tests: [] });
    }
    state.modal = null;
    return showToast(modal.edit ? "类目信息已更新" : "类目创建成功");
  }
  if (modal.type === "function-create-entry") {
    const name = inputValue("modal-function-name");
    const productLine = inputValue("modal-function-line") || modal.targetLine || productLines[0];
    const identifier = inputValue("modal-function-identifier");
    const category = inputValue("modal-function-category");
    const remark = inputValue("modal-function-desc");
    const changelog = inputValue("modal-initial-version-changelog");
    if (!name) return showToast("请填写功能项名称", "error", false);
    if (!productLines.includes(productLine)) return showToast("请选择目标产品线", "error", false);
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(identifier)) return showToast("请填写有效的功能标识", "error", false);
    if (!category) return showToast("请选择功能分类", "error", false);
    if (!remark) return showToast("请填写功能说明", "error", false);
    if (!changelog) return showToast("请填写 V1 版本说明", "error", false);
    if (functions.some((item) => item.productLine === productLine && item.identifier === identifier)) return showToast("当前产品线已存在相同功能标识", "error", false);
    if (!state.functionDraftImage) return showToast("请上传功能示例图", "error", false);
    const id = `f${Date.now()}`;
    const createdAt = new Date().toLocaleString("zh-CN", { hour12: false });
    const version = functionVersion(id, 1, "草稿", 0, { createdAt, changelog });
    const item = { id, capabilityId: `capability-${Date.now()}`, name, identifier, productLine, category, remark, image: state.functionDraftImage, createdAt, versions: [version] };
    functions.unshift(item);
    state.modelSpecs[`${id}:${version.id}`] = { properties: [], services: [], events: [], hardware: [], savedAt: "" };
    state.selectedProductLine = productLine;
    state.functionVersionSelection[id] = version.id;
    state.modelTab = "model";
    state.functionDraftImage = "";
    state.modal = null;
    navigate(`/function/detail/${id}`);
    return showToast("V1 草稿已创建，可按需配置物模型和关联硬件");
  }
  if (modal.type === "function-cross-line-copy") {
    const sourceItem = functions.find((item) => item.id === modal.id);
    const sourceVersion = sourceItem?.versions.find((version) => version.id === modal.versionId) || latestPublishedVersion(sourceItem);
    const targetLine = inputValue("modal-copy-target-line") || modal.targetLine;
    const changelog = inputValue("modal-copy-version-changelog");
    if (!sourceItem || !sourceVersion || sourceVersion.status !== "已发布") return showToast("复制来源必须是已发布版本", "error", false);
    if (!availableTargetLines(sourceItem).includes(targetLine)) return showToast("该产品线已存在此功能", "error", false);
    if (!changelog) return showToast("请填写目标 V1 的版本说明", "error", false);
    const id = `f${Date.now()}`;
    const createdAt = new Date().toLocaleString("zh-CN", { hour12: false });
    const version = functionVersion(id, 1, "草稿", 0, {
      createdAt,
      changelog,
      copiedFrom: { functionId: sourceItem.id, functionName: sourceItem.name, versionId: sourceVersion.id, versionLabel: sourceVersion.label, productLine: sourceItem.productLine },
    });
    const copy = { ...sourceItem, id, productLine: targetLine, createdAt, versions: [version], capabilityId: functionCapabilityId(sourceItem) };
    functions.unshift(copy);
    const sourceSpec = JSON.parse(JSON.stringify(getModelSpec(sourceItem.id, sourceVersion.id)));
    state.modelSpecs[`${id}:${version.id}`] = { ...sourceSpec, hardware: [], savedAt: "" };
    state.selectedProductLine = targetLine;
    state.functionVersionSelection[id] = version.id;
    state.modelTab = "model";
    state.modal = null;
    navigate(`/function/detail/${id}`);
    return showToast(`${copy.name} 已复制到 ${targetLine}，可按需关联硬件`);
  }
  if (modal.type === "function-form") {
    const name = inputValue("modal-function-name");
    if (!name) return showToast("请填写功能项名称", "error", false);
    const category = inputValue("modal-function-category");
    const remark = inputValue("modal-function-desc");
    const existing = modal.id ? functions.find((item) => item.id === modal.id) : null;
    if (!existing) return showToast("该功能已不存在", "error", false);
    if (!canEditFunctionMetadata(existing)) return showToast("功能首次发布后基础资料不可修改", "error", false);
    if (!category) return showToast("请选择功能分类", "error", false);
    if (!remark) return showToast("请填写功能说明", "error", false);
    Object.assign(existing, { name, category, remark, image: state.functionDraftImage || existing.image });
    state.functionDraftImage = "";
    state.modal = null;
    return showToast("功能信息已更新");
  }
  if (modal.type === "function-version-info") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item?.versions.find((entry) => entry.id === modal.versionId);
    const changelog = inputValue("modal-version-description");
    if (!version || !canEditVersionDescription(version)) return showToast("当前版本状态不允许编辑版本说明", "error", false);
    if (!changelog) return showToast("请填写版本说明", "error", false);
    version.changelog = changelog;
    state.modal = null;
    return showToast(`${version.label} 版本说明已更新`);
  }
  if (modal.type === "function-submit-test") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item ? selectedFunctionVersion(item) : null;
    if (!version || version.status !== "草稿") return showToast("只有草稿版本可以提交测试", "error", false);
    if (!version.changelog) return showToast("请先填写版本说明", "error", false);
    const modelError = modelSpecValidationError(getModelSpec(item.id, version.id));
    if (modelError) return showToast(`物模型配置未完成：${modelError}`, "error", false);
    version.status = "测试中";
    state.modal = null;
    return showToast(`${version.label} 已进入测试中，配置已锁定`);
  }
  if (modal.type === "function-publish-version") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item ? selectedFunctionVersion(item) : null;
    if (!version || version.status !== "测试中") return showToast("只有测试中的版本可以发布", "error", false);
    if (!version.changelog) return showToast("缺少版本说明，请退回草稿后补充", "error", false);
    const modelError = modelSpecValidationError(getModelSpec(item.id, version.id));
    if (modelError) return showToast(`物模型配置未完成：${modelError}，请撤回草稿后修正`, "error", false);
    const publishedAt = new Date().toLocaleString("zh-CN", { hour12: false });
    const publishedSnapshot = createFunctionConfigSnapshot(item, version, getModelSpec(item.id, version.id), "PUB", { createdAt: publishedAt });
    version.status = "已发布";
    version.publishedAt = publishedAt;
    version.publishedSnapshot = publishedSnapshot;
    state.modelSpecs[`${item.id}:${version.id}`] = { ...deepClone(publishedSnapshot.config), savedAt: publishedAt };
    state.modal = null;
    return showToast(`${version.label} 已发布，可供同产品线的固件发布配置选择`);
  }
  if (modal.type === "function-create-version") {
    const item = functions.find((entry) => entry.id === modal.id);
    if (!item) return;
    if (item.versions.some((version) => ["草稿", "测试中"].includes(version.status))) return showToast("当前功能已存在进行中的版本", "error", false);
    const selected = item.versions.find((version) => version.id === modal.versionId) || selectedFunctionVersion(item);
    const source = selected?.status === "已发布" ? selected : latestPublishedVersion(item);
    if (!source) return showToast("请先发布一个版本，再创建新版本", "error", false);
    const changelog = inputValue("modal-new-version-changelog");
    if (!changelog) return showToast("请填写新版本说明", "error", false);
    const nextNumber = Math.max(...item.versions.map((version) => version.number || 0)) + 1;
    const next = functionVersion(item.id, nextNumber, "草稿", 0, { createdAt: new Date().toLocaleString("zh-CN", { hour12: false }), changelog, baseVersionId: source.id });
    item.versions.unshift(next);
    state.modelSpecs[`${item.id}:${next.id}`] = JSON.parse(JSON.stringify(getModelSpec(item.id, source.id)));
    state.modelSpecs[`${item.id}:${next.id}`].savedAt = "";
    state.functionVersionSelection[item.id] = next.id;
    state.modelTab = "model";
    state.modal = null;
    return showToast(`${next.label} 草稿已创建`);
  }
  if (modal.type === "function-version-status") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item ? item.versions.find((entry) => entry.id === modal.versionId) || selectedFunctionVersion(item) : null;
    const allowed = modal.nextStatus === "草稿"
      ? version?.status === "测试中"
      : modal.nextStatus === "已停用"
        ? version?.status === "已发布"
        : modal.nextStatus === "已发布" && version?.status === "已停用";
    if (!allowed) return showToast("当前版本状态不支持该操作", "error", false);
    version.status = modal.nextStatus;
    state.modal = null;
    return showToast(`版本状态已变更为${modal.nextStatus}`);
  }
  if (modal.type === "function-delete-confirm") {
    const index = functions.findIndex((item) => item.id === modal.id);
    if (index >= 0) functions.splice(index, 1);
    Object.keys(state.modelSpecs).filter((key) => key.startsWith(`${modal.id}:`)).forEach((key) => delete state.modelSpecs[key]);
    Object.values(state.machineConfigs).forEach((config) => {
      const nextFunctions = config.functions.filter((binding) => (typeof binding === "string" ? binding : binding.functionId) !== modal.id);
      if (nextFunctions.length !== config.functions.length) config.savedAt = "";
      config.functions = nextFunctions;
    });
    state.modal = null;
    if (route().startsWith("/function/detail/") || route().startsWith("/function/model/")) navigate("/function");
    return showToast("功能项已删除");
  }
  if (modal.type === "model-form") {
    if (!requireDraftFunctionVersion()) return;
    const functionId = route().split("/")[3];
    const spec = getModelSpec(functionId);
    const draft = modal.draft;
    const name = inputValue("modal-model-name");
    const identifier = inputValue("modal-model-identifier");
    if (!name || !identifier) return showToast("请填写名称和标识符", "error", false);
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(identifier)) return showToast("标识符需以字母开头，仅包含字母、数字和下划线", "error", false);
    const duplicate = flattenModelRows(spec).some((row) => row.identifier === identifier && !(row.kind === modal.originalKind && row.index === modal.index));
    if (duplicate) return showToast("标识符已存在", "error", false);
    const originalRows = modelCollection(spec, modal.originalKind || draft.kind);
    const existing = Number.isInteger(modal.index) ? originalRows[modal.index] : null;
    const common = { id: existing?.id || `${draft.kind}${Date.now()}`, name, identifier, description: inputValue("modal-model-description") };
    let value;
    if (draft.kind === "property") {
      const dataType = inputValue("modal-model-data-type") || "枚举型(Enum)";
      const access = draft.access || "只读";
      const dataSpec = deepClone(draft.dataSpec);
      value = { ...common, dataType, dataSpec, dataDefinition: modelDataSpecToDefinition(dataType, dataSpec), defaultValue: access === "只读" ? "" : inputValue("modal-model-default"), access };
    } else if (draft.kind === "service") {
      value = { ...common, callType: draft.callType || "同步", inputParams: normalizeModelParameterList(draft.inputParams, true), outputParams: normalizeModelParameterList(draft.outputParams) };
    } else {
      value = { ...common, outputParams: normalizeModelParameterList(draft.outputParams) };
    }
    const validationError = modelRowValidationError(value, draft.kind);
    if (validationError) return showToast(validationError, "error", false);
    if (Number.isInteger(modal.index)) originalRows.splice(modal.index, 1);
    modelCollection(spec, draft.kind).push(value);
    spec.savedAt = "";
    state.modal = null;
    return showToast(`物模型已${Number.isInteger(modal.index) ? "更新" : "添加"}`);
  }
  if (modal.type === "model-delete-confirm") {
    if (!requireDraftFunctionVersion()) return;
    const functionId = route().split("/")[3];
    const spec = getModelSpec(functionId);
    modelCollection(spec, modal.kind).splice(modal.index, 1);
    spec.savedAt = "";
    state.modal = null;
    return showToast("物模型定义已删除");
  }
  if (modal.type === "model-import") {
    if (!requireDraftFunctionVersion()) return;
    const raw = inputValue("modal-model-import");
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return showToast("JSON 格式不正确", "error", false);
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return showToast("JSON 顶层必须是对象", "error", false);
    const shapeError = modelImportShapeError(parsed);
    if (shapeError) return showToast(shapeError, "error", false);
    const collections = { properties: "property", services: "service", events: "event" };
    const candidate = { properties: [], services: [], events: [] };
    for (const [key, kind] of Object.entries(collections)) {
      const rows = parsed[key];
      if (!Array.isArray(rows)) return showToast(`${key} 必须是数组`, "error", false);
      candidate[key] = rows.map((row, index) => ({ ...(row && typeof row === "object" ? row : {}), id: row?.id || `${kind}${Date.now()}${index}` }));
    }
    normalizeModelSpecData(candidate);
    for (const [key, kind] of Object.entries(collections)) {
      const invalid = candidate[key].map((row) => ({ row, error: modelRowValidationError(row, kind) })).find((result) => result.error);
      if (invalid) return showToast(`${modelKindLabel(kind)}“${invalid.row.name || "未命名"}”：${invalid.error}`, "error", false);
    }
    const identifiers = flattenModelRows(candidate).map((row) => row.identifier);
    if (new Set(identifiers).size !== identifiers.length) return showToast("导入数据存在重复标识符", "error", false);
    const functionId = route().split("/")[3];
    const spec = getModelSpec(functionId);
    state.modal = {
      type: "model-import-confirm",
      raw,
      candidate: deepClone(candidate),
      current: { properties: deepClone(spec.properties), services: deepClone(spec.services), events: deepClone(spec.events) },
    };
    render();
    return;
  }
  if (modal.type === "model-import-confirm") {
    if (!requireDraftFunctionVersion()) return;
    const functionId = route().split("/")[3];
    const spec = getModelSpec(functionId);
    spec.properties = deepClone(modal.candidate.properties);
    spec.services = deepClone(modal.candidate.services);
    spec.events = deepClone(modal.candidate.events);
    spec.savedAt = "";
    state.modal = null;
    return showToast("物模型 JSON 已替换");
  }
  if (modal.type === "model-hardware-form") {
    if (!requireDraftFunctionVersion()) return;
    const id = inputValue("modal-model-hardware");
    if (!id) return showToast("请选择关联硬件", "error", false);
    const spec = getModelSpec(route().split("/")[3]);
    if (!spec.hardware.includes(id)) spec.hardware.push(id);
    spec.savedAt = "";
    state.modal = null;
    return showToast("硬件已关联");
  }
  if (modal.type === "asset-test-form") {
    const required = {
      key: inputValue("modal-asset-test-key"),
      label: inputValue("modal-asset-test-label"),
      expected: inputValue("modal-asset-test-expected"),
      jsonPath: inputValue("modal-asset-test-json-path"),
      url: inputValue("modal-asset-test-url"),
      requestType: inputValue("modal-asset-test-request-type"),
      headers: inputValue("modal-asset-test-headers"),
      body: inputValue("modal-asset-test-body"),
    };
    if (Object.values(required).some((value) => !value)) return showToast("请完善测试项必填信息", "error", false);
    const value = { ...required, wait: Number(inputValue("modal-asset-test-wait")) || 1000, manual: inputValue("modal-asset-test-manual") || "否", write: inputValue("modal-asset-test-write") || "否", remark: inputValue("modal-asset-test-remark") };
    const draft = activeEditableDraft();
    if (Number.isInteger(modal.index)) draft.tests[modal.index] = value;
    else draft.tests.push(value);
    state.modal = null;
    return showToast(`测试项已${Number.isInteger(modal.index) ? "更新" : "添加"}`);
  }
  if (modal.type === "asset-status-confirm") {
    const row = assetConfigs[modal.assetType].rows.find((item) => item.id === modal.id);
    if (row) row.status = row.status === "启用" ? "停用" : "启用";
    state.modal = modal.returnToDetail ? { type: "asset-detail", assetType: modal.assetType, id: modal.id } : null;
    return showToast(`${assetConfigs[modal.assetType].itemTitle}状态已变更为${row?.status || "最新状态"}`);
  }
  if (modal.type === "template") {
    if (state.templateRows.some((row) => !row.key.trim() || !row.label.trim())) return showToast("请完善模板参数名和中文名", "error", false);
    state.modal = null;
    return showToast("参数模板已保存");
  }
  if (modal.type === "publish") {
    const machine = machines.find((item) => item.id === modal.id) || machines[0];
    const config = activeMachineConfig(modal.id);
    if (!config.hardware.length || config.hardware.some((item) => !item.model)) return showToast("请先完成所有硬件类目的型号配置", "error", false);
    config.savedAt = config.savedAt || new Date().toLocaleString("zh-CN", { hour12: false });
    if (machine) machine.status = "已发布";
    state.modal = null;
    return showToast("机型已发布");
  }
  if (modal.type === "config-category") {
    const value = inputValue("modal-config-category");
    if (!value) return showToast("请选择硬件类目", "error", false);
    if (state.configHardware.some((item) => item.category === value)) return showToast("该硬件类目已存在", "error", false);
    state.configHardware.push({ category: value, model: "" });
    state.configSavedAt = "";
    state.modal = null;
    return showToast("硬件类目已添加");
  }
  if (modal.type === "config-hardware-select") {
    const value = inputValue("modal-config-hardware");
    if (!value) return showToast("请选择硬件型号", "error", false);
    if (state.configHardware[modal.index]) state.configHardware[modal.index].model = value;
    state.configSavedAt = "";
    state.modal = null;
    return showToast("硬件型号已配置");
  }
  if (modal.type === "config-function") {
    const value = inputValue("modal-config-function");
    if (!value) return showToast("请选择功能版本", "error", false);
    const [functionId, versionId] = value.split("|");
    const item = functions.find((entry) => entry.id === functionId);
    const version = item?.versions.find((entry) => entry.id === versionId);
    const machine = machines.find((entry) => entry.id === activeMachineId()) || machines[0];
    if (!item || !version || version.status !== "已发布") return showToast("该功能版本已不可引用，请重新选择", "error", false);
    if (item.productLine !== machine.line) return showToast("功能与机型所属产品线不一致", "error", false);
    if (state.configFunctions.some((binding) => (typeof binding === "string" ? binding : binding.functionId) === functionId)) return showToast("该功能已配置，请先移除原版本", "error", false);
    state.configFunctions.push({ functionId, versionId });
    state.configSavedAt = "";
    state.modal = null;
    return showToast("功能版本已添加到机型");
  }
  if (modal.type === "config-parameter") {
    const key = inputValue("modal-config-param-key");
    const label = inputValue("modal-config-param-label");
    if (!key || !label) return showToast("请填写参数名和中文名", "error", false);
    if (state.configParameters.some((item) => item.key === key)) return showToast("参数名已存在", "error", false);
    state.configParameters.push({ key, label, type: inputValue("modal-config-param-type") || "字符串", defaultValue: inputValue("modal-config-param-default") });
    state.configSavedAt = "";
    state.modal = null;
    return showToast("参数已添加");
  }
  if (modal.type === "config-test") {
    const key = inputValue("modal-config-test-key");
    const label = inputValue("modal-config-test-label");
    const expected = inputValue("modal-config-test-expected");
    const jsonPath = inputValue("modal-config-test-json-path");
    const url = inputValue("modal-config-test-url");
    const requestType = inputValue("modal-config-test-request-type");
    const headers = inputValue("modal-config-test-headers");
    const body = inputValue("modal-config-test-body");
    if (!key || !label || !expected || !jsonPath || !url || !requestType || !headers || !body) return showToast("请完善测试项必填信息", "error", false);
    state.configTests.push({ key, label, expected, wait: Number(inputValue("modal-config-test-wait")) || 1000, manual: inputValue("modal-config-test-manual") || "否", write: inputValue("modal-config-test-write") || "否", jsonPath, url, requestType, headers, body, remark: inputValue("modal-config-test-remark") });
    state.configSavedAt = "";
    state.modal = null;
    return showToast("测试项已添加");
  }
  if (modal.type === "config-clear-confirm") {
    const key = { hardware: "hardware", function: "functions", parameter: "parameters", test: "tests" }[modal.scope];
    if (key) activeMachineConfig()[key] = [];
    state.configSavedAt = "";
    state.modal = null;
    return showToast("当前页签配置已清除");
  }
  state.modal = null;
  render();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "modal-backdrop" && event.target !== target) return;
  if (action === "model-param-dialog-close" && target.classList.contains("model-param-dialog-backdrop") && event.target !== target) return;
  if (action === "toggle-sidebar") state.sidebarCollapsed = !state.sidebarCollapsed;
  else if (action === "toggle-group") state.openGroups.has(target.dataset.group) ? state.openGroups.delete(target.dataset.group) : state.openGroups.add(target.dataset.group);
  else if (action === "navigate") return navigate(target.dataset.route);
  else if (action === "machine-filter") { state.machineFilter[target.dataset.key] = target.dataset.value; state.machineFilter.page = 1; }
  else if (action === "machine-add") { state.machineDraftImage = ""; state.modal = { type: "machine-form" }; }
  else if (action === "machine-edit") { state.machineDraftImage = ""; state.modal = { type: "machine-form", id: target.dataset.id }; }
  else if (action === "machine-config") return navigate(`/machine/config/${target.dataset.id}`);
  else if (action === "machine-delete") { const machine = machines.find((m) => m.id === target.dataset.id); state.modal = { type: "confirm-delete", id: target.dataset.id, name: machine?.name || "" }; }
  else if (action === "pagination-page") setPage(target.dataset.context, Number(target.dataset.page));
  else if (action === "pagination-prev") changePage(target.dataset.context, -1);
  else if (action === "pagination-next") changePage(target.dataset.context, 1);
  else if (action === "category-select") { state.selectedCategory[target.dataset.type] = Number(target.dataset.index); if (target.dataset.type === "function") state.functionPage = 1; }
  else if (action === "category-add") {
    if (target.dataset.type === "function") state.modal = { type: "category-form", assetType: "function", edit: false };
    else { state.categoryDraft = null; return navigate(`/category/${target.dataset.type}/new`); }
  }
  else if (action === "category-edit") {
    if (target.dataset.type === "function") state.modal = { type: "category-form", assetType: "function", edit: true };
    else { state.categoryDraft = null; return navigate(`/category/${target.dataset.type}/edit`); }
  }
  else if (action === "template-open") state.modal = { type: "template", assetType: target.dataset.type };
  else if (action === "asset-add") { state.assetDraft = null; return navigate(`/form/${target.dataset.type}/new`); }
  else if (action === "asset-edit") { state.assetDraft = null; return navigate(`/form/${target.dataset.type}/edit/${target.dataset.id}`); }
  else if (action === "asset-detail") state.modal = { type: "asset-detail", assetType: target.dataset.type, id: target.dataset.id };
  else if (action === "asset-detail-edit") { state.assetDraft = null; return navigate(`/form/${target.dataset.type}/edit/${target.dataset.id}`); }
  else if (action === "asset-status-toggle") state.modal = { type: "asset-status-confirm", assetType: target.dataset.type, id: target.dataset.id, returnToDetail: state.modal?.type === "asset-detail" };
  else if (action === "asset-refs") { const cfg = assetConfigs[target.dataset.type]; const row = cfg.rows.find((item) => item.id === target.dataset.id); state.modal = { type: "refs", refs: row?.refs || 0 }; }
  else if (action === "function-line-select") { state.selectedProductLine = target.dataset.line; state.functionCategory = "全部"; state.functionStatus = "全部"; state.functionPage = 1; }
  else if (action === "function-view-mode") {
    state.functionViewMode = target.dataset.mode === "card" ? "card" : "list";
    persistState();
  }
  else if (action === "function-add") {
    state.functionDraftImage = "";
    state.modal = { type: "function-create-entry", targetLine: productLines.includes(state.selectedProductLine) ? state.selectedProductLine : productLines[0] };
  }
  else if (action === "function-global-detail") state.modal = { type: "function-global-detail", capabilityId: target.dataset.capability };
  else if (action === "function-copy-crossline") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    const targetLine = item ? availableTargetLines(item)[0] : "";
    if (!item || !targetLine) return showToast("该功能已覆盖全部产品线", "error");
    state.modal = { type: "function-cross-line-copy", id: item.id, versionId: target.dataset.version || latestPublishedVersion(item)?.id, targetLine };
  }
  else if (action === "function-model" || action === "function-detail") { const item = functions.find((entry) => entry.id === target.dataset.id); if (item) state.functionVersionSelection[item.id] = workspaceFunctionVersion(item)?.id; state.modelTab = "model"; state.functionReferencePage = 1; return navigate(`/function/detail/${target.dataset.id}`); }
  else if (action === "function-version-select") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    if (item?.versions.some((version) => version.id === target.dataset.version)) state.functionVersionSelection[item.id] = target.dataset.version;
    state.functionReferenceSearch = "";
    state.functionReferencePage = 1;
  }
  else if (action === "function-version-snapshot") state.modal = { type: "function-version-snapshot", id: target.dataset.id, versionId: target.dataset.version };
  else if (action === "function-open-workspace") { state.functionVersionSelection[target.dataset.id] = target.dataset.version; state.modelTab = "model"; state.modal = null; return navigate(`/function/detail/${target.dataset.id}`); }
  else if (action === "function-version-view") { state.functionVersionSelection[target.dataset.id] = target.dataset.version; state.modelTab = "model"; return navigate(`/function/detail/${target.dataset.id}`); }
  else if (action === "function-edit") {
    const item = functions.find((entry) => entry.id === (target.dataset.id || state.modal?.id));
    if (!item || !canEditFunctionMetadata(item)) return showToast("功能首次发布后基础资料不可修改", "error");
    state.functionDraftImage = "";
    state.modal = { type: "function-form", id: item.id };
  }
  else if (action === "function-edit-version") state.modal = { type: "function-version-info", id: target.dataset.id, versionId: target.dataset.version };
  else if (action === "function-submit-test") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    const version = item ? selectedFunctionVersion(item) : null;
    if (!version || version.status !== "草稿") return showToast("只有草稿版本可以提交测试", "error");
    state.modal = { type: "function-submit-test", id: item.id };
  }
  else if (action === "function-withdraw-test") state.modal = { type: "function-version-status", id: target.dataset.id, nextStatus: "草稿" };
  else if (action === "function-publish-version") state.modal = { type: "function-publish-version", id: target.dataset.id };
  else if (action === "function-create-version") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    state.modal = { type: "function-create-version", id: target.dataset.id, versionId: target.dataset.version || latestPublishedVersion(item)?.id };
  }
  else if (action === "function-disable-version") state.modal = { type: "function-version-status", id: target.dataset.id, versionId: target.dataset.version, nextStatus: "已停用" };
  else if (action === "function-restore-version") state.modal = { type: "function-version-status", id: target.dataset.id, versionId: target.dataset.version, nextStatus: "已发布" };
  else if (action === "function-delete") state.modal = { type: "function-delete-confirm", id: target.dataset.id };
  else if (action === "function-search") { state.functionSearch = inputValue("function-search"); state.functionPage = 1; }
  else if (action === "function-open-references" || action === "function-review-relations") {
    state.modal = null;
    state.modelTab = "firmware";
    state.functionReferencePage = 1;
  }
  else if (action === "function-relation-search") {
    state.functionReferenceSearch = inputValue("function-relation-search");
    state.functionReferencePage = 1;
  }
  else if (action === "function-relation-reset") {
    state.functionReferenceSearch = "";
    state.functionReferencePage = 1;
  }
  else if (action === "function-relation-page") state.functionReferencePage = Math.max(1, Number(target.dataset.page) || 1);
  else if (action === "model-tab") state.modelTab = target.dataset.tab;
  else if (action === "model-add") {
    if (!requireDraftFunctionVersion()) return;
    state.modal = { type: "model-form", originalKind: "property", draft: createModelDraft("property") };
  }
  else if (action === "model-edit") {
    if (!requireDraftFunctionVersion()) return;
    const kind = target.dataset.kind;
    const index = Number(target.dataset.index);
    const row = modelCollection(getModelSpec(route().split("/")[3]), kind)[index];
    state.modal = { type: "model-form", originalKind: kind, index, draft: createModelDraft(kind, row) };
  }
  else if (action === "model-kind") { state.modal.draft.kind = target.dataset.kind; state.modal.dirty = true; render(); return; }
  else if (action === "model-access") {
    state.modal.draft.access = target.dataset.value;
    if (target.dataset.value === "只读") state.modal.draft.defaultValue = "";
    state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-call-type") {
    state.modal.draft.callType = target.dataset.value;
    state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-param-add") {
    const allowDefaultValue = target.dataset.allowDefault === "true";
    state.modal.paramEditor = { direction: target.dataset.param, allowDefaultValue, draft: createModelParameterDraft(null, allowDefaultValue) };
    render();
    return;
  }
  else if (action === "model-param-edit") {
    const direction = target.dataset.param;
    const index = Number(target.dataset.index);
    const allowDefaultValue = target.dataset.allowDefault === "true";
    const row = state.modal.draft[direction]?.[index];
    if (!row) return;
    state.modal.paramEditor = { direction, index, allowDefaultValue, draft: createModelParameterDraft(row, allowDefaultValue) };
    render();
    return;
  }
  else if (action === "model-param-remove") { state.modal.draft[target.dataset.param].splice(Number(target.dataset.index), 1); state.modal.dirty = true; render(); return; }
  else if (action === "model-param-required") {
    const editor = state.modal.paramEditor;
    if (!editor) return;
    editor.draft.required = target.dataset.value === "必填";
    if (editor.draft.required) editor.draft.defaultValue = "";
    render();
    return;
  }
  else if (action === "model-param-dialog-close") {
    state.modal.paramEditor = null;
    render();
    return;
  }
  else if (action === "model-param-save") {
    const editor = state.modal.paramEditor;
    if (!editor) return;
    const value = normalizeModelParameterList([editor.draft], editor.allowDefaultValue)[0];
    const validationError = modelParameterValidationError([value], editor.allowDefaultValue);
    if (validationError) return showToast(validationError, "error", false);
    const duplicate = ["inputParams", "outputParams"].flatMap((direction) => (state.modal.draft[direction] || []).map((row, index) => ({ row, direction, index }))).some(({ row, direction, index }) => row.identifier === value.identifier && !(direction === editor.direction && index === editor.index));
    if (duplicate) return showToast(state.modal.draft.kind === "service" ? "输入参数和输出参数的标识符不能重复" : "输出参数标识符不能重复", "error", false);
    const collection = state.modal.draft[editor.direction];
    if (Number.isInteger(editor.index)) collection.splice(editor.index, 1, value);
    else collection.push(value);
    state.modal.paramEditor = null;
    state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-struct-add") {
    const owner = modelStructOwner(target.dataset.owner);
    if (!owner?.dataSpec?.fields) return;
    const dataType = "字符型(String)";
    const dataSpec = defaultModelDataSpec(dataType);
    owner.dataSpec.fields.push({ name: "", identifier: "", dataType, dataSpec, dataDefinition: modelDataSpecToDefinition(dataType, dataSpec) });
    owner.dataDefinition = modelDataSpecToDefinition(owner.dataType, owner.dataSpec);
    if (target.dataset.owner === "property") state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-struct-remove") {
    const owner = modelStructOwner(target.dataset.owner);
    if (!owner?.dataSpec?.fields) return;
    owner.dataSpec.fields.splice(Number(target.dataset.structIndex), 1);
    owner.dataDefinition = modelDataSpecToDefinition(owner.dataType, owner.dataSpec);
    if (target.dataset.owner === "property") state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-enum-add" || action === "model-enum-remove") {
    const owner = modelEditorOwner(target);
    if (!owner?.dataSpec?.enumItems) return;
    if (action === "model-enum-add") owner.dataSpec.enumItems.push({ value: "", label: "" });
    else if (owner.dataSpec.enumItems.length > 1) owner.dataSpec.enumItems.splice(Number(target.dataset.enumIndex), 1);
    else owner.dataSpec.enumItems[0] = { value: "", label: "" };
    owner.dataDefinition = modelDataSpecToDefinition(owner.dataType, owner.dataSpec);
    if (!["parameter-dialog", "struct-field"].includes(target.dataset.scope) || target.dataset.owner === "property") state.modal.dirty = true;
    if (target.dataset.scope === "struct-field") {
      const structOwner = modelStructOwner(target.dataset.owner);
      if (structOwner) structOwner.dataDefinition = modelDataSpecToDefinition(structOwner.dataType, structOwner.dataSpec);
    }
    render();
    return;
  }
  else if (action === "model-delete") {
    if (!requireDraftFunctionVersion()) return;
    state.modal = { type: "model-delete-confirm", kind: target.dataset.kind, index: Number(target.dataset.index) };
  }
  else if (action === "model-preview") state.modal = { type: "model-preview" };
  else if (action === "model-import") {
    if (!requireDraftFunctionVersion()) return;
    state.modal = { type: "model-import" };
  }
  else if (action === "model-hardware-add") {
    if (!requireDraftFunctionVersion()) return;
    state.modal = { type: "model-hardware-form" };
  }
  else if (action === "model-hardware-remove") {
    if (!requireDraftFunctionVersion()) return;
    const spec = getModelSpec(route().split("/")[3]);
    spec.hardware.splice(Number(target.dataset.index), 1);
    spec.savedAt = "";
    return showToast("关联硬件已移除");
  }
  else if (action === "modal-close" || action === "modal-backdrop") {
    const currentModal = state.modal;
    if (currentModal?.type === "model-form" && currentModal.dirty) {
      state.modal = { type: "model-discard-confirm", previousModal: currentModal };
      render();
      return;
    }
    if (currentModal?.type === "model-discard-confirm") {
      state.modal = currentModal.previousModal;
      render();
      return;
    }
    state.modal = currentModal?.returnToDetail ? { type: "asset-detail", assetType: currentModal.assetType, id: currentModal.id } : null;
    state.functionDraftImage = "";
    state.machineDraftImage = "";
  }
  else if (action === "model-discard-return") { state.modal = state.modal.previousModal; render(); return; }
  else if (action === "model-discard-confirm") { state.modal = null; render(); return; }
  else if (action === "model-import-back") { state.modal = { type: "model-import", raw: state.modal.raw }; render(); return; }
  else if (action === "modal-confirm") return handleModalConfirm();
  else if (action === "draft-row-add") {
    const draft = activeEditableDraft();
    if (target.dataset.kind === "test") draft.tests.push({ key: "", label: "", expected: "", wait: 1000 });
    else draft.parameters.push({ key: "", label: "", type: "字符型（String）", remark: "" });
  }
  else if (action === "asset-test-add") state.modal = { type: "asset-test-form" };
  else if (action === "asset-test-edit") state.modal = { type: "asset-test-form", index: Number(target.dataset.index) };
  else if (action === "draft-row-remove") activeEditableDraft()[target.dataset.kind === "test" ? "tests" : "parameters"].splice(Number(target.dataset.index), 1);
  else if (action === "template-add") state.templateRows.push({ key: "", label: "", type: "字符串", remark: "" });
  else if (action === "template-delete") state.templateRows.splice(Number(target.dataset.index), 1);
  else if (action === "category-save") {
    const draft = state.categoryDraft;
    const name = inputValue("category-name");
    const code = inputValue("category-code");
    if (!name) return showToast("请填写类目名称", "error", false);
    if (draft.type !== "electronic" && (!code || !/^[A-Za-z0-9_]+$/.test(code))) return showToast("请填写有效类目编码", "error", false);
    if (!draft.image) return showToast("请上传类目图片", "error", false);
    const cfg = assetConfigs[draft.type];
    const selectedIndex = state.selectedCategory[draft.type];
    if (cfg.categories.some((item, index) => item === name && (draft.mode !== "edit" || index !== selectedIndex))) return showToast("类目名称已存在", "error", false);
    if (draft.type !== "electronic" && state.categoryMeta[draft.type].some((meta, index) => meta?.code === code && (draft.mode !== "edit" || index !== selectedIndex))) return showToast("类目编码已存在", "error", false);
    let index;
    if (draft.mode === "edit") {
      index = selectedIndex;
      const previous = cfg.categories[index];
      cfg.categories[index] = name;
      cfg.rows.filter((row) => row.type === previous).forEach((row) => { row.type = name; });
    } else {
      cfg.categories.push(name);
      index = cfg.categories.length - 1;
      state.selectedCategory[draft.type] = index;
    }
    state.categoryMeta[draft.type][index] = {
      ...state.categoryMeta[draft.type][index],
      code,
      description: inputValue("category-description"),
      image: draft.image,
      createdAt: state.categoryMeta[draft.type][index]?.createdAt || new Date().toLocaleString("zh-CN", { hour12: false }),
      parameters: draft.parameters.map((row) => ({ ...row })),
      tests: draft.tests.map((row) => ({ ...row })),
    };
    state.categoryDraft = null;
    navigate(cfg.route);
    return showToast("类目信息已保存");
  }
  else if (action === "asset-save") {
    const name = inputValue("asset-name");
    if (!name) return showToast("请填写名称", "error", false);
    const cfg = assetConfigs[state.assetDraft.type];
    const itemType = inputValue("asset-type");
    const maker = inputValue("asset-maker");
    const model = inputValue("asset-model");
    if (!itemType || !maker || !model) return showToast("请完善类型、生产厂商和型号", "error", false);
    if (!state.assetDraft.image) return showToast("请上传图片", "error", false);
    const original = cfg.rows.find((item) => item.id === state.assetDraft.id);
    if ((state.assetDraft.mode === "new" || original?.model !== model) && cfg.rows.some((item) => item.model === model && item.id !== state.assetDraft.id)) return showToast("该型号已存在", "error", false);
    if (state.assetDraft.mode === "new") cfg.rows.unshift({ id: `${state.assetDraft.type}${Date.now()}`, categoryIndex: state.selectedCategory[state.assetDraft.type], name, type: itemType, maker, model, status: "启用", phone: inputValue("asset-phone"), refs: 0, image: state.assetDraft.image, parameters: state.assetDraft.parameters.map((row) => ({ ...row })), tests: state.assetDraft.tests.map((row) => ({ ...row })) });
    else {
      const row = cfg.rows.find((item) => item.id === state.assetDraft.id);
      if (row) Object.assign(row, { name, type: itemType, maker, model, phone: inputValue("asset-phone"), image: state.assetDraft.image, parameters: state.assetDraft.parameters.map((entry) => ({ ...entry })), tests: state.assetDraft.tests.map((entry) => ({ ...entry })) });
    }
    state.assetDraft = null;
    navigate(cfg.route);
    return showToast("信息已保存");
  }
  else if (action === "config-tab") state.configTab = target.dataset.tab;
  else if (action === "config-category-add") state.modal = { type: "config-category" };
  else if (action === "config-choose") state.modal = { type: "config-hardware-select", index: Number(target.dataset.index) };
  else if (action === "config-hardware-pick") {
    const row = state.configHardware[Number(target.dataset.index)];
    if (row) row.model = row.model === target.dataset.model ? "" : target.dataset.model;
    state.configSavedAt = "";
    return showToast(row?.model ? "硬件型号已配置" : "硬件型号已取消");
  }
  else if (action === "config-function-add") state.modal = { type: "config-function" };
  else if (action === "config-param-add") state.modal = { type: "config-parameter" };
  else if (action === "config-test-add") state.modal = { type: "config-test" };
  else if (action === "config-row-delete") {
    const map = { hardware: "configHardware", function: "configFunctions", parameter: "configParameters", test: "configTests" };
    state[map[target.dataset.kind]].splice(Number(target.dataset.index), 1);
    state.configSavedAt = "";
    return showToast("配置项已删除");
  }
  else if (action === "config-filter") { state.configHardwareFilter = target.dataset.filter; return showToast(`已筛选：${target.dataset.filter}`); }
  else if (action === "config-clear") state.modal = { type: "config-clear-confirm", scope: state.configTab };
  else if (action === "config-save") { state.configSavedAt = new Date().toLocaleString("zh-CN", { hour12: false }); return showToast("配置已保存"); }
  else if (action === "config-preview") state.modal = { type: "config-preview" };
  else if (action === "publish-machine") state.modal = { type: "publish", id: route().split("/")[3] || machines[0]?.id };
  else if (action === "logs-open") state.modal = { type: "logs" };
  else if (action === "more-open") state.modal = { type: "more", id: target.dataset.id };
  else if (action === "more-edit") { state.machineDraftImage = ""; state.modal = { type: "machine-form", id: target.dataset.id }; }
  else if (action === "more-copy") {
    const source = machines.find((item) => item.id === target.dataset.id);
    if (source) {
      const copy = { ...source, id: `m${Date.now()}`, name: `${source.name}-副本`, status: "开发中" };
      machines.unshift(copy);
      state.machineConfigs[copy.id] = JSON.parse(JSON.stringify(activeMachineConfig(source.id)));
      state.machineConfigs[copy.id].savedAt = "";
      state.modal = null;
      navigate(`/machine/config/${copy.id}`);
      return showToast("机型副本已创建");
    }
  }
  else if (action === "more-stop") {
    const machine = machines.find((item) => item.id === target.dataset.id);
    if (machine) machine.status = machine.status === "已停产" ? "开发中" : "已停产";
    state.modal = null;
    return showToast(`机型状态已变更为${machine?.status || "最新状态"}`);
  }
  render();
});

document.addEventListener("input", (event) => {
  if (syncModelDraftInput(event.target)) return;
  if (event.target.matches('[data-role="modal-copy-version-changelog"]') && state.modal?.type === "function-cross-line-copy") {
    state.modal.changelog = event.target.value;
    state.modal.changelogEdited = true;
  } else if (event.target.matches('[data-role="category-search"]')) {
    const type = event.target.dataset.type;
    const value = event.target.value;
    state.categorySearch[type] = value;
    window.clearTimeout(categorySearchTimer);
    categorySearchTimer = window.setTimeout(() => {
      render();
      const input = document.querySelector(`[data-role="category-search"][data-type="${type}"]`);
      if (input) {
        input.focus();
        input.setSelectionRange(value.length, value.length);
      }
    }, 180);
  } else if (event.target.matches('[data-role^="asset-"]:not([data-role="asset-upload"])') && state.assetDraft) {
    const fieldMap = { "asset-name": "name", "asset-type": "itemType", "asset-maker": "maker", "asset-model": "model", "asset-status": "status", "asset-phone": "phone" };
    const field = fieldMap[event.target.dataset.role];
    if (field) state.assetDraft[field] = event.target.value;
  } else if (event.target.matches('[data-role^="category-"]:not([data-role="category-search"]):not([data-role="category-upload"])') && state.categoryDraft) {
    const fieldMap = { "category-name": "name", "category-code": "code", "category-description": "description" };
    const field = fieldMap[event.target.dataset.role];
    if (field) state.categoryDraft[field] = event.target.value;
  } else if (event.target.matches('[data-role="draft-cell"]')) {
    const draft = activeEditableDraft();
    const collection = event.target.dataset.kind === "test" ? draft?.tests : draft?.parameters;
    if (collection?.[Number(event.target.dataset.index)]) collection[Number(event.target.dataset.index)][event.target.dataset.field] = event.target.value;
  } else if (event.target.matches('[data-role="template-cell"]')) {
    const row = state.templateRows[Number(event.target.dataset.index)];
    if (row) row[event.target.dataset.field] = event.target.value;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches('[data-role="machine-search"]')) {
    state.machineFilter.search = event.target.value.trim();
    state.machineFilter.page = 1;
    render();
  } else if (event.key === "Enter" && event.target.matches('[data-role="function-search"]')) {
    state.functionSearch = event.target.value.trim();
    state.functionPage = 1;
    render();
  } else if (event.key === "Enter" && event.target.matches('[data-role="function-relation-search"]')) {
    state.functionReferenceSearch = event.target.value.trim();
    state.functionReferencePage = 1;
    render();
  } else if (event.key === "Enter" && event.target.matches('[data-role="pagination-jump"]')) {
    setPage(event.target.dataset.context, event.target.value);
    render();
  } else if (event.key === "Enter" && event.target.matches('[data-role="config-hardware-search"]')) {
    state.configHardwareSearch = event.target.value.trim();
    render();
  }
});

document.addEventListener("change", (event) => {
  if (syncModelDraftInput(event.target)) {
    if (event.target.matches("select")) render();
    return;
  }
  if (event.target.matches('[data-role="category-upload"]') && event.target.files?.[0]) {
    const reader = new FileReader();
    reader.onload = () => { state.categoryDraft.image = reader.result; render(); };
    reader.readAsDataURL(event.target.files[0]);
  } else if (event.target.matches('[data-role="asset-upload"]') && event.target.files?.[0]) {
    const reader = new FileReader();
    reader.onload = () => { state.assetDraft.image = reader.result; render(); };
    reader.readAsDataURL(event.target.files[0]);
  } else if (event.target.matches('[data-role="function-upload"]') && event.target.files?.[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      state.functionDraftImage = reader.result;
      const box = event.target.closest(".upload-box");
      box?.querySelector(".upload-preview")?.remove();
      box?.querySelector(":scope > span")?.remove();
      box?.insertAdjacentHTML("afterbegin", `<img class="upload-preview" src="${reader.result}" alt="预览">`);
    };
    reader.readAsDataURL(event.target.files[0]);
  } else if (event.target.matches('[data-role="machine-upload"]') && event.target.files?.[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      state.machineDraftImage = reader.result;
      const box = event.target.closest(".upload-box");
      box?.querySelector(".upload-preview")?.remove();
      box?.querySelector(":scope > span")?.remove();
      box?.insertAdjacentHTML("afterbegin", `<img class="upload-preview" src="${reader.result}" alt="预览">`);
    };
    reader.readAsDataURL(event.target.files[0]);
  } else if (event.target.matches('[data-role^="asset-"]:not([data-role="asset-upload"])') && state.assetDraft) {
    const fieldMap = { "asset-name": "name", "asset-type": "itemType", "asset-maker": "maker", "asset-model": "model", "asset-status": "status", "asset-phone": "phone" };
    const field = fieldMap[event.target.dataset.role];
    if (field) state.assetDraft[field] = event.target.value;
  } else if (event.target.matches('[data-role^="category-"]:not([data-role="category-search"]):not([data-role="category-upload"])') && state.categoryDraft) {
    const fieldMap = { "category-name": "name", "category-code": "code", "category-description": "description" };
    const field = fieldMap[event.target.dataset.role];
    if (field) state.categoryDraft[field] = event.target.value;
  } else if (event.target.matches('[data-role="modal-copy-target-line"]')) {
    if (state.modal.changelogEdited) state.modal.changelog = inputValue("modal-copy-version-changelog");
    state.modal.targetLine = event.target.value;
    render();
  } else if (event.target.matches('[data-role="machine-line"]')) {
    state.machineFilter.line = event.target.value;
    state.machineFilter.page = 1;
    render();
  } else if (event.target.matches('[data-role="function-category-filter"]')) {
    state.functionCategory = event.target.value;
    state.functionPage = 1;
    render();
  } else if (event.target.matches('[data-role="function-status-filter"]')) {
    state.functionStatus = event.target.value;
    state.functionPage = 1;
    render();
  } else if (event.target.matches('[data-role="pagination-size"]')) {
    const size = Number(event.target.value);
    if (event.target.dataset.context === "function") {
      state.functionPageSize = size;
      state.functionPage = 1;
    } else {
      state.machineFilter.pageSize = size;
      state.machineFilter.page = 1;
    }
    render();
  } else if (event.target.matches('[data-role="draft-cell"]')) {
    const draft = activeEditableDraft();
    const collection = event.target.dataset.kind === "test" ? draft?.tests : draft?.parameters;
    if (collection?.[Number(event.target.dataset.index)]) collection[Number(event.target.dataset.index)][event.target.dataset.field] = event.target.value;
  } else if (event.target.matches('[data-role="template-cell"]')) {
    const row = state.templateRows[Number(event.target.dataset.index)];
    if (row) row[event.target.dataset.field] = event.target.value;
  }
});

window.addEventListener("hashchange", () => {
  state.assetDraft = null;
  state.categoryDraft = null;
  state.modal = null;
  render();
});

restorePersistentState();
normalizeFunctionData();
persistState();
if (!location.hash) location.hash = "/machine";
else render();
