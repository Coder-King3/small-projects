const status1 = document.querySelector(".status");
//load 监听网页加载事件
window.addEventListener("load", () => {
  const handleNetworkChange = () => {
    if (navigator.onLine) {
      //给status下的offline-msg和online-msg添加类名样式
      status1.classList.remove("offline");
    } else {
      //给status下的offline-msg和online-msg添加类名样式
      status1.classList.add("offline");
    }
  };
  // online该事件在浏览器开始在线工作时触发
  window.addEventListener("online", handleNetworkChange);
  // offline该事件在浏览器开始离线工作时触发。
  window.addEventListener("offline", handleNetworkChange);
});
