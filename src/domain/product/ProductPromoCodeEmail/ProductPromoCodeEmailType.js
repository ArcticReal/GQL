
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

import {ProductPromoCodeType} from '../../product/ProductPromoCode/ProductPromoCodeType.js';


const ProductPromoCodeEmailType = new GraphQLObjectType({
  name: 'ProductPromoCodeEmailType',
  description: 'Type for ProductPromoCodeEmail in product',

  fields: () => ({
    emailAddress: {type: GraphQLString},
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCodeEmail, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromoCodes/find?productPromoCodeId=${productPromoCodeEmail.productPromoCodeId}`)
    }
  })
});

export {ProductPromoCodeEmailType};
    