
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';


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
    