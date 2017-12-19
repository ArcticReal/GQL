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

const DataResourceTypeInputType = new GraphQLInputObjectType({
  name: 'DataResourceTypeInputType',
  description: 'input type for DataResourceType',

  fields: () => ({
    dataResourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {DataResourceTypeInputType};
    