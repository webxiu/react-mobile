/** 判断是否PC端 */
export const isPc = () => {
    const reg =
        /phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/;
    if (navigator.userAgent.match(reg)) {
        console.log("手机");
        return false
    } else {
        console.log("PC");
        return true
    }
};
