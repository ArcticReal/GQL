
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {VarianceReasonGlAccountType} from '../accounting/VarianceReasonGlAccountType.js';
import {InventoryItemVarianceType} from '../product/InventoryItemVarianceType.js';


const VarianceReasonType = new GraphQLObjectType({
  name: 'VarianceReasonType',
  description: 'Type for VarianceReason in product',

  fields: () => ({
    varianceReasonId: {type: GraphQLString},
    description: {type: GraphQLString},
    varianceReasonGlAccount: {
      type: new GraphQLList(VarianceReasonGlAccountType),
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (varianceReason, args, {loaders}) => loaders.ofbizArray.load(`varianceReasonGlAccounts/find?varianceReasonId=${varianceReason.varianceReasonId}`)
    },
    inventoryItemVariance: {
      type: new GraphQLList(InventoryItemVarianceType),
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (varianceReason, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemVariances/find?varianceReasonId=${varianceReason.varianceReasonId}`)
    }
  })
});

export {VarianceReasonType};
    