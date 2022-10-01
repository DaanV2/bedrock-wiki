import{_ as o,c as r,a as t,w as e,b as n,d as s,e as p,r as l,o as u}from"./404.md.ce3b5fb6.js";const P='{"title":"Heightmap Noise","description":"","frontmatter":{"title":"Heightmap Noise","category":"Tutorials","tags":["experimental","tutorial"],"mention":["Apex360"]},"headers":[{"level":2,"title":"Single Block Feature","slug":"single-block-feature"},{"level":2,"title":"Scatter Feature","slug":"scatter-feature"},{"level":2,"title":"Feature Rule","slug":"feature-rule"}],"relativePath":"world-generation/heightmap-noise.md"}',c={},i=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"This tutorial assumes you have a basic understanding of molang, features and feature rules.")],-1),k=n("p",null,[s("In this tutorial we're gonna see how we can make noise based terrain using the "),n("code",null,"q.noise"),s(" molang query.")],-1),b=n("h2",{id:"single-block-feature",tabindex:"-1"},[s("Single Block Feature "),n("a",{class:"header-anchor",href:"#single-block-feature","aria-hidden":"true"},"#")],-1),m=n("p",null,"First we will define the single block feature. It will define the block that is going to be generated. For this tutorial I'll use stone.",-1),d=s("BP/features/stone_feature.json"),q=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:single_block_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:stone_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;places_block&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;enforce_survivability_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		<span class="token property">&quot;enforce_placement_rules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="scatter-feature" tabindex="-1">Scatter Feature <a class="header-anchor" href="#scatter-feature" aria-hidden="true">#</a></h2><p>The scatter feature is the main feature which we&#39;ll be using to generate the terrain.</p>`,3),h=s("BP/features/column.json"),_=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:scatter_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:column&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token string">&quot;t.height=64+(q.noise(v.originz/64,v.originx/64))*16; return t.height;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:stone_feature&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-64</span><span class="token punctuation">,</span> <span class="token string">&quot;t.height&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fixed_grid&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Let me explain whats happening in the <code>iterations</code>: In the iterations we&#39;ve defined a temp <code>t.height</code> in which we&#39;ve defined our main noise function. In <code>t.height</code> the value that we&#39;re adding first is the base height, basically the height at which the function starts. After that we&#39;re querying perlin using the <code>q.noise</code> query which returns values ranging from -1 to 1 and dividing that by a value which smooths out the function. Then we&#39;re multiplying the whole function by a value which in simple words is basically the variation in the terrain.</p><p>So what&#39;s happening here is that we are getting values from the <code>t.height</code> temp and assigning them to the y extent ranging from -64 to the value thus generating a column. Now this value is going to vary column by column but not in a random way as <code>q.noise</code> queryies Perlin noise, meaning the values are relative to each other. So instead of getting values like 64,69,45,100,7,56 we are getting values like 64,65,66,68,69,68,66,65 and so on.</p><h2 id="feature-rule" tabindex="-1">Feature Rule <a class="header-anchor" href="#feature-rule" aria-hidden="true">#</a></h2>`,4),g=s("BP/feature_rules/column_grid_placement.json"),f=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:column_grid_placement&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:column&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first_pass&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overworld&quot;</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overworld_generation&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">256</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fixed_grid&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fixed_grid&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>In this we have set the <code>iteration</code> to 256 as the area of a whole chunk is 256 (16x16) to make the columns generate in the whole chunk.</p><p>And our custom noise based terrain is finished! Feel free to mess with the values.</p>`,3);function y(v,w,T,x,S,I){const a=l("CodeHeader");return u(),r("div",null,[i,k,b,m,t(a,null,{default:e(()=>[d]),_:1}),q,t(a,null,{default:e(()=>[h]),_:1}),_,t(a,null,{default:e(()=>[g]),_:1}),f])}var N=o(c,[["render",y]]);export{P as __pageData,N as default};
