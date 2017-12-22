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

const ContainerTypeResponseType = new GraphQLObjectType({
  name: 'ContainerTypeResponseType',
  description: 'response type for ContainerType',

  fields: () => ({
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContainerTypeResponseType};
    