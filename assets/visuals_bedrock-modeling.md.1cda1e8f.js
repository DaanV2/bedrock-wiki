import{_ as s,c as o,a as t,w as r,e,r as a,o as l,d}from"./404.md.ce3b5fb6.js";var h="/assets/images/visuals/bedrock-modeling/vertex_snap.gif",c="/assets/images/visuals/bedrock-modeling/z-fighting.png",p="/assets/images/visuals/bedrock-modeling/animations-1.png",m="/assets/images/visuals/bedrock-modeling/animations-2.gif",u="/assets/images/visuals/bedrock-modeling/setting-loop.png";const M='{"title":"Bedrock Modeling","description":"","frontmatter":{"title":"Bedrock Modeling","nav_order":2,"category":["General"]},"headers":[{"level":2,"title":"Texture Glitch","slug":"texture-glitch"},{"level":2,"title":"Vertex Snap","slug":"vertex-snap"},{"level":2,"title":"Transparency","slug":"transparency"},{"level":2,"title":"Texturing","slug":"texturing"},{"level":2,"title":"Materials","slug":"materials"},{"level":2,"title":"Z-fighting","slug":"z-fighting"},{"level":2,"title":"Basics of Animations","slug":"basics-of-animations"},{"level":2,"title":"Animation Speed","slug":"animation-speed"}],"relativePath":"visuals/bedrock-modeling.md"}',g={},f=e('<p>This will guide tips, tricks, and things you should know when modeling for Minecraft Bedrock Edition.</p><h2 id="texture-glitch" tabindex="-1">Texture Glitch <a class="header-anchor" href="#texture-glitch" aria-hidden="true">#</a></h2><p>Sometimes the texture on some (smaller) faces is glitched or invisible. This is because the size of cubes is floored for the UV map calculation. This means that any size smaller than 1 will result in a 0 pixel wide UV map, which will look glitchy. To prevent this, make sure all of your cubes are at least 1 unit long in each direction. To create smaller cubes, use the Inflate slider. Another trick to solve this if you <em>must</em> have smaller textures is by <strong>increasing the element size by 1 in each direction</strong> and then <strong>inflating the element by -1</strong> though note that this will make you have smaller pixels textured incorrectly will lead to mixels.</p><h2 id="vertex-snap" tabindex="-1">Vertex Snap <a class="header-anchor" href="#vertex-snap" aria-hidden="true">#</a></h2><p>Vertex snap is a handy tool in blockbench any modeler should use. It&#39;s beneficial when doing rounded things like wheels. You can find this tool right top next to the movement &amp; scale tools. It has 2 modes, Move &amp; Scale. How this tool works can be seen in the following gif. <img src="'+h+'" alt=""></p><h2 id="transparency" tabindex="-1">Transparency <a class="header-anchor" href="#transparency" aria-hidden="true">#</a></h2><p>If you use semi-transparent textures (like colored glass), you need to move elements with that texture to the bottom of the element list. Otherwise, elements behind these semi-transparent ones won&#39;t render in-game.</p><h2 id="texturing" tabindex="-1">Texturing <a class="header-anchor" href="#texturing" aria-hidden="true">#</a></h2><p>When learning to texture, your best bet is practicing with references on how others textured similar objects &amp; surfaces. Patterns for wood &amp; metal are different, and you should consider that. Good guides are <a href="https://www.blockbench.net/wiki/guides/minecraft-style-guide" target="_blank" rel="noopener noreferrer">Masteriano&#39;s Texturing Tips</a> and in general, any on pixel art.</p><h2 id="materials" tabindex="-1">Materials <a class="header-anchor" href="#materials" aria-hidden="true">#</a></h2><p>Whether or no the transparency or emissive textures in your models work in-game, it&#39;s decided by the materials applied to them.</p><table><thead><tr><th>Material</th><th>Description</th></tr></thead><tbody><tr><td>entity</td><td>basic opaque material</td></tr><tr><td>entity_alphatest</td><td>supports transparent pixels</td></tr><tr><td>entity_alphablend</td><td>supports translucent pixels</td></tr><tr><td>entity_emissive</td><td>solid, alpha channel is used as the emissive channel</td></tr><tr><td>entity_emissive_alpha</td><td>alpha channel is used for emissiveness, completely black + transparent pixels are rendered transparently</td></tr></tbody></table><h2 id="z-fighting" tabindex="-1">Z-fighting <a class="header-anchor" href="#z-fighting" aria-hidden="true">#</a></h2><p>Z-fighting is called when you have the face of 2 elements in the same place, and you can see both or half of them at the same time, as seen in the following picture. <img src="'+c+'" alt=""> You can solve this by inflating one of them by <code>0.01</code> or <code>-0.01</code> depending on which one should prioritize.</p><h2 id="basics-of-animations" tabindex="-1">Basics of Animations <a class="header-anchor" href="#basics-of-animations" aria-hidden="true">#</a></h2><p>When animating in Blockbench, you can set each keyframe by hand, or you can use variables &amp; functions. Here you will learn the basics. Let&#39;s start with this picture.</p><p><img src="'+p+'" alt=""></p><p>the name or <code>animation.cuack</code> is essential. You can&#39;t have symbols or caps there, and it must start with <code>animation.</code> for the animations to work without problems. Now the function we will be using is</p><p><code>Base + Math.sin((query.life_time + Offset) * Speed) \\_ pitch</code></p><ul><li>Base is the starting rotation/position the bone has</li><li>Sin is the math function we all know</li><li><code>query.life_time</code> is a variable. Is a number that will be increasing as the animation continues</li><li>Offset is a number we use to have the animation start earlier or later than its &quot;original&quot; position</li><li>Speed is the time it will take from going from top to down</li><li>Pitch is how far it goes from the origin</li></ul><p><img src="'+m+'" alt=""></p><p>Function used:</p><p><code>Math.sin((query.life_time+0.5)*150)*15</code></p><p>one on position &amp; the other on rotation.</p>',24),b=e('<p>Don&#39;t forget that for the animation to be a perfect loop. It would help if you correlated the sin equation <code>speed</code> &amp; the animation <code>time</code>. Here&#39;s a table with values to get a perfect loop, though there are more you can discover.</p><table><thead><tr><th>Speed</th><th>Time</th><th>Group</th></tr></thead><tbody><tr><td>150</td><td>2.4</td><td>1</td></tr><tr><td>100</td><td>3.6</td><td>2</td></tr></tbody></table><p>These numbers can be multiplied but not divided, so these will also work But only multiples of the same option</p><table><thead><tr><th>Speed</th><th>Time</th><th>Group</th></tr></thead><tbody><tr><td>150</td><td>4.8</td><td>1</td></tr><tr><td>200</td><td>3.6</td><td>2</td></tr><tr><td>300</td><td>2.4</td><td>1</td></tr><tr><td>300</td><td>3.6</td><td>1 &amp; 2</td></tr></tbody></table><p>Now not all of these will &quot;loop&quot; together. And that is the Group column. The ones with the same number will work together. Otherwise, they will have a visible &quot;glitch&quot; in the loop.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can have an animation in the loop by clicking on the following setting: <img src="'+u+'" alt=""></p></div><p>With this function &amp; creativity, animals &amp; dinosaurs are animated into walking, running &amp; attacking. You can learn more about queries &amp; functions <a href="https://bedrock.dev/docs/stable/Molang" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="animation-speed" tabindex="-1">Animation Speed <a class="header-anchor" href="#animation-speed" aria-hidden="true">#</a></h2><p>To easily change the speed of an animation you can simply multiply the default value of <code>anim_time_update</code> (defaults to <code>query.delta_time + query.anim_time</code>) inside our animation:</p>',9),_=d("RP/animations/myentity.animation.json#animations"),y=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;animation.myentity.myanimation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;anim_time_update&quot;</span><span class="token operator">:</span><span class="token string">&quot;2 * query.delta_time + query.anim_time&quot;</span>
    <span class="token comment">//Your animation goes here!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>This will make the animation run 2 times faster. We can tweak the value to any buoyant float, so we can even slow down animations. With 0.5, for example, the animation will run 2 times slower, etc.</p>`,2);function w(v,k,x,T,q,S){const i=a("MolangGraph"),n=a("CodeHeader");return l(),o("div",null,[f,t(i,{code:"Math.sin((query.life_time+0.5)*150)*15",toY:2,stepSize:.001},null,8,["stepSize"]),b,t(n,null,{default:r(()=>[_]),_:1}),y])}var V=s(g,[["render",w]]);export{M as __pageData,V as default};
