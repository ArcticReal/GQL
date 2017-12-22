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

const ContactMechTypeResponseType = new GraphQLObjectType({
  name: 'ContactMechTypeResponseType',
  description: 'response type for ContactMechType',

  fields: () => ({
    contactMechTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {ContactMechTypeResponseType};
    