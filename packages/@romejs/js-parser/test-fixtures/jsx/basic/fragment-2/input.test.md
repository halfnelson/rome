# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > fragment-2`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array [
		"jsx"
		"ts"
	]
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 23
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		ExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 22
					index: 22
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSXFragment {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 22
						index: 22
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				children: Array [
					JSXText {
						value: "Hi, I'm a string!"
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 19
								index: 19
								line: 1
							}
							start: Object {
								column: 2
								index: 2
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```
