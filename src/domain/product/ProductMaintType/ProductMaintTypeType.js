
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

import {ProductMaintType} from '../../product/ProductMaint/ProductMaintType.js';
import {FixedAssetMaintType} from '../../accounting/FixedAssetMaint/FixedAssetMaintType.js';


const ProductMaintTypeType = new GraphQLObjectType({
  name: 'ProductMaintTypeType',
  description: 'Type for ProductMaintType in product',

  fields: () => ({
    parentType: {
      type: ProductMaintTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbiz.load(`product/product/productMaintTypes/find?productMaintTypeId=${productMaintType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString},
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaints/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productMaints/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    },
    productMaintTypes: {
      type: new GraphQLList(ProductMaintTypeType),
      args : {},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productMaintTypes/find?productMaintTypeId=${productMaintType.productMaintTypeId}`)
    }
  })
});

export {ProductMaintTypeType};
    