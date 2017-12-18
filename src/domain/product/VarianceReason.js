
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
      args : {},
      resolve: (varianceReason, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/varianceReasonGlAccounts/find?varianceReasonId=${varianceReason.varianceReasonId}`)
    },
    inventoryItemVariances: {
      type: new GraphQLList(InventoryItemVarianceType),
      args : {},
      resolve: (varianceReason, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemVariances/find?varianceReasonId=${varianceReason.varianceReasonId}`)
    }
  })
});

export {VarianceReasonType};
    




const VarianceReasonInputType = new GraphQLInputObjectType({
  name: 'VarianceReasonInputType',
  description: 'input type for VarianceReason',

  fields: () => ({
    description: {type: GraphQLString},
    varianceReasonId: {type: GraphQLString}
  })
});

export {VarianceReasonInputType};
    