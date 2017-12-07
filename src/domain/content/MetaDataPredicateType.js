
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DataResourceMetaDataType} from '../content/DataResourceMetaDataType.js';
import {ContentMetaDataType} from '../content/ContentMetaDataType.js';


const MetaDataPredicateType = new GraphQLObjectType({
  name: 'MetaDataPredicateType',
  description: 'Type for MetaDataPredicate in content',

  fields: () => ({
    metaDataPredicateId: {type: GraphQLString},
    description: {type: GraphQLString},
    dataResourceMetaData: {
      type: new GraphQLList(DataResourceMetaDataType),
      args : {metaDataPredicateId: {type: GraphQLString}},
      resolve: (metaDataPredicate, args, {loaders}) => loaders.ofbizArray.load(`dataResourceMetaDatas/find?metaDataPredicateId=${metaDataPredicate.metaDataPredicateId}`)
    },
    contentMetaData: {
      type: new GraphQLList(ContentMetaDataType),
      args : {metaDataPredicateId: {type: GraphQLString}},
      resolve: (metaDataPredicate, args, {loaders}) => loaders.ofbizArray.load(`contentMetaDatas/find?metaDataPredicateId=${metaDataPredicate.metaDataPredicateId}`)
    }
  })
});

export {MetaDataPredicateType};
    