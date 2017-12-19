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

const ContactMechLinkInputType = new GraphQLInputObjectType({
  name: 'ContactMechLinkInputType',
  description: 'input type for ContactMechLink',

  fields: () => ({
    contactMechIdFrom: {type: GraphQLString},
    contactMechIdTo: {type: GraphQLString}
  })
});

export {ContactMechLinkInputType};
    