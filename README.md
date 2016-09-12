# deepestMerge
[![Build Status](https://travis-ci.org/toddself/deepest-merge.svg?branch=master)](https://travis-ci.org/toddself/deepest-merge)

Deepely merges multiple objects together.

If the two keys are functions, composes a wrapper function which calls each function in line (right most first), passing in the final composed object as the context.

If the two keys are arrays, concatenates them together.

It the two keys are objects, recursively calls itself on those objects.

Else, the right most key "wins" and the key to the "left" is overwritten.

## Installation

`npm install deepest-merge`

## Example

```javascript

> var deepestMerge = require('deepest-merge');
> var test1 = false;
> var test2 = false;
> var src = {a: function(){
    test1 = true;
  }};
> var src2 = {a: function(){
    test2 = true;
  }};
> var merged = deepestMerge(src, src2);
> merged.a();
> test1
true
> test2
true
```

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="deepestMerge"><span class="type-signature"></span>deepestMerge<span class="signature">(arguments)</span><span class="type-signature"> &rarr; {object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Merge two objects together recursively, merging any nested objects as well
including arrays and functions.</p>
<p>If two key names match and the values aren't functions or arrays, the &quot;latest&quot;
key wins (right imporant). If the values are functions or arrays, the values
are merged -- either wrapped in a function which calls both functions in a row
supplying the final object as the context, or concatenated together with
<code>Array.concat</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>arguments</code></td>
<td class="type">
<span class="param-type">object</span>
</td>
<td class="attributes">
&lt;repeatable><br>
</td>
<td class="description last"><p>Objects you'd like to merge together</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/toddself/deepest-merge/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/toddself/deepest-merge/blob/master/index.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>merged object</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->
