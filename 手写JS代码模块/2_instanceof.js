function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left),//获取对象的原型
        prototype = right.prototype;//获取构造函数的proyotype对象
    
    //判断构造函数的prototype对象是否在对象的原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;

        proto = Object.getPrototypeOf(proto);//相当于是在假如第一轮没找到的情况下，就向原型链的下一级继续寻找，proto移向下一级再次比对
    }
}