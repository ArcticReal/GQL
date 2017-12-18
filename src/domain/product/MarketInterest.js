
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

import {ProductCategoryType} from '../product/ProductCategory.js';
import {PartyClassificationGroupType} from '../party/PartyClassificationGroup.js';


const MarketInterestType = new GraphQLObjectType({
  name: 'MarketInterestType',
  description: 'Type for MarketInterest in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (marketInterest, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${marketInterest.productCategoryId}`)
    },
    partyClassificationGroup: {
      type: PartyClassificationGroupType,
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (marketInterest, args, {loaders}) => loaders.ofbiz.load(`party/party/partyClassificationGroups/find?partyClassificationGroupId=${marketInterest.partyClassificationGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {MarketInterestType};
    




const MarketInterestInputType = new GraphQLInputObjectType({
  name: 'MarketInterestInputType',
  description: 'input type for MarketInterest',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {MarketInterestInputType};
    