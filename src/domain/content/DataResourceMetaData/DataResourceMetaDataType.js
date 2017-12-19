
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
import {MetaDataPredicateType} from '../../content/MetaDataPredicate/MetaDataPredicateType.js';


const DataResourceMetaDataType = new GraphQLObjectType({
  name: 'DataResourceMetaDataType',
  description: 'Type for DataResourceMetaData in content',

  fields: () => ({
    dataSourceId: {type: GraphQLString},
    metaDataValue: {type: GraphQLString},
    metaDataPredicate: {
      type: MetaDataPredicateType,
      args : {metaDataPredicateId: {type: GraphQLString}},
      resolve: (dataResourceMetaData, args, {loaders}) => loaders.ofbiz.load(`content/metaDataPredicates/find?metaDataPredicateId=${dataResourceMetaData.metaDataPredicateId}`)
    },
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResourceMetaData, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${dataResourceMetaData.dataResourceId}`)
    }
  })
});

export {DataResourceMetaDataType};
    