
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

import {PartyRoleType} from '../party/PartyRole.js';
import {PaymentType} from '../accounting/Payment.js';
import {EmplPositionType} from '../humanres/EmplPosition.js';
import {PerfReviewItemType} from '../humanres/PerfReviewItem.js';


const PerfReviewType = new GraphQLObjectType({
  name: 'PerfReviewType',
  description: 'Type for PerfReview in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    employeeRoleTypeId: {type: GraphQLString},
    managerRoleTypeId: {type: GraphQLString},
    employeeParty: {
      type: PartyRoleType,
      args : {employeePartyId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${perfReview.employeePartyId}`)
    },
    comments: {type: GraphQLString},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${perfReview.paymentId}`)
    },
    perfReviewId: {type: GraphQLString},
    emplPosition: {
      type: EmplPositionType,
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPositions/find?emplPositionId=${perfReview.emplPositionId}`)
    },
    managerParty: {
      type: PartyRoleType,
      args : {managerPartyId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${perfReview.managerPartyId}`)
    },
    thruDate: {type: GraphQLString},
    perfReviewItems: {
      type: new GraphQLList(PerfReviewItemType),
      args : {},
      resolve: (perfReview, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfReview/perfReviewItems/find?employeePartyId=${perfReview.employeePartyId}`)
    }
  })
});

export {PerfReviewType};
    




const PerfReviewInputType = new GraphQLInputObjectType({
  name: 'PerfReviewInputType',
  description: 'input type for PerfReview',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    employeePartyId: {type: GraphQLString},
    employeeRoleTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    managerPartyId: {type: GraphQLString},
    managerRoleTypeId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    perfReviewId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PerfReviewInputType};
    