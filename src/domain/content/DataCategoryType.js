
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DataResourceType} from '../content/DataResourceType.js';


const DataCategoryType = new GraphQLObjectType({
  name: 'DataCategoryType',
  description: 'Type for DataCategory in content',

  fields: () => ({
    parentCategory: {
      type: DataCategoryType,
      args : {parentCategoryId: {type: GraphQLString}},
      resolve: (dataCategory, args, {loaders}) => loaders.ofbiz.load(`dataCategorys/find?dataCategoryId=${dataCategory.parentCategoryId}`)
    },
    dataCategoryId: {type: GraphQLString},
    categoryName: {type: GraphQLString},
    dataCategory: {
      type: new GraphQLList(DataCategoryType),
      args : {dataCategoryId: {type: GraphQLString}},
      resolve: (dataCategory, args, {loaders}) => loaders.ofbizArray.load(`dataCategorys/find?dataCategoryId=${dataCategory.dataCategoryId}`)
    },
    dataResource: {
      type: new GraphQLList(DataResourceType),
      args : {dataCategoryId: {type: GraphQLString}},
      resolve: (dataCategory, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?dataCategoryId=${dataCategory.dataCategoryId}`)
    }
  })
});

export {DataCategoryType};
    