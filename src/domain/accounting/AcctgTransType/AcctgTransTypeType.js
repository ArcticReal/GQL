
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AcctgTransTypeAttrType} from '../../accounting/AcctgTransTypeAttr/AcctgTransTypeAttrType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';


const AcctgTransTypeType = new GraphQLObjectType({
  name: 'AcctgTransTypeType',
  description: 'Type for AcctgTransType in accounting',

  fields: () => ({
    parentType: {
      type: AcctgTransTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTrans/acctgTransTypes/find?acctgTransTypeId=${acctgTransType.parentTypeId}`)
    },
    acctgTransTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    acctgTransTypeAttrs: {
      type: new GraphQLList(AcctgTransTypeAttrType),
      args : {},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransTypeAttrs/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    },
    acctgTransTypes: {
      type: new GraphQLList(AcctgTransTypeType),
      args : {},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransTypes/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    }
  })
});

export {AcctgTransTypeType};
    