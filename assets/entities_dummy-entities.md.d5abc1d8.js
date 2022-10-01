import{_ as p,c as o,a,w as t,e as n,r,o as l,d as e}from"./404.md.ce3b5fb6.js";const C='{"title":"Dummy Entities","description":"","frontmatter":{"title":"Dummy Entities","category":"Tutorials","tags":["beginner"]},"headers":[{"level":2,"title":"Using Dummies","slug":"using-dummies"},{"level":2,"title":"Creating Dummies","slug":"creating-dummies"},{"level":3,"title":"Behavior Entity","slug":"behavior-entity"},{"level":3,"title":"Resource Entity","slug":"resource-entity"},{"level":3,"title":"Geometry","slug":"geometry"},{"level":3,"title":"Render Controller (Optional)","slug":"render-controller-optional"},{"level":3,"title":"Texture (Optional)","slug":"texture-optional"}],"relativePath":"entities/dummy-entities.md"}',u={},c=n('<p>Dummy entities are invisible entities which are used behind the scenes for game-play purposes. Dummy entities are a very useful tool, and this document will cover some of the ways they are utilized, as well as showing how to set up the resource side of things.</p><h2 id="using-dummies" tabindex="-1">Using Dummies <a class="header-anchor" href="#using-dummies" aria-hidden="true">#</a></h2><p>This is a non-exhaustive list of how dummies can be used:</p><ul><li><strong>For data storage</strong>: by adding tags to the entity, we can use it as a &quot;game manager&quot;, much like Armor Stands used to be used.</li><li><strong>As a named entity:</strong> by name-tagging a dummy, and then using <code>execute</code> to select for it, you can make command-blocks <code>/say</code> with a pretty display name.</li><li><strong>As a location marker:</strong> you can run <code>execute</code> commands located at a dummy to get relative coordinates at a location.</li><li><strong>As a waypoint:</strong> by making entities which are aggressive to your dummy, you can pathfind entities to any location by placing a dummy there.</li></ul><h2 id="creating-dummies" tabindex="-1">Creating Dummies <a class="header-anchor" href="#creating-dummies" aria-hidden="true">#</a></h2><h3 id="behavior-entity" tabindex="-1">Behavior Entity <a class="header-anchor" href="#behavior-entity" aria-hidden="true">#</a></h3><p>You can use whatever behaviors you like, but here is a good template. The important aspects are: no damage, and can&#39;t be pushed.</p>',7),i=e("BP/entities/dummy.json"),m=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:dummy&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:custom_hit_test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;hitboxes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;pivot&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
						<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:pushable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;is_pushable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token property">&quot;is_pushable_by_piston&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0.0001</span><span class="token punctuation">,</span>
				<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0.0001</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>If you want to disable collision at all (so you can place a block at it&#39;s position), you can use arrow runtime identifier, however, there can be some side effects.</p><h3 id="resource-entity" tabindex="-1">Resource Entity <a class="header-anchor" href="#resource-entity" aria-hidden="true">#</a></h3>`,3),b=e("RP/entity/dummy.json"),k=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:client_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:dummy&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity_alphatest&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.dummy&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;controller.render.dummy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/entity/dummy&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="geometry" tabindex="-1">Geometry <a class="header-anchor" href="#geometry" aria-hidden="true">#</a></h3>`,2),d=e("RP/models/entity/dummy.json"),q=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.dummy&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;texture_width&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
				<span class="token property">&quot;texture_height&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="render-controller-optional" tabindex="-1">Render Controller (Optional) <a class="header-anchor" href="#render-controller-optional" aria-hidden="true">#</a></h3>`,2),y=e("RP/render_controllers/dummy.json"),_=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.render.dummy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Texture.default&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="texture-optional" tabindex="-1">Texture (Optional) <a class="header-anchor" href="#texture-optional" aria-hidden="true">#</a></h3><p>You can either leave the texture location blank, or open the model in blockbench and create a blank texture.</p>`,3);function h(g,f,v,T,x,w){const s=r("CodeHeader");return l(),o("div",null,[c,a(s,null,{default:t(()=>[i]),_:1}),m,a(s,null,{default:t(()=>[b]),_:1}),k,a(s,null,{default:t(()=>[d]),_:1}),q,a(s,null,{default:t(()=>[y]),_:1}),_])}var S=p(u,[["render",h]]);export{C as __pageData,S as default};
