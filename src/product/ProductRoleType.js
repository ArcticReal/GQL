
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {PartyRole} from '../product/PartyRole.js';


const ProductRole = new GraphQLObjectType({
  name: 'ProductRoleType',
  description: 'Type for ProductRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productRole, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productRole, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?=${args.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductRole};
    