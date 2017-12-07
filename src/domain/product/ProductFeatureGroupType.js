
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureGroupApplType} from '../product/ProductFeatureGroupApplType.js';
import {ProductFeatureCatGrpApplType} from '../product/ProductFeatureCatGrpApplType.js';


const ProductFeatureGroupType = new GraphQLObjectType({
  name: 'ProductFeatureGroupType',
  description: 'Type for ProductFeatureGroup in product',

  fields: () => ({
    description: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    productFeatureGroupAppl: {
      type: new GraphQLList(ProductFeatureGroupApplType),
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureGroup, args, {loaders}) => loaders.ofbizArray.load(`productFeatureGroupAppls/find?productFeatureGroupId=${productFeatureGroup.productFeatureGroupId}`)
    },
    productFeatureCatGrpAppl: {
      type: new GraphQLList(ProductFeatureCatGrpApplType),
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureGroup, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCatGrpAppls/find?productFeatureGroupId=${productFeatureGroup.productFeatureGroupId}`)
    }
  })
});

export {ProductFeatureGroupType};
    