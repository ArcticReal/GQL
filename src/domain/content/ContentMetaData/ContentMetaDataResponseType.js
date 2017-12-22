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

const ContentMetaDataResponseType = new GraphQLObjectType({
  name: 'ContentMetaDataResponseType',
  description: 'response type for ContentMetaData',

  fields: () => ({
    contentId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    metaDataPredicateId: {type: GraphQLString},
    metaDataValue: {type: GraphQLString}
  })
});

export {ContentMetaDataResponseType};
    