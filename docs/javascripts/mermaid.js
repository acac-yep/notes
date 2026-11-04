// 渲染 mermaid 图（自定义 class="diagram"）。
// 用 render(id, text) 自己插 svg，而不是 run(nodes)——run() 在本站会和
// Material 内置的 mermaid 处理抢同一个节点，导致画出 "Syntax error in text"。
var renderedOnce = false;

function renderDiagrams() {
  if (renderedOnce) return;
  var nodes = Array.prototype.slice
    .call(document.querySelectorAll("pre.diagram, div.diagram"))
    .filter(function (n) {
      return !n.querySelector("svg") && n.textContent.trim().length > 0;
    });
  if (!nodes.length) return;
  renderedOnce = true;

  try {
    window.mermaid.initialize({ startOnLoad: false, theme: "default", securityLevel: "loose" });
  } catch (e) {
    console.warn("mermaid init failed:", e);
    return;
  }

  nodes.forEach(function (n, i) {
    var src = n.textContent.trim();
    var id = "diagram-" + i + "-" + Math.random().toString(36).slice(2);
    Promise.resolve(window.mermaid.render(id, src))
      .then(function (res) {
        n.innerHTML = res.svg;
      })
      .catch(function (e) {
        console.warn("mermaid render failed:", e);
      });
  });
}

function waitForMermaid(tries) {
  if (window.mermaid) {
    renderDiagrams();
    return;
  }
  if (tries <= 0) return;
  setTimeout(function () {
    waitForMermaid(tries - 1);
  }, 120);
}

var scheduled = false;
function schedule() {
  if (scheduled) return;
  scheduled = true;
  setTimeout(function () {
    scheduled = false;
    renderedOnce = false;
    waitForMermaid(40);
  }, 30);
}

if (typeof document$ !== "undefined") {
  document$.subscribe(schedule);
}
window.addEventListener("load", schedule);
