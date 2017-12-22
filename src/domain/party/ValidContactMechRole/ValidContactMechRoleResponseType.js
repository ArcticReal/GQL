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

const ValidContactMechRoleResponseType = new GraphQLObjectType({
  name: 'ValidContactMechRoleResponseType',
  description: 'response type for ValidContactMechRole',

  fields: () => ({
    contactMechTypeId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ValidContactMechRoleResponseType};
    