
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

import {BudgetItemTypeType} from '../../accounting/BudgetItemType/BudgetItemTypeType.js';


const BudgetItemTypeAttrType = new GraphQLObjectType({
  name: 'BudgetItemTypeAttrType',
  description: 'Type for BudgetItemTypeAttr in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    budgetItemType: {
      type: BudgetItemTypeType,
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetItemTypes/find?budgetItemTypeId=${budgetItemTypeAttr.budgetItemTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {BudgetItemTypeAttrType};
    