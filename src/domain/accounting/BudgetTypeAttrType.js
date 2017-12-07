
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetTypeType} from '../accounting/BudgetTypeType.js';


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
    