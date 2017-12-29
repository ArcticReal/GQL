
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

import {ProductType} from '../../product/Product/ProductType.js';
import {GoodIdentificationTypeType} from '../../product/GoodIdentificationType/GoodIdentificationTypeType.js';


const GoodIdentificationType = new GraphQLObjectType({
  name: 'GoodIdentificationType',
  description: 'Type for GoodIdentification in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (goodIdentification, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${goodIdentification.productId}`)
    },
    goodentificationType: {
      type: GoodIdentificationTypeType,
      args : {goodIdentificationTypeId: {type: GraphQLString}},
      resolve: (goodIdentification, args, {loaders}) => loaders.ofbiz.load(`product/goodIdentification/goodIdentificationTypes/find?goodIdentificationTypeId=${goodIdentification.goodIdentificationTypeId}`)
    },
    idValue: {type: GraphQLString}
  })
});

export {GoodIdentificationType};
    