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

const ContactMechAttributeResponseType = new GraphQLObjectType({
  name: 'ContactMechAttributeResponseType',
  description: 'response type for ContactMechAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {ContactMechAttributeResponseType};
    