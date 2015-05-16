# extracto

[![NPM](https://nodei.co/npm/extracto.png)](https://nodei.co/npm/extracto/)

**work in progress**

goals:

- separate fs bindings from parsing code so extraction can work client-side
- provide simple api: `extract('sourcefile', 'targetdir', cb)`
- provide advanced api for partial extraction (using random access in zips and filtering in tars)
- provide single api that works for both tar and zip without abstracting over functionality without exposing it