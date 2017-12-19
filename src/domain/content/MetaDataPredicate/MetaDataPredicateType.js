
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

import {DataResourceMetaDataType} from '../../content/DataResourceMetaData/DataResourceMetaDataType.js';
import {ContentMetaDataType} from '../../content/ContentMetaData/ContentMetaDataType.js';


const MetaDataPredicateType = new GraphQLObjectType({
  name: 'MetaDataPredicateType',
  description: 'Type for MetaDataPredicate in content',

  fields: () => ({
    metaDataPredicateId: {type: GraphQLString},
    description: {type: GraphQLString},
    dataResourceMetaDatas: {
      type: new GraphQLList(DataResourceMetaDataType),
      args : {},
      resolve: (metaDataPredicate, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourceMetaDatas/find?metaDataPredicateId=${metaDataPredicate.metaDataPredicateId}`)
    },
    contentMetaDatas: {
      type: new GraphQLList(ContentMetaDataType),
      args : {},
      resolve: (metaDataPredicate, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentMetaDatas/find?metaDataPredicateId=${metaDataPredicate.metaDataPredicateId}`)
    }
  })
});

export {MetaDataPredicateType};
    