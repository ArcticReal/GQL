
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {ShoppingListType} from '../order/ShoppingList.js';


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
    




const ShoppingListWorkEffortInputType = new GraphQLInputObjectType({
  name: 'ShoppingListWorkEffortInputType',
  description: 'input type for ShoppingListWorkEffort in order',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    shoppingListId: {type: GraphQLString}
  })
});

export {ShoppingListWorkEffortInputType};
    