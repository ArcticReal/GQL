import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const VerifyType = new GraphQLObjectType({
  name: 'Verify',
  description: 'tries to verify the Hash',

  fields: () => ({
    message: { type: GraphQLString }
  })
});

const ResendVerificationType = new GraphQLObjectType({
  name: 'ResendVerification',
  description: 'resends the Verificationmal, in case it got lost somehow',

  fields: () => ({
    message: { type: GraphQLString }
  })
});

export { VerifyType, ResendVerificationType };
