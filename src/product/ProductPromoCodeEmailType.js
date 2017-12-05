
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoCode} from '../product/ProductPromoCode.js';


const ProductPromoCodeEmail = new GraphQLObjectType({
  name: 'ProductPromoCodeEmailType',
  description: 'Type for ProductPromoCodeEmail in product',

  fields: () => ({
    emailAddress: {type: GraphQLString},
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCodeEmail, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodes/find?=${args.productPromoCodeId}`)
    }
  })
});

export {ProductPromoCodeEmail};
    