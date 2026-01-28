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


const nodes = ref([
    {
        id: '1',
        type: 'input',
        data: { label: 'node' },
        position: { x: 250, y: 0 },
    },
    {
        id: '2',
        data: { label: 'parent node' },
        position: { x: 100, y: 100 },
        style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '200px', height: '200px' },
    },
    {
        id: '2a',
        data: { label: 'child node' },
        position: { x: 10, y: 50 },
        parentNode: '2',
    },
    {
        id: '4',
        data: { label: 'parent node' },
        position: { x: 320, y: 175 },
        style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '400px', height: '300px' },
    },
    {
        id: '4a',
        data: { label: 'child node' },
        position: { x: 15, y: 65 },
        extent: 'parent' as const,
        parentNode: '4',
    },
    {
        id: '4b',
        data: { label: 'nested parent node' },
        position: { x: 15, y: 120 },
        style: { backgroundColor: 'rgba(139, 92, 246, 0.5)', height: '150px', width: '270px' },
        parentNode: '4',
    },
    {
        id: '4b1',
        data: { label: 'nested child node' },
        position: { x: 20, y: 40 },
        parentNode: '4b',
    },
    {
        id: '4b2',
        data: { label: 'nested child node' },
        position: { x: 100, y: 100 },
        parentNode: '4b',
    },
    {
        id: '4c',
        data: { label: 'child node' },
        position: { x: 200, y: 65 },
        parentNode: '4',
    },
    {
        id: '999',
        type: 'input',
        data: { label: 'Drag me to extend area!' },
        position: { x: 20, y: 100 },
        class: 'light',
        expandParent: true,
        parentNode: '2',
    },
])

const edges = ref([
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e1-4c', source: '1', target: '4c' },
    { id: 'e2a-4a', source: '2a', target: '4a' },
    { id: 'e4a-4b1', source: '4a', target: '4b1' },
    { id: 'e4a-4b2', source: '4a', target: '4b2' },
    { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
])


</script>

<template>
    <div class="core-processing">
        <!-- 上部区域 - 主要内容区 -->
        <div class="top-section">
            <VueFlow :nodes="nodes" :edges="edges" fit-view-on-init elevate-edges-on-select>
                <MiniMap />
                <Controls />
                <Background />
            </VueFlow>
        </div>
        <!-- 下部区域 - 操作区 -->
        <div class="bottom-section">
            <div class="placeholder">
                Bottom Section (261)
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
    border-radius: 8px;
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
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    min-height: 0;
}

// 占位符样式（开发时使用）
.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #999;
    font-size: 14px;
}
</style>
