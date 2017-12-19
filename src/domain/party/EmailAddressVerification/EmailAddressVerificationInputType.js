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

const EmailAddressVerificationInputType = new GraphQLInputObjectType({
  name: 'EmailAddressVerificationInputType',
  description: 'input type for EmailAddressVerification',

  fields: () => ({
    emailAddress: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    verifyHash: {type: GraphQLString}
  })
});

export {EmailAddressVerificationInputType};
    