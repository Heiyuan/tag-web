<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'

// Vue Flow 必需样式
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/controls/dist/style.css'
import '@vue-flow/minimap/dist/style.css'

// 底部操作区数据
const inputText = ref('')

const actionCards = ref([
    { id: 1, icon: 'document', label: '生成《寻找轴对称》教案', color: '#3B82F6' },
    { id: 2, icon: 'star', label: '结合二年级一班的学情', color: '#9CA3AF' },
    { id: 3, icon: 'video', label: '生成《寻找轴对称》PPT', color: '#F97316' },
    { id: 4, icon: 'star', label: '公开课风格', color: '#9CA3AF' },
    { id: 5, icon: 'diagram', label: '生成《寻找轴对称》教学动画', color: '#10B981' },
    { id: 6, icon: 'star', label: '跨学科结合', color: '#9CA3AF' },
])

// 点击卡片：将 label 拼接到输入框，并移除该卡片
const handleCardClick = (cardId: number) => {
    const cardIndex = actionCards.value.findIndex(c => c.id === cardId)
    if (cardIndex === -1) return
    
    const card = actionCards.value[cardIndex]
    if (!card) return
    
    // 拼接到输入框（如果已有内容则加空格分隔）
    if (inputText.value) {
        inputText.value += ',' + card.label
    } else {
        inputText.value = card.label
    }
    // 移除该卡片
    actionCards.value.splice(cardIndex, 1)
}

const handleSend = () => {
    console.log('发送:', inputText.value)
}


const nodes = ref([
    {
        id: '1',
        type: 'input',
        data: { label: '根据上传的教案、教参，生成《寻找轴对称》教案、PPT、教学动画。根据二年级一班的学情生成，像公开课的风格，需要跨学科结合。' },
        position: { x: 250, y: 0 },
        style: { width: '300px' },

    },
    {
        id: '2',
        data: { label: '教学主张确认' },
        position: { x: 100, y: 175 },
        extent: 'parent' as const,
        style: { backgroundColor: 'rgba(0, 157, 255, 0.3)', width: '200px', height: '200px' },
    },
    {
        id: '2a',
        data: { label: '深读教材:确定重点段落和句段清单' },
        position: { x: 25, y: 50 },
        style: {  width: '150px'},
        extent: 'parent' as const,
        parentNode: '2',
    },
    {
        id: '2b',
        type: 'input',
        data: { label: '锁定课标:提炼能力与评价证据' },
        position: { x: 25, y: 130 },
        style: {  width: '150px'},
        extent: 'parent' as const,
        parentNode: '2',
    },
    {
        id: '4',
        data: { label: '教学过程设计' },
        position: { x: 320, y: 175 },
        style: { backgroundColor: 'rgba(0, 157, 255, 0.3)', width: '380px', height: '260px' },
        extent: 'parent' as const,
    },
    {
        id: '4b',
        data: { label: '适配学情' },
        position: { x: 15, y: 50 },
        style: { backgroundColor: 'rgba(190, 255, 0, 0.4)', height: '110px', width: '350px' },
        extent: 'parent' as const,
        parentNode: '4',
    },
    {
        id: '4b1',
        data: { label: '整理学情信息' },
        position: { x: 15, y: 40 },
        style: {  width: '150px'},
        extent: 'parent' as const,
        parentNode: '4b',
    },
    {
        id: '4b2',
        data: { label: '生成分层任务与支架' },
        position: { x: 185, y: 40 },
        style: {  width: '150px'},
        extent: 'parent' as const,
        parentNode: '4b',
    },
    {
        id: '4a',
        data: { label: '搭建流程:生成40分钟节点流' },
        position: { x: 15, y: 180 },
        style: {  width: '159px'},
        extent: 'parent' as const,
        parentNode: '4',
    },
    {
        id: '4c',
        data: { label: '借鉴名师:生成可迁移脚手架' },
        position: { x: 200, y: 180 },
        style: {  width: '165px'},
        extent: 'parent' as const,
        parentNode: '4',
    },
  
])

const edges = ref([
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e1-4b', source: '1', target: '4b' },
    // { id: 'e4a-4b1', source: '4a', target: '4b1' },
    // { id: 'e4a-4b2', source: '4a', target: '4b2' },
    // { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
])


</script>

<template>
    <div class="core-processing">
        <!-- 上部区域 - 主要内容区 -->
        <div class="top-section">
            <VueFlow :nodes="nodes" :edges="edges" fit-view-on-init elevate-edges-on-select>
                <!-- <MiniMap /> -->
                <Controls />
                <Background />
            </VueFlow>
        </div>
        <!-- 下部区域 - 操作区 -->
        <div class="bottom-section">
            <!-- 卡片区域 -->
            <div class="action-cards">
                <div
                    v-for="card in actionCards"
                    :key="card.id"
                    class="action-card"
                    @click="handleCardClick(card.id)"
                >
                    <div class="card-icon" :style="{ backgroundColor: card.color + '20' }">
                        <!-- 文档图标 -->
                        <svg v-if="card.icon === 'document'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="2" width="16" height="20" rx="2" :stroke="card.color" stroke-width="2"/>
                            <path d="M8 7h8M8 11h8M8 15h5" :stroke="card.color" stroke-width="2" stroke-linecap="round"/>
                            <circle cx="17" cy="17" r="5" :fill="card.color"/>
                            <text x="17" y="20" text-anchor="middle" fill="white" font-size="8" font-weight="bold">?</text>
                        </svg>
                        <!-- 视频图标 -->
                        <svg v-else-if="card.icon === 'video'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="4" width="20" height="16" rx="3" :fill="card.color"/>
                            <path d="M10 8.5v7l5.5-3.5L10 8.5z" fill="white"/>
                        </svg>
                        <!-- 图表图标 -->
                        <svg v-else-if="card.icon === 'diagram'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="6" cy="6" r="3" :stroke="card.color" stroke-width="2"/>
                            <circle cx="18" cy="6" r="3" :stroke="card.color" stroke-width="2"/>
                            <circle cx="6" cy="18" r="3" :stroke="card.color" stroke-width="2"/>
                            <circle cx="18" cy="18" r="3" :stroke="card.color" stroke-width="2"/>
                            <path d="M9 6h6M6 9v6M18 9v6M9 18h6" :stroke="card.color" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <!-- 星星图标 -->
                        <svg v-else-if="card.icon === 'star'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                fill="none"
                                :stroke="card.color"
                                stroke-width="2"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <span class="card-label">{{ card.label }}</span>
                </div>
            </div>

            <!-- 输入区域 -->
            <div class="input-area">
                <input
                    v-model="inputText"
                    type="text"
                    class="text-input"
                    placeholder="输入生成需求..."
                    @keyup.enter="handleSend"
                />
                <button class="send-btn" @click="handleSend">发送</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// 核心处理组件容器
.core-processing {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
}

// 上部区域 - 占比 632/(632+261) ≈ 70.77%
.top-section {
    flex: 632;
    border-radius: 12px;
    box-sizing: border-box;
    width: 100%;
    min-height: 0; // 允许 flex 子元素收缩
    min-width: 0; // 允许横向收缩
    overflow: hidden; // 防止内容撑开容器
    position: relative; // 为 VueFlow 提供定位上下文
    background-color: #fff;

    // VueFlow 容器样式 - 使用绝对定位填满容器
    :deep(.vue-flow) {
        position: absolute !important;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100% !important;
        height: 100% !important;
    }
}

// 下部区域 - 占比 261/(632+261) ≈ 29.23%
.bottom-section {
    flex: 261;
    background-color: #fff;
    border-radius: 12px;
    padding: 24px 32px;
    box-sizing: border-box;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

// 操作卡片区域 - 2列网格
.action-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    gap: 12px;
    flex: 1;
    align-content: start;
}

.action-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: #D1D5DB;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
}

.card-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.card-label {
    font-size: 15px;
    font-weight: 500;
    color: #1F2937;
}

// 输入区域
.input-area {
    display: flex;
    gap: 16px;
    align-items: center;
}

.text-input {
    flex: 1;
    height: 52px;
    padding: 0 20px;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    font-size: 15px;
    color: #1F2937;
    background: #fff;
    outline: none;
    transition: border-color 0.2s ease;

    &::placeholder {
        color: #9CA3AF;
    }

    &:focus {
        border-color: #A3E635;
    }
}

.send-btn {
    height: 52px;
    padding: 0 40px;
    background: #A3E635;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    color: #1F2937;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background: #84CC16;
    }

    &:active {
        transform: scale(0.98);
    }
}
</style>
