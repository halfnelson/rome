/**
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import {descriptions} from "@romejs/diagnostics";
import {hasJSXAttribute, isJSXElement} from "@romejs/js-ast-utils";
import {AnyNode} from "@romejs/js-ast";
import {Path} from "@romejs/js-compiler";

function jsxIframeMissingTitle(node: AnyNode) {
	return isJSXElement(node, "iframe") && !hasJSXAttribute(node, "title");
}

export default {
	name: "jsxA11yIframeHasTitle",

	enter(path: Path): AnyNode {
		const {node} = path;

		if (jsxIframeMissingTitle(node)) {
			path.context.addNodeDiagnostic(
				node,
				descriptions.LINT.REACT_JSX_A11Y_IFRAME_HAS_TITLE,
			);
		}

		return node;
	},
};
