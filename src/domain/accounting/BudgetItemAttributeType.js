
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetItemType} from '../accounting/BudgetItemType.js';


const BudgetItemAttributeType = new GraphQLObjectType({
  name: 'BudgetItemAttributeType',
  description: 'Type for BudgetItemAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetItemType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItemAttribute, args, {loaders}) => loaders.ofbiz.load(`budgetItems/find?budgetId=${budgetItemAttribute.budgetId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BudgetItemAttributeType};
    