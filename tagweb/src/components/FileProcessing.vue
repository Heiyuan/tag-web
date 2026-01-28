<script setup lang="ts">
/**
 * 文件处理组件 - 左侧区域
 * 分为上下两部分：
 * 1. 项目名称选择区域
 * 2. 参考资料管理区域
 */
import { ref } from 'vue'

// 当前选中的项目
const selectedProject = ref('寻找轴对称教学包')

// 是否展开项目下拉
const isProjectDropdownOpen = ref(false)

// 全选状态
const isAllSelected = ref(true)

// 参考资料列表
const materials = ref([
    { id: 1, name: '寻找轴对称教案.pdf', selected: true },
    { id: 2, name: '教参截图20260112.png', selected: true },
    { id: 3, name: '基于学生数学思维发展的跨学科学习活动设计.pdf', selected: true }
])

// 搜索关键词
const searchKeyword = ref('')

// 切换项目下拉
const toggleProjectDropdown = () => {
    isProjectDropdownOpen.value = !isProjectDropdownOpen.value
}

// 切换全选
const toggleSelectAll = () => {
    isAllSelected.value = !isAllSelected.value
    materials.value.forEach(item => {
        item.selected = isAllSelected.value
    })
}

// 切换单个选择
const toggleItemSelect = (item: typeof materials.value[0]) => {
    item.selected = !item.selected
    // 更新全选状态
    isAllSelected.value = materials.value.every(m => m.selected)
}
</script>

<template>
    <div class="file-processing">
        <!-- 上部分：项目名称选择区域 -->
        <section class="project-section">
            <label class="section-label">项目名称</label>
            <div class="project-selector" @click="toggleProjectDropdown">
                <span class="project-name">{{ selectedProject }}</span>
                <svg class="dropdown-icon" :class="{ 'is-open': isProjectDropdownOpen }" width="16" height="16"
                    viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </section>

        <!-- 下部分：参考资料管理区域 -->
        <section class="materials-section">
            <!-- 标题栏 -->
            <div class="materials-header">
                <span class="section-label">参考资料</span>
                <div class="select-all" @click="toggleSelectAll">
                    <span>全选</span>
                    <div class="checkbox" :class="{ 'is-checked': isAllSelected }">
                        <svg v-if="isAllSelected" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 4" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- 文件列表 -->
            <div class="materials-list">
                <div v-for="item in materials" :key="item.id" class="material-item">
                    <div class="drag-handle">
                        <svg width="6" height="14" viewBox="0 0 6 14" fill="none">
                            <circle cx="1.5" cy="2" r="1.5" fill="#C4C4C4" />
                            <circle cx="4.5" cy="2" r="1.5" fill="#C4C4C4" />
                            <circle cx="1.5" cy="7" r="1.5" fill="#C4C4C4" />
                            <circle cx="4.5" cy="7" r="1.5" fill="#C4C4C4" />
                            <circle cx="1.5" cy="12" r="1.5" fill="#C4C4C4" />
                            <circle cx="4.5" cy="12" r="1.5" fill="#C4C4C4" />
                        </svg>
                    </div>
                    <span class="material-name">{{ item.name }}</span>
                    <div class="checkbox" :class="{ 'is-checked': item.selected }" @click="toggleItemSelect(item)">
                        <svg v-if="item.selected" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 4" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- 底部操作区域 -->
            <div class="materials-actions">
                <button class="btn btn-primary">
                    <span class="btn-icon">+</span>
                    <span>添加资料</span>
                </button>
                <button class="btn btn-outline">
                    从云盘选择
                </button>
                <div class="search-box">
                    <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="7" cy="7" r="5" stroke="#999" stroke-width="1.5" />
                        <path d="M11 11L14 14" stroke="#999" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <input type="text" v-model="searchKeyword" placeholder="输入关键词从网络搜索" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
// ============================================
// 文件处理组件样式
// ============================================

// 主容器
.file-processing {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

// 通用标签样式
.section-label {
    font-size: 14px;
    color: #999;
}

// ============================================
// 上部分：项目名称选择区域
// ============================================
.project-section {
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    flex-shrink: 0;
}

.project-selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    cursor: pointer;

    .project-name {
        font-size: 22px;
        font-weight: 500;
        color: #333;
    }

    .dropdown-icon {
        color: #333;
        transition: transform 0.2s ease;

        &.is-open {
            transform: rotate(180deg);
        }
    }
}

// ============================================
// 下部分：参考资料管理区域
// ============================================
.materials-section {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    min-height: 0;
    overflow: hidden;
}

// 标题栏
.materials-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    flex-shrink: 0;
}

.select-all {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    span {
        font-size: 14px;
        color: #666;
    }
}

// 复选框样式
.checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &.is-checked {
        background-color: #1890ff;
        border-color: #1890ff;
    }
}

// 文件列表
.materials-list {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 16px;

    // 自定义滚动条
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 2px;
    }
}

.material-item {
    display: flex;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
        border-bottom: none;
    }
}

.drag-handle {
    cursor: grab;
    padding: 4px 12px 4px 0;
    opacity: 0.6;

    &:hover {
        opacity: 1;
    }
}

.material-name {
    flex: 1;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 12px;
}

// 底部操作区域
.materials-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-shrink: 0;
    margin-top: auto;
}

// 按钮样式
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 48px;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
}

.btn-primary {
    background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%);
    color: #fff;

    &:hover {
        background: linear-gradient(135deg, #69c0ff 0%, #40a9ff 100%);
    }

    .btn-icon {
        font-size: 18px;
        font-weight: 300;
    }
}

.btn-outline {
    background: #fff;
    color: #333;
    border: 1px solid #e8e8e8;

    &:hover {
        border-color: #1890ff;
        color: #1890ff;
    }
}

// 搜索框
.search-box {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 48px;
    padding: 0 16px;
    background: #f7f7f7;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.2s ease;

    &:focus-within {
        background: #fff;
        border-color: #1890ff;
    }

    .search-icon {
        flex-shrink: 0;
    }

    input {
        flex: 1;
        border: none;
        background: transparent;
        font-size: 14px;
        color: #333;
        outline: none;

        &::placeholder {
            color: #bbb;
        }
    }
}
</style>
