// 頁籤切換功能
function switchTab(evt, phaseId) {
    // 獲取所有的內文面板與按鈕
    const panels = document.querySelectorAll('.content-panel');
    const tabs = document.querySelectorAll('.tab-btn');
    
    // 隱藏所有面板、移除所有按鈕的 active 樣式
    panels.forEach(panel => panel.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // 顯示當前點擊的面板，並為該按鈕加上 active 樣式
    document.getElementById(phaseId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// 動畫化長條圖（當網頁 DOM 載入完成時觸發）
window.addEventListener('DOMContentLoaded', () => {
    // 延遲一點點時間讓動態效果更平滑
    setTimeout(() => {
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width; // 賦予實際寬度，觸發 CSS transition 動畫
        });
    }, 300);
});