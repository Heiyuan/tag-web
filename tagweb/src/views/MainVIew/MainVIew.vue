<script setup lang="ts">
/**
 * 主视图组件
 * 包含左中右三个区域：文件处理、核心处理、文本展示
 */
import FileProcessing from '@/components/FileProcessing.vue'
import CoreProcessing from '@/components/CoreProcessing.vue'
import TextDisplay from '@/components/TextDisplay.vue'
</script>

<template>
    <main class="main-view">
        <!-- 左侧：文件处理区域 -->
        <div class="panel panel-left">
            <FileProcessing />
        </div>

        <!-- 中间：核心处理区域 -->
        <div class="panel panel-center">
            <CoreProcessing />
        </div>

        <!-- 右侧：文本展示区域 -->
        <div class="panel panel-right">
            <TextDisplay />
        </div>
    </main>
</template>

<style scoped lang="scss">
// ============================================
// 主视图布局样式
// ============================================

// 主容器 - 使用 flex 布局
.main-view {
    display: flex;
    gap: 20px; // 组件间距
    height: calc(100vh - 60px); // 减去头部高度
    padding: 20px 20px 20px 20px; // 左侧不留白
    box-sizing: border-box;
    background-color: #f5f5f5; // 背景色
}

// 面板通用样式
.panel {
    height: 100%;
    min-width: 0; // 允许 flex 子元素收缩
    overflow: hidden; // 防止内容撑开容器
}

// 左侧面板 - 文件处理（宽度比例 478）
.panel-left {
    flex: 478 478 0;
}

// 中间面板 - 核心处理（宽度比例 792）
.panel-center {
    flex: 792 792 0;
}

// 右侧面板 - 文本展示（宽度比例 596）
.panel-right {
    flex: 596 596 0;
}
</style>
