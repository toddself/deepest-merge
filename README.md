# deepestMerge
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


*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->