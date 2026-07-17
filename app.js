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

const functionCategories = ["测试", "测试666", "婴儿看护器-调试版本1", "婴儿看护器-调试", "婴儿看护器-测试", "IPC类2", "宠物类2", "测试2", "测试1", "BK类", "宠物类", "IPC类"];
const functionRelationCategories = ["图像设置类", "智能分析类", "音频设置类", "存储管理类", "时间同步类", "视频设置类", "设备基本信息类", "设备控制", "P2P"];
const testColumns = ["测试项", "中文名", "要求值", "等待时间（ms）", "是否需要人工检测", "是否需要写入", "获取测试结果的JSON提取路径", "请求URL", "请求类型", "请求头参数", "请求体", "备注", "操作"];
const functions = functionCategories.map((category, index) => ({
  id: `f${index + 1}`,
  name: index === 0 ? "功能123" : `${category}功能项`,
  version: "1",
  status: index % 3 === 1 ? "已发布" : index % 3 === 2 ? "已停用" : "未发布",
  image: [img.camera, img.goose, img.blue][index % 3],
  category,
  hardware: assetConfigs.hardware.categories[index % assetConfigs.hardware.categories.length],
  relatedCategory: functionRelationCategories[index % functionRelationCategories.length],
  remark: index === 0 ? "1" : `${category}功能说明`,
  createdAt: index === 0 ? "2026-06-17 10:20:05" : "2026-06-17 10:19:20",
}));

function createMockModelSpec(functionId, index = 0) {
  const suffix = String(index + 1).padStart(2, "0");
  const relatedHardware = assetConfigs.hardware.rows[index % assetConfigs.hardware.rows.length];
  return {
    properties: [
      { id: `${functionId}-property-switch`, name: "设备开关", identifier: "device_switch", dataType: "布尔型(Bool)", dataDefinition: "0：关闭，1：开启", access: "读写", description: "控制设备功能启停" },
      { id: `${functionId}-property-mode`, name: "工作模式", identifier: "work_mode", dataType: "枚举型(Enum)", dataDefinition: "0：自动，1：白天，2：夜间", access: "读写", description: "设备当前工作模式" },
      { id: `${functionId}-property-signal`, name: "信号强度", identifier: "signal_strength", dataType: "整数型(Int)", dataDefinition: "范围：0~100，步长：1", access: "只读", description: "当前网络信号质量" },
      { id: `${functionId}-property-version`, name: "固件版本", identifier: "firmware_version", dataType: "字符型(String)", dataDefinition: "长度：0~64", access: "只读", description: `Mock 固件版本 ${suffix}` },
    ],
    services: [
      { id: `${functionId}-service-capture`, name: "抓拍图片", identifier: "capture_image", callType: "同步", inputParams: "quality", outputParams: "image_url, timestamp", description: "触发设备抓拍并返回图片地址" },
      { id: `${functionId}-service-restart`, name: "重启设备", identifier: "restart_device", callType: "异步", inputParams: "delay_seconds", outputParams: "task_id", description: "按指定延时重启设备" },
    ],
    events: [
      { id: `${functionId}-event-motion`, name: "移动侦测", identifier: "motion_detected", outputParams: "timestamp, image_url, confidence", description: "检测到画面移动时上报" },
      { id: `${functionId}-event-fault`, name: "设备故障", identifier: "device_fault", outputParams: "error_code, error_message", description: "设备异常时上报故障信息" },
    ],
    hardware: relatedHardware ? [relatedHardware.id] : [],
    savedAt: "",
  };
}

const initialModelSpecs = Object.fromEntries(functions.map((item, index) => [item.id, createMockModelSpec(item.id, index)]));

const STORAGE_KEY = "viot-prototype-state-v8";

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
  meta.function = functionCategories.map((name) => ({ remark: name, createdAt: "2026-06-17 10:19:20" }));
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
  functionPage: 1,
  functionPageSize: 24,
  functionDraftImage: "",
  machineDraftImage: "",
  modelTab: "model",
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
    { id: "function", icon: "✣", label: "功能管理", children: [["/function", "功能类目"]] },
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
    const item = functions.find((entry) => entry.id === current.split("/")[3]);
    return { title: "功能详情", actions: `<button class="btn btn-primary" data-action="model-publish" data-id="${item?.id || ""}">↗ ${item?.status === "已发布" ? "重新发布" : "立即发布"}</button>` };
  }
  if (current === "/hardware") return { title: "硬件列表" };
  if (current === "/pcba") return { title: "pcba列表" };
  if (current === "/electronic") return { title: "元件列表" };
  if (current === "/function") return { title: "产品线", actions: renderFunctionSearch() };
  return { title: "机型列表", actions: `<select class="field" data-role="machine-line"><option ${state.machineFilter.line === "IPC" ? "selected" : ""}>IPC</option><option ${state.machineFilter.line === "智能门铃" ? "selected" : ""}>智能门铃</option><option ${state.machineFilter.line === "宠物设备" ? "selected" : ""}>宠物设备</option></select>` };
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

function functionPage() {
  const selectedIndex = state.selectedCategory.function;
  const selected = functionCategories[selectedIndex];
  const categoryMeta = categoryMetaFor("function", selectedIndex);
  const query = state.categorySearch.function.toLowerCase();
  const categories = functionCategories.map((name, index) => ({ name, index })).filter((x) => x.name.toLowerCase().includes(query));
  let cards = functions.filter((item) => item.category === selected);
  if (state.functionSearch) cards = cards.filter((item) => item.name.toLowerCase().includes(state.functionSearch.toLowerCase()));
  const total = cards.length;
  const pageCount = Math.max(1, Math.ceil(total / state.functionPageSize));
  if (state.functionPage > pageCount) state.functionPage = pageCount;
  const pageStart = (state.functionPage - 1) * state.functionPageSize;
  cards = cards.slice(pageStart, pageStart + state.functionPageSize);
  return `<section class="surface function-layout">
    <aside class="category-panel"><div class="category-panel-head"><span>产品类</span><button class="category-add" data-action="category-add" data-type="function" title="新增产品类">⊕</button></div><input class="category-search" data-role="category-search" data-type="function" value="${escapeHtml(state.categorySearch.function)}" placeholder="请输入产品类"><ul class="category-list">${categories.map(({ name, index }) => `<li><button class="${index === selectedIndex ? "active" : ""}" data-action="category-select" data-type="function" data-index="${index}">${escapeHtml(name)}</button></li>`).join("")}</ul></aside>
    <div class="function-main"><div class="detail-banner"><div class="banner-copy"><h2>${escapeHtml(selected)}</h2><div class="banner-meta"><span>创建时间： <strong>${escapeHtml(categoryMeta.createdAt || "-")}</strong></span><span>备注： <strong>${escapeHtml(categoryMeta.remark || "-")}</strong></span></div></div><div></div><div class="banner-actions"><button class="btn" data-action="category-edit" data-type="function">✎ 编辑</button></div></div><div class="section-title-row"><div class="section-title">功能项列表（${total}）</div><button class="btn btn-primary" data-action="function-add">＋ 新增功能</button></div><div class="function-cards">${cards.length ? cards.map(functionCard).join("") : `<div class="empty-state">暂无符合条件的功能项</div>`}</div>${pagination(total, state.functionPage, state.functionPageSize, "function")}</div>
  </section>`;
}

function functionCard(item) {
  return `<article class="function-card"><span class="status-ribbon">${item.status}</span><button class="function-card-main" data-action="function-detail" data-id="${item.id}"><div class="function-card-image"><img src="${item.image}" alt=""></div><h3>${escapeHtml(item.name)}</h3><span>${item.version}</span></button></article>`;
}

function getModelSpec(functionId) {
  if (!state.modelSpecs[functionId]) {
    const functionIndex = Math.max(0, functions.findIndex((item) => item.id === functionId));
    state.modelSpecs[functionId] = createMockModelSpec(functionId, functionIndex);
  }
  if (!state.modelSpecs[functionId].hardware) state.modelSpecs[functionId].hardware = [];
  return state.modelSpecs[functionId];
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
  if (row.kind === "service") return `输入：${row.inputParams || "-"}；输出：${row.outputParams || "-"}`;
  if (row.kind === "event") return `输出：${row.outputParams || "-"}`;
  return row.dataDefinition || "-";
}

function modelSpecPage(functionId) {
  const item = functions.find((entry) => entry.id === functionId);
  if (!item) return `<section class="surface model-page"><div class="empty-state">功能项不存在或已被删除</div></section>`;
  const spec = getModelSpec(item.id);
  const modelRows = flattenModelRows(spec);
  const detailStatus = item.status === "未发布" ? "待发布" : item.status;
  return `<section class="surface model-page">
    <div class="detail-banner model-banner"><img class="banner-icon" src="${item.image}" alt=""><div class="banner-copy"><h2>${escapeHtml(item.name)}　<span class="status-tag">${detailStatus}</span></h2><div class="banner-meta"><span>关联类目： <strong>${escapeHtml(item.relatedCategory || "-")}</strong></span><span>创建时间： <strong>${item.createdAt || "2026-06-17 10:20:05"}</strong></span><span>说明： <strong>${escapeHtml(item.remark || "-")}</strong></span></div></div><div class="banner-actions"><button class="btn" data-action="function-edit" data-id="${item.id}">✎ 编辑</button><button class="btn danger-text" data-action="function-delete" data-id="${item.id}">♲ 删除</button></div></div>
    <div class="function-detail-tabs"><button class="${state.modelTab === "model" ? "active" : ""}" data-action="model-tab" data-tab="model">物模型信息</button><button class="${state.modelTab === "hardware" ? "active" : ""}" data-action="model-tab" data-tab="hardware">关联硬件</button></div>
    <div class="model-content">${state.modelTab === "hardware" ? relatedHardwareContent(spec) : modelInfoContent(modelRows)}</div>
  </section>`;
}

function modelInfoContent(rows) {
  return `<div class="model-description">物模型是云端对设备功能的抽象描述，涵盖了设备的属性、服务和事件。物联网平台通过物的描述语言，即 TSL（Thing Specification Language），以 JSON 格式表达这一模型。开发者可以利用 TSL 构建并上报设备数据。完整的物模型可用于云端应用的开发，而精简版的物模型则可结合设备端 SDK 用于设备的开发工作。 <button class="btn btn-text" data-action="model-preview">查看JSON格式</button></div>
    <div class="model-section-head"><h3>物模型信息</h3><div><button class="btn" data-action="model-import">⇧ 文本导入</button><button class="btn btn-primary" data-action="model-add">＋ 添加物模型</button></div></div>
    <div class="data-table-wrap"><table class="mini-table model-table"><thead><tr><th>物模型名称</th><th>标识符</th><th>物模型类型</th><th>数据类型</th><th>数据定义</th><th>访问权限</th><th>备注</th><th>操作</th></tr></thead><tbody>${rows.length ? rows.map((row) => `<tr><td>${escapeHtml(row.name)}</td><td><code>${escapeHtml(row.identifier)}</code></td><td>${modelKindLabel(row.kind)}</td><td>${escapeHtml(row.dataType || row.callType || "-")}</td><td>${escapeHtml(modelDefinition(row))}</td><td>${escapeHtml(row.access || "-")}</td><td>${escapeHtml(row.description || "-")}</td><td><button class="btn btn-text" data-action="model-edit" data-kind="${row.kind}" data-index="${row.index}">编辑</button><button class="btn btn-text danger-text" data-action="model-delete" data-kind="${row.kind}" data-index="${row.index}">删除</button></td></tr>`).join("") : `<tr><td colspan="8"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
}

function relatedHardwareContent(spec) {
  return `<div class="model-section-head"><h3>关联硬件</h3><button class="btn btn-primary" data-action="model-hardware-add">＋ 关联硬件</button></div><div class="data-table-wrap"><table class="mini-table model-table related-hardware-table"><thead><tr><th>硬件名称</th><th>硬件图片</th><th>操作</th></tr></thead><tbody>${spec.hardware.length ? spec.hardware.map((id, index) => { const row = assetConfigs.hardware.rows.find((item) => item.id === id); return row ? `<tr><td>${escapeHtml(row.name)}</td><td><img class="asset-thumb" src="${row.image}" alt=""></td><td><button class="btn btn-text danger-text" data-action="model-hardware-remove" data-index="${index}">删除</button></td></tr>` : ""; }).join("") : `<tr><td colspan="3"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
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
    const rows = state.configFunctions.map((id, index) => ({ item: functions.find((entry) => entry.id === id), index })).filter((row) => row.item);
    return `<div class="info-strip">ⓘ 为机型选择已定义的功能项，并设置可用状态与默认版本。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-function-add">＋ 添加功能</button><span>已配置 ${rows.length} 项</span></div><div class="data-table-wrap"><table class="mini-table"><thead><tr><th>功能名称</th><th>产品类</th><th>版本</th><th>状态</th><th>操作</th></tr></thead><tbody>${rows.length ? rows.map(({ item, index }) => `<tr><td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.category)}</td><td>${item.version}</td><td>${item.status}</td><td><button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="function" data-index="${index}">删除</button></td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state">暂未配置功能</div></td></tr>`}</tbody></table></div>`;
  }
  if (tab === "parameter") return `<div class="info-strip">ⓘ 参数配置会随机型发布并用于设备能力描述。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-param-add">＋ 添加参数</button><span>已配置 ${state.configParameters.length} 项</span></div><div class="data-table-wrap"><table class="mini-table"><thead><tr><th>参数名</th><th>中文名</th><th>参数类型</th><th>默认值</th><th>操作</th></tr></thead><tbody>${state.configParameters.length ? state.configParameters.map((item, index) => `<tr><td>${escapeHtml(item.key)}</td><td>${escapeHtml(item.label)}</td><td>${item.type}</td><td>${escapeHtml(item.defaultValue)}</td><td><button class="btn btn-text danger-text" data-action="config-row-delete" data-kind="parameter" data-index="${index}">删除</button></td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
  return `<div class="info-strip">ⓘ 配置生产测试项、等待时间和检测方式，用于出厂检测。</div><div class="config-controls"><button class="btn btn-primary" data-action="config-test-add">＋ 添加测试项</button><span>已配置 ${state.configTests.length} 项</span></div><div class="data-table-wrap"><table class="mini-table test-table"><thead><tr>${testColumns.map((title) => `<th>${title}</th>`).join("")}</tr></thead><tbody>${state.configTests.length ? state.configTests.map(configTestRow).join("") : `<tr><td colspan="${testColumns.length}"><div class="empty-state">暂无数据</div></td></tr>`}</tbody></table></div>`;
}

function createModelDraft(kind = "property", row = null) {
  return {
    kind,
    name: row?.name || "",
    identifier: row?.identifier || "",
    dataType: row?.dataType || "枚举型(Enum)",
    dataDefinition: row?.dataDefinition || "",
    access: row?.access || "只读",
    callType: row?.callType || "同步",
    inputParams: row?.inputParams ? row.inputParams.split(",").map((value) => value.trim()).filter(Boolean) : [],
    outputParams: row?.outputParams ? row.outputParams.split(",").map((value) => value.trim()).filter(Boolean) : [],
    description: row?.description || "",
  };
}

function modelParameterEditor(label, direction, values) {
  return `<div class="model-param-group"><div class="model-param-head"><strong>${label}</strong><button class="btn btn-text" data-action="model-param-add" data-param="${direction}">＋ 添加参数</button></div>${values.length ? values.map((value, index) => `<div class="model-param-row"><input data-role="model-param" data-param="${direction}" data-index="${index}" value="${escapeHtml(value)}" placeholder="请输入参数标识"><button class="btn btn-text danger-text" data-action="model-param-remove" data-param="${direction}" data-index="${index}">删除</button></div>`).join("") : `<div class="model-param-empty">暂无参数</div>`}</div>`;
}

function modelFormBody(modal) {
  const draft = modal.draft;
  const common = `${formField("物模型名称", "modal-model-name", draft.name, "请输入物模型名称", true)}${formField("标识符", "modal-model-identifier", draft.identifier, "请输入物模型英文标识符", true)}<div class="form-row required"><label>物模型类型</label><div class="model-type-switch">${[["property", "属性"], ["service", "服务"], ["event", "事件"]].map(([kind, label]) => `<button class="${draft.kind === kind ? "active" : ""}" data-action="model-kind" data-kind="${kind}">${label}</button>`).join("")}</div></div>`;
  let specific = "";
  if (draft.kind === "property") {
    specific = `${selectField("数据类型", "modal-model-data-type", ["枚举型(Enum)", "整数型(Int)", "布尔型(Bool)", "字符型(String)", "浮点型(float)", "数组型(array)", "时间型(timestamp)", "结构体(struct)"], draft.dataType, true)}${formField(draft.dataType === "枚举型(Enum)" ? "枚举值" : "数据定义", "modal-model-definition", draft.dataDefinition, draft.dataType === "枚举型(Enum)" ? "示例：0:关闭, 1:开启" : "请输入数据定义", true)}${selectField("访问权限", "modal-model-access", ["只读", "读写", "只写"], draft.access, true)}`;
  } else if (draft.kind === "service") {
    specific = `${modelParameterEditor("输入参数", "inputParams", draft.inputParams)}${modelParameterEditor("输出参数", "outputParams", draft.outputParams)}${selectField("调用方式", "modal-model-call-type", ["同步", "异步"], draft.callType, true)}`;
  } else {
    specific = modelParameterEditor("输出参数", "outputParams", draft.outputParams);
  }
  return `<div class="modal-form model-drawer-form">${common}${specific}<div class="form-row"><label>备注</label><textarea data-role="modal-model-description" placeholder="请输入备注说明">${escapeHtml(draft.description)}</textarea></div></div>`;
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

  if (modal.type === "machine-form") {
    const machine = modal.id ? machines.find((m) => m.id === modal.id) : null;
    title = modal.id ? "编辑机型" : "新增机型";
    body = `<div class="modal-form">${formField("机型名称", "modal-machine-name", machine?.name || "", "产品线-设备类型-版本-型号，示例：IPC-低功耗4G-V1-B001", true)}<div class="form-row required"><label>机型图片</label><div><label class="upload-box">${state.machineDraftImage || machine?.image ? `<img class="upload-preview" src="${state.machineDraftImage || machine.image}" alt="">` : `<span><span class="upload-plus">＋</span>点击上传</span>`}<input type="file" accept="image/png,image/jpeg" data-role="machine-upload"></label><div class="upload-hint">建议上传110*110px大小的图片<br>支持格式：.jpg .png .jpeg，单个文件不能超过5MB</div></div></div>${selectField("所属产线", "modal-machine-line", ["IPC", "智能门铃", "宠物设备"], machine?.line || "IPC", true)}${selectField("网络类型", "modal-machine-network", ["仅wifi", "仅4G", "wifi + 4G", "网线 + 4G", "网线 + wifi", "仅网线"], machine?.network || "仅wifi", true)}<div class="form-row required"><label>电量类型</label><div class="radio-row"><label><input type="radio" name="modal-power" value="常电" ${machine?.power !== "低功耗" ? "checked" : ""}> 常电</label><label><input type="radio" name="modal-power" value="低功耗" ${machine?.power === "低功耗" ? "checked" : ""}> 低功耗</label></div></div>${selectField("所属架构", "modal-machine-arch", ["原架构", "新架构"], machine?.arch || "原架构", true)}<div class="form-row"><label>机型说明</label><textarea data-role="modal-machine-desc" placeholder="请输入机型说明">${escapeHtml(machine?.description === "-" ? "" : machine?.description || "")}</textarea></div></div>`;
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
  } else if (modal.type === "function-form") {
    const item = modal.id ? functions.find((entry) => entry.id === modal.id) : null;
    title = item ? "编辑功能" : "新增功能";
    body = `<div class="modal-form">${formField("功能项名称", "modal-function-name", item?.name || "", "请输入功能项的名称", true)}${selectField("关联硬件", "modal-function-hardware", assetConfigs.hardware.categories, item?.hardware || "", false)}${selectField("关联类目", "modal-function-category", functionRelationCategories, item?.relatedCategory || "", true)}<div class="form-row required"><label>备注</label><textarea data-role="modal-function-desc" placeholder="请输入备注说明">${escapeHtml(item?.remark || "")}</textarea></div><div class="form-row required"><label>功能示例图</label><div><label class="upload-box">${state.functionDraftImage || item?.image ? `<img class="upload-preview" src="${state.functionDraftImage || item.image}" alt="预览">` : `<span><span class="upload-plus">＋</span></span>`}<input type="file" accept="image/png,image/jpeg" data-role="function-upload"></label><div class="upload-hint">建议上传110*110px大小的图片<br>支持格式：.jpg .png .jpeg，单个文件不能超过5MB</div></div></div></div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">完成</button>`;
  } else if (modal.type === "function-detail") {
    const item = functions.find((entry) => entry.id === modal.id);
    title = "功能详情";
    body = item ? `<div class="detail-banner" style="grid-template-columns:auto 1fr"><img class="banner-icon" src="${item.image}" alt=""><div class="banner-copy"><h2>${escapeHtml(item.name)}</h2><div class="banner-meta"><span>状态： <strong>${item.status}</strong></span><span>版本： <strong>${item.version}</strong></span><span>产品类： <strong>${escapeHtml(item.category)}</strong></span><span>关联硬件： <strong>${escapeHtml(item.hardware || "-")}</strong></span><span>关联类目： <strong>${escapeHtml(item.relatedCategory || "-")}</strong></span><span>备注： <strong>${escapeHtml(item.remark || "-")}</strong></span></div></div></div>` : `<div class="empty-state">该功能项已不存在</div>`;
    footer = item ? `<button class="btn" data-action="modal-close">关闭</button><button class="btn" data-action="function-edit" data-id="${item.id}">编辑</button><button class="btn btn-primary" data-action="function-status" data-id="${item.id}">${item.status === "已发布" ? "停用" : "发布"}</button><button class="btn btn-danger" data-action="function-delete" data-id="${item.id}">删除</button>` : `<button class="btn btn-primary" data-action="modal-close">关闭</button>`;
  } else if (modal.type === "function-status-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    const nextStatus = item?.status === "已发布" ? "已停用" : "已发布";
    title = nextStatus === "已发布" ? "发布功能" : "停用功能";
    body = `<div class="confirm-copy">确认将“${escapeHtml(item?.name || "该功能") }”状态变更为“${nextStatus}”吗？状态会立即回写到功能列表。</div>`;
  } else if (modal.type === "function-delete-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    title = "删除功能";
    body = `<div class="confirm-copy">确定删除功能“${escapeHtml(item?.name || "") }”吗？该操作会同时从机型功能配置中移除引用。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-danger" data-action="modal-confirm">删除</button>`;
  } else if (modal.type === "model-form") {
    title = Number.isInteger(modal.index) ? "编辑物模型" : "添加物模型";
    body = modelFormBody(modal);
    drawer = true;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">完成</button>`;
  } else if (modal.type === "model-delete-confirm") {
    const functionId = route().split("/")[3];
    const rows = modelCollection(getModelSpec(functionId), modal.kind);
    const row = rows[modal.index];
    const kindName = modal.kind === "property" ? "属性" : modal.kind === "service" ? "服务" : "事件";
    title = `删除${kindName}`;
    body = `<div class="confirm-copy">确定删除${kindName}“${escapeHtml(row?.name || "") }”吗？删除后需要重新保存物模型配置。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-danger" data-action="modal-confirm">删除</button>`;
  } else if (modal.type === "model-preview") {
    const functionId = route().split("/")[3];
    const item = functions.find((entry) => entry.id === functionId);
    const spec = getModelSpec(functionId);
    title = "导入JSON";
    wide = true;
    body = `<div class="info-strip">${escapeHtml(item?.name || "功能项")} · ${item?.status || "未发布"}</div><textarea class="model-json model-json-textarea" disabled>${escapeHtml(JSON.stringify({ functionId, properties: spec.properties, services: spec.services, events: spec.events }, null, 2))}</textarea>`;
    footer = "";
  } else if (modal.type === "model-import") {
    title = "导入JSON";
    wide = true;
    body = `<textarea class="model-import-textarea" data-role="modal-model-import" placeholder="请输入JSON数据"></textarea>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">完成</button>`;
  } else if (modal.type === "model-publish-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    const spec = getModelSpec(modal.id);
    title = "发布物模型";
    body = `<div class="confirm-copy">确认立即发布“${escapeHtml(item?.name || "该功能") }”吗？当前包含 ${spec.properties.length} 个属性、${spec.services.length} 个服务和 ${spec.events.length} 个事件。</div>`;
    footer = `<button class="btn" data-action="modal-close">取消</button><button class="btn btn-primary" data-action="modal-confirm">确认发布</button>`;
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
    const available = functions.filter((item) => !state.configFunctions.includes(item.id));
    body = available.length ? `<div class="modal-form"><div class="form-row required"><label>功能项</label><select data-role="modal-config-function"><option value="">请选择功能项</option>${available.map((item) => `<option value="${item.id}">${escapeHtml(item.name)}（${escapeHtml(item.category)}）</option>`).join("")}</select></div></div>` : `<div class="empty-state">所有功能项均已添加</div>`;
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

  return `<div class="modal-backdrop ${drawer ? "drawer-backdrop" : ""}" data-action="modal-backdrop"><section class="modal ${wide ? "modal-wide" : ""} ${drawer ? "modal-drawer" : ""}" role="dialog" aria-modal="true" aria-label="${title}"><div class="modal-header"><h2>${title}</h2><button class="modal-close" data-action="modal-close" title="关闭">×</button></div><div class="modal-body">${body}</div>${footer ? `<div class="modal-footer">${footer}</div>` : ""}</section></div>`;
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
      version: 2,
      machines,
      assets,
      functionCategories,
      functions,
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
    if (!saved || ![1, 2].includes(saved.version)) return;
    if (Array.isArray(saved.machines)) machines.splice(0, machines.length, ...saved.machines);
    for (const type of ["hardware", "pcba", "electronic"]) {
      const asset = saved.assets?.[type];
      if (Array.isArray(asset?.categories)) assetConfigs[type].categories.splice(0, assetConfigs[type].categories.length, ...asset.categories);
      if (Array.isArray(asset?.rows)) assetConfigs[type].rows.splice(0, assetConfigs[type].rows.length, ...asset.rows);
    }
    if (Array.isArray(saved.functionCategories)) functionCategories.splice(0, functionCategories.length, ...saved.functionCategories);
    if (Array.isArray(saved.functions)) functions.splice(0, functions.length, ...saved.functions);
    if (saved.modelSpecs && typeof saved.modelSpecs === "object") state.modelSpecs = saved.modelSpecs;
    if (saved.machineConfigs && typeof saved.machineConfigs === "object") state.machineConfigs = saved.machineConfigs;
    if (saved.categoryMeta && typeof saved.categoryMeta === "object") state.categoryMeta = saved.categoryMeta;
    for (const machine of machines) activeMachineConfig(machine.id);
    for (const type of ["hardware", "pcba", "electronic", "function"]) {
      const categories = type === "function" ? functionCategories : assetConfigs[type].categories;
      categories.forEach((_, index) => categoryMetaFor(type, index));
    }
    functions.forEach((item, index) => {
      const spec = state.modelSpecs[item.id];
      const modelCount = (spec?.properties?.length || 0) + (spec?.services?.length || 0) + (spec?.events?.length || 0);
      if (!spec || (saved.version === 1 && modelCount === 0)) state.modelSpecs[item.id] = createMockModelSpec(item.id, index);
    });
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function inputValue(roleName) {
  return document.querySelector(`[data-role="${roleName}"]`)?.value?.trim() || "";
}

function syncModelDraftInput(target) {
  if (state.modal?.type !== "model-form") return false;
  if (target.matches('[data-role="model-param"]')) {
    state.modal.draft[target.dataset.param][Number(target.dataset.index)] = target.value;
    return true;
  }
  const fieldMap = {
    "modal-model-name": "name",
    "modal-model-identifier": "identifier",
    "modal-model-data-type": "dataType",
    "modal-model-definition": "dataDefinition",
    "modal-model-access": "access",
    "modal-model-call-type": "callType",
    "modal-model-description": "description",
  };
  const field = fieldMap[target.dataset.role];
  if (!field) return false;
  state.modal.draft[field] = target.value;
  return true;
}

function pageState(context) {
  if (context === "function") return { pageKey: "functionPage", sizeKey: "functionPageSize", total: functions.filter((item) => item.category === functionCategories[state.selectedCategory.function] && (!state.functionSearch || item.name.toLowerCase().includes(state.functionSearch.toLowerCase()))).length };
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
  if (modal.type === "function-form") {
    const name = inputValue("modal-function-name");
    if (!name) return showToast("请填写功能项名称", "error", false);
    const relatedCategory = inputValue("modal-function-category");
    const remark = inputValue("modal-function-desc");
    if (!relatedCategory) return showToast("请选择关联类目", "error", false);
    if (!remark) return showToast("请填写备注说明", "error", false);
    const existing = modal.id ? functions.find((item) => item.id === modal.id) : null;
    if (!existing && !state.functionDraftImage) return showToast("请上传功能示例图", "error", false);
    const values = {
      name,
      hardware: inputValue("modal-function-hardware") || "-",
      relatedCategory,
      remark,
      image: state.functionDraftImage || existing?.image || img.camera,
    };
    if (existing) Object.assign(existing, values);
    else functions.unshift({ id: `f${Date.now()}`, ...values, version: "1", status: "未发布", category: functionCategories[state.selectedCategory.function] });
    state.functionDraftImage = "";
    state.modal = null;
    return showToast(existing ? "功能项已更新" : "功能项创建成功");
  }
  if (modal.type === "function-status-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    if (item) item.status = item.status === "已发布" ? "已停用" : "已发布";
    state.modal = null;
    return showToast(`功能状态已变更为${item?.status || "最新状态"}`);
  }
  if (modal.type === "function-delete-confirm") {
    const index = functions.findIndex((item) => item.id === modal.id);
    if (index >= 0) functions.splice(index, 1);
    delete state.modelSpecs[modal.id];
    Object.values(state.machineConfigs).forEach((config) => {
      const nextFunctions = config.functions.filter((id) => id !== modal.id);
      if (nextFunctions.length !== config.functions.length) config.savedAt = "";
      config.functions = nextFunctions;
    });
    state.modal = null;
    if (route().startsWith("/function/detail/") || route().startsWith("/function/model/")) navigate("/function");
    return showToast("功能项已删除");
  }
  if (modal.type === "model-form") {
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
    if (draft.kind === "property") value = { ...common, dataType: inputValue("modal-model-data-type") || "枚举型(Enum)", dataDefinition: inputValue("modal-model-definition"), access: inputValue("modal-model-access") || "只读" };
    else if (draft.kind === "service") value = { ...common, callType: inputValue("modal-model-call-type") || "同步", inputParams: draft.inputParams.join(", "), outputParams: draft.outputParams.join(", ") };
    else value = { ...common, outputParams: draft.outputParams.join(", ") };
    if (Number.isInteger(modal.index)) originalRows.splice(modal.index, 1);
    modelCollection(spec, draft.kind).push(value);
    spec.savedAt = "";
    state.modal = null;
    return showToast(`物模型已${Number.isInteger(modal.index) ? "更新" : "添加"}`);
  }
  if (modal.type === "model-delete-confirm") {
    const functionId = route().split("/")[3];
    const spec = getModelSpec(functionId);
    modelCollection(spec, modal.kind).splice(modal.index, 1);
    spec.savedAt = "";
    state.modal = null;
    return showToast("物模型定义已删除");
  }
  if (modal.type === "model-publish-confirm") {
    const item = functions.find((entry) => entry.id === modal.id);
    const spec = getModelSpec(modal.id);
    spec.savedAt = new Date().toLocaleString("zh-CN", { hour12: false });
    if (item) item.status = "已发布";
    state.modal = null;
    return showToast("功能已发布");
  }
  if (modal.type === "model-import") {
    let parsed;
    try {
      parsed = JSON.parse(inputValue("modal-model-import"));
    } catch {
      return showToast("JSON 格式不正确", "error", false);
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return showToast("JSON 顶层必须是对象", "error", false);
    const collections = { properties: "property", services: "service", events: "event" };
    if (!Object.keys(collections).some((key) => Object.hasOwn(parsed, key))) return showToast("JSON 中缺少 properties、services 或 events", "error", false);
    const candidate = { properties: [], services: [], events: [] };
    for (const [key, kind] of Object.entries(collections)) {
      const rows = parsed[key] === undefined ? [] : parsed[key];
      if (!Array.isArray(rows)) return showToast(`${key} 必须是数组`, "error", false);
      const valid = rows.every((row) => row && row.name && /^[A-Za-z][A-Za-z0-9_]*$/.test(row.identifier || ""));
      if (!valid) return showToast(`${modelKindLabel(kind)}数据缺少名称或有效标识符`, "error", false);
      candidate[key] = rows.map((row, index) => ({ ...row, id: row.id || `${kind}${Date.now()}${index}` }));
    }
    const identifiers = flattenModelRows(candidate).map((row) => row.identifier);
    if (new Set(identifiers).size !== identifiers.length) return showToast("导入数据存在重复标识符", "error", false);
    const functionId = route().split("/")[3];
    const spec = getModelSpec(functionId);
    spec.properties = candidate.properties;
    spec.services = candidate.services;
    spec.events = candidate.events;
    spec.savedAt = "";
    state.modal = null;
    return showToast("物模型 JSON 已导入");
  }
  if (modal.type === "model-hardware-form") {
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
    if (!value) return showToast("请选择功能项", "error", false);
    if (!state.configFunctions.includes(value)) state.configFunctions.push(value);
    state.configSavedAt = "";
    state.modal = null;
    return showToast("功能已添加到机型");
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
  else if (action === "function-add") { state.functionDraftImage = ""; state.modal = { type: "function-form" }; }
  else if (action === "function-model" || action === "function-detail") { state.modelTab = "model"; return navigate(`/function/detail/${target.dataset.id}`); }
  else if (action === "function-edit") { state.functionDraftImage = ""; state.modal = { type: "function-form", id: target.dataset.id || state.modal?.id }; }
  else if (action === "function-status") state.modal = { type: "function-status-confirm", id: target.dataset.id };
  else if (action === "function-delete") state.modal = { type: "function-delete-confirm", id: target.dataset.id };
  else if (action === "function-search") { state.functionSearch = inputValue("function-search"); state.functionPage = 1; }
  else if (action === "model-tab") state.modelTab = target.dataset.tab;
  else if (action === "model-add") state.modal = { type: "model-form", originalKind: "property", draft: createModelDraft("property") };
  else if (action === "model-edit") {
    const kind = target.dataset.kind;
    const index = Number(target.dataset.index);
    const row = modelCollection(getModelSpec(route().split("/")[3]), kind)[index];
    state.modal = { type: "model-form", originalKind: kind, index, draft: createModelDraft(kind, row) };
  }
  else if (action === "model-kind") { state.modal.draft.kind = target.dataset.kind; render(); return; }
  else if (action === "model-param-add") { state.modal.draft[target.dataset.param].push(""); render(); return; }
  else if (action === "model-param-remove") { state.modal.draft[target.dataset.param].splice(Number(target.dataset.index), 1); render(); return; }
  else if (action === "model-delete") state.modal = { type: "model-delete-confirm", kind: target.dataset.kind, index: Number(target.dataset.index) };
  else if (action === "model-save") {
    const spec = getModelSpec(route().split("/")[3]);
    spec.savedAt = new Date().toLocaleString("zh-CN", { hour12: false });
    return showToast("物模型配置已保存");
  }
  else if (action === "model-preview") state.modal = { type: "model-preview" };
  else if (action === "model-import") state.modal = { type: "model-import" };
  else if (action === "model-hardware-add") state.modal = { type: "model-hardware-form" };
  else if (action === "model-hardware-remove") {
    const spec = getModelSpec(route().split("/")[3]);
    spec.hardware.splice(Number(target.dataset.index), 1);
    spec.savedAt = "";
    return showToast("关联硬件已移除");
  }
  else if (action === "model-publish") state.modal = { type: "model-publish-confirm", id: target.dataset.id || route().split("/")[3] };
  else if (action === "modal-close" || action === "modal-backdrop") {
    const currentModal = state.modal;
    state.modal = currentModal?.returnToDetail ? { type: "asset-detail", assetType: currentModal.assetType, id: currentModal.id } : null;
    state.functionDraftImage = "";
    state.machineDraftImage = "";
  }
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
  if (event.target.matches('[data-role="category-search"]')) {
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
    if (event.target.matches('[data-role="modal-model-data-type"]')) render();
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
  } else if (event.target.matches('[data-role="machine-line"]')) {
    state.machineFilter.line = event.target.value;
    state.machineFilter.page = 1;
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
persistState();
if (!location.hash) location.hash = "/machine";
else render();
