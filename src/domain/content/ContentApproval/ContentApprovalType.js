
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

import {PartyType} from '../../party/Party/PartyType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {ContentType} from '../../content/Content/ContentType.js';


const ContentApprovalType = new GraphQLObjectType({
  name: 'ContentApprovalType',
  description: 'Type for ContentApproval in content',

  fields: () => ({
    contentApprovalId: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (contentApproval, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${contentApproval.roleTypeId}`)
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
    