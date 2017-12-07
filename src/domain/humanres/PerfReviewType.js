
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {EmplPositionType} from '../humanres/EmplPositionType.js';
import {PerfReviewItemType} from '../humanres/PerfReviewItemType.js';


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
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${perfReview.employeePartyId}`)
    },
    comments: {type: GraphQLString},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${perfReview.paymentId}`)
    },
    perfReviewId: {type: GraphQLString},
    emplPosition: {
      type: EmplPositionType,
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`emplPositions/find?emplPositionId=${perfReview.emplPositionId}`)
    },
    managerParty: {
      type: PartyRoleType,
      args : {managerPartyId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${perfReview.managerPartyId}`)
    },
    thruDate: {type: GraphQLString},
    perfReviewItem: {
      type: new GraphQLList(PerfReviewItemType),
      args : {employeePartyId: {type: GraphQLString}},
      resolve: (perfReview, args, {loaders}) => loaders.ofbizArray.load(`perfReviewItems/find?employeePartyId=${perfReview.employeePartyId}`)
    }
  })
});

export {PerfReviewType};
    