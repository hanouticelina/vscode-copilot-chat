/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';

(<any>globalThis).projectRoot = vscode.workspace.workspaceFolders?.at(0)?.uri.fsPath ?? __dirname;
