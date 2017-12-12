
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
import {AgreementType} from '../party/Agreement.js';
import {TerminationTypeType} from '../humanres/TerminationType.js';
import {TerminationReasonType} from '../humanres/TerminationReason.js';
import {AgreementEmploymentApplType} from '../party/AgreementEmploymentAppl.js';
import {PayHistoryType} from '../humanres/PayHistory.js';


const EmploymentType = new GraphQLObjectType({
  name: 'EmploymentType',
  description: 'Type for Employment in humanres',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyFrom: {
      type: PartyRoleType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${employment.partyIdFrom}`)
    },
    terminationReason: {
      type: TerminationReasonType,
      args : {terminationReasonId: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbiz.load(`humanres/terminationReasons/find?terminationReasonId=${employment.terminationReasonId}`)
    },
    terminationType: {
      type: TerminationTypeType,
      args : {terminationTypeId: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbiz.load(`humanres/terminationTypes/find?terminationTypeId=${employment.terminationTypeId}`)
    },
    partyTo: {
      type: new GraphQLList(AgreementType),
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (employment, args, {loaders}) => loaders.ofbizArray.load(`party/agreements/find?agreementId=${employment.partyIdTo}`)
    },
    roleTypeIdFrom: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    agreementEmploymentAppls: {
      type: new GraphQLList(AgreementEmploymentApplType),
      args : {},
      resolve: (employment, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementEmploymentAppls/find?roleTypeIdFrom=${employment.roleTypeIdFrom}`)
    },
    payHistories: {
      type: new GraphQLList(PayHistoryType),
      args : {},
      resolve: (employment, args, {loaders}) => loaders.ofbizArray.load(`humanres/payHistorys/find?roleTypeIdFrom=${employment.roleTypeIdFrom}`)
    }
  })
});

export {EmploymentType};
    




const EmploymentInputType = new GraphQLInputObjectType({
  name: 'EmploymentInputType',
  description: 'input type for Employment in humanres',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    terminationReasonId: {type: GraphQLString},
    terminationTypeId: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmploymentInputType};
    