
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

import {DataResourceMetaDataType} from '../content/DataResourceMetaData.js';
import {ContentMetaDataType} from '../content/ContentMetaData.js';


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
    




const MetaDataPredicateInputType = new GraphQLInputObjectType({
  name: 'MetaDataPredicateInputType',
  description: 'input type for MetaDataPredicate',

  fields: () => ({
    description: {type: GraphQLString},
    metaDataPredicateId: {type: GraphQLString}
  })
});

export {MetaDataPredicateInputType};
    