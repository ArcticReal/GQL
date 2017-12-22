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

const DataResourceTypeResponseType = new GraphQLObjectType({
  name: 'DataResourceTypeResponseType',
  description: 'response type for DataResourceType',

  fields: () => ({
    dataResourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {DataResourceTypeResponseType};
    