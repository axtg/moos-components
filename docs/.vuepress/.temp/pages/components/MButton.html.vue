<template><h1 id="mbutton" tabindex="-1"><a class="header-anchor" href="#mbutton" aria-hidden="true">#</a> <strong>MButton</strong></h1>
<p><strong>Author:</strong> Xander Groesbeek<br>
<strong>Description:</strong><br>
The custom HTML <code v-pre>&lt;MButton /&gt;</code> component.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> <strong>Usage</strong></h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Call to action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MButton</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> <strong>Result</strong></h2>
<MButton>Call to action</MButton>
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> <strong>Slots</strong></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>default</code></td>
<td>Use this slot to set the label</td>
</tr>
</tbody>
</table>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <strong>Props</strong></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>type</code> <em>required</em></td>
<td><code v-pre>String</code></td>
<td>Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type.</td>
<td><code v-pre>&quot;submit&quot;</code></td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td><code v-pre>Boolean</code></td>
<td>This Boolean property indicates that the user cannot interact with the control.</td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
</template>
