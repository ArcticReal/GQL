
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AcctgTransTypeAttrType} from '../accounting/AcctgTransTypeAttrType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';


const AcctgTransTypeType = new GraphQLObjectType({
  name: 'AcctgTransTypeType',
  description: 'Type for AcctgTransType in accounting',

  fields: () => ({
    parentType: {
      type: AcctgTransTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbiz.load(`acctgTransTypes/find?acctgTransTypeId=${acctgTransType.parentTypeId}`)
    },
    acctgTransTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    acctgTransTypeAttr: {
      type: new GraphQLList(AcctgTransTypeAttrType),
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransTypeAttrs/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    },
    acctgTransType: {
      type: new GraphQLList(AcctgTransTypeType),
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransTypes/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    }
  })
});

export {AcctgTransTypeType};
    