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

const RejectionReasonResponseType = new GraphQLObjectType({
  name: 'RejectionReasonResponseType',
  description: 'response type for RejectionReason',

  fields: () => ({
    description: {type: GraphQLString},
    rejectionId: {type: GraphQLString}
  })
});

export {RejectionReasonResponseType};
    