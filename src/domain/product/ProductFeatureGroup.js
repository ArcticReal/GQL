
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

import {ProductFeatureGroupApplType} from '../product/ProductFeatureGroupAppl.js';
import {ProductFeatureCatGrpApplType} from '../product/ProductFeatureCatGrpAppl.js';


const ProductFeatureGroupType = new GraphQLObjectType({
  name: 'ProductFeatureGroupType',
  description: 'Type for ProductFeatureGroup in product',

  fields: () => ({
    description: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    productFeatureGroupAppls: {
      type: new GraphQLList(ProductFeatureGroupApplType),
      args : {},
      resolve: (productFeatureGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureGroupAppls/find?productFeatureGroupId=${productFeatureGroup.productFeatureGroupId}`)
    },
    productFeatureCatGrpAppls: {
      type: new GraphQLList(ProductFeatureCatGrpApplType),
      args : {},
      resolve: (productFeatureGroup, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureCatGrpAppls/find?productFeatureGroupId=${productFeatureGroup.productFeatureGroupId}`)
    }
  })
});

export {ProductFeatureGroupType};
    




const ProductFeatureGroupInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureGroupInputType',
  description: 'input type for ProductFeatureGroup',

  fields: () => ({
    description: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString}
  })
});

export {ProductFeatureGroupInputType};
    