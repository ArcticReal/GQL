
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {ShoppingListType} from '../../order/ShoppingList/ShoppingListType.js';


const ShoppingListWorkEffortType = new GraphQLObjectType({
  name: 'ShoppingListWorkEffortType',
  description: 'Type for ShoppingListWorkEffort in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (shoppingListWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${shoppingListWorkEffort.workEffortId}`)
    },
    shoppingList: {
      type: ShoppingListType,
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingListWorkEffort, args, {loaders}) => loaders.ofbiz.load(`order/shoppingLists/find?shoppingListId=${shoppingListWorkEffort.shoppingListId}`)
    }
  })
});

export {ShoppingListWorkEffortType};
    