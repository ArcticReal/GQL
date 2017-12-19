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

const RejectionReasonInputType = new GraphQLInputObjectType({
  name: 'RejectionReasonInputType',
  description: 'input type for RejectionReason',

  fields: () => ({
    description: {type: GraphQLString},
    rejectionId: {type: GraphQLString}
  })
});

export {RejectionReasonInputType};
    