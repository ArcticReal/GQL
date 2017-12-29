
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
import {ProductType} from '../../product/Product/ProductType.js';


const ProductRoleType = new GraphQLObjectType({
  name: 'ProductRoleType',
  description: 'Type for ProductRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productRole, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productRole.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${productRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductRoleType};
    