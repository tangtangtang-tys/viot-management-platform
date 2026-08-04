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
const GLOBAL_PRODUCT_LINE = "全部产线";
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
    recommended: Boolean(options.recommended),
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
    requiredInFirmware: false,
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
    remark: "检测画面变化并上报移动事件", requiredInFirmware: true, createdAt: "2026-05-12 10:20:05",
    versions: [
      functionVersion("f1", 2, "已发布", 12, { publishedAt: "2026-07-15 16:40:20", changelog: "提升弱光环境识别稳定性", firmwareVersions: ["23.210.211", "23.210.212"], recommended: true }),
      functionVersion("f1", 1, "已停用", 4, { publishedAt: "2026-05-18 11:32:10", changelog: "首个正式版本", firmwareVersions: ["23.110.200"] }),
    ],
  },
  {
    id: "f2", name: "夜视模式", identifier: "night_vision", productLine: "IPC", category: "图像设置", image: img.goose,
    remark: "自动或手动切换日夜成像模式", requiredInFirmware: true, createdAt: "2026-06-03 09:32:18",
    versions: [functionVersion("f2", 1, "已发布", 0, { publishedAt: "2026-07-18 10:20:05", changelog: "验证红外切换与画面恢复", firmwareVersions: ["99.789.24", "23.210.211"], recommended: true })],
  },
  {
    id: "f3", name: "云台控制", identifier: "ptz_control", productLine: "IPC", category: "设备控制", image: img.blue,
    remark: "控制水平与垂直电机运动", createdAt: "2026-04-22 14:06:36",
    versions: [
      functionVersion("f3", 3, "草稿", 0, { changelog: "增加预置位控制" }),
      functionVersion("f3", 2, "已发布", 8, { publishedAt: "2026-06-26 10:42:00", changelog: "增加转动速度参数", firmwareVersions: ["23.230.111"], recommended: true }),
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
    versions: [functionVersion("f5", 1, "已发布", 6, { publishedAt: "2026-06-01 10:22:18", changelog: "首个正式版本", firmwareVersions: ["3.8.12"], recommended: true })],
  },
  {
    id: "f6", name: "碰撞告警", identifier: "collision_alarm", productLine: "车载", category: "智能分析", image: img.camera,
    remark: "车辆碰撞后上报告警与定位信息", createdAt: "2026-06-12 13:20:42",
    versions: [functionVersion("f6", 1, "草稿", 0)],
  },
  {
    id: "f7", name: "语音唤醒", identifier: "voice_wakeup", productLine: "AI玩具", category: "音频设置", image: img.goose,
    remark: "监听唤醒词并启动语音会话", createdAt: "2026-06-16 16:28:00",
    versions: [functionVersion("f7", 1, "已发布", 3, { publishedAt: "2026-07-02 10:18:00", changelog: "首个正式版本", firmwareVersions: ["1.2.0"], recommended: true })],
  },
  {
    id: "f8", name: "哭声检测", identifier: "cry_detection", productLine: "婴儿看护", category: "智能分析", image: img.blue,
    remark: "识别婴儿哭声并向家长端推送提醒", requiredInFirmware: true, createdAt: "2026-06-28 09:10:20",
    versions: [functionVersion("f8", 1, "测试中", 0, { changelog: "增加不同环境噪声下的哭声识别" })],
  },
  ...definedFunctionMocks,
];

function mockModelParameter(name, identifier, dataType, dataDefinition = "", required = true) {
  return { name, identifier, dataType, dataDefinition, required };
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
      { id: `${functionId}-service-capture`, name: "抓拍图片", identifier: "capture_image", callType: "同步", inputParams: [mockModelParameter("图片质量", "quality", "整数型(Int)", "范围：0~100，步长：1", false)], outputParams: [mockModelParameter("图片地址", "image_url", "字符型(String)", "长度：0~512"), mockModelParameter("抓拍时间", "timestamp", "时间型(timestamp)", "Unix 毫秒时间戳")], description: "触发设备抓拍并返回图片地址" },
      { id: `${functionId}-service-restart`, name: "重启设备", identifier: "restart_device", callType: "异步", inputParams: [mockModelParameter("延迟时间", "delay_seconds", "整数型(Int)", "范围：0~300，步长：1", false)], outputParams: [mockModelParameter("任务标识", "task_id", "字符型(String)", "长度：1~64")], description: "按指定延时重启设备" },
    ],
    events: [
      { id: `${functionId}-event-motion`, name: "移动侦测", identifier: "motion_detected", outputParams: [mockModelParameter("发生时间", "timestamp", "时间型(timestamp)", "Unix 毫秒时间戳"), mockModelParameter("图片地址", "image_url", "字符型(String)", "长度：0~512"), mockModelParameter("置信度", "confidence", "浮点型(float)", "范围：0~1，步长：0.01")], description: "检测到画面移动时上报" },
      { id: `${functionId}-event-fault`, name: "设备故障", identifier: "device_fault", outputParams: [mockModelParameter("错误码", "error_code", "整数型(Int)", "范围：0~9999，步长：1"), mockModelParameter("错误信息", "error_message", "字符型(String)", "长度：0~256")], description: "设备异常时上报故障信息" },
    ],
    hardware: relatedHardware ? [relatedHardware.id] : [],
    savedAt: "",
  };
}

const initialModelSpecs = Object.fromEntries(functions.flatMap((item, index) => item.versions.map((version) => [`${item.id}:${version.id}`, createMockModelSpec(`${item.id}-${version.id}`, index)])));

const STORAGE_KEY = "viot-prototype-state-v10";
const STORAGE_VERSION = 10;

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
  modelKindTab: "all",
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
    if (typeof binding !== "string") return { ...binding, source: binding.source || "manual" };
    const item = functions.find((entry) => entry.id === binding);
    return { functionId: binding, versionId: latestPublishedVersion(item)?.id || item?.versions?.[0]?.id || "", source: "manual" };
  });
  const machine = machines.find((entry) => entry.id === id);
  if (machine) {
    functions.filter((item) => item.productLine === machine.line && item.requiredInFirmware).forEach((item) => {
      const existing = config.functions.find((binding) => binding.functionId === item.id);
      if (!existing) {
        config.functions.push({ functionId: item.id, versionId: recommendedFunctionVersion(item)?.id || "", source: "required-auto" });
      } else if (existing.source === "required-auto" && !existing.versionId) {
        existing.versionId = recommendedFunctionVersion(item)?.id || "";
      }
    });
  }
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

function availableTargetLines(source) {
  if (!source) return [];
  const capabilityId = functionCapabilityId(source);
  const occupied = new Set(functions
    .filter((item) => functionCapabilityId(item) === capabilityId || item.identifier === source.identifier)
    .map((item) => item.productLine));
  return productLines.filter((line) => !occupied.has(line));
}

function copySourceVersions(item) {
  return [...(item?.versions || [])].sort((a, b) => (b.number || 0) - (a.number || 0) || String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

function defaultCopySourceVersion(item) {
  return copySourceVersions(item)[0] || null;
}

function copySourceModelSpec(item, version) {
  const snapshot = ["已发布", "已停用"].includes(version?.status) ? activeVersionSnapshot(version) : null;
  return deepClone(snapshot?.config || getModelSpec(item.id, version.id));
}

function functionCopyButton(item, version, label = "复制", className = "btn btn-text") {
  const source = version || defaultCopySourceVersion(item);
  const hasTarget = availableTargetLines(item).length > 0;
  const enabled = Boolean(source && hasTarget);
  const title = !source ? "暂无可复制版本" : hasTarget ? `复制 ${source.label} 到其他产线` : "该功能已覆盖全部产线";
  return `<button class="${className}" data-action="function-copy-crossline" data-id="${item.id}" data-version="${source?.id || ""}" title="${escapeHtml(title)}" ${enabled ? "" : "disabled"}>${label}</button>`;
}

function functionMatchesFilters(item) {
  if (state.functionCategory !== "全部" && item.category !== state.functionCategory) return false;
  if (state.functionStatus !== "全部" && functionDisplayStatus(item) !== state.functionStatus) return false;
  if (!state.functionSearch) return true;
  const versionNotes = item.versions.map((version) => version.changelog || "").join(" ");
  const query = state.functionSearch.toLowerCase();
  return `${item.name} ${item.identifier} ${item.remark} ${versionNotes}`.toLowerCase().includes(query);
}

function functionPage() {
  const line = state.selectedProductLine;
  const isAll = line === GLOBAL_PRODUCT_LINE;
  const collection = functions.filter((item) => (isAll || item.productLine === line) && functionMatchesFilters(item));
  const total = collection.length;
  const pageCount = Math.max(1, Math.ceil(total / state.functionPageSize));
  if (state.functionPage > pageCount) state.functionPage = pageCount;
  const pageStart = (state.functionPage - 1) * state.functionPageSize;
  const pageRows = collection.slice(pageStart, pageStart + state.functionPageSize);
  const lineFunctions = isAll ? functions : functions.filter((item) => item.productLine === line);
  const publishedCount = lineFunctions.filter((item) => item.versions.some((version) => version.status === "已发布")).length;
  const testingCount = lineFunctions.filter((item) => functionDisplayStatus(item) === "测试中").length;
  const navLines = [GLOBAL_PRODUCT_LINE, ...productLines];
  return `<section class="surface function-layout">
    <div class="function-main">
      <div class="function-page-head"><div><h2>功能管理</h2><span>${isAll ? "全部产线功能汇总" : `${escapeHtml(line)} 产品线`}</span></div><dl><div><dt>功能项</dt><dd>${lineFunctions.length}</dd></div><div><dt>已发布</dt><dd>${publishedCount}</dd></div><div><dt>测试中</dt><dd>${testingCount}</dd></div></dl></div>
      <nav class="product-line-tabs" aria-label="产品线筛选">${navLines.map((name) => { const count = name === GLOBAL_PRODUCT_LINE ? functions.length : functions.filter((item) => item.productLine === name).length; return `<button class="${name === line ? "active" : ""}" data-action="function-line-select" data-line="${name}"><span>${name}</span><strong>${count}</strong></button>`; }).join("")}</nav>
      <div class="function-list-toolbar"><div class="function-filter-fields"><div class="searchbox"><input data-role="function-search" value="${escapeHtml(state.functionSearch)}" placeholder="搜索功能名称、标识或版本说明"></div><select data-role="function-category-filter"><option>全部</option>${functionCategories.map((category) => `<option ${category === state.functionCategory ? "selected" : ""}>${category}</option>`).join("")}</select><select data-role="function-status-filter">${["全部", "草稿", "测试中", "已发布", "已停用"].map((status) => `<option ${status === state.functionStatus ? "selected" : ""}>${status}</option>`).join("")}</select></div><div class="function-toolbar-actions"><div class="function-view-switch" role="group" aria-label="功能展示方式"><button class="${state.functionViewMode === "list" ? "active" : ""}" data-action="function-view-mode" data-mode="list" aria-pressed="${state.functionViewMode === "list"}" title="列表视图"><span aria-hidden="true">▤</span>列表</button><button class="${state.functionViewMode === "card" ? "active" : ""}" data-action="function-view-mode" data-mode="card" aria-pressed="${state.functionViewMode === "card"}" title="卡片视图"><span aria-hidden="true">▦</span>卡片</button></div>${isAll ? "" : `<button class="btn btn-primary" data-action="function-add">＋ 新增功能</button>`}</div></div>
      ${functionCollectionView(pageRows, isAll)}
      ${pagination(total, state.functionPage, state.functionPageSize, "function")}
    </div>
  </section>`;
}

function functionCollectionView(rows, showProductLine = false) {
  if (!rows.length) return `<div class="function-view-empty"><div class="empty-state">暂无符合条件的功能项</div></div>`;
  if (state.functionViewMode === "card") return `<div class="function-card-grid">${rows.map((item) => functionManagementCard(item, showProductLine)).join("")}</div>`;
  return `<div class="data-table-wrap"><table class="data-table function-table ${showProductLine ? "all-lines" : ""}"><thead><tr><th>功能项</th>${showProductLine ? "<th>所属产线</th>" : ""}<th>最新发布</th><th>当前工作版本</th><th>关联固件</th><th>更新时间</th><th>操作</th></tr></thead><tbody>${rows.map((item) => functionRow(item, showProductLine)).join("")}</tbody></table></div>`;
}

function functionListCopyAction(item) {
  return functionCopyButton(item, defaultCopySourceVersion(item));
}

function functionManagementCard(item, showProductLine = false) {
  const published = latestPublishedVersion(item);
  const working = item.versions.find((version) => ["草稿", "测试中"].includes(version.status));
  const primary = working || published || item.versions[0];
  const firmwareCount = item.versions.reduce((sum, version) => sum + functionFirmwareRelations(version).length, 0);
  const updatedAt = primary.publishedAt || primary.createdAt || item.createdAt;
  return `<article class="function-management-card">
    <div class="function-management-card-head"><button class="function-card-open" data-action="function-detail" data-id="${item.id}"><img src="${item.image}" alt=""><span><strong>${escapeHtml(item.name)}</strong><code>${escapeHtml(item.identifier)}</code></span></button><div class="function-card-tags">${item.requiredInFirmware ? `<span class="function-policy-tag required">固件必配</span>` : ""}${functionStatusTag(primary.status)}</div></div>
    <p>${escapeHtml(item.remark || "-")}</p>
    <div class="function-card-classification">${showProductLine ? `<span class="function-line-chip">${escapeHtml(item.productLine)}</span>` : ""}<span class="function-category-chip">${escapeHtml(item.category)}</span></div>
    <dl class="function-card-metrics"><div><dt>最新发布</dt><dd>${published?.label || "-"}</dd></div><div><dt>工作版本</dt><dd>${working?.label || "-"}</dd></div><div><dt>关联固件</dt><dd>${firmwareCount}</dd></div></dl>
    <div class="function-management-card-foot"><span>更新于 ${escapeHtml(updatedAt)}</span><div><button class="btn btn-text" data-action="function-detail" data-id="${item.id}">查看</button>${functionListCopyAction(item)}</div></div>
  </article>`;
}

function functionRow(item, showProductLine = false) {
  const published = latestPublishedVersion(item);
  const working = item.versions.find((version) => ["草稿", "测试中"].includes(version.status));
  const primary = working || published || item.versions[0];
  const firmwareCount = item.versions.reduce((sum, version) => sum + functionFirmwareRelations(version).length, 0);
  return `<tr><td><button class="function-name-cell" data-action="function-detail" data-id="${item.id}"><img src="${item.image}" alt=""><span><strong>${escapeHtml(item.name)}${item.requiredInFirmware ? `<em class="function-policy-tag required">必配</em>` : ""}</strong><code>${escapeHtml(item.identifier)}</code><small>${escapeHtml(item.category)}</small></span></button></td>${showProductLine ? `<td><span class="function-line-chip">${escapeHtml(item.productLine)}</span></td>` : ""}<td>${published ? `${published.label}${published.recommended ? ` <span class="version-signal recommended">推荐</span>` : ""}` : "-"}</td><td>${working ? `${working.label} ${functionStatusTag(working.status)}` : "-"}</td><td>${firmwareCount}</td><td>${escapeHtml(primary.publishedAt || primary.createdAt || item.createdAt)}</td><td><div class="function-row-actions"><button class="btn btn-text" data-action="function-detail" data-id="${item.id}">查看</button>${functionListCopyAction(item)}</div></td></tr>`;
}

function latestPublishedVersion(item) {
  return item?.versions?.find((version) => version.status === "已发布") || null;
}

function publishedFunctionVersions(item) {
  return (item?.versions || [])
    .filter((version) => version.status === "已发布")
    .sort((a, b) => Number(Boolean(b.recommended)) - Number(Boolean(a.recommended)) || (b.number || 0) - (a.number || 0));
}

function configurableFunctionVersions(item) {
  return (item?.versions || [])
    .filter((version) => ["测试中", "已发布"].includes(version.status))
    .sort((a, b) => Number(b.status === "已发布") - Number(a.status === "已发布") || Number(Boolean(b.recommended)) - Number(Boolean(a.recommended)) || (b.number || 0) - (a.number || 0));
}

function firmwareSelectableVersionLabel(version) {
  const statusLabel = version.status === "测试中" ? "测试中 · 仅用于测试" : "已发布 · 正式可用";
  return `${version.label} · ${statusLabel}${version.recommended ? " · 推荐" : ""}${functionFirmwareRelations(version).length ? ` · 关联 ${functionFirmwareRelations(version).length}` : ""}`;
}

function recommendedFunctionVersion(item) {
  return publishedFunctionVersions(item).find((version) => version.recommended) || null;
}

function functionVersionSignalTags(version, compact = false) {
  const relationCount = functionFirmwareRelations(version).length;
  const tags = [];
  if (version?.status === "已发布" && version.recommended) tags.push(`<span class="version-signal recommended">推荐</span>`);
  if (relationCount) tags.push(`<span class="version-signal in-use" title="已关联 ${relationCount} 个固件版本">${compact ? `关联 ${relationCount}` : `关联固件 ${relationCount}`}</span>`);
  return tags.length ? `<span class="version-signal-list">${tags.join("")}</span>` : "";
}

function firmwareFunctionReleaseGaps(machineId = activeMachineId()) {
  const machine = machines.find((entry) => entry.id === machineId) || machines[0];
  const config = activeMachineConfig(machine?.id);
  return config.functions.map((binding) => {
    const item = functions.find((entry) => entry.id === binding.functionId);
    const version = item?.versions.find((entry) => entry.id === binding.versionId) || null;
    return { item, version, binding };
  }).filter(({ item, version }) => item && (!version || version.status !== "已发布"));
}

function functionVersionBindingCount(versionId) {
  return Object.values(state.machineConfigs).reduce((count, config) => count + (config.functions || []).filter((binding) => (typeof binding === "string" ? "" : binding.versionId) === versionId).length, 0);
}

function functionDraftDeleteReason(item) {
  if (!item || item.versions.length !== 1 || item.versions[0].status !== "草稿") return "仅支持删除未发布的单版本草稿功能";
  const version = item.versions[0];
  const bindingCount = functionVersionBindingCount(version.id);
  const relationCount = functionFirmwareRelations(version).length;
  if (bindingCount || relationCount) return `已有 ${bindingCount + relationCount} 项固件配置关系，请先解除关联`;
  return "";
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
    return `复制自 ${source.productLine || "其他产线"} · ${source.functionName || item.name} ${source.versionLabel || ""}${source.versionStatus ? `（${source.versionStatus}）` : ""}`.trim();
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
  if (version.status === "草稿") {
    const deleteReason = functionDraftDeleteReason(item);
    const deleteAction = item.versions.length === 1
      ? `<button class="btn btn-text danger-text" data-action="function-delete" data-id="${item.id}" title="${escapeHtml(deleteReason || "删除该草稿功能")}" ${deleteReason ? "disabled" : ""}>删除功能</button>`
      : "";
    return `${deleteAction}<button class="btn btn-primary" data-action="function-submit-test" data-id="${item.id}">提交测试</button>`;
  }
  if (version.status === "测试中") {
    const withdrawAction = `<button class="btn" data-action="function-withdraw-test" data-id="${item.id}" title="撤回后版本将恢复为可编辑草稿">撤回草稿</button>`;
    return `${withdrawAction}<button class="btn btn-primary" data-action="function-publish-version" data-id="${item.id}">发布 ${version.label}</button>`;
  }
  if (version.status === "已发布") {
    const working = item.versions.find((entry) => ["草稿", "测试中"].includes(entry.status));
    const recommendAction = `<button class="btn" data-action="function-recommend-version" data-id="${item.id}" data-version="${version.id}" data-value="${version.recommended ? "false" : "true"}">${version.recommended ? "取消推荐" : "设为推荐"}</button>`;
    return `${recommendAction}<button class="btn" data-action="function-disable-version" data-id="${item.id}">停用版本</button>${working ? `<button class="btn btn-primary" data-action="function-version-view" data-id="${item.id}" data-version="${working.id}">查看 ${working.label} ${working.status}</button>` : `<button class="btn btn-primary" data-action="function-create-version" data-id="${item.id}">＋ 创建新版本</button>`}`;
  }
  return `<button class="btn btn-primary" data-action="function-restore-version" data-id="${item.id}">恢复版本</button>`;
}

function functionSelectedVersionActions(item, version) {
  const current = workspaceFunctionVersion(item);
  if (current?.id === version.id) return functionHeadingActions(item);

  const statusAction = version.status === "已发布"
    ? `<button class="btn" data-action="function-recommend-version" data-id="${item.id}" data-version="${version.id}" data-value="${version.recommended ? "false" : "true"}">${version.recommended ? "取消推荐" : "设为推荐"}</button><button class="btn" data-action="function-disable-version" data-id="${item.id}" data-version="${version.id}">停用版本</button>`
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
  return `<aside class="version-rail" aria-label="版本列表">
    <div class="version-rail-head"><div><span>版本记录</span><strong>${item.versions.length}</strong></div></div>
    <div class="version-rail-list" role="tablist" aria-label="功能版本">${item.versions.map((version) => {
      const role = functionVersionRole(item, version);
      const time = version.publishedAt || version.createdAt || "-";
      return `<button class="version-rail-item ${version.id === selected.id ? "active" : ""}" data-action="function-version-select" data-id="${item.id}" data-version="${version.id}" role="tab" aria-selected="${version.id === selected.id}"><span class="version-marker" aria-hidden="true"></span><span class="version-rail-copy"><span class="version-rail-title"><strong>${escapeHtml(version.label)}</strong>${functionStatusTag(version.status)}</span><span class="version-rail-context"><span class="version-role ${functionVersionRoleClass(role)}">${role}</span>${functionVersionSignalTags(version, true)}</span><small>${escapeHtml(time)}</small></span></button>`;
    }).join("")}</div>
  </aside>`;
}

function defaultValueForModelType(dataType, dataSpec = null) {
  if (dataType === "数组型(array)") return "[]";
  if (dataType === "结构体(struct)") return "{}";
  return "";
}

function defaultModelDataSpec(dataType) {
  if (dataType === "枚举型(Enum)") return { enumItems: [{ value: "", label: "" }] };
  if (["整数型(Int)", "浮点型(float)"].includes(dataType)) return { min: "", max: "", step: "", unit: "" };
  if (dataType === "布尔型(Bool)") return { falseLabel: "关闭", trueLabel: "开启" };
  if (dataType === "字符型(String)") return { maxLength: "" };
  if (dataType === "数组型(array)") {
    const elementType = "字符型(String)";
    return { elementType, maxItems: "", elementSpec: defaultModelDataSpec(elementType) };
  }
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
    if (dataType === "数组型(array)") {
      merged.elementType = MODEL_ARRAY_ELEMENT_TYPES.includes(merged.elementType) ? merged.elementType : base.elementType;
      merged.elementSpec = parseModelDataSpec(merged.elementType, "", provided.elementSpec);
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
    const elementDefinition = text.match(/元素规则\s*[:：]\s*(.+)$/)?.[1] || "";
    const elementType = normalizedModelDataType(element?.[1], base.elementType);
    return { elementType, maxItems: maxItems?.[1] || "", elementSpec: parseModelDataSpec(elementType, elementDefinition) };
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
  if (dataType === "数组型(array)") {
    const elementDefinition = modelDataSpecToDefinition(spec.elementType, spec.elementSpec);
    return `元素类型：${modelDataTypeShortLabel(spec.elementType)}，最大元素数量：${spec.maxItems}${elementDefinition ? `，元素规则：${elementDefinition}` : ""}`;
  }
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
    "数组型(array)": ["元素定义", "示例：元素类型：String，最大元素数量：10，元素规则：长度：0~64"],
    "时间型(timestamp)": ["时间格式", "示例：Unix 毫秒时间戳"],
    "结构体(struct)": ["结构定义", "示例：JSON Schema 或字段说明"],
  };
  return definitions[dataType] || ["数据定义", "请输入数据定义"];
}

function normalizeModelParameterList(value, supportsRequired = false) {
  const entries = Array.isArray(value)
    ? value
    : String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
  return entries.map((entry) => {
    const source = typeof entry === "string" ? { identifier: entry, name: entry } : entry;
    const identifier = String(source.identifier || source.key || "").trim();
    const dataType = normalizedModelDataType(source.dataType, "字符型(String)");
    const dataSpec = parseModelDataSpec(dataType, source.dataDefinition, source.dataSpec);
    const hadLegacyDefault = source.hasDefaultValue === true
      || (source.defaultValue !== undefined && source.defaultValue !== null && String(source.defaultValue) !== "");
    const required = supportsRequired
      ? source.required === undefined ? !hadLegacyDefault : Boolean(source.required)
      : true;
    return {
      name: String(source.name || source.label || identifier).trim(),
      identifier,
      dataType,
      dataSpec,
      dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
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
    const sourceDefaultValue = row.defaultValue === undefined || row.defaultValue === null ? "" : String(row.defaultValue);
    const hasDefaultValue = access === "读写" && Boolean(row.hasDefaultValue ?? sourceDefaultValue !== "");
    return {
      ...row,
      dataType,
      dataSpec,
      dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
      defaultValue: hasDefaultValue ? sourceDefaultValue : "",
      hasDefaultValue,
      access,
    };
  });
  spec.services = spec.services.map((row) => {
    const { defaultValue, hasDefaultValue, _defaultValuePending, ...service } = row;
    return {
      ...service,
      callType: row.callType || "同步",
      inputParams: normalizeModelParameterList(row.inputParams, true),
      outputParams: normalizeModelParameterList(row.outputParams),
    };
  });
  spec.events = spec.events.map((row) => {
    const { defaultValue, hasDefaultValue, _defaultValuePending, ...event } = row;
    return { ...event, outputParams: normalizeModelParameterList(row.outputParams) };
  });
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
    if ([spec.min, spec.max, spec.step].some((value) => String(value).trim() === "")) return "请填写最小值、最大值和步长";
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
    const elementError = modelDataSpecValidationError(spec.elementType, spec.elementSpec);
    if (elementError) return `数组元素：${elementError}`;
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

function modelArrayElementValueError(value, dataType, dataSpec, index) {
  const position = `第 ${index + 1} 项`;
  const timestampUnit = dataSpec?.timestampUnit || "毫秒(ms)";
  if (!modelSimpleValueMatches(value, dataType, timestampUnit)) return `${position}必须符合${dataType}`;
  const text = dataType === "布尔型(Bool)" && typeof value === "boolean"
    ? value ? "1" : "0"
    : String(value);
  const error = modelDefaultValueError(dataType, text, "", dataSpec);
  return error ? `${position}：${error}` : "";
}

function modelDefaultValueError(dataType, defaultValue, definition = "", dataSpecValue = null) {
  const rawValue = String(defaultValue ?? "");
  const value = rawValue.trim();
  if (!value && dataType !== "字符型(String)") return "";
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
        for (const [index, item] of parsed.entries()) {
          const itemError = modelArrayElementValueError(item, dataSpec.elementType, dataSpec.elementSpec, index);
          if (itemError) return itemError;
        }
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
          const fieldError = modelConfiguredDefaultValueError(field.dataType, fieldText, field.dataDefinition, field.dataSpec, true);
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
  if (dataType === "字符型(String)" && rawValue.length > Number(dataSpec.maxLength)) {
    return `默认值长度不能超过 ${dataSpec.maxLength}`;
  }
  return "";
}

function modelConfiguredDefaultValueError(dataType, defaultValue, definition = "", dataSpecValue = null, configured = true, pending = false) {
  if (!configured) return "";
  if (pending) return "请配置默认值";
  const value = String(defaultValue ?? "");
  if (value.trim() === "" && dataType !== "字符型(String)") return "请配置默认值";
  return modelDefaultValueError(dataType, value, definition, dataSpecValue);
}

function modelParameterValidationError(parameters) {
  const identifiers = new Set();
  for (const parameter of parameters) {
    if (!parameter.name || !parameter.identifier) return "请完善参数名称和标识符";
    if (parameter.name.length > 50 || parameter.identifier.length > 50) return "参数名称和标识符不能超过 50 个字符";
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(parameter.identifier)) return `参数标识符“${parameter.identifier}”格式不正确`;
    if (identifiers.has(parameter.identifier)) return `参数标识符“${parameter.identifier}”重复`;
    identifiers.add(parameter.identifier);
    const specError = modelDataSpecValidationError(parameter.dataType, parameter.dataSpec);
    if (specError) return `参数“${parameter.name}”：${specError}`;
  }
  return "";
}

function modelParameterEditorErrors(editor, value) {
  const errors = {};
  if (!value.name) errors.name = "请输入参数名称";
  else if (value.name.length > 50) errors.name = "参数名称不能超过 50 个字符";
  if (!value.identifier) errors.identifier = "请输入标识符";
  else if (value.identifier.length > 50) errors.identifier = "标识符不能超过 50 个字符";
  else if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(value.identifier)) errors.identifier = "需以字母开头，仅包含字母、数字和下划线";
  const specError = modelDataSpecValidationError(value.dataType, value.dataSpec);
  if (specError) errors.dataSpec = specError;
  const duplicate = ["inputParams", "outputParams"]
    .flatMap((direction) => (state.modal.draft[direction] || []).map((row, index) => ({ row, direction, index })))
    .some(({ row, direction, index }) => row.identifier === value.identifier && !(direction === editor.direction && index === editor.index));
  if (duplicate) errors.identifier = state.modal.draft.kind === "service" ? "输入参数和输出参数的标识符不能重复" : "输出参数标识符不能重复";
  return errors;
}

function modelRowValidationError(row, kind) {
  if (!row.name || !row.identifier) return "请填写名称和标识符";
  if (row.name.length > 50 || row.identifier.length > 50) return "名称和标识符不能超过 50 个字符";
  if (String(row.description || "").length > 200) return "备注不能超过 200 个字符";
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(row.identifier)) return "标识符需以字母开头，仅包含字母、数字和下划线";
  if (kind === "property") {
    const specError = modelDataSpecValidationError(row.dataType, row.dataSpec);
    if (specError) return specError;
    if (row.access !== "读写" && row.hasDefaultValue) return "仅读写属性支持配置默认值";
    return modelConfiguredDefaultValueError(row.dataType, row.defaultValue, row.dataDefinition, row.dataSpec, row.hasDefaultValue, row._defaultValuePending);
  }
  if (kind === "service") {
    return modelParameterValidationError([...(row.inputParams || []), ...(row.outputParams || [])]);
  }
  return modelParameterValidationError(row.outputParams || []);
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
        const hasImportedDefault = row.hasDefaultValue === true || (row.defaultValue !== undefined && row.defaultValue !== null && String(row.defaultValue) !== "");
        if ((row.access || "只读") !== "读写" && hasImportedDefault) return `属性“${row.name || index + 1}”只有读写权限才支持默认值`;
      }
      if (kind !== "property" && (Object.hasOwn(row, "defaultValue") || Object.hasOwn(row, "hasDefaultValue"))) return `${kind === "service" ? "服务" : "事件"}“${row.name || index + 1}”不支持配置默认值`;
      if (kind === "service" && row.callType !== undefined && !["同步", "异步"].includes(row.callType)) return `服务“${row.name || index + 1}”的调用方式不支持`;
      const parameterGroups = kind === "service" ? [["inputParams", row.inputParams], ["outputParams", row.outputParams]] : kind === "event" ? [["outputParams", row.outputParams]] : [];
      for (const [groupName, parameters] of parameterGroups) {
        if (!Array.isArray(parameters)) return `${kind === "service" ? "服务" : "事件"}“${row.name || index + 1}”的 ${groupName} 必须是数组`;
        for (const [parameterIndex, parameter] of parameters.entries()) {
          if (!parameter || Array.isArray(parameter) || typeof parameter !== "object") return `${groupName}[${parameterIndex}] 必须是对象`;
          if (!MODEL_DATA_TYPES.includes(parameter.dataType)) return `参数“${parameter.name || parameterIndex + 1}”的数据类型不支持`;
          if (Object.hasOwn(parameter, "defaultValue") || Object.hasOwn(parameter, "hasDefaultValue")) return `${kind === "service" ? "服务" : "事件"}参数“${parameter.name || parameterIndex + 1}”不支持配置默认值`;
          if (groupName === "inputParams" && parameter.required !== undefined && typeof parameter.required !== "boolean") return `参数“${parameter.name || parameterIndex + 1}”的 required 必须是布尔值`;
        }
      }
    }
  }
  return "";
}

function migrateLegacyParameterList(current, seeded, supportsRequired) {
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
    const candidate = !seed || (!isLegacyPlaceholder && (source.dataDefinition || source.dataSpec))
      ? source
      : {
          ...seed,
          ...source,
          name: isLegacyPlaceholder && source.name === identifier ? seed.name : source.name,
          dataType: seed.dataType,
          dataDefinition: seed.dataDefinition,
          dataSpec: seed.dataSpec,
        };
    return normalizeModelParameterList([candidate], supportsRequired)[0];
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

function modelImportDataSpecPayload(dataType, dataSpec) {
  const spec = parseModelDataSpec(dataType, "", dataSpec);
  if (dataType === "枚举型(Enum)") return { enumItems: spec.enumItems.map((item) => ({ value: item.value, label: item.label })) };
  if (["整数型(Int)", "浮点型(float)"].includes(dataType)) return { min: spec.min, max: spec.max, step: spec.step, unit: spec.unit };
  if (dataType === "布尔型(Bool)") return { falseLabel: spec.falseLabel, trueLabel: spec.trueLabel };
  if (dataType === "字符型(String)") return { maxLength: spec.maxLength };
  if (dataType === "数组型(array)") {
    return {
      elementType: spec.elementType,
      maxItems: spec.maxItems,
      elementSpec: modelImportDataSpecPayload(spec.elementType, spec.elementSpec),
    };
  }
  if (dataType === "时间型(timestamp)") return { timestampUnit: spec.timestampUnit };
  if (dataType === "结构体(struct)") {
    return {
      fields: spec.fields.map((field) => modelImportParameterPayload(field)),
    };
  }
  return {};
}

function modelImportParameterPayload(parameter, supportsRequired = false) {
  const payload = {
    name: parameter.name || "",
    identifier: parameter.identifier || "",
    dataType: parameter.dataType,
    dataSpec: modelImportDataSpecPayload(parameter.dataType, parameter.dataSpec),
  };
  if (supportsRequired) {
    payload.required = Boolean(parameter.required);
  }
  return payload;
}

function modelStandardImportPayload(spec) {
  return {
    properties: (spec?.properties || []).map((property) => {
      const payload = {
        name: property.name || "",
        identifier: property.identifier || "",
        dataType: property.dataType,
        dataSpec: modelImportDataSpecPayload(property.dataType, property.dataSpec),
        access: property.access || "只读",
        description: property.description || "",
      };
      if (payload.access === "读写" && property.hasDefaultValue) {
        payload.hasDefaultValue = true;
        payload.defaultValue = String(property.defaultValue ?? "");
      }
      return payload;
    }),
    services: (spec?.services || []).map((service) => ({
      name: service.name || "",
      identifier: service.identifier || "",
      callType: service.callType || "同步",
      inputParams: (service.inputParams || []).map((parameter) => modelImportParameterPayload(parameter, true)),
      outputParams: (service.outputParams || []).map((parameter) => modelImportParameterPayload(parameter)),
      description: service.description || "",
    })),
    events: (spec?.events || []).map((event) => ({
      name: event.name || "",
      identifier: event.identifier || "",
      outputParams: (event.outputParams || []).map((parameter) => modelImportParameterPayload(parameter)),
      description: event.description || "",
    })),
  };
}

function modelPreviewPayload(functionId, item, version, spec, previewMode = "current") {
  if (previewMode === "standard") return modelStandardImportPayload(spec);
  return {
    functionId,
    versionId: version?.id,
    properties: spec.properties,
    services: spec.services,
    events: spec.events,
  };
}

function modelPreviewJson() {
  if (state.modal?.type !== "model-preview") return "";
  const functionId = route().split("/")[3];
  const item = functions.find((entry) => entry.id === functionId);
  const version = item ? selectedFunctionVersion(item) : null;
  const spec = getModelSpec(functionId);
  return JSON.stringify(modelPreviewPayload(functionId, item, version, spec, state.modal.previewMode), null, 2);
}

function modelPreviewFileName() {
  const functionId = route().split("/")[3];
  const item = functions.find((entry) => entry.id === functionId);
  const version = item ? selectedFunctionVersion(item) : null;
  const baseName = `${item?.identifier || functionId || "thing-model"}-${version?.label || "draft"}`
    .replace(/[^A-Za-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "thing-model";
  return `${baseName}-${state.modal?.previewMode === "standard" ? "import" : "snapshot"}.json`;
}

function fallbackCopyText(text) {
  const textarea = document.querySelector('[data-role="model-json-output"]');
  if (!textarea) return false;
  textarea.focus();
  textarea.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    window.getSelection()?.removeAllRanges();
  }
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
  if (row.kind === "property") {
    if (row.access !== "读写") return "-";
    if (!row.hasDefaultValue) return "未设置";
    if (["数组型(array)", "结构体(struct)"].includes(row.dataType)) return modelDefaultStatus(row);
    const spec = parseModelDataSpec(row.dataType, "", row.dataSpec);
    if (row.dataType === "枚举型(Enum)") {
      const option = spec.enumItems.find((item) => String(item.value) === String(row.defaultValue));
      return option ? `${option.label}（${option.value}）` : String(row.defaultValue);
    }
    if (row.dataType === "布尔型(Bool)") return Number(row.defaultValue) === 1 ? `${spec.trueLabel}（1）` : `${spec.falseLabel}（0）`;
    if (["整数型(Int)", "浮点型(float)"].includes(row.dataType)) return `${row.defaultValue}${spec.unit ? ` ${spec.unit}` : ""}`;
    if (row.dataType === "时间型(timestamp)") return String(row.defaultValue);
    if (row.defaultValue === "") return "空字符串";
    const text = String(row.defaultValue);
    return text.length > 18 ? `${text.slice(0, 18)}...` : text;
  }
  return "-";
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
  const sourceLabel = functionVersionSourceLabel(item, version);
  const copyAction = functionCopyButton(item, version, "复制到其他产线", "btn");
  const metadataEditable = canEditFunctionMetadata(item);
  const detailTabs = [
    ["model", "物模型", modelRows.length],
    ["hardware", "关联硬件", spec.hardware.length],
    ["firmware", "固件关联", functionFirmwareRelations(version).length],
  ];
  return `<section class="surface model-page">
    <div class="detail-banner model-banner function-detail-banner"><img class="banner-icon" src="${item.image}" alt=""><div class="banner-copy"><h2>${escapeHtml(item.name)}</h2><div class="banner-meta"><span><em>产品线</em><strong>${escapeHtml(item.productLine)}</strong></span><span><em>功能分类</em><strong>${escapeHtml(item.category)}</strong></span><span><em>功能标识</em><strong><code>${escapeHtml(item.identifier)}</code></strong></span><span><em>固件配置</em><strong><span class="function-policy-display ${item.requiredInFirmware ? "required" : "optional"}"><i aria-hidden="true"></i>${item.requiredInFirmware ? "必配能力" : "可选能力"}</span></strong></span><span class="banner-meta-description"><em>功能说明</em><strong>${escapeHtml(item.remark || "-")}</strong></span></div></div><div class="banner-actions"><button class="btn" data-action="function-edit" data-id="${item.id}" title="${metadataEditable ? "编辑功能资料与固件配置" : "基础资料已锁定，可调整固件配置"}">编辑功能</button>${copyAction}</div></div>
    <div class="function-version-layout">
      ${functionVersionRail(item, version)}
      <div class="version-detail-panel" role="tabpanel" aria-label="${escapeHtml(version.label)} 版本配置">
        <div class="version-detail-head"><div class="version-detail-title"><div class="version-title-line"><h3>${escapeHtml(version.label)}</h3><span class="version-role ${functionVersionRoleClass(role)}">${role}</span><div class="version-title-signals">${functionStatusTag(version.status)}${functionVersionSignalTags(version)}</div></div><div class="version-description"><p>${escapeHtml(version.changelog || "暂无版本说明")}</p>${canEditVersionDescription(version) ? `<button class="version-description-edit" data-action="function-edit-version" data-id="${item.id}" data-version="${version.id}" title="编辑版本说明" aria-label="编辑版本说明">✎</button>` : ""}</div><div class="version-detail-meta"><span>${escapeHtml(sourceLabel)}</span><span>创建于 ${escapeHtml(version.createdAt || "-")}</span>${version.publishedAt ? `<span>发布于 ${escapeHtml(version.publishedAt)}</span>` : ""}</div></div><div class="version-detail-actions">${functionSelectedVersionActions(item, version)}</div></div>
        ${functionLifecycleSummary(item, version)}
        <div class="function-detail-tabs">${detailTabs.map(([id, label, count]) => `<button class="${state.modelTab === id ? "active" : ""}" data-action="model-tab" data-tab="${id}"><span>${label}</span><strong>${count}</strong></button>`).join("")}</div><div class="model-content">${functionDetailTabContent(item, version, spec, modelRows, editable)}</div>
      </div>
    </div>
  </section>`;
}

function functionDetailTabContent(item, version, spec, rows, editable) {
  if (state.modelTab === "hardware") return relatedHardwareContent(item, version, spec, editable);
  if (state.modelTab === "firmware") return functionFirmwareRelationsContent(item, version);
  return modelInfoContent(item, version, rows, editable);
}

function functionLifecycleSummary(item, version) {
  const stepIndex = { "草稿": 0, "测试中": 1, "已发布": 2, "已停用": 2 }[version.status] || 0;
  const steps = ["草稿", "测试中", version.status === "已停用" ? "已停用" : "已发布"];
  const messages = {
    "草稿": "版本可编辑，提交测试后锁定配置。",
    "测试中": "可供固件配置选择进行功能测试；有问题可撤回修改。",
    "已发布": "功能验证完成，可用于固件正式发布。",
    "已停用": "已有固件关联保留，新配置不可再选择。",
  };
  return `<div class="version-flow-panel"><div class="lifecycle-steps">${steps.map((label, index) => `<div class="lifecycle-step ${index < stepIndex ? "done" : index === stepIndex ? "active" : ""}"><span>${index < stepIndex ? "✓" : index + 1}</span><strong>${label}</strong></div>`).join("")}</div><p>${escapeHtml(messages[version.status] || messages["草稿"])}</p></div>`;
}

function modelParameterListSummary(parameters) {
  if (!parameters?.length) return `<span class="model-parameter-empty">无</span>`;
  const preview = parameters.slice(0, 2).map((parameter) => `<code>${escapeHtml(parameter.identifier || parameter.name || "-")}</code>`).join("");
  return `<span class="model-parameter-preview">${preview}${parameters.length > 2 ? `<small>+${parameters.length - 2}</small>` : ""}</span>`;
}

function modelPropertyRows(rows, editable) {
  if (!rows.length) return `<tr><td colspan="8"><div class="empty-state">暂未添加属性</div></td></tr>`;
  return rows.map((row) => {
    const defaultState = modelDefaultSummary(row);
    const defaultTone = row.access !== "读写" ? "disabled" : row.hasDefaultValue ? "configured" : "empty";
    const actions = editable
      ? `<button class="btn btn-text" data-action="model-edit" data-kind="property" data-index="${row.index}">编辑</button><button class="btn btn-text danger-text" data-action="model-delete" data-kind="property" data-index="${row.index}">删除</button>`
      : `<button class="btn btn-text" data-action="model-view" data-kind="property" data-index="${row.index}">查看</button>`;
    return `<tr><td><strong>${escapeHtml(row.name)}</strong></td><td><code>${escapeHtml(row.identifier)}</code></td><td>${escapeHtml(modelDataTypeShortLabel(row.dataType))}</td><td><span class="model-definition-copy">${escapeHtml(row.dataDefinition || "-")}</span></td><td><div class="model-default-cell"><span class="model-default-state ${defaultTone}">${escapeHtml(defaultState)}</span></div></td><td>${escapeHtml(row.access || "-")}</td><td>${escapeHtml(row.description || "-")}</td><td>${actions}</td></tr>`;
  }).join("");
}

function modelServiceRows(rows, editable) {
  if (!rows.length) return `<tr><td colspan="7"><div class="empty-state">暂未添加服务</div></td></tr>`;
  return rows.map((row) => `<tr><td><strong>${escapeHtml(row.name)}</strong></td><td><code>${escapeHtml(row.identifier)}</code></td><td>${escapeHtml(row.callType || "-")}</td><td>${modelParameterListSummary(row.inputParams)}</td><td>${modelParameterListSummary(row.outputParams)}</td><td>${escapeHtml(row.description || "-")}</td><td>${editable ? `<button class="btn btn-text" data-action="model-edit" data-kind="service" data-index="${row.index}">编辑</button><button class="btn btn-text danger-text" data-action="model-delete" data-kind="service" data-index="${row.index}">删除</button>` : `<button class="btn btn-text" data-action="model-view" data-kind="service" data-index="${row.index}">查看</button>`}</td></tr>`).join("");
}

function modelEventRows(rows, editable) {
  if (!rows.length) return `<tr><td colspan="5"><div class="empty-state">暂未添加事件</div></td></tr>`;
  return rows.map((row) => `<tr><td><strong>${escapeHtml(row.name)}</strong></td><td><code>${escapeHtml(row.identifier)}</code></td><td>${modelParameterListSummary(row.outputParams)}</td><td>${escapeHtml(row.description || "-")}</td><td>${editable ? `<button class="btn btn-text" data-action="model-edit" data-kind="event" data-index="${row.index}">编辑</button><button class="btn btn-text danger-text" data-action="model-delete" data-kind="event" data-index="${row.index}">删除</button>` : `<button class="btn btn-text" data-action="model-view" data-kind="event" data-index="${row.index}">查看</button>`}</td></tr>`).join("");
}

function modelAllRows(rows, editable) {
  if (!rows.length) return `<tr><td colspan="8"><div class="empty-state">暂未添加物模型，可手工创建或批量导入 JSON 文件</div></td></tr>`;
  return rows.map((row) => {
    const defaultState = modelDefaultSummary(row);
    const defaultTone = row.kind !== "property" || row.access !== "读写" ? "disabled" : row.hasDefaultValue ? "configured" : "empty";
    const definition = row.kind === "property"
      ? `<strong>${escapeHtml(modelDataTypeShortLabel(row.dataType))}</strong><small>${escapeHtml(row.dataDefinition || "待完善数据定义")}</small>`
      : row.kind === "service"
        ? `<span>输入 ${row.inputParams?.length || 0} 项</span>${modelParameterListSummary(row.inputParams)}<span>输出 ${row.outputParams?.length || 0} 项</span>${modelParameterListSummary(row.outputParams)}`
        : `<span>输出 ${row.outputParams?.length || 0} 项</span>${modelParameterListSummary(row.outputParams)}`;
    const rule = row.kind === "property" ? row.access || "-" : row.kind === "service" ? row.callType || "同步" : "设备上报";
    const actions = editable
      ? `<button class="btn btn-text" data-action="model-edit" data-kind="${row.kind}" data-index="${row.index}">编辑</button><button class="btn btn-text danger-text" data-action="model-delete" data-kind="${row.kind}" data-index="${row.index}">删除</button>`
      : `<button class="btn btn-text" data-action="model-view" data-kind="${row.kind}" data-index="${row.index}">查看</button>`;
    return `<tr><td><strong>${escapeHtml(row.name)}</strong></td><td><code>${escapeHtml(row.identifier)}</code></td><td><span class="model-kind-badge ${row.kind}">${modelKindLabel(row.kind)}</span></td><td><div class="model-all-definition ${row.kind}">${definition}</div></td><td><div class="model-default-cell"><span class="model-default-state ${defaultTone}">${escapeHtml(defaultState)}</span></div></td><td>${escapeHtml(rule)}</td><td>${escapeHtml(row.description || "-")}</td><td>${actions}</td></tr>`;
  }).join("");
}

function modelInfoContent(item, version, rows, editable) {
  const kinds = [["all", "全部"], ["property", "属性"], ["service", "服务"], ["event", "事件"]];
  if (!kinds.some(([kind]) => kind === state.modelKindTab)) state.modelKindTab = "all";
  const counts = Object.fromEntries(kinds.map(([kind]) => [kind, rows.filter((row) => row.kind === kind).length]));
  counts.all = rows.length;
  const currentRows = state.modelKindTab === "all" ? rows : rows.filter((row) => row.kind === state.modelKindTab);
  const currentLabel = state.modelKindTab === "all" ? "全部物模型" : modelKindLabel(state.modelKindTab);
  const table = state.modelKindTab === "all"
    ? `<table class="mini-table model-table model-kind-table model-all-table"><thead><tr><th>名称</th><th>标识符</th><th>类型</th><th>数据定义 / 参数</th><th>属性默认值</th><th>权限 / 调用</th><th>备注</th><th>操作</th></tr></thead><tbody>${modelAllRows(currentRows, editable)}</tbody></table>`
    : state.modelKindTab === "property"
    ? `<table class="mini-table model-table model-kind-table property-model-table"><thead><tr><th>属性名称</th><th>标识符</th><th>数据类型</th><th>数据定义</th><th>默认值</th><th>权限</th><th>备注</th><th>操作</th></tr></thead><tbody>${modelPropertyRows(currentRows, editable)}</tbody></table>`
    : state.modelKindTab === "service"
      ? `<table class="mini-table model-table model-kind-table service-model-table"><thead><tr><th>服务名称</th><th>标识符</th><th>调用方式</th><th>输入参数</th><th>输出参数</th><th>备注</th><th>操作</th></tr></thead><tbody>${modelServiceRows(currentRows, editable)}</tbody></table>`
      : `<table class="mini-table model-table model-kind-table event-model-table"><thead><tr><th>事件名称</th><th>标识符</th><th>输出参数</th><th>备注</th><th>操作</th></tr></thead><tbody>${modelEventRows(currentRows, editable)}</tbody></table>`;
  const addKind = ["property", "service", "event"].includes(state.modelKindTab) ? state.modelKindTab : "property";
  const addLabel = state.modelKindTab === "all" ? "新增物模型" : `添加${currentLabel}`;
  return `<div class="model-tsl-notice" role="note"><span class="model-tsl-notice-icon" aria-hidden="true">i</span><p>物模型是云端对设备功能的抽象描述，涵盖了设备的属性、服务和事件。物联网平台通过物的描述语言，即 TSL（Thing Specification Language），以 JSON 格式表达这一模型。开发者可以利用 TSL 构建并上报设备数据。完整的物模型可用于云端应用的开发，而精简版的物模型则可结合设备端 SDK 用于设备的开发工作。</p><button class="btn btn-text" data-action="model-preview" data-preview-mode="standard">查看JSON格式</button></div><div class="model-section-head model-definition-head"><div><h3>物模型定义 <small class="optional-label">可选</small></h3></div><div><button class="btn" data-action="model-preview">查看 JSON</button>${editable ? `<button class="btn" data-action="model-import">批量导入 JSON</button><button class="btn btn-primary" data-action="model-add" data-kind="${addKind}">＋ ${addLabel}</button>` : ""}</div></div><div class="model-kind-tabs" role="tablist" aria-label="物模型类型筛选">${kinds.map(([kind, label]) => `<button type="button" class="${state.modelKindTab === kind ? "active" : ""}" data-action="model-kind-tab" data-kind="${kind}" role="tab" aria-selected="${state.modelKindTab === kind}"><span>${label}</span><strong>${counts[kind]}</strong></button>`).join("")}</div><div class="data-table-wrap model-kind-table-wrap">${table}</div>`;
}

function relatedHardwareContent(item, version, spec, editable) {
  const baseVersion = version.baseVersionId ? item.versions.find((entry) => entry.id === version.baseVersionId) : null;
  const helper = baseVersion
    ? `已继承 ${baseVersion.label} 的 ${spec.hardware.length} 项配置`
    : "仅在功能需要特定硬件支持时关联";
  const operationHeader = editable ? "<th>操作</th>" : "";
  return `<div class="model-section-head"><div><h3>关联硬件 <small class="optional-label">可选</small></h3><p>${escapeHtml(helper)}</p></div>${editable ? `<button class="btn btn-primary" data-action="model-hardware-add">＋ 关联硬件</button>` : ""}</div><div class="data-table-wrap"><table class="mini-table model-table related-hardware-table"><thead><tr><th>硬件名称</th><th>图片</th><th>类型</th><th>生产厂商</th><th>状态</th>${operationHeader}</tr></thead><tbody>${spec.hardware.length ? spec.hardware.map((id, index) => { const row = assetConfigs.hardware.rows.find((item) => item.id === id); return row ? `<tr><td>${escapeHtml(row.name)}</td><td><img class="asset-thumb" src="${row.image}" alt=""></td><td>${escapeHtml(row.type)}</td><td>${escapeHtml(row.maker)}</td><td><span class="status-tag">${row.status}</span></td>${editable ? `<td><button class="btn btn-text danger-text" data-action="model-hardware-remove" data-index="${index}">移除</button></td>` : ""}</tr>` : ""; }).join("") : `<tr><td colspan="${editable ? 6 : 5}"><div class="empty-state">暂未关联硬件</div></td></tr>`}</tbody></table></div>`;
}

function functionFirmwareRelationsContent(item, version) {
  const relations = functionFirmwareRelations(version);
  const stats = functionFirmwareRelationStats(version);
  if (!relations.length) {
    const emptyCopy = version.status === "草稿"
      ? "草稿版本不可被固件配置选择，提交测试后即可用于功能测试。"
      : version.status === "测试中"
        ? "当前版本可供固件配置选择，关联后将在此展示。"
        : version.status === "已发布"
          ? "当前版本可用于固件正式发布，暂未产生关联记录。"
          : "当前版本已停用，暂无历史固件关联。";
    return `<div class="reference-workspace"><div class="model-section-head reference-section-head"><div><h3>固件关联</h3></div></div><div class="reference-empty-state"><strong>暂未关联固件版本</strong><span>${escapeHtml(emptyCopy)}</span></div></div>`;
  }
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
  const searchContent = relations.length > relationPageSize || state.functionReferenceSearch
    ? `<div class="relation-toolbar"><div class="relation-search"><input data-role="function-relation-search" value="${escapeHtml(state.functionReferenceSearch)}" placeholder="搜索版本号、标识、产线或机型"><button class="btn" data-action="function-relation-search">搜索</button></div>${state.functionReferenceSearch ? `<button class="btn btn-text" data-action="function-relation-reset">清除搜索</button>` : ""}</div>`
    : "";
  const pageContent = relationPageCount > 1
    ? `<div class="relation-pagination"><span>共 ${filteredRelations.length} 条 · 第 ${state.functionReferencePage}/${relationPageCount} 页</span><div><button data-action="function-relation-page" data-page="${state.functionReferencePage - 1}" title="上一页" aria-label="上一页" ${state.functionReferencePage === 1 ? "disabled" : ""}>‹</button><button data-action="function-relation-page" data-page="${state.functionReferencePage + 1}" title="下一页" aria-label="下一页" ${state.functionReferencePage === relationPageCount ? "disabled" : ""}>›</button></div></div>`
    : "";
  const firmwareContent = `${searchContent}<div class="data-table-wrap"><table class="mini-table firmware-relation-table"><thead><tr><th>固件版本号</th><th>固件标识</th><th>所属产品线</th><th>所属机型</th><th title="当前固件版本覆盖、可使用此功能的设备数量">覆盖设备数</th><th>关联时间</th></tr></thead><tbody>${relationPageRows.length ? relationPageRows.map((relation) => { const machine = relationMachine(relation, item.productLine); return `<tr><td><strong>${escapeHtml(relation.firmwareVersion)}</strong></td><td><code>${escapeHtml(relation.firmwareIdentifier)}</code></td><td>${escapeHtml(relation.productLine || machine.line || item.productLine)}</td><td><span class="relation-machine-cell"><strong>${escapeHtml(machine.name)}</strong><small>${escapeHtml(machine.id)}</small></span></td><td><strong class="coverage-device-count">${relation.coveredDeviceCount.toLocaleString("zh-CN")}</strong> 台</td><td>${escapeHtml(relation.linkedAt || "-")}</td></tr>`; }).join("") : `<tr><td colspan="6"><div class="empty-state compact-empty">暂无符合搜索条件的关联记录</div></td></tr>`}</tbody></table></div>${pageContent}`;
  return `<div class="reference-workspace"><div class="model-section-head reference-section-head"><div><h3>固件关联</h3></div><div class="reference-statline"><span>涉及机型 <strong>${stats.machineCount}</strong></span><span>固件标识 <strong>${stats.identifierCount}</strong></span><span>固件版本 <strong>${relations.length}</strong></span></div></div>${firmwareContent}</div>`;
}

function functionVersionsContent(item) {
  const selected = workspaceFunctionVersion(item);
  const working = workingFunctionVersion(item);
  const published = latestPublishedVersion(item);
  const versionAction = working
    ? `<div class="working-version-notice"><span>当前正在推进 <strong>${working.label}</strong> · ${functionStatusTag(working.status)}</span></div>`
    : published ? `<button class="btn btn-primary" data-action="function-create-version" data-id="${item.id}" data-version="${published.id}">＋ 创建新版本</button>` : "";
  return `<div class="model-section-head version-history-head"><div><h3>版本历史</h3><p>历史版本以只读快照查看，不会改变当前工作区上下文。</p></div>${versionAction}</div><div class="data-table-wrap"><table class="mini-table version-history-table"><thead><tr><th>版本</th><th>版本角色</th><th>状态</th><th>使用标识</th><th>变更说明</th><th>创建时间</th><th>发布时间</th><th>关联固件</th><th>操作</th></tr></thead><tbody>${item.versions.map((version) => { const role = functionVersionRole(item, version); return `<tr class="${version.id === selected.id ? "active-version-row" : ""}"><td><strong>${version.label}</strong></td><td><span class="version-role ${functionVersionRoleClass(role)}">${role}</span></td><td>${functionStatusTag(version.status)}</td><td>${functionVersionSignalTags(version) || "-"}</td><td>${escapeHtml(version.changelog || "-")}</td><td>${escapeHtml(version.createdAt || "-")}</td><td>${escapeHtml(version.publishedAt || "-")}</td><td>${functionFirmwareRelations(version).length}</td><td><button class="btn btn-text" data-action="function-version-snapshot" data-id="${item.id}" data-version="${version.id}">查看快照</button></td></tr>`; }).join("")}</tbody></table></div>`;
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
  return `<div class="version-snapshot-hero"><div><span>${escapeHtml(item.name)}</span><h3>${version.label} ${functionStatusTag(version.status)}${functionVersionSignalTags(version)}</h3></div><span class="version-role ${functionVersionRoleClass(role)}">${role}</span></div>
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

function functionPolicySwitch(action, checked, label) {
  return `<button type="button" class="function-policy-switch ${checked ? "active" : ""}" data-action="${action}" role="switch" aria-checked="${checked}" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}"><span class="function-policy-switch-core" aria-hidden="true"><span></span></span></button>`;
}

function functionFirmwarePolicyField(requiredInFirmware) {
  const stateLabel = requiredInFirmware ? "必配能力" : "可选能力";
  return `<div class="form-row function-policy-field"><label>固件必配</label><div class="function-policy-control"><div class="function-policy-switch-line">${functionPolicySwitch("function-policy-toggle", requiredInFirmware, `${requiredInFirmware ? "关闭" : "开启"}固件必配`)}<span class="function-policy-value ${requiredInFirmware ? "required" : "optional"}">${stateLabel}</span></div><small>开启后，固件配置会自动加入此功能，并优先选择推荐版本。</small></div></div>`;
}

function functionBasicFormFields(item = null, productLine = state.selectedProductLine, includeInitialVersion = false) {
  const line = productLines.includes(productLine) ? productLine : productLines[0];
  const requiredInFirmware = Boolean(state.modal?.requiredInFirmware ?? item?.requiredInFirmware);
  const metadataEditable = !item || canEditFunctionMetadata(item);
  const metadataDisabled = metadataEditable ? "" : "disabled";
  const image = state.functionDraftImage || item?.image || "";
  const lockedSummary = item && !metadataEditable
    ? `<div class="function-locked-summary"><img src="${image}" alt=""><div><strong>${escapeHtml(item.name)}</strong><code>${escapeHtml(item.identifier)}</code><span>${escapeHtml(item.productLine)} · ${escapeHtml(item.category)}</span></div></div>`
    : "";
  const profileFields = metadataEditable
    ? `${selectField("所属产品线", "modal-function-line", productLines, item?.productLine || line, true, item ? "disabled" : "")}${formField("功能项名称", "modal-function-name", item?.name || "", "请输入功能项名称", true, metadataDisabled)}${formField("功能标识", "modal-function-identifier", item?.identifier || "", "英文开头，仅支持字母、数字和下划线", true, item ? "disabled" : "")}${selectField("功能分类", "modal-function-category", functionCategories, item?.category || functionCategories[0], true, metadataDisabled)}${functionFirmwarePolicyField(requiredInFirmware)}<div class="form-row required"><label>功能说明</label><textarea data-role="modal-function-desc" placeholder="简要描述功能用途和使用场景">${escapeHtml(item?.remark || "")}</textarea></div><div class="form-row required"><label>示例图</label><div><label class="upload-box">${image ? `<img class="upload-preview" src="${image}" alt="预览">` : `<span><span class="upload-plus">＋</span>点击上传</span>`}<input type="file" accept="image/png,image/jpeg" data-role="function-upload"></label><div class="upload-hint">支持 .jpg、.png、.jpeg，建议使用 1:1 图片</div></div></div>`
    : `${lockedSummary}${functionFirmwarePolicyField(requiredInFirmware)}`;
  const profileSection = `<section class="modal-form-section"><h3>${metadataEditable ? "功能资料" : "功能配置"}</h3>${metadataEditable ? "" : `<div class="info-strip function-edit-lock"><strong>基础资料已锁定</strong><span>当前仅支持调整固件必配设置。</span></div>`}<div class="modal-form">${profileFields}</div></section>`;
  const initialVersionSection = includeInitialVersion ? `<section class="modal-form-section"><h3>首版信息</h3><div class="modal-form"><div class="form-row"><label>版本号</label><div class="form-static-value"><strong>V1</strong><span>系统自动生成</span></div></div><div class="form-row required"><label>版本说明</label><textarea data-role="modal-initial-version-changelog" placeholder="说明首版提供的能力和适用场景"></textarea></div></div></section>` : "";
  return `${profileSection}${initialVersionSection}`;
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
      const version = item?.versions.find((entry) => entry.id === normalized.versionId) || null;
      return { item, version, binding: normalized, index };
    }).filter((row) => row.item);
    const requiredCount = rows.filter(({ item }) => item.requiredInFirmware).length;
    const testingRows = rows.filter(({ version }) => version?.status === "测试中");
    const unavailableRows = rows.filter(({ version }) => !version || !["测试中", "已发布"].includes(version.status));
    return `<div class="info-strip config-function-guide"><strong>测试中版本可用于固件功能验证</strong><span>正式发布固件前，所选功能版本必须全部为已发布。</span></div>${testingRows.length ? `<div class="testing-strip config-function-warning"><strong>${testingRows.length} 项功能处于测试中</strong><span>${testingRows.map(({ item, version }) => `${escapeHtml(item.name)} ${version.label}`).join("、")}</span></div>` : ""}${unavailableRows.length ? `<div class="warning-strip config-function-warning"><strong>${unavailableRows.length} 项功能版本当前不可用</strong><span>${unavailableRows.map(({ item }) => escapeHtml(item.name)).join("、")}</span></div>` : ""}<div class="config-controls"><button class="btn btn-primary" data-action="config-function-add">＋ 添加可选功能</button><span>已配置 ${rows.length} 项 · 必配 ${requiredCount} 项</span></div><div class="data-table-wrap"><table class="mini-table config-function-table"><thead><tr><th>功能名称</th><th>配置要求</th><th>绑定版本</th><th>版本标识</th><th>版本状态</th><th>配置来源</th><th>操作</th></tr></thead><tbody>${rows.length ? rows.map(({ item, version, binding, index }) => `<tr class="${!version || !["测试中", "已发布"].includes(version.status) ? "needs-attention" : version.status === "测试中" ? "testing-version" : ""}"><td><div class="config-function-name"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.category)}</small></div></td><td>${item.requiredInFirmware ? `<span class="function-policy-tag required">必配</span>` : `<span class="function-policy-tag optional">可选</span>`}</td><td>${version ? `<strong>${version.label}</strong>` : `<span class="config-version-empty">待选择</span>`}</td><td>${version ? functionVersionSignalTags(version) || "-" : "-"}</td><td>${version ? `${functionStatusTag(version.status)}${version.status === "测试中" ? `<small class="testing-version-note">仅用于测试</small>` : ""}` : `<span class="function-status pending">待配置</span>`}</td><td>${binding.source === "required-auto" ? `<span class="config-source-tag auto">系统带出</span>` : `<span class="config-source-tag">手工添加</span>`}</td><td><button class="btn btn-text" data-action="config-function-version" data-function="${item.id}">${version ? "更换版本" : "选择版本"}</button>${item.requiredInFirmware ? "" : `<button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="function" data-index="${index}">删除</button>`}</td></tr>`).join("") : `<tr><td colspan="7"><div class="empty-state">当前产品线暂无可配置功能</div></td></tr>`}</tbody></table></div>`;
  }
  if (tab === "parameter") return `<div class="info-strip">ⓘ 参数配置会随机型发布并用于设备能力描述。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-param-add">＋ 添加参数</button><span>已配置 ${state.configParameters.length} 项</span></div><div class="data-table-wrap"><table class="mini-table"><thead><tr><th>参数名</th><th>中文名</th><th>参数类型</th><th>默认值</th><th>操作</th></tr></thead><tbody>${state.configParameters.length ? state.configParameters.map((item, index) => `<tr><td>${escapeHtml(item.key)}</td><td>${escapeHtml(item.label)}</td><td>${item.type}</td><td>${escapeHtml(item.defaultValue)}</td><td><button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="parameter" data-index="${index}">删除</button></td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
  return `<div class="info-strip">ⓘ 配置生产测试项、等待时间和检测方式，用于出厂检测。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-test-add">＋ 添加测试项</button><span>已配置 ${state.configTests.length} 项</span></div><div class="data-table-wrap"><table class="mini-table test-table"><thead><tr>${testColumns.map((title) => `<th>${title}</th>`).join("")}</tr></thead><tbody>${state.configTests.length ? state.configTests.map(configTestRow).join("") : `<tr><td colspan="${testColumns.length}"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
}

function createModelDraft(kind = "property", row = null) {
  const dataType = row?.dataType || "枚举型(Enum)";
  const dataSpec = parseModelDataSpec(dataType, row?.dataDefinition, row?.dataSpec);
  const access = row?.access || "只读";
  const sourceDefaultValue = row?.defaultValue === undefined || row?.defaultValue === null ? "" : String(row.defaultValue);
  const hasDefaultValue = access === "读写" && Boolean(row?.hasDefaultValue ?? sourceDefaultValue !== "");
  return {
    id: row?.id || "",
    kind,
    name: row?.name || "",
    identifier: row?.identifier || "",
    dataType,
    dataSpec,
    dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
    defaultValue: hasDefaultValue ? sourceDefaultValue : "",
    hasDefaultValue,
    access,
    callType: row?.callType || "同步",
    inputParams: normalizeModelParameterList(row?.inputParams, true),
    outputParams: normalizeModelParameterList(row?.outputParams),
    description: row?.description || "",
  };
}

function modelArrayElementSpecEditor(dataSpec, fieldRole, shared = "") {
  const elementType = dataSpec.elementType;
  const elementSpec = parseModelDataSpec(elementType, "", dataSpec.elementSpec);
  const role = `${fieldRole}-element`;
  const field = (label, key, value, placeholder = "", type = "text", limits = "") => `<label><span>${label}</span><input type="${type}" data-role="${role}"${shared} data-field="${key}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" ${limits}></label>`;
  let fields = "";
  if (["整数型(Int)", "浮点型(float)"].includes(elementType)) {
    fields = `${field("最小值", "min", elementSpec.min, "例如 0", "number")}${field("最大值", "max", elementSpec.max, "例如 100", "number")}${field("步长", "step", elementSpec.step, elementType === "整数型(Int)" ? "例如 1" : "例如 0.1", "number", 'min="0"')}${field("单位（可选）", "unit", elementSpec.unit, "例如 %、℃")}`;
  } else if (elementType === "布尔型(Bool)") {
    fields = `${field("布尔值 0", "falseLabel", elementSpec.falseLabel, "例如关闭")}${field("布尔值 1", "trueLabel", elementSpec.trueLabel, "例如开启")}`;
  } else if (elementType === "字符型(String)") {
    fields = field("最大长度", "maxLength", elementSpec.maxLength, "例如 64", "number", 'min="1" max="10240"');
  } else if (elementType === "时间型(timestamp)") {
    fields = `<label><span>时间戳单位</span><select data-role="${role}"${shared} data-field="timestampUnit">${MODEL_TIMESTAMP_UNITS.map((unit) => `<option value="${unit}" ${unit === elementSpec.timestampUnit ? "selected" : ""}>${unit}</option>`).join("")}</select></label>`;
  }
  return `<div class="model-array-element-rules"><div class="model-spec-caption"><strong>元素规则</strong><span>${escapeHtml(modelDataTypeShortLabel(elementType))} 类型约束</span></div><div class="model-spec-grid ${["字符型(String)", "时间型(timestamp)"].includes(elementType) ? "single" : ""}">${fields}</div></div>`;
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
    return `<div class="model-data-spec-editor model-array-spec-editor"><div class="model-spec-caption"><strong>数组约束</strong><span>元素数量限制 1~512</span></div><div class="model-spec-grid"><label><span>元素类型</span><select data-role="${fieldRole}"${shared} data-field="elementType">${MODEL_ARRAY_ELEMENT_TYPES.map((type) => `<option value="${type}" ${type === dataSpec.elementType ? "selected" : ""}>${type}</option>`).join("")}</select></label>${field("元素个数上限", "maxItems", dataSpec.maxItems, "例如 10", "number", 'min="1" max="512"')}</div>${modelArrayElementSpecEditor(dataSpec, fieldRole, shared)}</div>`;
  }
  if (dataType === "时间型(timestamp)") {
    return `<div class="model-data-spec-editor"><div class="model-spec-caption"><strong>时间格式</strong><span>使用 Unix UTC 时间戳</span></div><div class="model-spec-grid single"><label><span>时间戳单位</span><select data-role="${fieldRole}"${shared} data-field="timestampUnit">${MODEL_TIMESTAMP_UNITS.map((unit) => `<option value="${unit}" ${unit === dataSpec.timestampUnit ? "selected" : ""}>${unit}</option>`).join("")}</select></label></div></div>`;
  }
  const ownerScope = context.scope === "parameter-dialog" ? "parameter-dialog" : "property";
  return `<div class="model-data-spec-editor model-struct-editor"><div class="model-spec-caption"><strong>结构体字段</strong><span>暂不支持结构体或数组嵌套</span></div><div class="model-struct-list">${dataSpec.fields.length ? dataSpec.fields.map((item, index) => `<div class="model-struct-row"><div class="model-struct-fields"><label><span>字段名称</span><input data-role="model-struct-field" data-owner="${ownerScope}" data-struct-index="${index}" data-field="name" maxlength="50" value="${escapeHtml(item.name)}" placeholder="请输入字段名称"></label><label><span>标识符</span><input data-role="model-struct-field" data-owner="${ownerScope}" data-struct-index="${index}" data-field="identifier" maxlength="50" value="${escapeHtml(item.identifier)}" placeholder="field_id"></label><label><span>数据类型</span><select data-role="model-struct-field" data-owner="${ownerScope}" data-struct-index="${index}" data-field="dataType">${MODEL_STRUCT_FIELD_TYPES.map((type) => `<option ${type === item.dataType ? "selected" : ""}>${type}</option>`).join("")}</select></label></div><button type="button" class="model-param-delete" data-action="model-struct-remove" data-owner="${ownerScope}" data-struct-index="${index}" title="删除字段" aria-label="删除字段">×</button>${modelDataSpecEditor(item.dataType, item.dataSpec, { scope: "struct-field", ownerScope, structIndex: index })}</div>`).join("") : `<div class="model-param-empty">暂未添加结构体字段</div>`}</div><button type="button" class="btn btn-text model-spec-add" data-action="model-struct-add" data-owner="${ownerScope}">＋ 添加字段</button></div>`;
}

function createModelParameterDraft(row = null, supportsRequired = false) {
  return normalizeModelParameterList(row ? [row] : [{ name: "", identifier: "", dataType: "字符型(String)" }], supportsRequired)[0];
}

function modelParameterSummary(value, supportsRequired) {
  return supportsRequired ? value.required ? "必填" : "可选" : "输出参数";
}

function modelParameterEditor(label, direction, values, supportsRequired = false) {
  return `<section class="model-param-group"><div class="model-param-head"><div><strong>${label}</strong><span>${values.length} 项</span></div><button type="button" class="btn btn-text" data-action="model-param-add" data-param="${direction}" data-supports-required="${supportsRequired}">＋ 添加参数</button></div>${values.length ? `<div class="model-param-summary-list">${values.map((value, index) => `<div class="model-param-summary-row"><div class="model-param-identity"><strong>${escapeHtml(value.name || "未命名参数")}</strong><code>${escapeHtml(value.identifier || "未填写标识符")}</code></div><div class="model-param-type"><span>${escapeHtml(value.dataType)}</span><small>${escapeHtml(value.dataDefinition || "待完善数据定义")}</small></div><span class="model-param-rule">${escapeHtml(modelParameterSummary(value, supportsRequired))}</span><div class="model-param-actions"><button type="button" class="btn btn-text" data-action="model-param-edit" data-param="${direction}" data-index="${index}" data-supports-required="${supportsRequired}">编辑</button><button type="button" class="btn btn-text danger-text" data-action="model-param-remove" data-param="${direction}" data-index="${index}">删除</button></div></div>`).join("")}</div>` : `<div class="model-param-empty">暂无参数</div>`}</section>`;
}

function modelFieldError(message) {
  return message ? `<small class="model-field-error">${escapeHtml(message)}</small>` : "";
}

function modelCountedField(label, roleName, value, placeholder, required = true, maxLength = 50, error = "") {
  return `<div class="form-row model-counted-field ${required ? "required" : ""} ${error ? "has-error" : ""}"><label>${label}</label><div><input data-role="${roleName}" maxlength="${maxLength}" value="${escapeHtml(value)}" placeholder="${placeholder}" ${error ? 'aria-invalid="true"' : ""}><small class="field-counter">${String(value || "").length} / ${maxLength}</small>${modelFieldError(error)}</div></div>`;
}

function parsedArrayDefaultValue(value) {
  const text = String(value ?? "").trim();
  if (!text) return { configured: false, items: [], invalid: false };
  try {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed)
      ? { configured: true, items: parsed, invalid: false }
      : { configured: true, items: [], invalid: true };
  } catch {
    return { configured: true, items: [], invalid: true };
  }
}

function parsedStructDefaultValue(value) {
  const text = String(value ?? "").trim();
  if (!text) return { configured: false, value: {}, invalid: false };
  try {
    const parsed = JSON.parse(text);
    return parsed && !Array.isArray(parsed) && typeof parsed === "object"
      ? { configured: true, value: parsed, invalid: false }
      : { configured: true, value: {}, invalid: true };
  } catch {
    return { configured: true, value: {}, invalid: true };
  }
}

function modelTimestampLocalValue(value, unit) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) return "";
  const date = new Date(unit === "秒(s)" ? numeric * 1000 : numeric);
  if (!Number.isFinite(date.getTime())) return "";
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

function modelTimestampFromLocalValue(value, unit) {
  const milliseconds = new Date(value).getTime();
  if (!Number.isFinite(milliseconds)) return "";
  return String(unit === "秒(s)" ? Math.floor(milliseconds / 1000) : milliseconds);
}

function modelDefaultStatus(owner) {
  if (!owner.hasDefaultValue) return "未配置";
  if (owner._defaultValuePending) return "待配置";
  if (owner.dataType === "数组型(array)") {
    const parsed = parsedArrayDefaultValue(owner.defaultValue);
    return parsed.invalid ? "格式异常" : parsed.items.length ? `${parsed.items.length} 项` : "空数组";
  }
  if (owner.dataType === "结构体(struct)") {
    const parsed = parsedStructDefaultValue(owner.defaultValue);
    return parsed.invalid ? "格式异常" : Object.keys(parsed.value).length ? `${Object.keys(parsed.value).length} 个字段` : "空对象";
  }
  if (owner.defaultValue === "") return owner.dataType === "字符型(String)" ? "空字符串" : "待配置";
  return "已配置";
}

function modelSimpleDefaultEditor(owner, roleName, ownerScope, error = "") {
  const dataType = owner.dataType;
  const spec = parseModelDataSpec(dataType, "", owner.dataSpec);
  const shared = ` data-owner="${ownerScope}"`;
  const pending = Boolean(owner._defaultValuePending);
  let control = "";
  let meta = "";
  if (dataType === "枚举型(Enum)") {
    const items = spec.enumItems.filter((item) => item.value !== "" && item.label);
    control = `<select data-role="${roleName}"${error ? ' aria-invalid="true"' : ""}><option value="" disabled ${pending || owner.defaultValue === "" ? "selected" : ""}>请选择枚举值</option>${items.map((item) => `<option value="${escapeHtml(item.value)}" ${!pending && String(owner.defaultValue) === item.value ? "selected" : ""}>${escapeHtml(item.label)}（${escapeHtml(item.value)}）</option>`).join("")}</select>`;
    meta = `${items.length} 个可选项`;
  } else if (dataType === "布尔型(Bool)") {
    control = `<div class="model-default-segment" role="radiogroup" aria-label="布尔默认值" ${error ? 'aria-invalid="true" tabindex="-1"' : ""}>${[["0", spec.falseLabel], ["1", spec.trueLabel]].map(([value, label]) => `<button type="button" role="radio" aria-checked="${!pending && String(owner.defaultValue) === value}" class="${!pending && String(owner.defaultValue) === value ? "active" : ""}" data-action="model-default-bool"${shared} data-value="${value}"><span></span>${escapeHtml(label)}（${value}）</button>`).join("")}</div>`;
    meta = pending ? "请选择关闭或开启" : "使用标准布尔值 0 / 1";
  } else if (["整数型(Int)", "浮点型(float)"].includes(dataType)) {
    const numberValue = pending ? "" : owner.defaultValue;
    const atMin = numberValue !== "" && String(spec.min).trim() !== "" && Number.isFinite(Number(spec.min)) && Number(numberValue) <= Number(spec.min);
    const atMax = numberValue !== "" && String(spec.max).trim() !== "" && Number.isFinite(Number(spec.max)) && Number(numberValue) >= Number(spec.max);
    control = `<div class="model-default-input-with-unit model-number-stepper"><button type="button" data-action="model-default-number-step"${shared} data-direction="-1" title="减小默认值" aria-label="减小默认值" ${atMin ? "disabled" : ""}>−</button><input type="number" data-role="${roleName}" min="${escapeHtml(spec.min)}" max="${escapeHtml(spec.max)}" step="${escapeHtml(spec.step || "any")}" value="${escapeHtml(numberValue)}" placeholder="请输入默认值" ${error ? 'aria-invalid="true"' : ""}><button type="button" data-action="model-default-number-step"${shared} data-direction="1" title="增大默认值" aria-label="增大默认值" ${atMax ? "disabled" : ""}>＋</button>${spec.unit ? `<span>${escapeHtml(spec.unit)}</span>` : ""}</div>`;
    meta = `范围 ${spec.min || "-"} ~ ${spec.max || "-"} · 步长 ${spec.step || "-"}`;
  } else if (dataType === "字符型(String)") {
    control = `<div class="model-default-string-input"><input data-role="${roleName}" maxlength="${escapeHtml(spec.maxLength || 10240)}" value="${escapeHtml(pending ? "" : owner.defaultValue)}" placeholder="请输入默认文本" ${error ? 'aria-invalid="true"' : ""}><button type="button" data-action="model-default-empty-string"${shared} title="将默认值明确设为空字符串">设为空字符串</button></div>`;
    meta = pending ? `最多 ${spec.maxLength || "-"} 个字符` : `${String(owner.defaultValue).length} / ${spec.maxLength || "-"}`;
  } else if (dataType === "时间型(timestamp)") {
    const localValue = pending ? "" : modelTimestampLocalValue(owner.defaultValue, spec.timestampUnit);
    control = `<input type="datetime-local" data-role="${roleName}-datetime"${shared} value="${escapeHtml(localValue)}" ${error ? 'aria-invalid="true"' : ""}>`;
    meta = !pending && owner.defaultValue ? `${escapeHtml(owner.defaultValue)} · ${escapeHtml(spec.timestampUnit)}` : `请选择日期与时间 · ${escapeHtml(spec.timestampUnit)}`;
  }
  return `<div class="model-simple-default ${error ? "has-error" : ""}"><label><span>默认值 <b>*</b></span>${control}</label><small>${meta}</small>${modelFieldError(error)}</div>`;
}

function modelDefaultConfiguration(owner, context, error = "") {
  const enabled = Boolean(owner.hasDefaultValue);
  const complex = ["数组型(array)", "结构体(struct)"].includes(owner.dataType);
  const body = !enabled
    ? `<div class="model-default-empty-state"><strong>当前不设置默认值</strong><span>调用方未传值时，不由物模型补充默认数据。</span></div>`
    : complex
      ? modelComplexDefaultList(owner, context, error)
      : modelSimpleDefaultEditor(owner, context.roleName, context.ownerScope, error);
  const status = enabled ? modelDefaultStatus(owner) : "未设置";
  const statusTone = !enabled ? "off" : owner._defaultValuePending || ["待配置", "格式异常"].includes(status) ? "pending" : "configured";
  return `<section class="model-default-config ${error ? "has-error" : ""}"><div class="model-default-config-head"><div><strong>设置默认值</strong><span>设备或调用方未传值时使用</span></div><div class="model-default-switch-control"><span class="model-default-status ${statusTone}">${status}</span><button type="button" class="model-default-switch ${enabled ? "active" : ""}" role="switch" aria-checked="${enabled}" data-action="model-default-toggle" data-owner="${context.ownerScope}" title="${enabled ? "关闭默认值配置" : "开启默认值配置"}"><span></span></button></div></div>${body}</section>`;
}

function modelArrayDefaultItemInput(item, elementType, elementSpec, index, ownerScope) {
  const shared = ` data-role="model-inline-array-item" data-owner="${ownerScope}" data-index="${index}"`;
  if (elementType === "布尔型(Bool)") {
    const normalized = item === true ? 1 : item === false ? 0 : Number(item) === 1 ? 1 : Number(item) === 0 && item !== null && item !== "" ? 0 : null;
    return `<select${shared}><option value="" disabled ${normalized === null ? "selected" : ""}>请选择</option><option value="0" ${normalized === 0 ? "selected" : ""}>0 · ${escapeHtml(elementSpec.falseLabel || "关闭")}</option><option value="1" ${normalized === 1 ? "selected" : ""}>1 · ${escapeHtml(elementSpec.trueLabel || "开启")}</option></select>`;
  }
  if (elementType === "时间型(timestamp)") {
    return `<input type="datetime-local" data-role="model-inline-array-datetime" data-owner="${ownerScope}" data-index="${index}" value="${escapeHtml(modelTimestampLocalValue(item, elementSpec.timestampUnit))}">`;
  }
  const isNumber = ["整数型(Int)", "浮点型(float)"].includes(elementType);
  const attributes = ["整数型(Int)", "浮点型(float)"].includes(elementType)
    ? ` min="${escapeHtml(elementSpec.min)}" max="${escapeHtml(elementSpec.max)}" step="${escapeHtml(elementSpec.step || "any")}"`
    : elementType === "字符型(String)" ? ` maxlength="${escapeHtml(elementSpec.maxLength || 10240)}"` : ' step="1"';
  const placeholder = "请输入元素值";
  return `<input type="${isNumber ? "number" : "text"}"${shared}${attributes} value="${escapeHtml(item ?? "")}" placeholder="${placeholder}">`;
}

function modelStructDefaultFieldControl(field, value, included, index, ownerScope) {
  const shared = ` data-role="model-inline-struct-item" data-owner="${ownerScope}" data-index="${index}"`;
  const spec = parseModelDataSpec(field.dataType, "", field.dataSpec);
  const disabled = included ? "" : "disabled";
  if (field.dataType === "枚举型(Enum)") return `<select${shared} ${disabled}><option value="" disabled ${value === null || value === undefined || value === "" ? "selected" : ""}>请选择</option>${spec.enumItems.filter((item) => item.value !== "" && item.label).map((item) => `<option value="${escapeHtml(item.value)}" ${String(value) === item.value ? "selected" : ""}>${escapeHtml(item.label)}（${escapeHtml(item.value)}）</option>`).join("")}</select>`;
  if (field.dataType === "布尔型(Bool)") return `<select${shared} ${disabled}><option value="" disabled ${value === null || value === undefined || value === "" ? "selected" : ""}>请选择</option><option value="0" ${value !== null && value !== "" && Number(value) === 0 ? "selected" : ""}>${escapeHtml(spec.falseLabel)}（0）</option><option value="1" ${Number(value) === 1 ? "selected" : ""}>${escapeHtml(spec.trueLabel)}（1）</option></select>`;
  if (field.dataType === "时间型(timestamp)") return `<input type="datetime-local" data-role="model-inline-struct-datetime" data-owner="${ownerScope}" data-index="${index}" value="${escapeHtml(modelTimestampLocalValue(value, spec.timestampUnit))}" ${disabled}>`;
  const numeric = ["整数型(Int)", "浮点型(float)"].includes(field.dataType);
  return `<input type="${numeric ? "number" : "text"}"${shared} value="${escapeHtml(value ?? "")}" ${numeric ? `min="${escapeHtml(spec.min)}" max="${escapeHtml(spec.max)}" step="${escapeHtml(spec.step || "any")}"` : `maxlength="${escapeHtml(spec.maxLength || 10240)}"`} placeholder="请输入字段默认值" ${disabled}>`;
}

function modelDefaultOwner(ownerScope) {
  return ownerScope === "property" && state.modal?.draft?.kind === "property" ? state.modal.draft : null;
}

function modelComplexDefaultList(owner, context, error = "") {
  if (owner.dataType === "数组型(array)") {
    const parsed = parsedArrayDefaultValue(owner.defaultValue);
    const items = parsed.invalid ? [] : parsed.items;
    const elementSpec = parseModelDataSpec(owner.dataSpec.elementType, "", owner.dataSpec.elementSpec);
    const rows = items.map((item, index) => `<div class="model-default-list-row model-array-default-row"><span class="model-list-index">${index + 1}</span>${modelArrayDefaultItemInput(item, owner.dataSpec.elementType, elementSpec, index, context.ownerScope)}<button type="button" class="model-param-delete" data-action="model-inline-array-remove" data-owner="${context.ownerScope}" data-index="${index}" title="删除元素" aria-label="删除元素">×</button></div>`).join("");
    return `<div class="model-default-list ${error ? "has-error" : ""}"><div class="model-default-list-head"><div><strong>数组默认值</strong><span>已配置 ${items.length} / ${escapeHtml(owner.dataSpec.maxItems || "-")} 项 · ${escapeHtml(modelDataTypeShortLabel(owner.dataSpec.elementType))}</span></div><div><button type="button" class="btn btn-text" data-action="model-inline-array-clear" data-owner="${context.ownerScope}">清空列表</button><button type="button" class="btn btn-primary" data-action="model-inline-array-add" data-owner="${context.ownerScope}">＋ 添加一项</button></div></div><div class="model-default-list-columns model-array-default-columns"><span>序号</span><span>默认值</span><span>操作</span></div><div class="model-default-list-body">${parsed.invalid ? `<div class="model-array-default-empty error-copy">原默认值格式无法解析，请清空后重新配置。</div>` : rows || `<div class="model-array-default-empty"><strong>当前为空数组</strong><span>可保持为空数组，或添加默认元素。</span></div>`}</div><div class="model-default-list-foot">元素规则：${escapeHtml(modelDataSpecToDefinition(owner.dataSpec.elementType, owner.dataSpec.elementSpec) || "待完善")}</div>${modelFieldError(error)}</div>`;
  }
  const parsed = parsedStructDefaultValue(owner.defaultValue);
  const values = parsed.invalid ? {} : parsed.value;
  const rows = owner.dataSpec.fields.map((field, index) => {
    const included = Object.hasOwn(values, field.identifier);
    return `<div class="model-default-list-row model-struct-default-row"><div class="model-struct-default-name"><strong>${escapeHtml(field.name || field.identifier || "未命名字段")}</strong><code>${escapeHtml(field.identifier || "未填写标识符")}</code></div><span class="model-struct-default-type">${escapeHtml(modelDataTypeShortLabel(field.dataType))}</span><label class="model-default-field-check"><input type="checkbox" ${included ? "checked" : ""} data-action="model-inline-struct-toggle" data-owner="${context.ownerScope}" data-index="${index}"><span>设置</span></label>${modelStructDefaultFieldControl(field, values[field.identifier], included, index, context.ownerScope)}</div>`;
  }).join("");
  return `<div class="model-default-list ${error ? "has-error" : ""}"><div class="model-default-list-head"><div><strong>结构体默认值</strong><span>已设置 ${Object.keys(values).length} / ${owner.dataSpec.fields.length} 个字段</span></div><button type="button" class="btn btn-text" data-action="model-inline-struct-clear" data-owner="${context.ownerScope}">全部不设置</button></div><div class="model-default-list-columns model-struct-default-columns"><span>字段</span><span>类型</span><span>配置默认值</span><span>默认值</span></div><div class="model-default-list-body">${parsed.invalid ? `<div class="model-array-default-empty error-copy">原默认值格式无法解析，请清空后重新配置。</div>` : rows || `<div class="model-array-default-empty">请先完成结构体字段定义</div>`}</div>${modelFieldError(error)}</div>`;
}

function modelChoiceField(label, action, value, options) {
  return `<div class="form-row required"><label>${label}</label><div class="model-type-switch model-choice-switch">${options.map((option) => `<button type="button" class="${value === option ? "active" : ""}" data-action="${action}" data-value="${option}">${option}</button>`).join("")}</div></div>`;
}

function modelParameterConfirm(title, message, cancelAction, confirmAction, confirmLabel = "确认") {
  return `<div class="model-param-subconfirm" role="alertdialog" aria-modal="true" aria-label="${escapeHtml(title)}"><div class="model-param-subconfirm-panel"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(message)}</p><div><button type="button" class="btn" data-action="${cancelAction}">继续编辑</button><button type="button" class="btn btn-danger" data-action="${confirmAction}">${escapeHtml(confirmLabel)}</button></div></div></div>`;
}

function modelParameterDialog(modal) {
  const editor = modal.paramEditor;
  if (!editor) return "";
  const draft = editor.draft;
  const errors = editor.errors || {};
  const changeConfirm = editor.changeConfirm
    ? modelParameterConfirm(
        editor.changeConfirm.kind === "elementType" ? "确认切换元素类型" : "确认切换数据类型",
        editor.changeConfirm.kind === "elementType" ? "切换后将清除当前元素规则。" : "切换后将清除当前数据定义。",
        "model-param-change-cancel",
        "model-param-change-confirm",
        "确认切换",
      )
    : "";
  const closeConfirm = editor.closeConfirm
    ? modelParameterConfirm("放弃本次编辑？", "当前参数存在未保存的修改，关闭后将无法恢复。", "model-param-discard-return", "model-param-discard-confirm", "放弃修改")
    : "";
  const resetNotice = editor.typeResetNotice
    ? `<div class="warning-strip model-reset-warning">数据类型已切换，原数据定义已重置。</div>`
    : editor.elementResetNotice
      ? `<div class="warning-strip model-reset-warning">数组元素类型已切换，原元素规则已重置。</div>`
      : "";
  return `<div class="model-param-dialog-backdrop" data-action="model-param-dialog-close"><section class="model-param-dialog" role="dialog" aria-modal="true" aria-label="${Number.isInteger(editor.index) ? "编辑参数" : "添加参数"}"><div class="modal-header"><div><h2>${Number.isInteger(editor.index) ? "编辑参数" : "添加参数"}</h2><span>${editor.direction === "inputParams" ? "输入参数" : "输出参数"}</span></div><button class="modal-close" data-action="model-param-dialog-close" title="关闭">×</button></div><div class="modal-body">${resetNotice}<div class="modal-form model-param-dialog-form">${modelCountedField("参数名称", "model-param-dialog-name", draft.name, "请输入参数名称", true, 50, errors.name)}${modelCountedField("标识符", "model-param-dialog-identifier", draft.identifier, "请输入英文标识符", true, 50, errors.identifier)}${selectField("数据类型", "model-param-dialog-data-type", MODEL_DATA_TYPES, draft.dataType, true)}<div class="model-spec-validation ${errors.dataSpec ? "has-error" : ""}">${modelDataSpecEditor(draft.dataType, draft.dataSpec, { scope: "parameter-dialog" })}${modelFieldError(errors.dataSpec)}</div>${editor.supportsRequired ? modelChoiceField("是否必填", "model-param-required", draft.required ? "必填" : "可选", ["必填", "可选"]) : ""}</div></div><div class="modal-footer"><button class="btn" data-action="model-param-dialog-close">取消</button><button class="btn btn-primary" data-action="model-param-save">完成</button></div>${changeConfirm}${closeConfirm}</section></div>`;
}

function modelFormSection(index, title, description, body, className = "") {
  return `<section class="model-form-section ${className}"><div class="model-form-section-head"><span>${index}</span><div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(description)}</small></div></div><div class="model-form-section-body">${body}</div></section>`;
}

function modelFormBody(modal) {
  const draft = modal.draft;
  const basic = `${modelCountedField("物模型名称", "modal-model-name", draft.name, "请输入物模型名称", true, 50)}${modelCountedField("标识符", "modal-model-identifier", draft.identifier, "请输入物模型英文标识符", true, 50)}<div class="form-row required"><label>物模型类型</label><div class="model-type-switch">${[["property", "属性"], ["service", "服务"], ["event", "事件"]].map(([kind, label]) => `<button type="button" class="${draft.kind === kind ? "active" : ""}" data-action="model-kind" data-kind="${kind}">${label}</button>`).join("")}</div></div>`;
  let sections = modelFormSection("01", "基础信息", "名称、标识符与物模型类型", basic, "model-form-basic-section");
  if (draft.kind === "property") {
    const defaultField = draft.access === "读写"
      ? modelDefaultConfiguration(draft, { ownerScope: "property", roleName: "modal-model-default" }, modal.defaultValueError || "")
      : draft.access === "只写"
        ? `<div class="model-inline-note property-default-note">只写属性每次写入都必须明确传值，不配置默认值。</div>`
        : `<div class="model-inline-note property-default-note">只读属性由设备上报，不配置默认值。</div>`;
    const definition = `${selectField("数据类型", "modal-model-data-type", MODEL_DATA_TYPES, draft.dataType, true)}${modelDataSpecEditor(draft.dataType, draft.dataSpec, { scope: "property" })}${modelChoiceField("访问权限", "model-access", draft.access, ["只读", "读写", "只写"])}`;
    sections += modelFormSection("02", "数据定义", "数据类型、取值规则与访问权限", definition, "model-form-definition-section");
    sections += modelFormSection("03", "默认值", "默认值必须符合当前数据定义", defaultField, "model-form-default-section");
  } else if (draft.kind === "service") {
    sections += modelFormSection("02", "调用定义", "同步或异步调用方式", modelChoiceField("调用方式", "model-call-type", draft.callType, ["同步", "异步"]), "model-form-definition-section");
    sections += modelFormSection("03", "参数定义", "输入参数可设置必填或可选，服务参数不配置默认值", `${modelParameterEditor("输入参数", "inputParams", draft.inputParams, true)}${modelParameterEditor("输出参数", "outputParams", draft.outputParams)}`, "model-form-parameter-section");
  } else {
    sections += modelFormSection("02", "输出参数", "事件参数由设备上报，不配置默认值", modelParameterEditor("输出参数", "outputParams", draft.outputParams), "model-form-parameter-section");
  }
  const remarkIndex = draft.kind === "event" ? "03" : "04";
  sections += modelFormSection(remarkIndex, "备注", "补充物模型的业务含义", `<div class="form-row model-counted-field"><label>备注说明</label><div><textarea data-role="modal-model-description" maxlength="200" placeholder="请输入备注说明">${escapeHtml(draft.description)}</textarea><small class="field-counter">${String(draft.description || "").length} / 200</small></div></div>`, "model-form-remark-section");
  const defaultDisableConfirm = modal.defaultDisableConfirm
    ? modelParameterConfirm("改为不设置默认值？", "继续后将清除当前已经配置的默认值。", "model-default-disable-cancel", "model-default-disable-confirm", "确认清除")
    : "";
  const accessDefaultConfirm = modal.accessDefaultConfirm
    ? modelParameterConfirm(
        `切换为${modal.accessDefaultConfirm.value}属性？`,
        modal.accessDefaultConfirm.value === "只写" ? "只写属性必须在每次写入时明确传值，继续后将清除当前默认值。" : "只读属性由设备上报，继续后将清除当前默认值。",
        "model-access-default-cancel",
        "model-access-default-confirm",
        "切换并清除",
      )
    : "";
  const typeChangeConfirm = modal.typeChangeConfirm
    ? modelParameterConfirm(
        modal.typeChangeConfirm.kind === "elementType" ? "确认切换元素类型" : "确认切换数据类型",
        modal.typeChangeConfirm.kind === "elementType" ? "切换后将清除当前元素规则和数组默认值。" : "切换后将清除当前数据定义和默认值。",
        "model-property-type-change-cancel",
        "model-property-type-change-confirm",
        "确认切换",
      )
    : "";
  const saveScope = draft.kind === "property"
    ? "数据定义和属性默认值"
    : draft.kind === "service"
      ? "调用方式和输入、输出参数"
      : "事件输出参数";
  const stateNote = modal.readOnly
    ? `<div class="model-form-state-note locked"><strong>当前版本配置已锁定</strong><span>以下内容仅供查看，如需调整请创建或撤回为草稿版本。</span></div>`
    : `<div class="model-form-state-note"><strong>统一配置</strong><span>${saveScope}将在保存后一起写入当前草稿版本。</span></div>`;
  return `${stateNote}${modal.typeResetNotice ? `<div class="warning-strip model-reset-warning">数据类型已切换，原数据定义和默认值已重置；取消本次编辑可放弃该变更。</div>` : ""}<fieldset class="model-form-fieldset" ${modal.readOnly ? "disabled" : ""}><div class="modal-form model-drawer-form">${sections}</div></fieldset>${modal.readOnly ? "" : modelParameterDialog(modal)}${defaultDisableConfirm}${accessDefaultConfirm}${typeChangeConfirm}`;
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
  } else if (modal.type === "function-cross-line-copy") {
    const item = functions.find((entry) => entry.id === modal.id);
    const versions = copySourceVersions(item);
    const version = versions.find((entry) => entry.id === modal.versionId) || versions[0];
    const targets = item ? availableTargetLines(item) : [];
    const targetLine = targets.includes(modal.targetLine) ? modal.targetLine : "";
    const spec = item && version ? copySourceModelSpec(item, version) : { properties: [], services: [], events: [] };
    const sourceVersionField = versions.length > 1
      ? `<div class="form-row required"><label>来源版本</label><select data-role="modal-copy-source-version">${versions.map((entry) => `<option value="${escapeHtml(entry.id)}" ${entry.id === version?.id ? "selected" : ""}>${escapeHtml(entry.label)} · ${escapeHtml(entry.status)}${entry.recommended ? " · 推荐" : ""}</option>`).join("")}</select></div>`
      : `<div class="form-row"><label>来源版本</label><div class="form-static-value"><strong>${escapeHtml(version?.label || "-")} · ${escapeHtml(version?.status || "-")}</strong></div></div>`;
    title = "复制到其他产线";
    wide = true;
    body = item && version && targets.length ? `<div class="copy-source-summary"><span>来源功能</span><strong>${escapeHtml(item.productLine)} · ${escapeHtml(item.name)}</strong><small>${escapeHtml(item.identifier)} · 复制后与来源独立管理，不自动同步后续变更</small></div><div class="modal-form">${sourceVersionField}${selectField("目标产线", "modal-copy-target-line", targets, targetLine, true)}<div class="form-row"><label>目标版本</label><div class="form-static-value"><strong>V1 · 草稿</strong><span>版本说明将自动记录复制来源</span></div></div><div class="form-row"><label>复制内容</label><div class="copy-content-list"><span>功能资料</span><span>物模型 ${spec.properties.length + spec.services.length + spec.events.length} 项</span><span>属性默认值</span></div></div><div class="form-row"><label>重新配置</label><div class="copy-content-list"><span class="muted">固件必配默认为可选</span><span class="muted">不复制关联硬件</span><span class="muted">不复制固件关联与版本标记</span></div></div></div>` : `<div class="empty-state compact-empty">暂无可复制的目标产线</div>`;
    footer = item && version && targets.length ? `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm" ${targetLine ? "" : "disabled"}>确认复制</button>` : `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "function-form") {
    const item = modal.id ? functions.find((entry) => entry.id === modal.id) : null;
    title = "编辑功能";
    body = item ? functionBasicFormFields(item, item.productLine, false) : `<div class="empty-state">该功能已不存在</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">保存</button>`;
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
    body = `<div class="submit-test-summary"><div><span>版本</span><strong>${escapeHtml(version?.label || "-")}</strong></div><div><span>版本说明</span><strong>${escapeHtml(version?.changelog || "未填写")}</strong></div><div><span>物模型</span><strong>${spec.properties.length + spec.services.length + spec.events.length} 项</strong></div><div><span>关联硬件</span><strong>${spec.hardware.length} 项</strong></div></div>${modelError ? `<div class="warning-strip model-preflight-error"><strong>物模型配置未完成</strong><span>${escapeHtml(modelError)}</span></div>` : ""}<div class="info-strip"><strong>提交后配置将锁定</strong><span>测试中的版本可供固件配置选择进行功能验证；发现问题可撤回修改。</span></div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm" ${version?.changelog && !modelError ? "" : "disabled"}>确认提交测试</button>`;
  } else if (modal.type === "function-publish-version") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item ? selectedFunctionVersion(item) : null;
    const spec = item && version ? getModelSpec(item.id, version.id) : { properties: [], services: [], events: [], hardware: [] };
    const modelError = modelSpecValidationError(spec);
    const currentRecommended = item ? recommendedFunctionVersion(item) : null;
    const recommendOnPublish = Boolean(modal.recommendOnPublish);
    const relationCount = functionFirmwareRelations(version).length;
    const bindingCount = functionVersionBindingCount(version?.id);
    title = `发布功能版本 · ${version?.label || ""}`;
    body = `<div class="release-checklist"><div><span>物模型</span><strong>${spec.properties.length + spec.services.length + spec.events.length} 项</strong></div><div><span>关联硬件</span><strong>${spec.hardware.length} 项</strong></div><div><span>固件配置</span><strong>${Math.max(relationCount, bindingCount)} 项</strong></div></div><div class="form-static-value release-version-description"><span>版本说明</span><strong>${escapeHtml(version?.changelog || "-")}</strong></div><div class="release-recommend-setting"><div><strong>发布后设为推荐版本</strong><span>后续固件配置将优先选择该版本。</span></div><div class="release-switch-control">${functionPolicySwitch("function-publish-recommend-toggle", recommendOnPublish, `${recommendOnPublish ? "取消" : "开启"}发布后推荐`)}<span>${recommendOnPublish ? "是" : "否"}</span></div></div>${recommendOnPublish && currentRecommended ? `<div class="warning-strip"><strong>将替换当前推荐版本 ${currentRecommended.label}</strong><span>已有固件关联保持不变。</span></div>` : ""}${modelError ? `<div class="warning-strip model-preflight-error"><strong>物模型配置未完成</strong><span>${escapeHtml(modelError)}；请撤回草稿后修正。</span></div>` : ""}${!relationCount && !bindingCount ? `<div class="warning-strip"><strong>暂未关联固件配置</strong><span>仍可发布功能版本，请确认已经完成必要验证。</span></div>` : `<div class="info-strip"><strong>发布后即可用于固件正式发布</strong><span>现有测试固件配置将保留，无需重新选择。</span></div>`}`;
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
      ? `<button class="btn" data-action="function-recommend-version" data-id="${item.id}" data-version="${version.id}" data-value="${version.recommended ? "false" : "true"}">${version.recommended ? "取消推荐" : "设为推荐"}</button><button class="btn" data-action="function-disable-version" data-id="${item.id}" data-version="${version.id}">停用版本</button>`
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
        ? "版本将解除锁定并回到草稿；已有固件配置保留，但暂不可正式发布。"
        : "恢复后可再次被固件发布配置选择，既有关联不受影响。";
    const relations = functionFirmwareRelations(version).length;
    const bindingCount = functionVersionBindingCount(version?.id);
    const alternatives = item?.versions.filter((entry) => entry.id !== version?.id && entry.status === "已发布") || [];
    const replacement = modal.nextStatus === "已停用" && version?.recommended && alternatives.length
      ? `<div class="form-row"><label>新的推荐版本</label><select data-role="modal-replacement-recommend"><option value="">暂不设置</option>${alternatives.map((entry, index) => `<option value="${entry.id}" ${index === 0 ? "selected" : ""}>${entry.label}${functionFirmwareRelations(entry).length ? ` · 关联 ${functionFirmwareRelations(entry).length}` : ""}</option>`).join("")}</select><small>停用后原推荐标识将自动取消。</small></div>`
      : "";
    body = `<div class="confirm-copy">确认将“${escapeHtml(item?.name || "该功能")} ${version?.label || ""}”变更为“${modal.nextStatus}”吗？${statusHint}</div>${modal.nextStatus === "草稿" && bindingCount ? `<div class="warning-strip"><strong>已有 ${bindingCount} 项固件配置选择此版本</strong><span>撤回后绑定关系保留，重新提交测试后可继续验证。</span></div>` : ""}${relations && modal.nextStatus === "已停用" ? `<div class="warning-strip"><strong>已有 ${relations} 个固件版本关联</strong><span>停用不会解除这些关联，但新固件不能再选择该版本。</span></div>` : ""}${version?.recommended && modal.nextStatus === "已停用" ? `<div class="warning-strip"><strong>当前版本是推荐版本</strong><span>${alternatives.length ? "可同时指定新的推荐版本，保证必配能力继续自动选版。" : "停用后将暂无推荐版本，后续固件配置需要人工选择。"}</span></div>` : ""}${replacement ? `<div class="modal-form version-replacement-form">${replacement}</div>` : ""}`;
  } else if (modal.type === "function-recommend-version") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item?.versions.find((entry) => entry.id === modal.versionId);
    const currentRecommended = item ? recommendedFunctionVersion(item) : null;
    title = modal.nextRecommended ? "设为推荐版本" : "取消推荐版本";
    body = item && version ? `<div class="confirm-copy">${modal.nextRecommended ? `将“${escapeHtml(item.name)} ${version.label}”设为推荐版本吗？固件能力配置将优先选择该版本。` : `取消“${escapeHtml(item.name)} ${version.label}”的推荐标识吗？版本仍保持已发布状态。`}</div>${modal.nextRecommended && currentRecommended && currentRecommended.id !== version.id ? `<div class="warning-strip"><strong>将替换 ${currentRecommended.label}</strong><span>已有固件关联不变，仅调整后续配置的优先版本。</span></div>` : ""}${!modal.nextRecommended && item.requiredInFirmware ? `<div class="warning-strip"><strong>该功能是固件必配能力</strong><span>取消后，新固件配置需要人工选择已发布版本。</span></div>` : ""}` : `<div class="empty-state">版本已不存在</div>`;
    footer = item && version ? `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">确认</button>` : `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "function-delete-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    const deleteReason = functionDraftDeleteReason(item);
    title = "删除草稿功能";
    body = item && !deleteReason ? `<div class="confirm-copy">确定删除功能“${escapeHtml(item.name)}”吗？草稿功能及其物模型配置将被删除，且无法恢复。</div>` : `<div class="warning-strip"><strong>当前功能不能删除</strong><span>${escapeHtml(deleteReason || "功能已不存在")}</span></div>`;
    footer = item && !deleteReason ? `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-danger" data-action="modal-confirm">确认删除</button>` : `<button class="btn" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "model-form") {
    const kindLabel = modelKindLabel(modal.draft?.kind || modal.originalKind || "property");
    title = modal.readOnly ? `查看${kindLabel}` : Number.isInteger(modal.index) ? `编辑${kindLabel}` : `添加${kindLabel}`;
    body = modelFormBody(modal);
    drawer = true;
    modelDrawer = true;
    footer = modal.readOnly
      ? `<button class="btn btn-primary" data-action="modal-close">关闭</button>`
      : `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">保存</button>`;
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
    const previewMode = modal.previewMode === "standard" ? "standard" : "current";
    const payload = modelPreviewPayload(functionId, item, version, spec, previewMode);
    const counts = `${spec.properties.length} 个属性 · ${spec.services.length} 个服务 · ${spec.events.length} 个事件`;
    title = "物模型 JSON";
    wide = true;
    body = `<div class="model-preview-layout"><div class="info-strip model-preview-summary"><strong>${escapeHtml(item?.name || "功能项")} · ${escapeHtml(version?.label || "")} · ${escapeHtml(version?.status || "草稿")}</strong><span>${counts}</span></div><div class="model-preview-tabs" role="tablist" aria-label="JSON 查看方式"><button type="button" role="tab" aria-selected="${previewMode === "current"}" class="${previewMode === "current" ? "active" : ""}" data-action="model-preview-mode" data-value="current"><strong>当前配置</strong><span>包含功能与版本内部信息</span></button><button type="button" role="tab" aria-selected="${previewMode === "standard"}" class="${previewMode === "standard" ? "active" : ""}" data-action="model-preview-mode" data-value="standard"><strong>标准导入格式</strong><span>可直接用于批量导入</span></button></div>${previewMode === "standard" ? `<div class="success-strip model-preview-guide"><strong>已按标准上传格式生成</strong><span>仅保留可导入的业务字段，复制或下载后可直接在“批量导入 JSON”中使用。</span></div>` : `<div class="info-strip model-preview-guide"><strong>当前版本完整快照</strong><span>用于核对系统内保存结果，包含内部标识，不建议作为批量导入文件。</span></div>`}<textarea class="model-json model-json-textarea" data-role="model-json-output" readonly spellcheck="false" aria-label="${previewMode === "standard" ? "标准导入 JSON" : "当前配置 JSON"}">${escapeHtml(JSON.stringify(payload, null, 2))}</textarea></div>`;
    footer = `<button class="btn" data-action="modal-close">关闭</button><button class="btn" data-action="model-json-copy">复制 JSON</button><button class="btn btn-primary" data-action="model-json-download">下载 JSON</button>`;
  } else if (modal.type === "model-import") {
    const importMode = modal.importMode === "replace" ? "replace" : "append";
    const fileMeta = modal.fileName
      ? `<div class="model-import-file-selected"><div><strong>${escapeHtml(modal.fileName)}</strong><span>${modal.fileSize ? `${Math.max(1, Math.round(modal.fileSize / 1024))} KB` : "内容已载入"}</span></div><button type="button" class="btn btn-text" data-action="model-import-file-clear">移除</button></div>`
      : "";
    title = "批量导入物模型";
    wide = true;
    body = `<div class="model-import-layout"><div class="info-strip model-import-guide"><strong>JSON 文件需包含 properties、services、events 三个数组</strong><span>支持一次导入多条属性、服务和事件；每条数据使用与手工创建相同的规则校验。</span></div><section class="model-import-source"><div class="model-import-section-head"><div><strong>1. 选择 JSON 文件</strong><span>仅支持 .json，文件大小不超过 2 MB</span></div></div><label class="model-import-file-picker"><input type="file" data-role="model-import-file" accept=".json,application/json"><span class="model-import-upload-icon">↑</span><div><strong>点击选择 JSON 文件</strong><small>选择后自动读取，也可在下方直接粘贴或调整内容</small></div></label>${fileMeta}</section><section class="model-import-mode-section"><div class="model-import-section-head"><div><strong>2. 选择导入方式</strong><span>追加不会修改现有物模型，标识符冲突时将阻止导入</span></div></div><div class="model-import-mode" role="radiogroup" aria-label="导入方式"><button type="button" role="radio" aria-checked="${importMode === "append"}" class="${importMode === "append" ? "active" : ""}" data-action="model-import-mode" data-value="append"><strong>追加新项</strong><span>保留现有数据，仅增加文件中的物模型</span></button><button type="button" role="radio" aria-checked="${importMode === "replace"}" class="${importMode === "replace" ? "active danger" : ""}" data-action="model-import-mode" data-value="replace"><strong>覆盖全部</strong><span>清空当前属性、服务和事件后整体替换</span></button></div></section><section class="model-import-content-section"><div class="model-import-section-head"><div><strong>3. JSON 内容</strong><span>可核对或直接粘贴 JSON</span></div></div><textarea class="model-import-textarea" data-role="modal-model-import" spellcheck="false" placeholder='{"properties": [], "services": [], "events": []}'>${escapeHtml(modal.raw || "")}</textarea></section></div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">校验并预览</button>`;
  } else if (modal.type === "model-import-confirm") {
    const current = modal.current || { properties: [], services: [], events: [] };
    const candidate = modal.candidate || { properties: [], services: [], events: [] };
    const replace = modal.importMode === "replace";
    const targetCount = (key) => replace ? candidate[key].length : current[key].length + candidate[key].length;
    title = replace ? "确认覆盖全部物模型" : "确认追加物模型";
    body = `<div class="${replace ? "warning-strip model-import-warning" : "info-strip model-import-guide"}"><strong>${replace ? "当前草稿内的全部物模型将被替换" : `准备追加 ${candidate.properties.length + candidate.services.length + candidate.events.length} 条物模型`}</strong><span>${replace ? "关联硬件不受影响，该操作确认后立即生效。" : "现有物模型保持不变，导入项将追加至对应类型列表。"}</span></div>${modal.fileName ? `<div class="model-import-confirm-file"><span>来源文件</span><strong>${escapeHtml(modal.fileName)}</strong></div>` : ""}<div class="model-import-compare"><div><span>属性</span><strong>${current.properties.length} → ${targetCount("properties")}</strong><small>本次 ${candidate.properties.length} 条</small></div><div><span>服务</span><strong>${current.services.length} → ${targetCount("services")}</strong><small>本次 ${candidate.services.length} 条</small></div><div><span>事件</span><strong>${current.events.length} → ${targetCount("events")}</strong><small>本次 ${candidate.events.length} 条</small></div></div><div class="success-strip"><strong>JSON 格式与业务规则校验通过</strong><span>确认后写入当前草稿版本，仍可继续编辑各条物模型</span></div>`;
    footer = `<button class="btn" data-action="model-import-back">返回修改</button><button class="btn ${replace ? "btn-danger" : "btn-primary"}" data-action="modal-confirm">${replace ? "确认覆盖" : "确认追加"}</button>`;
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
    const config = activeMachineConfig(machine.id);
    const releaseGaps = firmwareFunctionReleaseGaps(machine.id);
    const testingGaps = releaseGaps.filter(({ version }) => version?.status === "测试中");
    const unavailableGaps = releaseGaps.filter(({ version }) => version?.status !== "测试中");
    title = "发布机型";
    body = `<div class="confirm-copy">确认正式发布“${escapeHtml(machine.name)}”的当前配置吗？</div><div class="release-checklist"><div><span>硬件配置</span><strong>${config.hardware.length && config.hardware.every((item) => item.model) ? "已完成" : "待完善"}</strong></div><div><span>功能配置</span><strong>${releaseGaps.length ? `${releaseGaps.length} 项不可发布` : `${config.functions.length} 项已就绪`}</strong></div></div>${testingGaps.length ? `<div class="testing-strip"><strong>${testingGaps.length} 项功能仍在测试中</strong><span>${testingGaps.map(({ item, version }) => `${escapeHtml(item.name)} ${version.label}`).join("、")}；请先发布功能版本。</span></div>` : ""}${unavailableGaps.length ? `<div class="warning-strip"><strong>${unavailableGaps.length} 项功能版本不可用</strong><span>${unavailableGaps.map(({ item, version }) => `${escapeHtml(item.name)}${version ? ` ${version.label}（${version.status}）` : "（未选择版本）"}`).join("、")}</span></div>` : ""}${releaseGaps.length ? "" : `<div class="success-strip"><strong>功能版本均已发布</strong><span>当前配置可以正式发布。</span></div>`}`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm" ${releaseGaps.length ? "disabled" : ""}>确认发布</button>`;
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
    const available = functions.filter((item) => item.productLine === machine.line && !existingIds.includes(item.id)).flatMap((item) => configurableFunctionVersions(item).map((version) => ({ item, version }))).sort((a, b) => a.item.name.localeCompare(b.item.name, "zh-CN") || Number(b.version.status === "已发布") - Number(a.version.status === "已发布") || Number(Boolean(b.version.recommended)) - Number(Boolean(a.version.recommended)) || (b.version.number || 0) - (a.version.number || 0));
    body = available.length ? `<div class="info-strip"><strong>可选择测试中或已发布版本</strong><span>测试中版本仅用于固件测试，正式发布固件前需升级为已发布版本。</span></div><div class="modal-form"><div class="form-row required"><label>功能版本</label><select data-role="modal-config-function"><option value="">请选择功能版本</option>${available.map(({ item, version }) => `<option value="${item.id}|${version.id}">${escapeHtml(item.name)} · ${firmwareSelectableVersionLabel(version)}</option>`).join("")}</select></div></div>` : `<div class="empty-state">当前产品线暂无可添加的功能版本</div>`;
    footer = available.length ? footer : `<button class="btn btn-primary" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "config-function-version") {
    const item = functions.find((entry) => entry.id === modal.functionId);
    const versions = configurableFunctionVersions(item);
    const binding = state.configFunctions.find((entry) => (typeof entry === "string" ? entry : entry.functionId) === item?.id);
    const currentVersion = item?.versions.find((version) => version.id === binding?.versionId);
    const currentUnavailable = currentVersion && !versions.some((version) => version.id === currentVersion.id);
    const unavailableNotice = currentUnavailable ? `<div class="warning-strip"><strong>当前绑定版本已回到${escapeHtml(currentVersion.status)}</strong><span>绑定关系已保留，请重新提交测试或改选其他版本。</span></div>` : "";
    title = `选择功能版本 · ${item?.name || ""}`;
    body = item ? `${unavailableNotice}${versions.length ? `${currentUnavailable ? "" : `<div class="info-strip"><strong>测试中版本仅用于固件测试</strong><span>固件正式发布时，所选功能版本必须为已发布。</span></div>`}<div class="modal-form"><div class="form-row required"><label>功能版本</label><select data-role="modal-config-function-version">${currentUnavailable ? `<option value="" selected>请选择可用版本</option>` : ""}${versions.map((version) => `<option value="${version.id}" ${!currentUnavailable && (version.id === binding?.versionId || (!binding?.versionId && version.recommended)) ? "selected" : ""}>${firmwareSelectableVersionLabel(version)}</option>`).join("")}</select></div></div>` : `<div class="empty-state compact-empty">暂无可选择的测试中或已发布版本</div>`}` : `<div class="empty-state">该功能已不存在</div>`;
    footer = item && versions.length ? `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">确认选择</button>` : `<button class="btn" data-action="modal-close">关闭</button>`;
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

  const functionDialogClass = ["function-create-entry", "function-form"].includes(modal.type) ? "function-profile-dialog" : "";
  return `<div class="modal-backdrop ${drawer ? "drawer-backdrop" : ""}" data-action="modal-backdrop"><section class="modal ${wide ? "modal-wide" : ""} ${drawer ? "modal-drawer" : ""} ${modelDrawer ? "model-form-drawer" : ""} ${functionDialogClass}" role="dialog" aria-modal="true" aria-label="${title}"><div class="modal-header"><h2>${title}</h2><button class="modal-close" data-action="modal-close" title="关闭">×</button></div><div class="modal-body">${body}</div>${footer ? `<div class="modal-footer">${footer}</div>` : ""}</section></div>`;
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
    if (typeof item.requiredInFirmware !== "boolean") item.requiredInFirmware = ["f1", "f2", "f8"].includes(item.id);
    const hasRecommendationField = item.versions.some((version) => typeof version.recommended === "boolean");
    const fallbackRecommendedId = hasRecommendationField ? "" : item.versions.find((version) => version.status === "已发布")?.id || "";
    let recommendationAssigned = false;
    item.versions.forEach((version) => {
      if (!version.changelog) version.changelog = version.number === 1 ? `${item.name}首版能力配置` : `${item.name} ${version.label} 版本调整`;
      if (version.copiedFrom === undefined) version.copiedFrom = null;
      if (version.baseVersionId === undefined) version.baseVersionId = "";
      if (version.number > 1 && !version.baseVersionId && !version.copiedFrom) {
        const previous = item.versions.filter((entry) => entry.number < version.number).sort((a, b) => b.number - a.number)[0];
        if (previous) version.baseVersionId = previous.id;
      }
      const spec = getModelSpec(item.id, version.id);
      if (version.publishedSnapshot?.config) {
        normalizeModelSpecData(version.publishedSnapshot.config);
        if (!Array.isArray(version.publishedSnapshot.config.hardware)) version.publishedSnapshot.config.hardware = [];
        version.publishedSnapshot.signature = JSON.stringify(functionConfigPayload(version.publishedSnapshot.config));
      }
      if (version.status === "待发布") version.status = "测试中";
      const shouldRecommend = version.status === "已发布" && (hasRecommendationField ? version.recommended : version.id === fallbackRecommendedId);
      version.recommended = Boolean(shouldRecommend && !recommendationAssigned);
      if (version.recommended) recommendationAssigned = true;
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

function modelSpecHasConfiguration(dataType, dataSpec) {
  return JSON.stringify(parseModelDataSpec(dataType, "", dataSpec)) !== JSON.stringify(defaultModelDataSpec(dataType));
}

function applyModelParameterTypeChange(editor, dataType) {
  editor.draft.dataType = dataType;
  editor.draft.dataSpec = defaultModelDataSpec(dataType);
  editor.draft.dataDefinition = modelDataSpecToDefinition(dataType, editor.draft.dataSpec);
  editor.dirty = true;
  editor.errors = {};
}

function applyArrayElementTypeChange(editor, elementType) {
  editor.draft.dataSpec.elementType = elementType;
  editor.draft.dataSpec.elementSpec = defaultModelDataSpec(elementType);
  editor.draft.dataDefinition = modelDataSpecToDefinition(editor.draft.dataType, editor.draft.dataSpec);
  editor.dirty = true;
  if (editor.errors) {
    delete editor.errors.dataSpec;
  }
}

function applyModelPropertyTypeChange(modal, dataType) {
  modal.draft.dataType = dataType;
  modal.draft.dataSpec = defaultModelDataSpec(dataType);
  modal.draft.dataDefinition = modelDataSpecToDefinition(dataType, modal.draft.dataSpec);
  modal.draft.defaultValue = "";
  modal.draft.hasDefaultValue = false;
  modal.draft._defaultValuePending = false;
  modal.defaultValueError = "";
  modal.typeResetNotice = true;
  modal.dirty = true;
}

function applyModelPropertyArrayElementTypeChange(modal, elementType) {
  modal.draft.dataSpec.elementType = elementType;
  modal.draft.dataSpec.elementSpec = defaultModelDataSpec(elementType);
  modal.draft.dataDefinition = modelDataSpecToDefinition(modal.draft.dataType, modal.draft.dataSpec);
  modal.draft.defaultValue = "";
  modal.draft.hasDefaultValue = false;
  modal.draft._defaultValuePending = false;
  modal.defaultValueError = "";
  modal.typeResetNotice = true;
  modal.dirty = true;
}

function modelDefaultEditorHost(ownerScope) {
  return ownerScope === "property" && state.modal?.draft?.kind === "property" ? state.modal : null;
}

function markModelDefaultOwnerDirty(ownerScope) {
  const host = modelDefaultEditorHost(ownerScope);
  if (host) host.dirty = true;
}

function clearModelDefaultOwnerError(ownerScope) {
  const host = modelDefaultEditorHost(ownerScope);
  if (!host) return;
  if (ownerScope === "property") host.defaultValueError = "";
}

function updateModelSimpleDefaultMeta(target, owner) {
  const meta = target.closest?.(".model-simple-default")?.querySelector(":scope > small");
  const spec = parseModelDataSpec(owner.dataType, "", owner.dataSpec);
  if (meta && owner.dataType === "字符型(String)") meta.textContent = `${String(owner.defaultValue).length} / ${spec.maxLength || "-"}`;
  if (meta && owner.dataType === "时间型(timestamp)") meta.textContent = owner.defaultValue ? `${owner.defaultValue} · ${spec.timestampUnit}` : `请选择日期与时间 · ${spec.timestampUnit}`;
  const status = target.closest?.(".model-default-config")?.querySelector(".model-default-status");
  if (status) {
    status.textContent = modelDefaultStatus(owner);
    status.classList.toggle("pending", Boolean(owner._defaultValuePending));
    status.classList.toggle("configured", !owner._defaultValuePending);
    status.classList.remove("off");
  }
}

function steppedModelDefaultValue(owner, direction) {
  const spec = parseModelDataSpec(owner.dataType, "", owner.dataSpec);
  const step = Number(spec.step);
  const min = String(spec.min).trim() === "" ? null : Number(spec.min);
  const max = String(spec.max).trim() === "" ? null : Number(spec.max);
  const current = owner._defaultValuePending || String(owner.defaultValue).trim() === "" ? null : Number(owner.defaultValue);
  let next = Number.isFinite(current) ? current + direction * (Number.isFinite(step) && step > 0 ? step : 1) : 0;
  if (Number.isFinite(min)) next = Math.max(min, next);
  if (Number.isFinite(max)) next = Math.min(max, next);
  if (owner.dataType === "整数型(Int)") next = Math.round(next);
  return String(Number(next.toFixed(12)));
}

function modelTypedDefaultValue(dataType, dataSpec) {
  const value = defaultValueForModelType(dataType, dataSpec);
  if (["整数型(Int)", "浮点型(float)", "布尔型(Bool)", "时间型(timestamp)"].includes(dataType)) {
    return value === "" ? null : Number(value);
  }
  return value;
}

function modelValueFromEditorInput(value, dataType) {
  if (["整数型(Int)", "浮点型(float)", "布尔型(Bool)", "时间型(timestamp)"].includes(dataType)) {
    return value === "" ? null : Number(value);
  }
  return value;
}

function clearVisibleModelFieldError(target) {
  const container = target.closest?.(".has-error");
  if (!container) return;
  container.classList.remove("has-error");
  container.querySelectorAll(":scope > .model-field-error, :scope > div > .model-field-error").forEach((node) => node.remove());
  target.removeAttribute?.("aria-invalid");
}

function syncModelDraftInput(target) {
  if (state.modal?.type !== "model-form") return false;
  const markDirty = () => { state.modal.dirty = true; };
  const syncDefinition = (owner) => { owner.dataDefinition = modelDataSpecToDefinition(owner.dataType, owner.dataSpec); };
  const counter = target.closest?.(".model-counted-field")?.querySelector(".field-counter");
  if (counter && target.maxLength > 0) counter.textContent = `${target.value.length} / ${target.maxLength}`;
  if (target.closest?.(".model-param-dialog")) clearVisibleModelFieldError(target);
  if (target.matches('[data-role="modal-model-default-datetime"]')) {
    const ownerScope = "property";
    const owner = modelDefaultOwner(ownerScope);
    if (!owner) return false;
    const spec = parseModelDataSpec(owner.dataType, "", owner.dataSpec);
    owner.defaultValue = modelTimestampFromLocalValue(target.value, spec.timestampUnit);
    owner.hasDefaultValue = true;
    owner._defaultValuePending = target.value === "";
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    clearVisibleModelFieldError(target);
    updateModelSimpleDefaultMeta(target, owner);
    return true;
  }
  if (target.matches('[data-role="model-inline-array-item"], [data-role="model-inline-array-datetime"]')) {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    if (owner?.dataType !== "数组型(array)") return false;
    const parsed = parsedArrayDefaultValue(owner.defaultValue);
    const index = Number(target.dataset.index);
    if (parsed.invalid || !Number.isInteger(index) || index < 0 || index >= parsed.items.length) return false;
    const elementSpec = parseModelDataSpec(owner.dataSpec.elementType, "", owner.dataSpec.elementSpec);
    parsed.items[index] = target.dataset.role === "model-inline-array-datetime"
      ? modelValueFromEditorInput(modelTimestampFromLocalValue(target.value, elementSpec.timestampUnit), owner.dataSpec.elementType)
      : modelValueFromEditorInput(target.value, owner.dataSpec.elementType);
    owner.defaultValue = JSON.stringify(parsed.items);
    owner.hasDefaultValue = true;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    clearVisibleModelFieldError(target);
    return true;
  }
  if (target.matches('[data-role="model-inline-struct-item"], [data-role="model-inline-struct-datetime"]')) {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    const index = Number(target.dataset.index);
    const field = owner?.dataSpec?.fields?.[index];
    if (owner?.dataType !== "结构体(struct)" || !field) return false;
    const parsed = parsedStructDefaultValue(owner.defaultValue);
    if (parsed.invalid || !Object.hasOwn(parsed.value, field.identifier)) return false;
    const spec = parseModelDataSpec(field.dataType, "", field.dataSpec);
    parsed.value[field.identifier] = target.dataset.role === "model-inline-struct-datetime"
      ? modelValueFromEditorInput(modelTimestampFromLocalValue(target.value, spec.timestampUnit), field.dataType)
      : modelValueFromEditorInput(target.value, field.dataType);
    owner.defaultValue = JSON.stringify(parsed.value);
    owner.hasDefaultValue = true;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    clearVisibleModelFieldError(target);
    return true;
  }
  if (target.matches('[data-role^="model-param-dialog-"]:not([data-role="model-param-dialog-spec"]):not([data-role="model-param-dialog-enum"])')) {
    const editor = state.modal.paramEditor;
    if (!editor) return false;
    const fieldMap = {
      "model-param-dialog-name": "name",
      "model-param-dialog-identifier": "identifier",
      "model-param-dialog-data-type": "dataType",
    };
    const field = fieldMap[target.dataset.role];
    if (!field) return false;
    if (field === "dataType" && editor.draft.dataType !== target.value) {
      if (editor.changeConfirm?.kind === "dataType" && editor.changeConfirm.value === target.value) return true;
      if (modelSpecHasConfiguration(editor.draft.dataType, editor.draft.dataSpec)) {
        editor.changeConfirm = { kind: "dataType", value: target.value };
      } else {
        applyModelParameterTypeChange(editor, target.value);
        editor.typeResetNotice = false;
      }
    } else {
      editor.draft[field] = target.value;
      editor.dirty = true;
      if (editor.errors) delete editor.errors[field];
    }
    return true;
  }
  if (target.matches('[data-role="model-param-dialog-spec"]')) {
    const parameter = state.modal.paramEditor?.draft;
    const editor = state.modal.paramEditor;
    if (!parameter || !target.dataset.field) return false;
    if (target.dataset.field === "elementType" && parameter.dataSpec.elementType !== target.value) {
      if (editor.changeConfirm?.kind === "elementType" && editor.changeConfirm.value === target.value) return true;
      const currentElementType = parameter.dataSpec.elementType;
      if (modelSpecHasConfiguration(currentElementType, parameter.dataSpec.elementSpec)) {
        editor.changeConfirm = { kind: "elementType", value: target.value };
      } else {
        applyArrayElementTypeChange(editor, target.value);
      }
      return true;
    }
    parameter.dataSpec[target.dataset.field] = target.value;
    syncDefinition(parameter);
    editor.dirty = true;
    if (editor.errors) delete editor.errors.dataSpec;
    return true;
  }
  if (target.matches('[data-role="model-param-dialog-spec-element"]')) {
    const editor = state.modal.paramEditor;
    const parameter = editor?.draft;
    if (!parameter?.dataSpec?.elementSpec || !target.dataset.field) return false;
    parameter.dataSpec.elementSpec[target.dataset.field] = target.value;
    syncDefinition(parameter);
    editor.dirty = true;
    if (editor.errors) delete editor.errors.dataSpec;
    return true;
  }
  if (target.matches('[data-role="model-param-dialog-enum"]')) {
    const editor = state.modal.paramEditor;
    const parameter = state.modal.paramEditor?.draft;
    const enumItem = parameter?.dataSpec?.enumItems?.[Number(target.dataset.enumIndex)];
    if (!enumItem || !target.dataset.field) return false;
    enumItem[target.dataset.field] = target.value;
    syncDefinition(parameter);
    editor.dirty = true;
    if (editor.errors) delete editor.errors.dataSpec;
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
    if (target.dataset.owner === "parameter-dialog") state.modal.paramEditor.dirty = true;
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
    if (target.dataset.owner === "parameter-dialog") state.modal.paramEditor.dirty = true;
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
    if (target.dataset.owner === "parameter-dialog") state.modal.paramEditor.dirty = true;
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
      state.modal.typeResetNotice = true;
    } else if (field === "required") {
      parameter.required = target.value === "true";
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
    if (target.dataset.field === "elementType" && state.modal.draft.dataSpec.elementType !== target.value) {
      const currentElementType = state.modal.draft.dataSpec.elementType;
      if (modelSpecHasConfiguration(currentElementType, state.modal.draft.dataSpec.elementSpec) || state.modal.draft.hasDefaultValue) {
        state.modal.typeChangeConfirm = { kind: "elementType", value: target.value };
      } else {
        applyModelPropertyArrayElementTypeChange(state.modal, target.value);
      }
      return true;
    } else {
      state.modal.draft.dataSpec[target.dataset.field] = target.value;
    }
    syncDefinition(state.modal.draft);
    state.modal.defaultValueError = "";
    markDirty();
    return true;
  }
  if (target.matches('[data-role="modal-model-spec-element"]')) {
    if (!state.modal.draft.dataSpec?.elementSpec || !target.dataset.field) return false;
    state.modal.draft.dataSpec.elementSpec[target.dataset.field] = target.value;
    syncDefinition(state.modal.draft);
    state.modal.defaultValueError = "";
    markDirty();
    return true;
  }
  if (target.matches('[data-role="modal-model-enum"]')) {
    const enumItem = state.modal.draft.dataSpec?.enumItems?.[Number(target.dataset.enumIndex)];
    if (!enumItem || !target.dataset.field) return false;
    enumItem[target.dataset.field] = target.value;
    syncDefinition(state.modal.draft);
    state.modal.defaultValueError = "";
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
    if (modelSpecHasConfiguration(state.modal.draft.dataType, state.modal.draft.dataSpec) || state.modal.draft.hasDefaultValue) {
      state.modal.typeChangeConfirm = { kind: "dataType", value: target.value };
    } else {
      applyModelPropertyTypeChange(state.modal, target.value);
    }
    return true;
  } else if (field === "access") {
    state.modal.draft.access = target.value;
    if (target.value !== "读写") {
      state.modal.draft.defaultValue = "";
      state.modal.draft.hasDefaultValue = false;
      state.modal.draft._defaultValuePending = false;
    }
  } else {
    state.modal.draft[field] = target.value;
    if (field === "defaultValue") {
      state.modal.draft.hasDefaultValue = true;
      state.modal.draft._defaultValuePending = target.value === "" && state.modal.draft.dataType !== "字符型(String)";
    }
    if (field === "defaultValue") updateModelSimpleDefaultMeta(target, state.modal.draft);
    if (field === "defaultValue") {
      clearModelDefaultOwnerError("property");
      clearVisibleModelFieldError(target);
    }
  }
  markDirty();
  return true;
}

function pageState(context) {
  if (context === "function") {
    const total = functions.filter((item) => (state.selectedProductLine === GLOBAL_PRODUCT_LINE || item.productLine === state.selectedProductLine) && functionMatchesFilters(item)).length;
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
    const item = { id, capabilityId: `capability-${Date.now()}`, name, identifier, productLine, category, remark, requiredInFirmware: Boolean(modal.requiredInFirmware), image: state.functionDraftImage, createdAt, versions: [version] };
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
    const sourceVersionId = inputValue("modal-copy-source-version") || modal.versionId;
    const sourceVersion = sourceItem?.versions.find((version) => version.id === sourceVersionId) || (sourceVersionId ? null : defaultCopySourceVersion(sourceItem));
    const targetLine = inputValue("modal-copy-target-line") || modal.targetLine;
    if (!sourceItem || !sourceVersion) return showToast("复制来源版本已不存在", "error", false);
    if (!productLines.includes(targetLine)) return showToast("请选择目标产线", "error", false);
    if (!availableTargetLines(sourceItem).includes(targetLine)) return showToast("目标产线已存在相同功能", "error", false);
    const id = `f${Date.now()}`;
    const createdAt = new Date().toLocaleString("zh-CN", { hour12: false });
    const changelog = `复制自 ${sourceItem.productLine} / ${sourceItem.name} / ${sourceVersion.label}（${sourceVersion.status}）`;
    const version = functionVersion(id, 1, "草稿", 0, {
      createdAt,
      changelog,
      copiedFrom: { functionId: sourceItem.id, functionName: sourceItem.name, versionId: sourceVersion.id, versionLabel: sourceVersion.label, versionStatus: sourceVersion.status, productLine: sourceItem.productLine, copiedAt: createdAt },
    });
    const copy = { ...sourceItem, id, productLine: targetLine, requiredInFirmware: false, createdAt, versions: [version], capabilityId: functionCapabilityId(sourceItem) };
    functions.unshift(copy);
    const sourceSpec = copySourceModelSpec(sourceItem, sourceVersion);
    state.modelSpecs[`${id}:${version.id}`] = { ...sourceSpec, hardware: [], savedAt: "" };
    state.selectedProductLine = targetLine;
    state.functionVersionSelection[id] = version.id;
    state.modelTab = "model";
    state.modal = null;
    navigate(`/function/detail/${id}`);
    return showToast(`${copy.name} 已复制到 ${targetLine}，V1 草稿已创建`);
  }
  if (modal.type === "function-form") {
    const existing = modal.id ? functions.find((item) => item.id === modal.id) : null;
    if (!existing) return showToast("该功能已不存在", "error", false);
    const nextRequired = Boolean(modal.requiredInFirmware);
    if (!canEditFunctionMetadata(existing)) {
      const policyChanged = existing.requiredInFirmware !== nextRequired;
      existing.requiredInFirmware = nextRequired;
      state.functionDraftImage = "";
      state.modal = null;
      return showToast(policyChanged ? (nextRequired ? "已设为固件必配能力" : "已调整为可选能力") : "功能配置未发生变化");
    }
    const name = inputValue("modal-function-name");
    if (!name) return showToast("请填写功能项名称", "error", false);
    const category = inputValue("modal-function-category");
    const remark = inputValue("modal-function-desc");
    if (!category) return showToast("请选择功能分类", "error", false);
    if (!remark) return showToast("请填写功能说明", "error", false);
    Object.assign(existing, { name, category, remark, requiredInFirmware: nextRequired, image: state.functionDraftImage || existing.image });
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
    if (modal.recommendOnPublish) {
      item.versions.forEach((entry) => { entry.recommended = false; });
      version.recommended = true;
    } else {
      version.recommended = false;
    }
    state.modelSpecs[`${item.id}:${version.id}`] = { ...deepClone(publishedSnapshot.config), savedAt: publishedAt };
    state.modal = null;
    return showToast(`${version.label} 已发布${version.recommended ? "并设为推荐版本" : "，可供同产品线的固件发布配置选择"}`);
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
    if (modal.nextStatus === "已停用" && version.recommended) {
      version.recommended = false;
      const replacementId = inputValue("modal-replacement-recommend");
      const replacement = item.versions.find((entry) => entry.id === replacementId && entry.status === "已发布");
      if (replacement) {
        item.versions.forEach((entry) => { entry.recommended = entry.id === replacement.id; });
      }
    }
    if (modal.nextStatus !== "已发布") version.recommended = false;
    state.modal = null;
    return showToast(`版本状态已变更为${modal.nextStatus}`);
  }
  if (modal.type === "function-recommend-version") {
    const item = functions.find((entry) => entry.id === modal.id);
    const version = item?.versions.find((entry) => entry.id === modal.versionId);
    if (!item || !version) return showToast("版本已不存在", "error", false);
    if (modal.nextRecommended && version.status !== "已发布") return showToast("只有已发布版本可以设为推荐", "error", false);
    if (modal.nextRecommended) item.versions.forEach((entry) => { entry.recommended = entry.id === version.id; });
    else version.recommended = false;
    state.modal = null;
    return showToast(modal.nextRecommended ? `${version.label} 已设为推荐版本` : `${version.label} 已取消推荐`);
  }
  if (modal.type === "function-delete-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    const deleteReason = functionDraftDeleteReason(item);
    if (!item || deleteReason) return showToast(deleteReason || "功能已不存在", "error", false);
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
      value = {
        ...common,
        dataType,
        dataSpec,
        dataDefinition: modelDataSpecToDefinition(dataType, dataSpec),
        defaultValue: access !== "读写" || !draft.hasDefaultValue ? "" : draft.defaultValue,
        hasDefaultValue: access === "读写" && Boolean(draft.hasDefaultValue),
        _defaultValuePending: access === "读写" && Boolean(draft.hasDefaultValue && draft._defaultValuePending),
        access,
      };
    } else if (draft.kind === "service") {
      value = { ...common, callType: draft.callType || "同步", inputParams: normalizeModelParameterList(draft.inputParams, true), outputParams: normalizeModelParameterList(draft.outputParams) };
    } else {
      value = { ...common, outputParams: normalizeModelParameterList(draft.outputParams) };
    }
    const validationError = modelRowValidationError(value, draft.kind);
    if (validationError) {
      if (draft.kind === "property") {
        const defaultError = modelConfiguredDefaultValueError(value.dataType, value.defaultValue, value.dataDefinition, value.dataSpec, value.hasDefaultValue, value._defaultValuePending);
        if (defaultError && defaultError === validationError) {
          modal.defaultValueError = defaultError;
          render();
          document.querySelector('.model-default-config [aria-invalid="true"], .model-default-config input:not(:disabled), .model-default-config select:not(:disabled)')?.focus();
        }
      }
      return showToast(validationError, "error", false);
    }
    if (draft.kind === "property") delete value._defaultValuePending;
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
    const raw = inputValue("modal-model-import") || String(modal.raw || "").trim();
    if (!raw) return showToast("请选择 JSON 文件或粘贴 JSON 内容", "error", false);
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
      candidate[key] = rows.map((row, index) => ({ ...(row && typeof row === "object" ? row : {}), id: `${kind}${Date.now()}-${index}` }));
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
    const importMode = modal.importMode === "replace" ? "replace" : "append";
    if (!identifiers.length) return showToast("JSON 文件中没有可导入的物模型", "error", false);
    if (importMode === "append") {
      const existingIdentifiers = new Set(flattenModelRows(spec).map((row) => row.identifier));
      const conflicts = identifiers.filter((identifier) => existingIdentifiers.has(identifier));
      if (conflicts.length) {
        const preview = conflicts.slice(0, 3).join("、");
        return showToast(`存在 ${conflicts.length} 个标识符冲突：${preview}${conflicts.length > 3 ? " 等" : ""}`, "error", false);
      }
    }
    state.modal = {
      type: "model-import-confirm",
      raw,
      importMode,
      fileName: modal.fileName || "",
      fileSize: modal.fileSize || 0,
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
    const replace = modal.importMode === "replace";
    if (replace) {
      spec.properties = deepClone(modal.candidate.properties);
      spec.services = deepClone(modal.candidate.services);
      spec.events = deepClone(modal.candidate.events);
    } else {
      spec.properties.push(...deepClone(modal.candidate.properties));
      spec.services.push(...deepClone(modal.candidate.services));
      spec.events.push(...deepClone(modal.candidate.events));
    }
    spec.savedAt = "";
    state.modelKindTab = "all";
    state.modal = null;
    const importedCount = modal.candidate.properties.length + modal.candidate.services.length + modal.candidate.events.length;
    return showToast(replace ? `已覆盖并导入 ${importedCount} 条物模型` : `已追加导入 ${importedCount} 条物模型`);
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
    const releaseGaps = firmwareFunctionReleaseGaps(modal.id);
    const testingGaps = releaseGaps.filter(({ version }) => version?.status === "测试中");
    const unavailableGaps = releaseGaps.filter(({ version }) => version?.status !== "测试中");
    if (testingGaps.length) return showToast(`以下功能仍在测试中，暂不能正式发布：${testingGaps.map(({ item }) => item.name).join("、")}`, "error", false);
    if (unavailableGaps.length) return showToast(`以下功能未选择可发布版本：${unavailableGaps.map(({ item }) => item.name).join("、")}`, "error", false);
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
    if (!item || !version || !["测试中", "已发布"].includes(version.status)) return showToast("该功能版本已不可选择，请重新选择", "error", false);
    if (item.productLine !== machine.line) return showToast("功能与机型所属产品线不一致", "error", false);
    if (state.configFunctions.some((binding) => (typeof binding === "string" ? binding : binding.functionId) === functionId)) return showToast("该功能已配置，请先移除原版本", "error", false);
    state.configFunctions.push({ functionId, versionId, source: "manual" });
    state.configSavedAt = "";
    state.modal = null;
    return showToast(version.status === "测试中" ? "测试版本已添加，可用于固件功能测试" : "功能版本已添加到机型");
  }
  if (modal.type === "config-function-version") {
    const item = functions.find((entry) => entry.id === modal.functionId);
    const versionId = inputValue("modal-config-function-version");
    const version = item?.versions.find((entry) => entry.id === versionId);
    if (!item || !version || !["测试中", "已发布"].includes(version.status)) return showToast("请选择测试中或已发布版本", "error", false);
    const binding = state.configFunctions.find((entry) => (typeof entry === "string" ? entry : entry.functionId) === item.id);
    if (!binding || typeof binding === "string") return showToast("该功能配置已不存在", "error", false);
    binding.versionId = version.id;
    state.configSavedAt = "";
    state.modal = null;
    return showToast(`${item.name} 已选择 ${version.label}${version.status === "测试中" ? "，仅用于固件测试" : ""}`);
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
    if (state.selectedProductLine === GLOBAL_PRODUCT_LINE) return showToast("请先选择具体产线再新增功能", "error");
    state.functionDraftImage = "";
    state.modal = { type: "function-create-entry", targetLine: state.selectedProductLine, requiredInFirmware: false };
  }
  else if (action === "function-copy-crossline") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    const sourceVersion = item?.versions.find((version) => version.id === target.dataset.version) || defaultCopySourceVersion(item);
    if (!item || !sourceVersion) return showToast("暂无可复制版本", "error");
    if (!availableTargetLines(item).length) return showToast("该功能已覆盖全部产线", "error");
    state.modal = { type: "function-cross-line-copy", id: item.id, versionId: sourceVersion.id, targetLine: "" };
  }
  else if (action === "function-model" || action === "function-detail") { const item = functions.find((entry) => entry.id === target.dataset.id); if (item) state.functionVersionSelection[item.id] = workspaceFunctionVersion(item)?.id; state.modelTab = "model"; state.modelKindTab = "all"; state.functionReferencePage = 1; return navigate(`/function/detail/${target.dataset.id}`); }
  else if (action === "function-version-select") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    if (item?.versions.some((version) => version.id === target.dataset.version)) state.functionVersionSelection[item.id] = target.dataset.version;
    state.functionReferenceSearch = "";
    state.functionReferencePage = 1;
  }
  else if (action === "function-version-snapshot") state.modal = { type: "function-version-snapshot", id: target.dataset.id, versionId: target.dataset.version };
  else if (action === "function-open-workspace") { state.functionVersionSelection[target.dataset.id] = target.dataset.version; state.modelTab = "model"; state.modelKindTab = "all"; state.modal = null; return navigate(`/function/detail/${target.dataset.id}`); }
  else if (action === "function-version-view") { state.functionVersionSelection[target.dataset.id] = target.dataset.version; state.modelTab = "model"; state.modelKindTab = "all"; return navigate(`/function/detail/${target.dataset.id}`); }
  else if (action === "function-edit") {
    const item = functions.find((entry) => entry.id === (target.dataset.id || state.modal?.id));
    if (!item) return showToast("该功能已不存在", "error");
    state.functionDraftImage = "";
    state.modal = { type: "function-form", id: item.id, requiredInFirmware: Boolean(item.requiredInFirmware) };
  }
  else if (action === "function-policy-toggle") {
    if (!["function-create-entry", "function-form"].includes(state.modal?.type)) return;
    state.modal.requiredInFirmware = !state.modal.requiredInFirmware;
  }
  else if (action === "function-edit-version") state.modal = { type: "function-version-info", id: target.dataset.id, versionId: target.dataset.version };
  else if (action === "function-submit-test") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    const version = item ? selectedFunctionVersion(item) : null;
    if (!version || version.status !== "草稿") return showToast("只有草稿版本可以提交测试", "error");
    state.modal = { type: "function-submit-test", id: item.id };
  }
  else if (action === "function-withdraw-test") state.modal = { type: "function-version-status", id: target.dataset.id, nextStatus: "草稿" };
  else if (action === "function-publish-version") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    state.modal = { type: "function-publish-version", id: target.dataset.id, recommendOnPublish: Boolean(item?.requiredInFirmware && !recommendedFunctionVersion(item)) };
  }
  else if (action === "function-publish-recommend-toggle") {
    if (state.modal?.type !== "function-publish-version") return;
    state.modal.recommendOnPublish = !state.modal.recommendOnPublish;
  }
  else if (action === "function-recommend-version") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    const version = item?.versions.find((entry) => entry.id === target.dataset.version) || selectedFunctionVersion(item);
    if (!item || !version || version.status !== "已发布") return showToast("只有已发布版本可以调整推荐标识", "error");
    state.modal = { type: "function-recommend-version", id: item.id, versionId: version.id, nextRecommended: target.dataset.value === "true" };
  }
  else if (action === "function-create-version") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    state.modal = { type: "function-create-version", id: target.dataset.id, versionId: target.dataset.version || latestPublishedVersion(item)?.id };
  }
  else if (action === "function-disable-version") state.modal = { type: "function-version-status", id: target.dataset.id, versionId: target.dataset.version, nextStatus: "已停用" };
  else if (action === "function-restore-version") state.modal = { type: "function-version-status", id: target.dataset.id, versionId: target.dataset.version, nextStatus: "已发布" };
  else if (action === "function-delete") {
    const item = functions.find((entry) => entry.id === target.dataset.id);
    const deleteReason = functionDraftDeleteReason(item);
    if (!item || deleteReason) return showToast(deleteReason || "功能已不存在", "error");
    state.modal = { type: "function-delete-confirm", id: item.id };
  }
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
  else if (action === "model-tab") {
    state.modelTab = target.dataset.tab;
  }
  else if (action === "model-kind-tab") {
    state.modelKindTab = target.dataset.kind;
  }
  else if (action === "model-add") {
    if (!requireDraftFunctionVersion()) return;
    const kind = ["property", "service", "event"].includes(target.dataset.kind) ? target.dataset.kind : state.modelKindTab;
    state.modal = { type: "model-form", originalKind: kind, draft: createModelDraft(kind) };
  }
  else if (action === "model-edit") {
    if (!requireDraftFunctionVersion()) return;
    const kind = target.dataset.kind;
    const index = Number(target.dataset.index);
    const row = modelCollection(getModelSpec(route().split("/")[3]), kind)[index];
    state.modal = { type: "model-form", originalKind: kind, index, draft: createModelDraft(kind, row) };
  }
  else if (action === "model-view") {
    const kind = target.dataset.kind;
    const index = Number(target.dataset.index);
    const row = modelCollection(getModelSpec(route().split("/")[3]), kind)[index];
    if (row) state.modal = { type: "model-form", originalKind: kind, index, readOnly: true, draft: createModelDraft(kind, row) };
  }
  else if (action === "model-kind") { state.modal.draft.kind = target.dataset.kind; state.modal.dirty = true; render(); return; }
  else if (action === "model-access") {
    const nextAccess = target.dataset.value;
    if (nextAccess === state.modal.draft.access) return;
    if (nextAccess !== "读写" && state.modal.draft.hasDefaultValue) {
      state.modal.accessDefaultConfirm = { value: nextAccess };
      render();
      return;
    }
    state.modal.draft.access = nextAccess;
    state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-access-default-cancel") {
    state.modal.accessDefaultConfirm = null;
    render();
    return;
  }
  else if (action === "model-access-default-confirm") {
    state.modal.draft.access = state.modal.accessDefaultConfirm?.value || "只读";
    state.modal.draft.defaultValue = "";
    state.modal.draft.hasDefaultValue = false;
    state.modal.draft._defaultValuePending = false;
    state.modal.defaultValueError = "";
    state.modal.accessDefaultConfirm = null;
    state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-property-type-change-cancel") {
    state.modal.typeChangeConfirm = null;
    render();
    return;
  }
  else if (action === "model-property-type-change-confirm") {
    const pending = state.modal.typeChangeConfirm;
    if (!pending) return;
    if (pending.kind === "elementType") applyModelPropertyArrayElementTypeChange(state.modal, pending.value);
    else applyModelPropertyTypeChange(state.modal, pending.value);
    state.modal.typeChangeConfirm = null;
    render();
    return;
  }
  else if (action === "model-default-toggle") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    const host = modelDefaultEditorHost(ownerScope);
    if (!owner || !host) return;
    const enable = !owner.hasDefaultValue;
    if (!enable) {
      if (owner._defaultValuePending) {
        owner.defaultValue = "";
        owner.hasDefaultValue = false;
        owner._defaultValuePending = false;
        host.dirty = true;
        clearModelDefaultOwnerError(ownerScope);
      } else {
        host.defaultDisableConfirm = ownerScope;
      }
    } else {
      owner.hasDefaultValue = true;
      owner.defaultValue = defaultValueForModelType(owner.dataType, owner.dataSpec);
      owner._defaultValuePending = !["数组型(array)", "结构体(struct)"].includes(owner.dataType);
      host.dirty = true;
      clearModelDefaultOwnerError(ownerScope);
    }
    render();
    return;
  }
  else if (action === "model-default-bool") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    if (!owner) return;
    owner.defaultValue = target.dataset.value;
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-default-number-step") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    const direction = Number(target.dataset.direction) < 0 ? -1 : 1;
    if (!owner || !["整数型(Int)", "浮点型(float)"].includes(owner.dataType)) return;
    owner.defaultValue = steppedModelDefaultValue(owner, direction);
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-default-empty-string") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    if (!owner || owner.dataType !== "字符型(String)") return;
    owner.defaultValue = "";
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-default-disable-cancel") {
    const host = state.modal;
    if (host) host.defaultDisableConfirm = null;
    render();
    return;
  }
  else if (action === "model-default-disable-confirm") {
    const host = state.modal;
    const ownerScope = host?.defaultDisableConfirm || "property";
    const owner = modelDefaultOwner(ownerScope);
    if (!host || !owner) return;
    owner.defaultValue = "";
    owner.hasDefaultValue = false;
    owner._defaultValuePending = false;
    host.defaultDisableConfirm = null;
    host.dirty = true;
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-inline-array-add") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    if (owner?.dataType !== "数组型(array)") return;
    const parsed = parsedArrayDefaultValue(owner.defaultValue);
    const items = parsed.invalid ? [] : [...parsed.items];
    const maxItems = Number(owner.dataSpec.maxItems);
    const effectiveLimit = Number.isInteger(maxItems) && maxItems > 0 ? Math.min(maxItems, 512) : 512;
    if (items.length >= effectiveLimit) return showToast(`默认值最多可添加 ${effectiveLimit} 个元素`, "error", false);
    items.push(modelTypedDefaultValue(owner.dataSpec.elementType, owner.dataSpec.elementSpec));
    owner.defaultValue = JSON.stringify(items);
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-inline-array-remove") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    const parsed = parsedArrayDefaultValue(owner?.defaultValue);
    if (!owner || parsed.invalid) return;
    parsed.items.splice(Number(target.dataset.index), 1);
    owner.defaultValue = JSON.stringify(parsed.items);
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-inline-array-clear") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    if (!owner) return;
    owner.defaultValue = "[]";
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-inline-struct-toggle") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    const field = owner?.dataSpec?.fields?.[Number(target.dataset.index)];
    if (owner?.dataType !== "结构体(struct)" || !field) return;
    const parsed = parsedStructDefaultValue(owner.defaultValue);
    const values = parsed.invalid ? {} : parsed.value;
    if (Object.hasOwn(values, field.identifier)) delete values[field.identifier];
    else values[field.identifier] = modelTypedDefaultValue(field.dataType, field.dataSpec);
    owner.defaultValue = JSON.stringify(values);
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
    render();
    return;
  }
  else if (action === "model-inline-struct-clear") {
    const ownerScope = target.dataset.owner;
    const owner = modelDefaultOwner(ownerScope);
    if (!owner) return;
    owner.defaultValue = "{}";
    owner.hasDefaultValue = true;
    owner._defaultValuePending = false;
    markModelDefaultOwnerDirty(ownerScope);
    clearModelDefaultOwnerError(ownerScope);
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
    const supportsRequired = target.dataset.supportsRequired === "true";
    state.modal.paramEditor = { direction: target.dataset.param, supportsRequired, draft: createModelParameterDraft(null, supportsRequired), dirty: false, errors: {} };
    render();
    return;
  }
  else if (action === "model-param-edit") {
    const direction = target.dataset.param;
    const index = Number(target.dataset.index);
    const supportsRequired = target.dataset.supportsRequired === "true";
    const row = state.modal.draft[direction]?.[index];
    if (!row) return;
    state.modal.paramEditor = { direction, index, supportsRequired, draft: createModelParameterDraft(row, supportsRequired), dirty: false, errors: {} };
    render();
    return;
  }
  else if (action === "model-param-remove") { state.modal.draft[target.dataset.param].splice(Number(target.dataset.index), 1); state.modal.dirty = true; render(); return; }
  else if (action === "model-param-required") {
    const editor = state.modal.paramEditor;
    if (!editor) return;
    const nextRequired = target.dataset.value === "必填";
    if (nextRequired === editor.draft.required) return;
    editor.draft.required = nextRequired;
    editor.dirty = true;
    render();
    return;
  }
  else if (action === "model-param-change-cancel") { state.modal.paramEditor.changeConfirm = null; render(); return; }
  else if (action === "model-param-change-confirm") {
    const editor = state.modal.paramEditor;
    const pending = editor.changeConfirm;
    if (!pending) return;
    if (pending.kind === "elementType") {
      applyArrayElementTypeChange(editor, pending.value);
      editor.elementResetNotice = true;
      editor.typeResetNotice = false;
    } else {
      applyModelParameterTypeChange(editor, pending.value);
      editor.typeResetNotice = true;
      editor.elementResetNotice = false;
    }
    editor.changeConfirm = null;
    render();
    return;
  }
  else if (action === "model-param-dialog-close") {
    const editor = state.modal.paramEditor;
    if (editor?.dirty) {
      editor.closeConfirm = true;
      render();
      return;
    }
    state.modal.paramEditor = null;
    render();
    return;
  }
  else if (action === "model-param-discard-return") { state.modal.paramEditor.closeConfirm = false; render(); return; }
  else if (action === "model-param-discard-confirm") { state.modal.paramEditor = null; render(); return; }
  else if (action === "model-param-save") {
    const editor = state.modal.paramEditor;
    if (!editor) return;
    const value = normalizeModelParameterList([editor.draft], editor.supportsRequired)[0];
    const errors = modelParameterEditorErrors(editor, value);
    if (Object.keys(errors).length) {
      editor.errors = errors;
      render();
      document.querySelector('.model-param-dialog [aria-invalid="true"], .model-param-dialog .has-error input, .model-param-dialog .has-error select')?.focus();
      return;
    }
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
    if (target.dataset.owner === "parameter-dialog") state.modal.paramEditor.dirty = true;
    if (target.dataset.owner === "property") state.modal.dirty = true;
    render();
    return;
  }
  else if (action === "model-struct-remove") {
    const owner = modelStructOwner(target.dataset.owner);
    if (!owner?.dataSpec?.fields) return;
    owner.dataSpec.fields.splice(Number(target.dataset.structIndex), 1);
    owner.dataDefinition = modelDataSpecToDefinition(owner.dataType, owner.dataSpec);
    if (target.dataset.owner === "parameter-dialog") state.modal.paramEditor.dirty = true;
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
    if (target.dataset.scope === "parameter-dialog") state.modal.paramEditor.dirty = true;
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
  else if (action === "model-preview") state.modal = { type: "model-preview", previewMode: target.dataset.previewMode === "standard" ? "standard" : "current" };
  else if (action === "model-preview-mode") {
    if (state.modal?.type !== "model-preview") return;
    state.modal.previewMode = target.dataset.value === "standard" ? "standard" : "current";
  }
  else if (action === "model-json-copy") {
    const text = modelPreviewJson();
    if (!text) return;
    const onSuccess = () => showToast("JSON 已复制", "", false);
    const onFallback = () => fallbackCopyText(text) ? onSuccess() : showToast("复制失败，请手动选择 JSON", "error", false);
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(onSuccess).catch(onFallback);
    else onFallback();
    return;
  }
  else if (action === "model-json-download") {
    const text = modelPreviewJson();
    if (!text) return;
    const url = URL.createObjectURL(new Blob([text], { type: "application/json;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = modelPreviewFileName();
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("JSON 文件已下载", "", false);
    return;
  }
  else if (action === "model-import") {
    if (!requireDraftFunctionVersion()) return;
    state.modal = { type: "model-import", importMode: "append", raw: "", fileName: "", fileSize: 0 };
  }
  else if (action === "model-import-mode") {
    if (state.modal?.type !== "model-import") return;
    state.modal.importMode = target.dataset.value === "replace" ? "replace" : "append";
    render();
    return;
  }
  else if (action === "model-import-file-clear") {
    if (state.modal?.type !== "model-import") return;
    state.modal.raw = "";
    state.modal.fileName = "";
    state.modal.fileSize = 0;
    render();
    return;
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
  else if (action === "model-import-back") { state.modal = { type: "model-import", raw: state.modal.raw, importMode: state.modal.importMode || "append", fileName: state.modal.fileName || "", fileSize: state.modal.fileSize || 0 }; render(); return; }
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
  else if (action === "config-function-version") state.modal = { type: "config-function-version", functionId: target.dataset.function };
  else if (action === "config-param-add") state.modal = { type: "config-parameter" };
  else if (action === "config-test-add") state.modal = { type: "config-test" };
  else if (action === "config-row-delete") {
    const map = { hardware: "configHardware", function: "configFunctions", parameter: "configParameters", test: "configTests" };
    if (target.dataset.kind === "function") {
      const binding = state.configFunctions[Number(target.dataset.index)];
      const functionId = typeof binding === "string" ? binding : binding?.functionId;
      const item = functions.find((entry) => entry.id === functionId);
      if (item?.requiredInFirmware) return showToast("必配能力不能删除，请选择可用版本", "error");
    }
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
  if (event.target.matches('[data-role="modal-model-import"]') && state.modal?.type === "model-import") {
    state.modal.raw = event.target.value;
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
  if (event.target.matches('[data-role="model-import-file"]') && event.target.files?.[0]) {
    const file = event.target.files[0];
    if (!file.name.toLowerCase().endsWith(".json")) {
      event.target.value = "";
      return showToast("请选择 .json 格式文件", "error", false);
    }
    if (file.size > 2 * 1024 * 1024) {
      event.target.value = "";
      return showToast("JSON 文件不能超过 2 MB", "error", false);
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (state.modal?.type !== "model-import") return;
      state.modal.raw = String(reader.result || "");
      state.modal.fileName = file.name;
      state.modal.fileSize = file.size;
      render();
    };
    reader.onerror = () => showToast("JSON 文件读取失败，请重新选择", "error", false);
    reader.readAsText(file, "utf-8");
  } else if (event.target.matches('[data-role="category-upload"]') && event.target.files?.[0]) {
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
  } else if (event.target.matches('[data-role="modal-copy-source-version"]') && state.modal?.type === "function-cross-line-copy") {
    state.modal.versionId = event.target.value;
    render();
  } else if (event.target.matches('[data-role="modal-copy-target-line"]') && state.modal?.type === "function-cross-line-copy") {
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
if (!location.hash) location.hash = "/function";
else render();
