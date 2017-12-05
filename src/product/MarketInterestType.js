
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategory} from '../product/ProductCategory.js';
import {PartyClassificationGroup} from '../product/PartyClassificationGroup.js';


const MarketInterest = new GraphQLObjectType({
  name: 'MarketInterestType',
  description: 'Type for MarketInterest in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (marketInterest, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    partyClassificationGroup: {
      type: PartyClassificationGroupType,
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (marketInterest, args, {loaders}) => loaders.ofbizArray.load(`partyClassificationGroups/find?=${args.partyClassificationGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {MarketInterest};
    