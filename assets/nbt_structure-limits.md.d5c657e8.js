import{_ as t}from"./chunks/compound.e74f8661.js";import{_ as e,c as i,o as r,e as o}from"./404.md.ce3b5fb6.js";var s="/assets/images/nbt/structure.png",a="/assets/images/nbt/structure-limits/nbt-screenshot-1.png",u="/assets/images/nbt/structure-limits/result.png";const y='{"title":"Extending Structure Limits","description":"","frontmatter":{"title":"Extending Structure Limits","category":"Tutorials","mention":["MedicalJewel105"],"tags":["easy"]},"headers":[{"level":2,"title":"Editing NBT","slug":"editing-nbt"},{"level":2,"title":"Tips","slug":"tips"}],"relativePath":"nbt/structure-limits.md"}',c={},l=o('<p>By default, Minecraft doesn&#39;t allow you to save structures that are more than 64x255x64 in size. In this guide you will learn how to extend structure box size for structure blocks.</p><h2 id="editing-nbt" tabindex="-1">Editing NBT <a class="header-anchor" href="#editing-nbt" aria-hidden="true">#</a></h2><ol><li>Put a structure block into structure and export it.</li><li>Open your structure with NBT editor (NBT Studio in our case) and find your structure block.</li></ol><p>If the only block you have in your structure is structure block, you will find its data here:</p><p><img src="'+s+'" alt=""> extending_structure_block.mcstructure</p><blockquote><p><img src="'+t+'" alt=""> structure</p><blockquote><p><img src="'+t+'" alt=""> palette</p><blockquote><p><img src="'+t+'" alt=""> default</p><blockquote><p><img src="'+t+'" alt=""> block_position_data</p><blockquote><p><img src="'+t+'" alt=""> 0</p></blockquote></blockquote></blockquote></blockquote></blockquote><p><img src="'+a+'" alt=""></p><ol start="3"><li>Set <code>xStructureSize</code>, <code>yStructureSize</code> and <code>zStructureSize</code> values to what you want.</li><li>Save the structure and load it in game.</li></ol><p><img src="'+u+'" alt=""></p><h2 id="tips" tabindex="-1">Tips <a class="header-anchor" href="#tips" aria-hidden="true">#</a></h2><p>You can get this structure block to your inventory by pressing mouse scroll button while holding Ctrl. It is recommended to use structure loading animations (Place by Block) when loading a huge structure. This will minimize lags.</p>',11),n=[l];function d(p,_,m,g,h,b){return r(),i("div",null,n)}var S=e(c,[["render",d]]);export{y as __pageData,S as default};
