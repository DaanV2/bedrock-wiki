import{_ as p,c as r,a,w as e,b as s,d as n,e as o,r as i,o as l}from"./404.md.ce3b5fb6.js";var c="/assets/images/items/spawning-items/structure-method.png";const V='{"title":"Spawning Items","description":"","frontmatter":{"title":"Spawning Items","category":"Tutorials","tags":["intermediate"]},"headers":[{"level":2,"title":"Entity Deaths","slug":"entity-deaths"},{"level":2,"title":"Dummy Entity Deaths","slug":"dummy-entity-deaths"},{"level":2,"title":"Interactions","slug":"interactions"},{"level":2,"title":"All-Purpose Method","slug":"all-purpose-method"},{"level":3,"title":"Behavior","slug":"behavior"},{"level":3,"title":"Animation Controller","slug":"animation-controller"},{"level":2,"title":"Structure Method","slug":"structure-method"}],"relativePath":"items/spawning-items.md"}',u={},m=s("p",null,"It is fairly common to want to spawn an item in the world, as if dropped. This page will walk through how to accomplish this through various methods, including Entity Deaths, Interactions, and an all-purpose method.",-1),d=s("h2",{id:"entity-deaths",tabindex:"-1"},[n("Entity Deaths "),s("a",{class:"header-anchor",href:"#entity-deaths","aria-hidden":"true"},"#")],-1),b=s("p",null,[n("The simplest method of spawning items - and generally the most common one - is dropping items upon an entity's death. This is done by adding the "),s("code",null,"minecraft:loot"),n(" component to the entity and linking it to the respective loot table ("),s("code",null,"forium"),n(" in the following example) containing items you wish to be dropped.")],-1),h=n("BP/entities/my_entity.json#components"),k=o("",4),_=n("BP/entities/my_entity.json"),y=o("",4),q=n("BP/entities/my_entity.json#components"),g=o("",7),f=n("BP/entities/my_entity.json#components"),w=o("",4),v=n("BP/animation_controllers/my_entity.ac.json"),T=o("",4);function x(A,I,S,C,P,j){const t=i("CodeHeader");return l(),r("div",null,[m,d,b,a(t,null,{default:e(()=>[h]),_:1}),k,a(t,null,{default:e(()=>[_]),_:1}),y,a(t,null,{default:e(()=>[q]),_:1}),g,a(t,null,{default:e(()=>[f]),_:1}),w,a(t,null,{default:e(()=>[v]),_:1}),T])}var E=p(u,[["render",x]]);export{V as __pageData,E as default};
