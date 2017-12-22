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

const ContactMechLinkResponseType = new GraphQLObjectType({
  name: 'ContactMechLinkResponseType',
  description: 'response type for ContactMechLink',

  fields: () => ({
    contactMechIdFrom: {type: GraphQLString},
    contactMechIdTo: {type: GraphQLString}
  })
});

export {ContactMechLinkResponseType};
    