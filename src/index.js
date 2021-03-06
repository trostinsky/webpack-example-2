import {removeBadWords} from "./utils";
import moment from "moment";
import * as data from "./data";
import "./index.css";
import screen from "./image.png";

// console.log(NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    console.log("DEV");
} else {

}

const template = "копать";
const text = "Как мне научиться копать его эти массивы понимать";
console.log(removeBadWords(template, text));
console.log(moment().format("DD.MM.YYYY HH:mm:ss"));

const decorator = (params) => {
    params.unusedProperty = 100;
    return params;
}
const logger = () => {
    return (params) => {
        console.log("decorator");
        return decorator(params);
    }
}


class Test {
    constructor(){
        this.render();
    }

    @logger()
    add = (a, b) => a + b

    test = 1;
    render(){
        document.body.innerHTML = `<p class="hello-world">
            Hello Denys
            <img src="${screen}" alt="">
        </p>`;
    }
}

const t = new Test();
console.log(t);
