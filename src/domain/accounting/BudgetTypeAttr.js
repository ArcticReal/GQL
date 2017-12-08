
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
      resolve: (budgetTypeAttr, args, {loaders}) => loaders.ofbiz.load(`budgetTypes/find?budgetTypeId=${budgetTypeAttr.budgetTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BudgetTypeAttrType};
    




const BudgetTypeAttrInputType = new GraphQLInputObjectType({
  name: 'BudgetTypeAttrInputType',
  description: 'input type for BudgetTypeAttr in accounting',

  fields: () => ({
    budgetTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BudgetTypeAttrInputType};
    