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

const ContainerTypeInputType = new GraphQLInputObjectType({
  name: 'ContainerTypeInputType',
  description: 'input type for ContainerType',

  fields: () => ({
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContainerTypeInputType};
    