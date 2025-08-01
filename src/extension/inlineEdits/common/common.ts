/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IDisposable, toDisposable } from '../../../util/vs/base/common/lifecycle';

export function createTimeout(ms: number, cb: () => void): IDisposable {
	const t = setTimeout(cb, ms);
	return toDisposable(() => clearTimeout(t));
}
