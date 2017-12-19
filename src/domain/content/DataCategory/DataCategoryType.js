
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

import {DataResourceType} from '../../content/DataResource/DataResourceType.js';


const DataCategoryType = new GraphQLObjectType({
  name: 'DataCategoryType',
  description: 'Type for DataCategory in content',

  fields: () => ({
    parentCategory: {
      type: DataCategoryType,
      args : {parentCategoryId: {type: GraphQLString}},
      resolve: (dataCategory, args, {loaders}) => loaders.ofbiz.load(`content/dataCategorys/find?dataCategoryId=${dataCategory.parentCategoryId}`)
    },
    dataCategoryId: {type: GraphQLString},
    categoryName: {type: GraphQLString},
    dataCategories: {
      type: new GraphQLList(DataCategoryType),
      args : {},
      resolve: (dataCategory, args, {loaders}) => loaders.ofbizArray.load(`content/dataCategorys/find?dataCategoryId=${dataCategory.dataCategoryId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {},
      resolve: (dataCategory, args, {loaders}) => loaders.ofbizArray.load(`content/dataResources/find?dataCategoryId=${dataCategory.dataCategoryId}`)
    }
  })
});

export {DataCategoryType};
    