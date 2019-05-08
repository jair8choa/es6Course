const obj = {a: 1, b: 2,c: 3};
console.log(Reflect.get(obj,'c'));
const handler = {
    get : (target, propName)=>{
        //console.log(target); // {a: 1, b: 2,c: 3}
        //console.log(propName); // 'a' o 'b' o 'c'
        return target[propName];
    },
    set : (target, propName, value)=>{
        //console.log(target); // {a: 1, b: 2,c: 3}
        //console.log(propName); // d 
        //console.log(value); // 2
        (propName === 'd'? target[propName]=value : console.log('error'));
    }
};

let proxy = new Proxy(obj,handler);

proxy.d = 4;

console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.c);
console.log(proxy.d);