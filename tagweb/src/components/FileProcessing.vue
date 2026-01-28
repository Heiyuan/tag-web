<script setup lang="ts">
/**
 * 文件处理组件 - 左侧区域
 * 用于展示和管理参考资料、添加资料等功能
 */
</script>

<template>
    <div class="file-processing">
        <!-- 文件处理内容区域 -->
        <div class="placeholder">
            FileProcessing
        </div>
    </div>
</template>

<style scoped lang="scss">
// 文件处理组件容器
.file-processing {
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
