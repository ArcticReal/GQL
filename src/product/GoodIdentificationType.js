
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
import {GoodIdentificationType} from '../product/GoodIdentificationType.js';


const GoodIdentification = new GraphQLObjectType({
  name: 'GoodIdentificationType',
  description: 'Type for GoodIdentification in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (goodIdentification, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    goodentificationType: {
      type: GoodIdentificationTypeType,
      args : {goodIdentificationTypeId: {type: GraphQLString}},
      resolve: (goodIdentification, args, {loaders}) => loaders.ofbizArray.load(`goodIdentificationTypes/find?=${args.goodIdentificationTypeId}`)
    },
    idValue: {type: GraphQLString}
  })
});

export {GoodIdentification};
    