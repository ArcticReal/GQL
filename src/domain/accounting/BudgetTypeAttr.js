
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

import {BudgetTypeType} from '../accounting/BudgetType.js';


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
    




const BudgetTypeAttrInputType = new GraphQLInputObjectType({
  name: 'BudgetTypeAttrInputType',
  description: 'input type for BudgetTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    budgetTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {BudgetTypeAttrInputType};
    