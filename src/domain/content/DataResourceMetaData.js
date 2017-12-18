
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

import {DataResourceType} from '../content/DataResource.js';
import {MetaDataPredicateType} from '../content/MetaDataPredicate.js';


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
    




const DataResourceMetaDataInputType = new GraphQLInputObjectType({
  name: 'DataResourceMetaDataInputType',
  description: 'input type for DataResourceMetaData',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    metaDataPredicateId: {type: GraphQLString},
    metaDataValue: {type: GraphQLString}
  })
});

export {DataResourceMetaDataInputType};
    