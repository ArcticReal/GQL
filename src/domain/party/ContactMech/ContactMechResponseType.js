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

const ContactMechResponseType = new GraphQLObjectType({
  name: 'ContactMechResponseType',
  description: 'response type for ContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    infoString: {type: GraphQLString}
  })
});

export {ContactMechResponseType};
    