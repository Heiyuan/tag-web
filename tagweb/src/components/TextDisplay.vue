<script setup lang="ts">
/**
 * 文本展示组件 - 右侧区域
 * 用于展示搜索结果列表等内容
 */
</script>

<template>
    <div class="text-display">
        <!-- 文本展示内容区域 -->
        <div class="placeholder">
            TextDisplay
        </div>
    </div>
</template>

<style scoped lang="scss">
// 文本展示组件容器
.text-display {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
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
