
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {ShoppingListType} from '../order/ShoppingListType.js';


const ShoppingListWorkEffortType = new GraphQLObjectType({
  name: 'ShoppingListWorkEffortType',
  description: 'Type for ShoppingListWorkEffort in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (shoppingListWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${shoppingListWorkEffort.workEffortId}`)
    },
    shoppingList: {
      type: ShoppingListType,
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingListWorkEffort, args, {loaders}) => loaders.ofbiz.load(`shoppingLists/find?shoppingListId=${shoppingListWorkEffort.shoppingListId}`)
    }
  })
});

export {ShoppingListWorkEffortType};
    