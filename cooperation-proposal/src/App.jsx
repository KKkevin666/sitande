import React from 'react';
import './App.css';
import yishuLogo from './assets/yishu.png';
import standLogo from './assets/斯坦德.png';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { CheckCircle, Target, Zap, Brain, Globe, Shield, TrendingUp, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <img src={yishuLogo} alt="易术科技" className="h-16 w-auto" />
              <div className="text-4xl font-bold text-gray-400">×</div>
              <img src={standLogo} alt="斯坦德集团" className="h-16 w-auto" />
            </div>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-gray-900">战略合作方案</h1>
              <p className="text-lg text-gray-600 mt-2">智能检测 · 数字化转型 · 共创未来</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        
        {/* 合作定位与分工 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Target className="mr-3 text-blue-600" />
            合作定位与分工
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <img src={standLogo} alt="斯坦德" className="h-8 w-auto mr-3" />
                  斯坦德集团
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800 mb-3">场景与数据的"主战场"</p>
                <div className="space-y-2">
                  <Badge variant="outline">标准规则库</Badge>
                  <Badge variant="outline">报告语料</Badge>
                  <Badge variant="outline">流程SOP</Badge>
                  <Badge variant="outline">实验设备/方法学</Badge>
                  <Badge variant="outline">资质与客户网络</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-indigo-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-700">
                  <img src={yishuLogo} alt="易术科技" className="h-8 w-auto mr-3" />
                  易术科技
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800 mb-3">把场景"算法化/产品化"的能力方</p>
                <div className="space-y-2">
                  <Badge variant="outline">RAG+知识图谱</Badge>
                  <Badge variant="outline">报告自动化引擎</Badge>
                  <Badge variant="outline">流程机器人</Badge>
                  <Badge variant="outline">图像/光谱模型</Badge>
                  <Badge variant="outline">LIMS集成与安全治理</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 三层能力框架 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Brain className="mr-3 text-purple-600" />
            三层能力框架
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">先"快省准"，后"深专强"</p>
          
          {/* Layer A */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700 text-2xl">
                <Zap className="mr-3" />
                Layer A | 30天内能见效的提效模块（Quick Wins）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">报告自动生成与审校</h4>
                    <p className="text-sm text-gray-700">结构化实验数据→一键生成CMA/CNAS合规版报告；内置"红线项/格式/数值范围"自动校验。</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">标准智能匹配</h4>
                    <p className="text-sm text-gray-700">输入产品/材料参数，自动推荐国标/行标/企标及对应检测项目与前处理方法。</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">客户问答与工单助手</h4>
                    <p className="text-sm text-gray-700">覆盖"能否过标/多久出具/缺什么材料"等高频咨询，减少一线客服人力。</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">RPA流程机器人</h4>
                    <p className="text-sm text-gray-700">样品建单、条码/留样记录、报告归档与平台上传自动化。</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">预期效果：</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-600">报告撰写/审校人力下降30‒50%</Badge>
                  <Badge className="bg-green-600">客服首响自动化覆盖≥60%</Badge>
                  <Badge className="bg-green-600">建单/归档零人工</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Layer B */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700 text-2xl">
                <Brain className="mr-3" />
                Layer B | 3‒6个月形成差异化的"检测大脑"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">检测标准知识图谱</h4>
                  <p className="text-sm text-gray-700">国标/行标/方法学/检测参数/不确定度/质控规则→统一本体；支持跨行业迁移。</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">图像/光谱识别模型</h4>
                  <p className="text-sm text-gray-700">缺陷检测（纺织/包装/表面）、光谱/色谱峰识别与结果解释（适合化妆品、材料、环保）。</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">设备健康与产能排程</h4>
                  <p className="text-sm text-gray-700">关键仪器联网，做漂移/故障预警与产能排程优化。</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">预期效果：</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-blue-600">返修率下降20‒40%</Badge>
                  <Badge className="bg-blue-600">仪器停机率下降15‒25%</Badge>
                  <Badge className="bg-blue-600">加急TAT稳定达标</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Layer C */}
          <Card className="mb-8 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700 text-2xl">
                <Globe className="mr-3" />
                Layer C | 对外商业化的产品线
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">合规即服务</h4>
                  <p className="text-sm text-gray-700">把标准匹配、报告引擎、法规解释封装为API/SaaS，面向制造业和品牌商。</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">检测运营中台</h4>
                  <p className="text-sm text-gray-700">跨实验室/城市的流程与质量可视化（SLA、返修、PT通过率、产能利用率）。</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">"检测副驾"行业GPT</h4>
                  <p className="text-sm text-gray-700">面向检测工程师的问答/配方逆向/不确定度估算辅助手段（保留人工最终签字权，满足可解释性）。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 数据与合规 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="mr-3 text-red-600" />
            数据与合规（合作底线）
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-700">数据域划分</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">训练数据（脱敏/去标识）与客户原始数据严格隔离；源数据权属归斯坦德。</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-700">模型边界</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">AI仅作"辅助手段"，法定签字/结论责任仍在人工；输出全程可追溯（Prompt/版本/证据链）。</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-700">部署方式</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">优先本地/专有云；审计追踪、操作留痕、密级管理（按CMA/CNAS内审口径对齐）。</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-700">国际互认准备</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">模型文档化（方法学解释、验证报告），便于应对客户与监管抽查。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 产品化路线与收益模式 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="mr-3 text-orange-600" />
            产品化路线与收益模式
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">内部ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">按"节省人力+更高产能+更低返修"核算；把节省的人时转换为"单位报告成本下降曲线"。</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">对外销售</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">SaaS订阅</Badge>
                  <Badge variant="outline">按量计费API</Badge>
                  <Badge variant="outline">项目制定制</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">IPO价值点</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">把"检测服务公司"升级为"检测服务+软件平台公司"，提升估值因子。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 实施路径 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="mr-3 text-teal-600" />
            实施路径
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="text-teal-700">阶段一：流程盘点与样本集构建（2‒4周）</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">盘点3条高频检测线（如化妆品、材料、环保各1条）；抽取500份报告+对应原始数据做基线库。</p>
                <div className="mt-3">
                  <Badge className="bg-teal-600">数据字典</Badge>
                  <Badge className="bg-teal-600 ml-2">模板库</Badge>
                  <Badge className="bg-teal-600 ml-2">规则库</Badge>
                  <Badge className="bg-teal-600 ml-2">KPI基线</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="text-teal-700">阶段二：Quick Wins试点（4‒8周）</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">同步上线：报告生成/标准匹配/客服副驾/RPA建单归档。</p>
                <div className="mt-3">
                  <Badge className="bg-teal-600">上线环境</Badge>
                  <Badge className="bg-teal-600 ml-2">SOP与培训</Badge>
                  <Badge className="bg-teal-600 ml-2">周报看板</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="text-teal-700">阶段三：检测大脑（3‒6个月）</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">知识图谱v1、视觉/光谱模型v1、设备健康与排程v1。</p>
                <div className="mt-3">
                  <Badge className="bg-teal-600">方法学验证文档</Badge>
                  <Badge className="bg-teal-600 ml-2">模型卡</Badge>
                  <Badge className="bg-teal-600 ml-2">审计与合规模块</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 结论 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle className="mr-3" />
            结论
          </h2>
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              我们建议与斯坦德从"可落地的四件套"入手：<strong>报告自动化、标准匹配、客服副驾、流程RPA</strong>，
              保证1‒2个财季内形成看得见的降本与提效。
            </p>
            <p>
              同步建设检测标准知识图谱与图像/光谱模型，把斯坦德打造为<strong>灯塔客户与共研伙伴</strong>。
            </p>
            <p>
              随后把通用能力白标复制到你朋友的公司与青岛本地检测机构，形成<strong>"服务+软件"双轮业务</strong>，
              既满足当下的人效诉求，也为上市故事提供"数字化与平台化"的增长曲线。
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-8 mb-4">
            <img src={yishuLogo} alt="易术科技" className="h-12 w-auto opacity-80" />
            <div className="text-2xl font-bold text-gray-400">×</div>
            <img src={standLogo} alt="斯坦德集团" className="h-12 w-auto opacity-80" />
          </div>
          <p className="text-gray-400">智能检测 · 数字化转型 · 共创未来</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
