/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { CompiledSearchParam } from '../../FHIRSearchParametersRegistry';

// eslint-disable-next-line import/prefer-default-export
export function stringQuery(compiled: CompiledSearchParam, value: string): any {
    const fields = [compiled.path, `${compiled.path}.*`];
    return {
        multi_match: {
            fields,
            query: value,
            lenient: true,
            analyzer: 'keyword',
        },
    };
}
