
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductMaintType} from '../product/ProductMaintType.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';


const ProductMaintTypeType = new GraphQLObjectType({
  name: 'ProductMaintTypeType',
  description: 'Type for ProductMaintType in product',

  fields: () => ({
    parentType: {
      type: ProductMaintTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbiz.load(`productMaintTypes/find?productMaintTypeId=${productMaintType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString},
    fixedAssetMaint: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    },
    productMaint: {
      type: new GraphQLList(ProductMaintType),
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    },
    productMaintType: {
      type: new GraphQLList(ProductMaintTypeType),
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`productMaintTypes/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    }
  })
});

export {ProductMaintTypeType};
    