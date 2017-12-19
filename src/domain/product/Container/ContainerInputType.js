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

const ContainerInputType = new GraphQLInputObjectType({
  name: 'ContainerInputType',
  description: 'input type for Container',

  fields: () => ({
    containerId: {type: GraphQLString},
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityId: {type: GraphQLString}
  })
});

export {ContainerInputType};
    