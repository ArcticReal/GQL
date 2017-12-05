
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureCategory} from '../product/ProductFeatureCategory.js';


const ProductFeatureCategory = new GraphQLObjectType({
  name: 'ProductFeatureCategoryType',
  description: 'Type for ProductFeatureCategory in product',

  fields: () => ({
    productFeatureCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentCategory: {
      type: ProductFeatureCategoryType,
      args : {parentCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCategorys/find?productFeatureCategoryId=${args.parentCategoryId}`)
    }
  })
});

export {ProductFeatureCategory};
    