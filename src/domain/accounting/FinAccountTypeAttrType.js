
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FinAccountTypeType} from '../accounting/FinAccountTypeType.js';


const FinAccountTypeAttrType = new GraphQLObjectType({
  name: 'FinAccountTypeAttrType',
  description: 'Type for FinAccountTypeAttr in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountType: {
      type: FinAccountTypeType,
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountTypeAttr, args, {loaders}) => loaders.ofbiz.load(`finAccountTypes/find?finAccountTypeId=${finAccountTypeAttr.finAccountTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {FinAccountTypeAttrType};
    