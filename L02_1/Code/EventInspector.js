"use strict";
var L02_1_EventInspector;
(function (L02_1_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        //document.addEventListener("click", logInfo);
        //document.addEventListener("key-up", logInfo);
        let div0 = document.querySelector(".div0");
        installListenersInDOM(div0);
        let div1 = document.querySelector(".div1");
        installListenersInDOM(div1);
        buttonClicked();
    }
    function installListenersInDOM(_target) {
        while (true) {
            _target.addEventListener("click", logInfo);
            _target.addEventListener("keyup", logInfo);
            //_target.addEventListener("click", logInfo, true);
            if (_target.parentElement)
                _target = _target.parentElement;
            else
                break;
        }
    }
    function setInfoBox(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        let oldSpan = document.querySelectorAll("span");
        for (let i = 0; i < oldSpan.length; i++) {
            oldSpan[i].remove();
        }
        //let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        let span = document.createElement("span");
        let target = _event.target;
        target.appendChild(span);
        span.innerHTML = "Mouse Position: x = " + x + "px, y = " + y + "px";
        span.innerHTML += "<br>";
        span.innerHTML += "Target: " + _event.target;
        span.style.left = x + "px";
        span.style.top = y + "px";
    }
    function logInfo(_event) {
        console.group("Log Event");
        console.log("Event Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log(_event);
        console.groupEnd();
    }
    function buttonClicked() {
        const button = document.querySelector("#button");
        //create new event; bubbling must be
        const event = new CustomEvent("button", {
            bubbles: true
        });
        document.addEventListener("button", (e) => {
            console.log(e);
        });
        button.addEventListener("click", (e) => {
            e.target?.dispatchEvent(event);
        });
    }
})(L02_1_EventInspector || (L02_1_EventInspector = {})); //namespace
//# sourceMappingURL=EventInspector.js.map