// 渲染 mermaid 代码块（配合 mkdocs.yml 里的 custom_fences）
document$.subscribe(() => {
  if (typeof mermaid === "undefined") return;
  mermaid.initialize({ startOnLoad: false, theme: "default" });
  mermaid.run({ querySelector: ".mermaid" });
});
