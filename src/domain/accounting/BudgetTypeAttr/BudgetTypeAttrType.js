
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

import {BudgetTypeType} from '../../accounting/BudgetType/BudgetTypeType.js';


const BudgetTypeAttrType = new GraphQLObjectType({
  name: 'BudgetTypeAttrType',
  description: 'Type for BudgetTypeAttr in accounting',

  fields: () => ({
    budgetType: {
      type: BudgetTypeType,
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budgetTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetTypes/find?budgetTypeId=${budgetTypeAttr.budgetTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BudgetTypeAttrType};
    