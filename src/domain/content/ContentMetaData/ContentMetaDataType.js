
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

import {ContentType} from '../../content/Content/ContentType.js';
import {MetaDataPredicateType} from '../../content/MetaDataPredicate/MetaDataPredicateType.js';


const ContentMetaDataType = new GraphQLObjectType({
  name: 'ContentMetaDataType',
  description: 'Type for ContentMetaData in content',

  fields: () => ({
    dataSourceId: {type: GraphQLString},
    metaDataValue: {type: GraphQLString},
    metaDataPredicate: {
      type: MetaDataPredicateType,
      args : {metaDataPredicateId: {type: GraphQLString}},
      resolve: (contentMetaData, args, {loaders}) => loaders.ofbiz.load(`content/metaDataPredicates/find?metaDataPredicateId=${contentMetaData.metaDataPredicateId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentMetaData, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${contentMetaData.contentId}`)
    }
  })
});

export {ContentMetaDataType};
    