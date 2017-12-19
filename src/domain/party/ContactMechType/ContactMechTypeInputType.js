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

const ContactMechTypeInputType = new GraphQLInputObjectType({
  name: 'ContactMechTypeInputType',
  description: 'input type for ContactMechType',

  fields: () => ({
    contactMechTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {ContactMechTypeInputType};
    