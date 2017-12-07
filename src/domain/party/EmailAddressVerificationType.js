
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const EmailAddressVerificationType = new GraphQLObjectType({
  name: 'EmailAddressVerificationType',
  description: 'Type for EmailAddressVerification in party',

  fields: () => ({
    verifyHash: {type: GraphQLString},
    emailAddress: {type: GraphQLString},
    expireDate: {type: GraphQLString}
  })
});

export {EmailAddressVerificationType};
    