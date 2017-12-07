
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';


const ProductCategoryRoleType = new GraphQLObjectType({
  name: 'ProductCategoryRoleType',
  description: 'Type for ProductCategoryRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRole, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategoryRole.productCategoryId}`)
    },
    comments: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productCategoryRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${productCategoryRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRoleType};
    