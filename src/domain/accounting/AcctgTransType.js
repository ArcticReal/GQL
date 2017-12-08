
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

import {AcctgTransTypeAttrType} from '../accounting/AcctgTransTypeAttr.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';


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
    acctgTransTypeAttrs: {
      type: new GraphQLList(AcctgTransTypeAttrType),
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransTypeAttrs/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    },
    acctgTransTypes: {
      type: new GraphQLList(AcctgTransTypeType),
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTransType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransTypes/find?acctgTransTypeId=${acctgTransType.acctgTransTypeId}`)
    }
  })
});

export {AcctgTransTypeType};
    




const AcctgTransTypeInputType = new GraphQLInputObjectType({
  name: 'AcctgTransTypeInputType',
  description: 'input type for AcctgTransType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    acctgTransTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {AcctgTransTypeInputType};
    