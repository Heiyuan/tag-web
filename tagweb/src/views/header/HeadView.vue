<script setup lang="ts">
import { ref } from 'vue'

// 当前选中的菜单项索引
const activeIndex = ref('1')

/**
 * 菜单选中事件处理
 * @param key - 被选中的菜单项索引
 */
const handleSelect = (key: string) => {
    activeIndex.value = key
}
</script>

<template>
    <!-- 头部导航容器 -->
    <header class="app-header">
        <div class="header-content">
            <!-- 左侧 Logo 区域 -->
            <div class="logo-container">
                <img alt="Vue logo" class="logo" src="@/assets/TAGSVG.svg" width="48.1" height="29.2" />

            </div>

            <!-- 导航菜单区域 -->
            <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" class="nav-menu"
                @select="handleSelect">
                <el-menu-item index="1">备课</el-menu-item>
                <el-menu-item index="2">教研</el-menu-item>
                <el-menu-item index="3">家校共育</el-menu-item>
            </el-menu>
        </div>
    </header>
</template>

<style scoped lang="scss">
// ============================================
// 头部导航样式
// ============================================

// 头部容器
.app-header {
    width: 100%;
    height: 60px; // 头部固定高度
    background-color: #fff;
    position: fixed; // 固定在页面顶部
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05); // 轻微阴影效果
}

// 头部内容区域
.header-content {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 24px;
}

// Logo 容器
.logo-container {
    display: flex;
    align-items: center;
    margin-right: 26px; // 与导航菜单的间距
}

// Logo SVG 尺寸
.logo-svg {
    width: 60px;
    height: 28px;
}

// ============================================
// 导航菜单样式
// ============================================

.nav-menu {
    border-bottom: none !important; // 移除默认底部边框
    height: 60px;
    background-color: transparent; // 背景透明

    // 菜单项通用样式
    :deep(.el-menu-item) {
        font-size: 16px; // 字体大小
        color: #666; // 未选中文字颜色（灰色）
        padding: 0 32px; // 菜单项左右间距
        height: 60px;
        line-height: 60px;
        border-bottom: none !important; // 移除默认下划线
        position: relative; // 用于定位下划线

        // 选中状态下划线（使用伪元素实现，可控制间距）
        &.is-active::after {
            content: '';
            position: absolute;
            bottom: 6px; // 下划线距离底部的距离
            left: 26px;
            right: 26px;
            height: 2px;
            background-color: #000;
        }

        // 选中状态样式
        &.is-active {
            color: #000 !important; // 选中文字为黑色
            font-weight: 500;
            border-bottom: none !important;
            background-color: transparent !important;
        }

        // 鼠标悬停样式
        &:hover {
            color: #000 !important;
            background-color: transparent !important; // 移除默认悬停背景
        }

        // 聚焦状态样式
        &:focus {
            background-color: transparent !important;
        }
    }
}
</style>
