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

const ValidContactMechRoleInputType = new GraphQLInputObjectType({
  name: 'ValidContactMechRoleInputType',
  description: 'input type for ValidContactMechRole',

  fields: () => ({
    contactMechTypeId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ValidContactMechRoleInputType};
    