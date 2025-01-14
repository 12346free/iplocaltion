// 使用第三方 IP 地址服务 API
const apiUrl = "https://api.ipify.org?format=json";

// 获取 IP 地址并显示
async function fetchIP(id) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.querySelector(`#${id} .ip`).innerText = data.ip;
    } catch (error) {
        document.querySelector(`#${id} .ip`).innerText = "获取失败";
    }
}

// 模拟不同测试的 IP 地址（这里可以接入不同的 API）
fetchIP("china-ip");
fetchIP("global-ip");
fetchIP("google-ip");
