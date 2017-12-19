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
    