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

const DataResourceMetaDataResponseType = new GraphQLObjectType({
  name: 'DataResourceMetaDataResponseType',
  description: 'response type for DataResourceMetaData',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    metaDataPredicateId: {type: GraphQLString},
    metaDataValue: {type: GraphQLString}
  })
});

export {DataResourceMetaDataResponseType};
    