
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

import {PartyRoleType} from '../party/PartyRole.js';
import {ProductCategoryType} from '../product/ProductCategory.js';


const ProductCategoryRoleType = new GraphQLObjectType({
  name: 'ProductCategoryRoleType',
  description: 'Type for ProductCategoryRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRole, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productCategoryRole.productCategoryId}`)
    },
    comments: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productCategoryRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${productCategoryRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRoleType};
    




const ProductCategoryRoleInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryRoleInputType',
  description: 'input type for ProductCategoryRole',

  fields: () => ({
    comments: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRoleInputType};
    