// MathJax 配置：支持 $...$ 行内公式与 $$...$$ 独立公式
window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// 初次加载由 MathJax 自己排版；后续页面切换时等待运行时就绪。
document$.subscribe(() => {
  if (!window.MathJax.typesetPromise) return;
  MathJax.startup.promise.then(() => {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    return MathJax.typesetPromise();
  }).catch((error) => console.error("MathJax page typesetting failed:", error));
});
