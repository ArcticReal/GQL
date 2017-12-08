
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

import {VarianceReasonGlAccountType} from '../accounting/VarianceReasonGlAccount.js';
import {InventoryItemVarianceType} from '../product/InventoryItemVariance.js';


const VarianceReasonType = new GraphQLObjectType({
  name: 'VarianceReasonType',
  description: 'Type for VarianceReason in product',

  fields: () => ({
    varianceReasonId: {type: GraphQLString},
    description: {type: GraphQLString},
    varianceReasonGlAccounts: {
      type: new GraphQLList(VarianceReasonGlAccountType),
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (varianceReason, args, {loaders}) => loaders.ofbizArray.load(`varianceReasonGlAccounts/find?varianceReasonId=${varianceReason.varianceReasonId}`)
    },
    inventoryItemVariances: {
      type: new GraphQLList(InventoryItemVarianceType),
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (varianceReason, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemVariances/find?varianceReasonId=${varianceReason.varianceReasonId}`)
    }
  })
});

export {VarianceReasonType};
    




const VarianceReasonInputType = new GraphQLInputObjectType({
  name: 'VarianceReasonInputType',
  description: 'input type for VarianceReason in product',

  fields: () => ({
    varianceReasonId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {VarianceReasonInputType};
    