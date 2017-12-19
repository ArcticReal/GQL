
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {EmplPositionType} from '../../humanres/EmplPosition/EmplPositionType.js';
import {PerfReviewItemType} from '../../humanres/PerfReviewItem/PerfReviewItemType.js';


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
    