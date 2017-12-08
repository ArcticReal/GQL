
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

import {ProductMaintType} from '../product/ProductMaint.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaint.js';


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
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    },
    productMaintTypes: {
      type: new GraphQLList(ProductMaintTypeType),
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`productMaintTypes/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    }
  })
});

export {ProductMaintTypeType};
    




const ProductMaintTypeInputType = new GraphQLInputObjectType({
  name: 'ProductMaintTypeInputType',
  description: 'input type for ProductMaintType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString}
  })
});

export {ProductMaintTypeInputType};
    