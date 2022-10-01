import{_ as s,c as o,a,e as n,b as e,r,o as i}from"./404.md.ce3b5fb6.js";var l="/assets/images/knowledge/shaders/debugShader.gif";const T='{"title":"Shaders","description":"","frontmatter":{"title":"Shaders"},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Materials","slug":"materials"},{"level":3,"title":"Common material definition fields","slug":"common-material-definition-fields"},{"level":2,"title":"Troubleshooting","slug":"troubleshooting"},{"level":3,"title":"Shader doesn\u2019t change","slug":"shader-doesn\u2019t-change"},{"level":3,"title":"Compilation error","slug":"compilation-error"},{"level":3,"title":"Couldn\u2019t find constant buffer named: $Globals","slug":"couldn\u2019t-find-constant-buffer-named-globals"},{"level":2,"title":"Tips and tricks","slug":"tips-and-tricks"},{"level":3,"title":"Passing variables to the shader","slug":"passing-variables-to-the-shader"},{"level":3,"title":"Using time in shader","slug":"using-time-in-shader"},{"level":3,"title":"Camera direction towards the entity","slug":"camera-direction-towards-the-entity"},{"level":3,"title":"Debugging values","slug":"debugging-values"}],"relativePath":"concepts/shaders.md"}',d={},p=n('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The shaders on this page are incompatible with <a href="https://help.minecraft.net/hc/en-us/articles/360052771272-About-the-1-16-200-Update-for-Windows-10-" target="_blank" rel="noopener noreferrer">Render Dragon</a>. That means that they will not work on Windows and Console devices past 1.16.200, nor other devices past 1.18.30!</p></div><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Shaders are divided into 2 folders: <code>glsl</code> and <code>hlsl</code>. For shaders to work on every device, you need to code shaders in both languages. For testing on Windows, <code>hlsl</code> is enough. When rewriting shaders from one language to another, there are few things to change, like HLSL <code>float3</code> is <code>vec3</code> in GLSL. Mapping between those languages can be found <a href="https://anteru.net/blog/2016/mapping-between-HLSL-and-GLSL/" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="materials" tabindex="-1">Materials <a class="header-anchor" href="#materials" aria-hidden="true">#</a></h2><p>Vertex, fragments, and sometimes geometry shaders are combined with some options as materials and are required for custom shaders. To create new material, you need to create a file, which matches the name of the .material file in the vanilla resource pack. For example: <code>materials/particles.material</code>. Materials support inheritance by adding parent material after a colon. For example: <code>entity_alpha:entity_base</code></p><h3 id="common-material-definition-fields" tabindex="-1">Common material definition fields <a class="header-anchor" href="#common-material-definition-fields" aria-hidden="true">#</a></h3><table><thead><tr><th><strong>Field name</strong></th><th><strong>Description</strong></th><th><strong>Example value</strong></th><th><strong>Notes</strong></th></tr></thead><tbody><tr><td><code>vertexShader</code></td><td>Path to the shader relative to hlsl/glsl folder</td><td></td><td>For HLSL shader, <code>.hlsl</code> suffix is added.</td></tr><tr><td><code>fragmentShader</code></td><td>Path to the shader relative to hlsl/glsl folder</td><td></td><td>For HLSL shader, <code>.hlsl</code> suffix is added.</td></tr><tr><td><code>vertexFields</code></td><td>An array of fields passed to vertex shader</td><td></td><td>It&#39;s better to copy this field from vanilla material.</td></tr><tr><td><code>variants</code></td><td>An array of objects, which define variants of the material</td><td></td><td>It&#39;s better to copy this field from vanilla material.</td></tr><tr><td><code>+defines</code></td><td>An array of <code>#define</code> directives to add to the shader source</td><td></td><td>Useful for reusing shader, but changing some minor setting.</td></tr><tr><td><code>+states</code></td><td>An array of states to enable</td><td><code>[&quot;Blending&quot;, &quot;DisableAlphaWrite&quot;, &quot;DisableDepthWrite&quot;]</code></td><td>For OpenGL implementation, this is equivalent to <a href="https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glEnable.xml" target="_blank" rel="noopener noreferrer">glEnable</a> call.</td></tr><tr><td><code>-defines</code></td><td>An array of <code>#defines</code> directives to remove from inherited <code>+defines</code></td><td></td><td></td></tr><tr><td><code>+samplerStates</code></td><td>An array of objects, defining how texture at certain index is treated</td><td><code>{ &quot;samplerIndex&quot;: 0, &quot;textureFilter&quot;: &quot;Point&quot; }</code></td><td><code>textureFilter</code> specifies how to sample the texture and <code>textureWrap</code> specifies the behavior, when accessing outside of the texture dimensions.</td></tr><tr><td><code>msaaSupport</code></td><td>Multisample anti-aliasing support</td><td><code>Both</code></td><td></td></tr><tr><td><code>blendSrc</code></td><td>Specifies how the color source blending factors are computed</td><td><code>One</code></td><td>For OpenGL implementation, this is equivalent to <a href="https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml" target="_blank" rel="noopener noreferrer">glBlendFunc</a> call.</td></tr><tr><td><code>blendDst</code></td><td>Specifies how the color destination blending factors are computed</td><td><code>One</code></td><td>For OpenGL implementation, this is equivalent to <a href="https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml" target="_blank" rel="noopener noreferrer">glBlendFunc</a> call.</td></tr></tbody></table><p>Example:</p>',8),c=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;particle_debug&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;vertexShader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shaders/particle_generic.vertex&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;fragmentShader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shaders/particle_debug.fragment&quot;</span><span class="token punctuation">,</span>

			<span class="token property">&quot;vertexFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span> <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Position&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span> <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Color&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span> <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UV0&quot;</span> <span class="token punctuation">}</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>

			<span class="token property">&quot;+samplerStates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;samplerIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
					<span class="token property">&quot;textureFilter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Point&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>

			<span class="token property">&quot;msaaSupport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Both&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>For all the details about material files and possible field values, check <a href="https://github.com/stirante/bedrock-shader-schema/blob/master/materials.schema.json" target="_blank" rel="noopener noreferrer">material file JSON schema</a>.</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><h3 id="shader-doesn\u2019t-change" tabindex="-1">Shader doesn\u2019t change <a class="header-anchor" href="#shader-doesn\u2019t-change" aria-hidden="true">#</a></h3><p>Every time there is a change in the shader, you need to restart Minecraft to recompile the shader completely.</p><h3 id="compilation-error" tabindex="-1">Compilation error <a class="header-anchor" href="#compilation-error" aria-hidden="true">#</a></h3><p>When there is a shader compilation error, a line number is usually specified where the error occurred. You need to check a few lines above the one set in error because Minecraft adds <code>#define</code> directives before compilation.</p><h3 id="couldn\u2019t-find-constant-buffer-named-globals" tabindex="-1">Couldn\u2019t find constant buffer named: $Globals <a class="header-anchor" href="#couldn\u2019t-find-constant-buffer-named-globals" aria-hidden="true">#</a></h3><p>I couldn\u2019t accurately find the actual cause of this error, but it seems to be somehow connected to global variables. Removing them (initializing them in the <code>main</code> function or changing them to <code>#define</code> directives) seems to fix the problem.</p><h2 id="tips-and-tricks" tabindex="-1">Tips and tricks <a class="header-anchor" href="#tips-and-tricks" aria-hidden="true">#</a></h2><h3 id="passing-variables-to-the-shader" tabindex="-1">Passing variables to the shader <a class="header-anchor" href="#passing-variables-to-the-shader" aria-hidden="true">#</a></h3><p>You can pass variables to the shader from a particle or an entity by changing entity color. Input color is clamped to <code>&lt;0.0, 1.0&gt;</code>. To pass more significant values, you need to divide by max value (or at least some considerable number).</p><h3 id="using-time-in-shader" tabindex="-1">Using time in shader <a class="header-anchor" href="#using-time-in-shader" aria-hidden="true">#</a></h3><p><code>TIME</code> variable is a number of seconds as <code>float</code> and is global for all shaders. For time-based on particle lifetime, you need to pass this:</p>`,14),u=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:particle_appearance_tinting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;variable.particle_age/variable.particle_lifetime&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then in the shader, use <code>PSInput.color.r</code> as time, where <code>0.0</code> is particle birth and <code>1.0</code> is particle death.</p><h3 id="camera-direction-towards-the-entity" tabindex="-1">Camera direction towards the entity <a class="header-anchor" href="#camera-direction-towards-the-entity" aria-hidden="true">#</a></h3><p>For entity shaders, you can make the shader dependent on the camera direction towards the entity.</p><ul><li>Add to <code>PS_Input</code> in vertex and fragment shader new field</li></ul>`,5),h=e("div",{class:"language-"},[e("pre",null,[e("code",null,`float3 viewDir: POSITION;
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br")])],-1),m=e("ul",null,[e("li",null,"After that, add to vertex shader this line")],-1),b=n(`<div class="language-"><pre><code>PSInput.viewDir = normalize((mul(WORLD, mul(BONES[VSInput.boneId], float4(VSInput.position, 1)))).xyz);
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>In the fragment shader, use <code>PSInput.viewDir</code> to make changes depending on camera rotation</li></ul><h3 id="debugging-values" tabindex="-1">Debugging values <a class="header-anchor" href="#debugging-values" aria-hidden="true">#</a></h3><p>The easiest way to debug a value is to turn it into color and render it like this.</p>`,4),g=n(`<div class="language-"><pre><code>PSOutput.color = float4(PSInput.uv, 0., 1.);
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>This should create a red-green gradient, showing that the values of <code>uv</code> are between <code>&lt;0, 0&gt;</code> and <code>&lt;1, 1&gt;</code>.</p><p>You can use the debug shader I wrote <a href="http://mew.cx/drawtext/drawtext" target="_blank" rel="noopener noreferrer">based on this shader</a>. Right now, this shader will display values of the color passed to the shader. To display another value, change line 70 in hlsl shader to</p>`,3),f=n(`<div class="language-"><pre><code>int ascii = getFloatCharacter( cellIndex, &lt;float4 vector here&gt; );
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>GLSL version of debugging shader may crash Minecraft, use only for debugging.</p><p><a href="http://files.stirante.com/debugShader.zip" target="_blank" rel="noopener noreferrer">Download debug shader</a></p><p><img src="`+l+'" alt=""></p>',4);function _(v,k,w,q,y,S){const t=r("CodeHeader");return i(),o("div",null,[p,a(t),c,a(t),u,a(t),h,m,a(t),b,a(t),g,a(t),f])}var I=s(d,[["render",_]]);export{T as __pageData,I as default};
