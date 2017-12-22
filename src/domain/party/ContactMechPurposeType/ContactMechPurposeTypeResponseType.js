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

const ContactMechPurposeTypeResponseType = new GraphQLObjectType({
  name: 'ContactMechPurposeTypeResponseType',
  description: 'response type for ContactMechPurposeType',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactMechPurposeTypeResponseType};
    