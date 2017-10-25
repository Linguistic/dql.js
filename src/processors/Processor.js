// @flow
import QueryBuilder from '../util/QueryBuilder';
import type { DocumentNode } from '../util/Types';

class Processor {
    _qb: QueryBuilder;

    constructor(queryBuilder: QueryBuilder) {
        if (typeof queryBuilder === 'undefined')
            throw new Error(
                'A QueryBuilder object is required to initialize a Processor'
            );

        this._qb = queryBuilder;
    }

    process(root: DocumentNode[], node: any, variables: {}, qb: QueryBuilder) {
        throw new Error('No process() method implemented for this class');
    }
}

export default Processor;
