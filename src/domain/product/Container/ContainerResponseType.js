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

const ContainerResponseType = new GraphQLObjectType({
  name: 'ContainerResponseType',
  description: 'response type for Container',

  fields: () => ({
    containerId: {type: GraphQLString},
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityId: {type: GraphQLString}
  })
});

export {ContainerResponseType};
    