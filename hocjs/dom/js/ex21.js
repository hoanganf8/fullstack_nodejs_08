//Định nghĩa hàm tạo component
var F8 = {
  create: function (name, callback) {
    class Component extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.attributeCallback = {
          "v-length": "applyAttributeLength",
        };
        this.data = {};
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = callback.call(this.shadowRoot);
        this.applyAttributes(this.shadowRoot);
      }
      applyAttributes(parentEl) {
        var elementList = parentEl.children;
        if (elementList.length) {
          Array.from(elementList).forEach(function (element) {
            const attributeList = element.attributes;
            for (var index = 0; index < attributeList.length; index++) {
              var attributeName = attributeList[index].name;
              var attributeValue = attributeList[index].value;
              var callbackName = this.attributeCallback[attributeName];
              if (callbackName) {
                this[callbackName].call(this, element, attributeValue);
              }

              if (attributeName === "v-data") {
                var dataObj = new Function(`return ${attributeValue}`).call();
                if (
                  typeof dataObj === "object" &&
                  !Array.isArray(dataObj) &&
                  dataObj !== null
                ) {
                  Object.assign(this.data, dataObj);
                }
              }
              if (attributeName === "v-text" && attributeValue) {
                element.innerText = this.data[attributeValue] ?? "";
              }
              if (attributeName.startsWith("v-on:")) {
                const eventName = attributeName.replace("v-on:", "");
                element.addEventListener(
                  eventName,
                  function (e) {
                    var argumentNameList = ["event"];
                    var argumentValueList = [e];
                    Object.keys(this.data).forEach(function (key) {
                      argumentNameList.push(key);
                      argumentValueList.push(this.data[key]);
                    }, this);
                    argumentNameList.push(attributeValue);
                    //something(a, b, c) --> something.apply(args);
                    var func = Function.apply(null, argumentNameList);
                    func.apply(this, argumentValueList);
                  }.bind(this)
                );
              }
            }
            //Đệ quy
            if (element.children.length) {
              this.applyAttributes(element);
            }
          }, this);
        }
      }
      applyAttributeLength(element, value) {
        var nextElement = element.nextSibling;
        var parentEl = element.parentNode;
        for (var i = 0; i < value; i++) {
          var newElement = element.cloneNode(true);
          if (!nextElement) {
            parentEl.append(newElement);
          } else {
            parentEl.insertBefore(newElement, nextElement);
          }
        }
        element.remove();
      }
    }
    customElements.define(name, Component);
  },
};

F8.create("hello-world", function () {
  //Chứa nội dung của component
  return `
    <div v-data="{count: 0, title: 'Học JS không khó', user: {name: 'Hoàng An'}}">
        <h1>Hello World: <span v-text="count"></span></h1>
        <h2 v-text="title"></h2>
        <button v-on:click="title='Ok chưa?'; console.log(title)">Click me</button> <br/>
        Ok chưa?
        <span>Chào anh em</span>
        Ok rồi
        <ul>
            <li v-length="5">Item</li>
        </ul>
        <h2 v-length="2">Hoàng An</h2>
    </div>
  `;
});

// var template = document.querySelector("template");
// console.dir(template.content.children[0]);

// var a = "{count: 10}";
// var func = new Function(`return ${a}`);
// console.log(func());

//Buổi sau: Custom Event
