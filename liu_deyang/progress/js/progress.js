/**
 * 初始化函数，获取所有的带有 progress 类名的 dom 元素
 * 并进行初始化操作
 */
function plugsProgress() {
    let el = document.querySelectorAll('.progress')
    el.forEach(element => {
        let style = element.getAttribute('progress-style')
        let value = element.getAttribute('progress-value')
        switch (style) {
            case 'circle':
                circle(element, value)
                break
            case 'strip':
                strip(element, value)
                break
            case 'Hourglass':
                Hourglass(element, value)
                break
        }
    })
}

/**
 * 将progress-style 为 circle 初始化
 * @param {HTMLDivElement} element 带有 progress 类名的节点
 * @param {number} value 百分比的值
 */
function circle(element, value) {
    element.innerHTML = `
        <div class="circle">
            <div class="out-half-left-circle"></div>
            <div class="out-half-right-circle"></div>
            <div class="in-half-left-circle"></div>
            <div class="in-half-right-circle"></div>
            <div class="center">
                <font class="center-font"></font>
            </div>
        </div>
    `

    if (value <= 50) {
        element.querySelector('.in-half-left-circle').style.transform = `rotate(${value*3.6}deg)`;
    } else {
        element.querySelector('.in-half-left-circle').style.transform = `rotate(180deg)`;
        element.querySelector('.in-half-right-circle').style.zIndex = `6`;
        element.querySelector('.in-half-right-circle').style.transform = `rotate(${value*3.6-180}deg)`;
    }
    element.querySelector('.center-font').innerHTML = `${value}%`
}

/**
 * 将progress-style 为 strip 初始化
 * @param {HTMLDivElement} element 带有 progress 类名的节点
 * @param {number} value 百分比的值
 */
function strip(element, value) {
    element.innerHTML = `
        <div class="strip">
            <div class="current"></div>
        </div>
    `

    element.querySelector('.current').style.width = `${value*0.03}em`
}

/**
 * 将progress-style 为 Hourglass 初始化
 * @param {HTMLDivElement} element 带有 progress 类名的节点
 * @param {number} value 百分比的值
 */
function Hourglass(element, value) {
    element.innerHTML = `
        <div class="Hourglass">
            <div class="top"></div>
            <div class="bottom"></div>
        </div>
    `
    var topHeight = x2function(-1, 2, -value * 0.01)[0]
    element.querySelector('.top').style.borderTop = `${topHeight}em solid grey`
    element.querySelector('.top').style.borderLeft = `${topHeight/2}em solid transparent`
    element.querySelector('.top').style.borderRight = `${topHeight/2}em solid transparent`
    element.querySelector('.bottom').style.borderBottom = `${topHeight}em solid red`
    element.querySelector('.bottom').style.borderLeft = `${topHeight/2}em solid transparent`
    element.querySelector('.bottom').style.borderRight = `${topHeight/2}em solid transparent`
}

/**
 * 解一元二次方程 a * x * x + b * x + c
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {Array|Boolean} 如果方程有解，返回一个数组，从小到大排序，无解返回false
 */
function x2function(a, b, c) {
    var det = b * b - 4 * a * c
    if (det < 0) return false
    var x1 = (-b + Math.sqrt(det)) / (2 * a)
    var x2 = (-b - Math.sqrt(det)) / (2 * a)
    if (x1 > x2)[x1, x2] = [x2, x1]
    console.log(x1, x2);

    return [x1, x2]
}