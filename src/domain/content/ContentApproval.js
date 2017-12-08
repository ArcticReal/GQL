
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

import {PartyType} from '../party/Party.js';
import {RoleTypeType} from '../party/RoleType.js';
import {ContentType} from '../content/Content.js';


const ContentApprovalType = new GraphQLObjectType({
  name: 'ContentApprovalType',
  description: 'Type for ContentApproval in content',

  fields: () => ({
    contentApprovalId: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (contentApproval, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${contentApproval.roleTypeId}`)
    },
    approvalDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentApproval, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${contentApproval.contentId}`)
    },
    contentRevisionSeqId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (contentApproval, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${contentApproval.partyId}`)
    },
    approvalStatusId: {type: GraphQLString}
  })
});

export {ContentApprovalType};
    




const ContentApprovalInputType = new GraphQLInputObjectType({
  name: 'ContentApprovalInputType',
  description: 'input type for ContentApproval in content',

  fields: () => ({
    contentApprovalId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    approvalDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    contentId: {type: GraphQLString},
    contentRevisionSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    approvalStatusId: {type: GraphQLString}
  })
});

export {ContentApprovalInputType};
    