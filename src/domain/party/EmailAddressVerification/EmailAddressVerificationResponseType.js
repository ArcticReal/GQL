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

const EmailAddressVerificationResponseType = new GraphQLObjectType({
  name: 'EmailAddressVerificationResponseType',
  description: 'response type for EmailAddressVerification',

  fields: () => ({
    emailAddress: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    verifyHash: {type: GraphQLString}
  })
});

export {EmailAddressVerificationResponseType};
    