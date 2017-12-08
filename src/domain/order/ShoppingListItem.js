
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

import {ShoppingListItemSurveyType} from '../order/ShoppingListItemSurvey.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {ProductType} from '../product/Product.js';


const ShoppingListItemType = new GraphQLObjectType({
  name: 'ShoppingListItemType',
  description: 'Type for ShoppingListItem in order',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    shoppingList: {
      type: ShoppingListType,
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingListItem, args, {loaders}) => loaders.ofbiz.load(`shoppingLists/find?shoppingListId=${shoppingListItem.shoppingListId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (shoppingListItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${shoppingListItem.productId}`)
    },
    reservPersons: {type: GraphQLFloat},
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    quantityPurchased: {type: GraphQLFloat},
    shoppingListItemSeqId: {type: GraphQLString},
    modifiedPrice: {type: GraphQLFloat},
    shoppingListItemSurveies: {
      type: new GraphQLList(ShoppingListItemSurveyType),
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingListItem, args, {loaders}) => loaders.ofbizArray.load(`shoppingListItemSurveys/find?shoppingListId=${shoppingListItem.shoppingListId}`)
    }
  })
});

export {ShoppingListItemType};
    




const ShoppingListItemInputType = new GraphQLInputObjectType({
  name: 'ShoppingListItemInputType',
  description: 'input type for ShoppingListItem in order',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    shoppingListId: {type: GraphQLString},
    productId: {type: GraphQLString},
    reservPersons: {type: GraphQLFloat},
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    quantityPurchased: {type: GraphQLFloat},
    shoppingListItemSeqId: {type: GraphQLString},
    modifiedPrice: {type: GraphQLFloat}
  })
});

export {ShoppingListItemInputType};
    