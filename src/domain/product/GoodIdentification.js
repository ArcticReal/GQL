
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

import {ProductType} from '../product/Product.js';
import {GoodIdentificationTypeType} from '../product/GoodIdentificationType.js';


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
      resolve: (goodIdentification, args, {loaders}) => loaders.ofbiz.load(`goodIdentificationTypes/find?goodIdentificationTypeId=${goodIdentification.goodIdentificationTypeId}`)
    },
    idValue: {type: GraphQLString}
  })
});

export {GoodIdentificationType};
    




const GoodIdentificationInputType = new GraphQLInputObjectType({
  name: 'GoodIdentificationInputType',
  description: 'input type for GoodIdentification in product',

  fields: () => ({
    productId: {type: GraphQLString},
    goodIdentificationTypeId: {type: GraphQLString},
    idValue: {type: GraphQLString}
  })
});

export {GoodIdentificationInputType};
    