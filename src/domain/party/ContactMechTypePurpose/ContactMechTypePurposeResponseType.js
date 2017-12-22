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

const ContactMechTypePurposeResponseType = new GraphQLObjectType({
  name: 'ContactMechTypePurposeResponseType',
  description: 'response type for ContactMechTypePurpose',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString}
  })
});

export {ContactMechTypePurposeResponseType};
    