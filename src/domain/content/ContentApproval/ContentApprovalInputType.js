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

const ContentApprovalInputType = new GraphQLInputObjectType({
  name: 'ContentApprovalInputType',
  description: 'input type for ContentApproval',

  fields: () => ({
    approvalDate: {type: GraphQLString},
    approvalStatusId: {type: GraphQLString},
    comments: {type: GraphQLString},
    contentApprovalId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    contentRevisionSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ContentApprovalInputType};
    