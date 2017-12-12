
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

import {FinAccountTypeType} from '../accounting/FinAccountType.js';


const FinAccountTypeAttrType = new GraphQLObjectType({
  name: 'FinAccountTypeAttrType',
  description: 'Type for FinAccountTypeAttr in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountType: {
      type: FinAccountTypeType,
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTypes/find?finAccountTypeId=${finAccountTypeAttr.finAccountTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTypeAttrType};
    




const FinAccountTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FinAccountTypeAttrInputType',
  description: 'input type for FinAccountTypeAttr in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTypeAttrInputType};
    