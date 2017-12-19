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

const ContentMetaDataInputType = new GraphQLInputObjectType({
  name: 'ContentMetaDataInputType',
  description: 'input type for ContentMetaData',

  fields: () => ({
    contentId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    metaDataPredicateId: {type: GraphQLString},
    metaDataValue: {type: GraphQLString}
  })
});

export {ContentMetaDataInputType};
    