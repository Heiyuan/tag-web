<script setup lang="ts">
/**
 * 文本展示组件 - 右侧区域
 * 用于展示搜索结果列表等内容
 */
import { ref } from 'vue'

// 搜索结果列表
const searchResults = ref([
    { id: 1, title: '2024-2025学年北京市燕山区燕山前进中学九年级上期末试卷：语文' },
    { id: 2, title: '2024-2025学年北京市燕山地区燕山前进中学八年级期末试卷：语文' },
    { id: 3, title: '2024-2025学年北京市燕山区燕山前进中学七年级上期末试卷：语文' },
    { id: 4, title: '2025年北京市中考试卷：语文' },
    { id: 5, title: '2025年北京市东城区二模试卷：语文' },
    { id: 6, title: '2025年北京市房山区二模试卷：语文' },
    { id: 7, title: '2025年北京市门头沟区二模试卷：语文' },
    { id: 8, title: '2025年北京市平谷区二模试卷：语文' },
    { id: 9, title: '2025年北京市丰台区二模试卷：语文' },
    { id: 10, title: '2025年北京市石景山区二模试卷：语文' },
    { id: 11, title: '2025年北京市大兴区二模试卷：语文' },
    { id: 12, title: '2025年北京市朝阳区二模试卷：语文' },
    { id: 13, title: '2025年北京市昌平区二模试卷：语文' }
])

// 是否有更多结果
const hasMore = ref(true)

// 点击结果项
const handleResultClick = (item: typeof searchResults.value[0]) => {
    console.log('点击结果:', item.title)
}

// 加载更多
const loadMore = () => {
    console.log('加载更多')
}
</script>

<template>
    <div class="text-display">
        <!-- 结果区域 -->
        <div class="results-container">
            <!-- 标题 -->
            <h2 class="results-title">结果</h2>

            <!-- 搜索标签 -->
            <div class="search-tag">
                搜索相关试卷题目
            </div>

            <!-- 结果列表 -->
            <div class="results-list">
                <div v-for="item in searchResults" :key="item.id" class="result-item" @click="handleResultClick(item)">
                    <svg class="link-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.5" />
                        <path d="M6 10L10 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.5 6H10V9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <span class="result-title">{{ item.title }}</span>
                </div>
            </div>

            <!-- 更多指示 -->
            <div v-if="hasMore" class="more-indicator" @click="loadMore">
                <span>•••</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// ============================================
// 文本展示组件样式
// ============================================

// 主容器
.text-display {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 12px;
    padding: 24px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

// 结果容器
.results-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
}

// 结果标题
.results-title {
    font-size: 18px;
    font-weight: 400;
    color: #9e9e9e;
    margin-bottom: 16px;
}

// 搜索标签
.search-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    background: #fff;
    border: 2px solid #4fc3f7;
    border-radius: 20px;
    color: #4fc3f7;
    font-size: 14px;
    margin-bottom: 20px;
    width: fit-content;
}

// 结果列表
.results-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    overflow-y: auto;
    // 将滚动条位置移到页面边缘-5px
    margin-right: -19px;
    padding-right: 19px;

    // 自定义滚动条
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #e0e0e0;
        border-radius: 2px;
    }
}

// 结果项
.result-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        .result-title {
            color: #1890ff;
        }

        .link-icon {
            color: #1890ff;
        }
    }
}

// 链接图标
.link-icon {
    flex-shrink: 0;
    color: #4fc3f7;
    margin-top: 2px;
}

// 结果标题
.result-title {
    font-size: 15px;
    color: #333;
    line-height: 1.5;
    transition: color 0.2s ease;
}

// 更多指示器
.more-indicator {
    padding: 12px 0;
    cursor: pointer;
    flex-shrink: 0;

    span {
        font-size: 16px;
        color: #9e9e9e;
        letter-spacing: 2px;
    }

    &:hover span {
        color: #666;
    }
}
</style>
