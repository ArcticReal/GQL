
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

import {BudgetItemType} from '../../accounting/BudgetItem/BudgetItemType.js';


const BudgetItemAttributeType = new GraphQLObjectType({
  name: 'BudgetItemAttributeType',
  description: 'Type for BudgetItemAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budget: {
      type: BudgetItemType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetItemAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetItems/find?budgetId=${budgetItemAttribute.budgetId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BudgetItemAttributeType};
    