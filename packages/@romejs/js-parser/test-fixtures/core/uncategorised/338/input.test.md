# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 338`

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
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 13
			index: 13
			line: 1
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
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: ObjectExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 12
						index: 12
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				properties: Array [
					ObjectProperty {
						key: StaticPropertyKey {
							value: NumericLiteral {
								value: 1
								format: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 3
										index: 3
										line: 1
									}
									start: Object {
										column: 2
										index: 2
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 3
									line: 1
								}
								start: Object {
									column: 2
									index: 2
									line: 1
								}
							}
						}
						value: BinaryExpression {
							operator: "/"
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 11
									index: 11
									line: 1
								}
								start: Object {
									column: 5
									index: 5
									line: 1
								}
							}
							left: ObjectExpression {
								properties: Array []
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 7
										index: 7
										line: 1
									}
									start: Object {
										column: 5
										index: 5
										line: 1
									}
								}
							}
							right: NumericLiteral {
								value: 2
								format: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 11
										index: 11
										line: 1
									}
									start: Object {
										column: 10
										index: 10
										line: 1
									}
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 11
								index: 11
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
